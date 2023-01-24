# prisma-delivery-project
This project aims:
  - Define the database model for a food delivery project using prismaORM
  - Create a REST API to interact with the database
  - Authenticate and authorize users using JWS (Json Web Token)

## Modules
- account
  - handles 
    -  authentication of customer
    -  authentication of deliveryman
- client
  - handles
    - create client
    - find deliveries
- deliveryman
  - handles 
    - create deliveryman 
    - find all deliveries
- deliveries
  - handles
    - create delivery
    - find all deliveries ( running deliveries )
    - update deliveryman data
    - update delivery date
 
## ER Diagram:
![prisma-erd](https://user-images.githubusercontent.com/56269786/214286509-18eecc74-cb02-4659-907f-3d45e0d8f158.svg)

## Getting started:
-  Create an .env file in the root directory with the url to access your postregres database.
-  Install dependencies
```
npm i
```
- Run a migration to create the database tables
```
npx prisma migrate dev
```
- Start the application
```
npm run dev
```
