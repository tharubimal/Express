import express from "express";
import http from "http";

//* Create an instance of the Express application
const app = express();

//* Create an HTTP server using the Express application */
const server = http.createServer(app);

//* Define a route for the root URL */
//! /path

app.get("/", (req, res) => {
  res.send("<h1 style=\"color: blue; \">Hello, World!</h1>");
});

//! CRUD Operations
//? CREATE -> POST
//? READ -> GET
//? UPDATE -> PUT/PATCH
//? DELETE -> DELETE

//! crud operations for users
//? read all users
app.get("/users", (req, res) => {
    res.send("<h1 style=\"color: green; text-align: center; \">Get all users</h1>");
});

//* read a single user
app.get("/users/:id", (req, res) => {
    // console.log(req.params.id);
    const userId = req.params.id;
    res.send(`<h1 style="color: blue; text-align: center; ">Get user with ID: ${userId}</h1>`);
});

//? create a new user
app.post("/users", (req, res) => {
    res.send("<h1 style=\"color: orange; text-align: center;  \">Create a new user</h1>");
});

//? update a user
app.put("/users/:id", (req, res) => {
    const userId = req.params.id;
    res.send(`<h1 style="color: purple; text-align: center; ">Update user with ID: ${userId}</h1>`);
});

//? delete a user
app.delete("/users/:id", (req, res) => {
    const userId = req.params.id;
    res.send(`<h1 style="color: red; text-align: center; ">Delete user with ID: ${userId}</h1>`);
});

//! crud operations for products
//? read all products
app.get("/products", (req, res) => {
    res.send("<h1 style=\"color: green; text-align: center; \">Get all products</h1>");
});

//* read a single product
app.get("/products/:id", (req, res) => {
    const productId = req.params.id;
    res.send(`<h1 style="color: blue; text-align: center; ">Get product with ID: ${productId}</h1>`);
});

//? create a new product
app.post("/products", (req,res) => {
    res.send("<h1 style=\"color: orange; text-align: center;  \">Create a new product</h1>");
});

//? update a product
app.put("/products/:id", (req,res) => {
    const productId = req.params.id;
    res.send(`<h1 style="color: purple; text-align: center; ">Update product with ID: ${productId}</h1>`);
});

//? delete a product
app.delete("/products/:id", (req,res) => {
    const productId = req.params.id;
    res.send(`<h1 style="color: red; text-align: center; ">Delete product with ID: ${productId}</h1>`);
});

// get/users -> handler

//* Start the server and listen on port 3000 */
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});