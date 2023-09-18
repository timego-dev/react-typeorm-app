# Frontend

## Implemented Requirements
- created ProductList displays a list of products
	- Used React hooks to manage the state.
	- Implemented fetching product data from an API endpoint.
	- Displayed the list of the products in page
	- Added a button to delete a product in each row. When the button is clicked, it removes the product from the list and calls the API to delete it from database also.
	- Added a button to insert a new Product. When clicked open a modal with a form. When form is submitted call the API to insert to database.
	- Added a button to update a new Product. When clicked open a modal with a form with selected product info. When form is submitted call the API to update the product.
- Implement unit tests for the ProductList component using a testing library of your choice (It's not added yet)


## How to install and run

### Installing

Install the dependencies:

```bash
npm install
```
or 
```bash
yarn install
```

### Running the development server:

```bash
npm start
```

The application should now be running on http://localhost:3000/

### Deploying

Install the dependencies:

```bash
npm install
```

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

The application should now be running on http://<hostname>:3000/

# Backend

## Implemented Requirements

- Implemented configuration with MySql database using typeorm.
- Added Product entity, serivce and controller for CRUD feature.
- Added CRUD endpoints for Product.
- Implemented Unit Test
	- Testing the addition of a new Product
	- Testing the deletion of a new Product
	- Testing the updating of a Product
	- Testing the fetching of Products

## How to install and run

### Installing

```bash
npm install
```
or 
```bash
yarn install
```

### Running the server

```bash
# development
npm run start
```

### Migration
Please run migration sync first before running the app. 
```bash
# development
$ npm run migrate
```

### Test Before migration
Please set NODE_ENV value as "test" first.
```bash
# development
$ npm run test-migrate
```

## Test
```bash
# development
$ npm run test
```