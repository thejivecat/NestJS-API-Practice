# NestJS-API-Practice
Here is my practice code for creating a basic REST API using Nest.js

## TO Run the Application
1. Fork the repository
2. Navigate into the directory
3. Open up terminal
4. Run the command ``` npm run start:dev ``` to start the server on localhost:3000
5. Open up your browser and go to localhost:3000
6. To add test the API, use postman.
7. Add a product by using the url localhost:3000/products, then in the body use JSON format (raw) to post an object than contains {title, description, price}
8. You should get product Id back
9. You can make a get request to localhost:3000/products to get all products or use the product Id to retrieve a single product
10. Test out the patch and delete requests using the product Id.
