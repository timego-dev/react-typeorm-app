import { ProductApi } from '../../../apis';
import { Modal } from '../../../components';
import { IProduct } from '../../../interfaces';
import * as S from './styles';
import {
  TableBody,
  TableCell,
  TableRow,
  TextField
} from '@mui/material';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import { FC, useEffect } from 'react';
import * as Yup from 'yup';

interface INewProductModalProps {
  open: boolean;
  product?: IProduct | null;
  onClose: (isReload?: boolean) => void;
}

const productSchema = Yup.object().shape({
  name: Yup.string().required('Required Field!'),
  description: Yup.string(),
  price: Yup.number().required().positive().integer(),
});

export const ProductFormModal: FC<INewProductModalProps> = ({ open, product, onClose }) => {
  const { enqueueSnackbar } = useSnackbar();

  const { values, errors, touched, setFieldValue, setValues, handleChange, handleBlur, handleSubmit } = useFormik({
    validationSchema: productSchema,
    initialValues: {
      name: '',
      description: '',
      price: '',
    },
    onSubmit: (values) => {
      if (product) {
        ProductApi.update(product.id, values)
          .then((res) => {
            enqueueSnackbar(res.msg, { variant: 'success' });
          })
          .catch((err) => {
            enqueueSnackbar(err.msg, { variant: 'error' });
          })
          .finally(() => {
            onClose(true);
          });
      } else {
        ProductApi.create(values)
          .then((res) => {
            enqueueSnackbar(res.msg, { variant: 'success' });
          })
          .catch((err) => {
            enqueueSnackbar(err.msg, { variant: 'error' });
          })
          .finally(() => {
            onClose(true);
          });
      }
    }
  });

  const handleCreate = () => {
    handleSubmit();
  };

  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    if (product) {
      setFieldValue('name', product.name);
      setFieldValue('description', product.description);
      setFieldValue('price', product.price);
    } else {
      setValues({
        name: '',
        description: '',
        price: '',
      });
    }
  }, [product]);

  return (
    <Modal
      title={`${product ? 'Edit' : 'New'} Product`}
      okText={product ? 'Edit' : 'Create'}
      onOk={handleCreate}
      open={open}
      onClose={handleClose}
      onCancel={handleClose}
    >
      <S.Content>
        <TableBody>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>
              <TextField
                fullWidth
                name="name"
                value={values.name}
                error={Boolean(errors.name && touched.name)}
                helperText={Boolean(errors.name && touched.name) && errors.name}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell>
              <TextField
                fullWidth
                name="description"
                value={values.description}
                error={Boolean(errors.description && touched.description)}
                helperText={Boolean(errors.description && touched.description) && errors.description}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Price</TableCell>
            <TableCell>
              <TextField
                fullWidth
                name="price"
                value={values.price}
                error={Boolean(errors.price && touched.price)}
                helperText={Boolean(errors.price && touched.price) && errors.price}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </TableCell>
          </TableRow>

        </TableBody>
      </S.Content>
    </Modal>
  );
};
