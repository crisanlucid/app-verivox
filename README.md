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

a project in greenfield

## Table of Contents

- [How to run](#how-to-run)
- [Tasks List](#tasks-list)
- [Checking](#checking)

## How to Run

### Project in Localhost

1. Run project with **npm** or [**yarn**](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable])

```
node -v #v18.10
cd backend
```

npm

```
npm -v #v8.19
npm i
npm run start
```

yarn

```
yarn -v #v1.22.19
yarn
yarn start
```

2. Go to: http://localhost:3001/products?consumption=3500&order=asc

<<<<<<< HEAD

### Using Docker and Docker Compose

1. # Check version and build

### Using Docker Container/Compose

1. check version and build
   > > > > > > > 35cec2620bb4a97905c49a7cc882ac84e7ef887e

```
#Docker version 20.10.21
docker version

#Docker Compose version v2.10.2
docker compose version

<<<<<<< HEAD
#build
=======
#start
>>>>>>> 35cec2620bb4a97905c49a7cc882ac84e7ef887e
docker compose up
```

2. Use the link http://localhost:3001/products?consumption=3500&order=asc

response

```json
[
  {
<<<<<<< HEAD
    "id": 2,
    "name": "Package tariff",
    "annualCost": 800,
    "currency": "Eur"
  },
  {
    "id": 1,
    "name": "basic electricity tariff",
    "annualCost": 830,
    "currency": "Eur"
  }
]
```

## Tasks List

=======
id: 2,
name: "Package tariff",
annualCost: 800,
currency: "Eur",
},
{
id: 1,
name: "basic electricity tariff",
annualCost: 830,
currency: "Eur",
},
];

```

## Task Lists
>>>>>>> 35cec2620bb4a97905c49a7cc882ac84e7ef887e

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
- [x] [t-12] Create TDD for Service: **PromoTypeAService**
- [x] [t-13] Create TDD for Service: **PromoTypeBService**
- [x] [t-14] Functionality Service with Integration tests
- [x] [t-15] E2E for endpoint "products"
- [x] [t-16] Sorting Result filter by Order: ASC, DESC

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

### [t-12] Create TDD for Service: **PromoTypeAService**

1.  - check formula
    - don`t use float number
    - final result will be provided in euro

```

input = 3500
annual_cost = base_cost(60) + (input(3500) \* 22 cent)/100
annual_cost = 60 + 770
annual_cost = 830

input = 4500
annual_cost = base_cost(60) + (input(4500) \* 22 cent)/100
annual_cost = 60 + 990
annual_cost = 1050

input = 6000
annual_cost = base_cost(60) + (input(6000) \* 22 cent)/100
annual_cost = 60 + 1320
annual_cost = 1380

```

2. Check uses cases in test to respect formula

```

# productsPromoA.service.spec.ts

```

### [t-13] Create TDD for Service: **PromoTypeBService**

1.  - check formula
    - don`t use float number
    - final result will be provided in euro

```

input = 3500
if input <= 4000
annual_cost = 800

input = 4500
if input > 4000
annual_cost = base_cost(800) + (input(4500-4000) \* 30 cent)/100
annual_cost = 800 + 150
annual_cost = 950

input = 6000
if input > 4000
annual_cost = base_cost(800) + (input(6000-4000) \* 30 cent)/100
annual_cost = 800 + 600
annual_cost = 1400

```

2. Check uses cases in test to respect formula

```

# productsPromoB.service.spec.ts

```

### [t-14] Functionality Service with Integration tests

```

yarn test:int

```

### [t-15] E2E for endpoint "products"

1. check if the query in the link is correct 'products?consumption=6000&order=asc'

2. run e2e test

```

yarn test:e2e

```

### [t-16] Sorting Result filter by Order: ASC, DESC

1. double check function ProductsService->orderBy
2. run unit, integration, e2e tests

```

yarn test:int
yarn test:int
yarn test:e2e

```

```
