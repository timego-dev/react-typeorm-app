import { ProductApi } from '../../../apis';
import { List } from '../../../components';
import { IProduct, Order } from '../../../interfaces';
import { ProductFormModal } from '../Form';
import { useSnackbar } from 'notistack';
import { FC, useEffect, useState } from 'react';

export const ProductListPage: FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [visibleFormModal, setVisibleFormModal] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [order, setOrder] = useState<Order>(Order.Desc);
  const [orderBy, setOrderBy] = useState<string>('name');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>();

  const { enqueueSnackbar } = useSnackbar();

  const fetchProducts = () => {
    setIsLoading(true);
    ProductApi.readAll()
      .then((res) => {
        setProducts(res.list);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleOpen = () => {
    setVisibleFormModal(true);
    setSelectedProduct(null);
  };

  const handleClose = (isReload?: boolean) => {
    console.log('sdfsdf');
    if (isReload) {
      fetchProducts();
    }
    setSelectedProduct(null);
    setVisibleFormModal(false);
  };

  const handlePageChange = (pageN: number) => {
    setPageNumber(pageN);
  };

  const columns = [
    {
      title: 'Name',
      field: 'name'
    },
    {
      title: 'Description',
      field: 'description'
    },
    {
      title: 'Price',
      field: 'price'
    },
  ];

  const handleDelete = (id: string) => {
    ProductApi.remove(id)
      .then((res) => {
        fetchProducts();
        enqueueSnackbar(res.msg, { variant: 'success' });
      })
      .catch((err) => {
        enqueueSnackbar(err.msg, { variant: 'error' });
      });
  };

  const handleEdit = (id: string) => {
    const product = products.find(({ id: productId }) => productId === id);
    if (product) {
      setSelectedProduct(product);
      setVisibleFormModal(true);
    }
  };

  const handleSort = (property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? Order.Desc : Order.Asc);
    setOrderBy(property);
  };

  useEffect(() => {
    fetchProducts();
  }, [pageNumber, order, orderBy]);

  return (
    <>
      <List
        data={products}
        columns={columns}
        isLoading={isLoading}
        onNew={handleOpen}
        onEdit={handleEdit}
        onSort={handleSort}
        onDelete={handleDelete}
        onPageChange={handlePageChange}
      />
      {visibleFormModal && <ProductFormModal product={selectedProduct} open={visibleFormModal} onClose={handleClose} />}
    </>
  );
};
