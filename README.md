<p align="center">
  <img src="https://www.designtagebuch.de/wp-content/uploads/mediathek//2017/05/verivox_logo-1100x649.png" width="130" alt="Logo for T3" />
</p>

<h1 align="center">
  verivox-app
</h1>

<p align="center">
  A first Restfull API new typesafe app.
</p>

# Verivox

## Task Lists

- [x] [t-1] Use yarn and install nestjs/cli
- [x] [t-2] Init project with NestJS
- [x] [t-3] Setup github repository sync with localhost
- [x] [t-4] Dockerize backend and put config using ENV
- [x] [t-5] Start project on localhost in watchmode
- [x] [t-6] Create endpoint 'products'
- [x] [t-7] [fix]Config nestjs project to support .env file
- [x] [t-8] Install Swagger for endpoint 'products'
- [x] [t-9] clean up app
- [x] [t-10] Add dummy response for Product Service and fix tests
- [x] [t-11-a] Add filters: consumption and order
- [x] [t-11-b] Create Types, interface, Class for Product
- [x] [t-11-c] Create/Register Services: **PromoTypeAService** && **PromoTypeBService** and inject into Service "ProductsService"
- [x] [t-11-d] fix tests
- [] [t-12] Create TDD for Service: **PromoTypeAService**

## Checking

### [t-1] check yarn, nest version

```
nest -v
yarn -v
```

### [t-3] git push code into github repository

```
git checkout main
git push
```

### [t-4] Dockerize backend and put config using ENV

```
docker-compose up
```

check link [backend](http://localhost:3001)

### [t-5] Start project on localhost in watchmode

```
cd backend

yarn start:dev
```

### [t-6] Create endpoint 'products'

check endpoint link [products](http://localhost:3001/products)

### [t-7] [fix]Config nestjs project to support .env file

1. Start from root project

```
cd backend

yarn start:dev
```

2. Create .env file and put:

```
PORT=3001
```

3. Check the link [localhost](http://localhost:3001/) => ok
4. Check the previews [localhost](http://localhost:3000/) => should fail

### [t-10] Add dummy response for Product Service and fix tests

1. Check tests

```
cd backend
yarn test
```

2. Check response

```
const productsMock = [
  {
    id: 1,
    name: 'basic electricity tariff',
    annualCost: 770,
    currency: 'Eur',
  },
  {
    id: 2,
    name: 'Package tariff',
    annualCost: 800,
    currency: 'Eur',
  },
];
```

### [t-11-a] Add filters: consumption and order

1. check link:

http://localhost:3001/products?comsuption=1222&order=asc

2. look in the console from the server

```
{ filterDto: { consumption: '1222', order: 'asc' }}

```

### [t-11-b] Create Types, interface, Class for Product

each module has own DTO, entity

```
# ./src/products/dto
```

### [t-11-d] fix tests

```
yarn test
```
