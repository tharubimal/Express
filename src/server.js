import express from "express";
import http from "http";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";
import mongoose from "mongoose";

//* Create an instance of the Express application
const app = express();

//* Connect to MongoDB using Mongoose */
// if database is empty, it will not create the database until you insert some data into it
mongoose.connect("mongodb://localhost:27017/db_name").then(() => {
  console.log("Database connected successfully");
}).catch((err) => {
  console.error("Database connection error:", err);
});

//* Create an HTTP server using the Express application */
const server = http.createServer(app);

//* Middleware to parse JSON and form-encoded request bodies */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//* Define a route for the root URL */
//! /path

app.get("/", (req, res) => {
  res.send('<h1 style="color: blue; ">Hello, World!</h1>');
});

//! CRUD Operations
//? CREATE -> POST
//? READ -> GET
//? UPDATE -> PUT/PATCH
//? DELETE -> DELETE

//! using the user routes
app.use("/users", userRoutes);

//! using the product routes
app.use("/products", productRoutes);

//! crud operations for users
//? read all users
// app.get("/users", (req, res) => {
//     res.send("<h1 style=\"color: green; text-align: center; \">Get all users</h1>");
//     console.log(req.url);
//     console.log(req.path);
//     console.log(req.query);
// });

// app.get("/users", getAll);

//* read a single user
//* req.params -> object that contains route parameters
// app.get("/users/:id", (req, res) => {
//     // console.log(req.params.id);
//     const userId = req.params.id;
//     res.send(`<h1 style="color: blue; text-align: center; ">Get user with ID: ${userId}</h1>`);
// });

// app.get("/users/:id", getById);

//? create a new user
// app.post("/users", (req, res) => {
//     console.log(req.body);
//     res.send("<h1 style=\"color: orange; text-align: center;  \">Create a new user</h1>");
// });

// app.post("/users", create);

//? update a user
// app.put("/users/:id", (req, res) => {
//     const userId = req.params.id;
//     console.log(req.body);
//     res.send(`<h1 style="color: purple; text-align: center; ">Update user with ID: ${userId}</h1>`);
// });

// app.put("/users/:id", update);

//? delete a user
// app.delete("/users/:id", (req, res) => {
//     const userId = req.params.id;
//     console.log(req.body);
//     res.send(`<h1 style="color: red; text-align: center; ">Delete user with ID: ${userId}</h1>`);
// });

// app.delete("/users/:id", remove);

//! crud operations for products
//? read all products
// app.get("/products", (req, res) => {
//     res.send("<h1 style=\"color: green; text-align: center; \">Get all products</h1>");
// });

// app.get("/products", getAllProducts);

//* read a single product
// app.get("/products/:id", (req, res) => {
//     const productId = req.params.id;
//     res.send(`<h1 style="color: blue; text-align: center; ">Get product with ID: ${productId}</h1>`);
// });

// app.get("/products/:id", getProductById);

//? create a new product
// app.post("/products", (req,res) => {
//     console.log(req.body);
//     res.send("<h1 style=\"color: orange; text-align: center;  \">Create a new product</h1>");
// });

// app.post("/products", createProduct);

//? update a product
// app.put("/products/:id", (req,res) => {
//     const productId = req.params.id;
//     res.send(`<h1 style="color: purple; text-align: center; ">Update product with ID: ${productId}</h1>`);
// });

// app.put("/products/:id", updateProduct);

//? delete a product
// app.delete("/products/:id", (req,res) => {
//     const productId = req.params.id;
//     res.send(`<h1 style="color: red; text-align: center; ">Delete product with ID: ${productId}</h1>`);
// });

// app.delete("/products/:id", removeProduct);

// get/users -> handler

//* Start the server and listen on port 3000 */
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

//* route parameters / params
//? req.params -> object that contains route parameters

//? req.url -> string that contains the full URL of the request
//? req.path -> string that contains the path of the request

//* query parameters / query
//? req.query -> object => query parameters -> filter, pagination => ?name=John&age=30 => { name: 'John', age: '30' }

//* body parameters / body
//? req.body -> object => body parameters -> create, update => { name: 'John', age: 30 }

//! REST API -> Representational State Transfer API
//* APIs -> Application Programming Interfaces
// APIs allow different software applications to communicate with each other
//* REST -> Representational State Transfer
// REST represents a set of architectural principles for designing networked applications
//? RESTful APIs are APIs that follow the principles of REST

//? 1. client-server architecture
// -> it separates the client and server concerns, allowing them to evolve independently
//? 2. statelessness
// -> it means that each request from a client to a server must contain all the information needed to understand and process the request, and the server should not store any information about the client's state between requests
//? 3. cacheability
// -> it means that responses from the server can be cached by the client or intermediate proxies to improve performance and reduce the load on the server
//? 4. layered system
// -> it means that a client cannot ordinarily tell whether it is connected directly to the end server, or to an intermediary along the way
//? 5. uniform interface
// -> it means that the interface between the client and server should be consistent and standardized, allowing for easy communication and understanding between different systems
//? 6. code on demand (optional)
// -> it means that servers can temporarily extend or customize the functionality of a client by transferring executable code to it

//? JSON -> JavaScript Object Notation
// -> it is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate

//* json response -> { "message": "Get all users", "data": [...], "status": "success" }

//* send meaningful response http status codes
// 100-599
// 100-199 -> informational responses
// 200-299 -> successful responses
// 300-399 -> redirection messages
// 400-499 -> client error responses
// 500-599 -> server error responses

//? 200 OK -> The request has succeeded
//? 201 Created -> The request has been fulfilled and has resulted in one or more new resources being created
//? 400 Bad Request -> The server could not understand the request due to invalid syntax
//? 401 Unauthorized -> The client must authenticate itself to get the requested response
//? 403 Forbidden -> The client does not have access rights to the content
//? 404 Not Found -> The server cannot find the requested resource
//? 500 Internal Server Error -> The server encountered an unexpected condition that prevented it from fulfilling the request
//? 502 Bad Gateway -> The server, while acting as a gateway or proxy, received an invalid response from the upstream server
//? 503 Service Unavailable -> The server is not ready to handle the request

//* layered architecture 
//  client -> load balancer -> server -> database


//! why to use database

//? SQL               NoSQL
// Database          database
// tables            collections
// columns           fields
// rows              documents