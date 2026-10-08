import express from "express";
import http from "http";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";

//* Create an instance of the Express application
const app = express();

//* Create an HTTP server using the Express application */
const server = http.createServer(app);

//* Middleware to parse JSON request bodies */
app.use(express.json());

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
