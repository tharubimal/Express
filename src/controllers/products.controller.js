export const getAllProducts = (req, res) => {
    res.send("<h1 style=\"color: green; text-align: center; \">Get all Products</h1>");
}

export const getProductById = (req, res) => {
    const productId = req.params.id;
    res.send(`<h1 style="color: blue; text-align: center; ">Get product with ID: ${productId}</h1>`);
}

export const createProduct = (req,res) => {
    console.log(req.body);
    res.send("<h1 style=\"color: orange; text-align: center;  \">Create a new product</h1>");
}

export const updateProduct = (req,res) => {
    const productId = req.params.id;
    res.send(`<h1 style="color: purple; text-align: center; ">Update product with ID: ${productId}</h1>`);
}

export const removeProduct = (req,res) => {
    const productId = req.params.id;
    res.send(`<h1 style="color: red; text-align: center; ">Delete product with ID: ${productId}</h1>`);
}