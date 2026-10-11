export const getAll = (req, res) => {
    // res.send("<h1 style=\"color: green; text-align: center; \">Get all Products</h1>");
    res.status(200).json({
        message: "Get all products",
        data: [
            { id: 1, name: "Product 1", price: 10.99 },
        ],
        status: "success",
    });
}

export const getById = (req, res) => {
    // const productId = req.params.id;
    // res.send(`<h1 style="color: blue; text-align: center; ">Get product with ID: ${productId}</h1>`);
    res.status(200).json({
        message: "Get product by ID",
        data: { id: req.params.id, name: "Product 1", price: 10.99 },
        status: "success",
    });
}

export const create = (req,res) => {
    // console.log(req.body);
    // res.send("<h1 style=\"color: orange; text-align: center;  \">Create a new product</h1>");
    res.status(201).json({
        message: "Create a new product",
        data: req.body,
        status: "success",
    });
}

export const update = (req,res) => {
    // const productId = req.params.id;
    // res.send(`<h1 style="color: purple; text-align: center; ">Update product with ID: ${productId}</h1>`);
    res.status(200).json({
        message: "Update product by ID",
        data: { id: req.params.id, ...req.body },
        status: "success",
    });
}

export const remove = (req,res) => {
    // const productId = req.params.id;
    // res.send(`<h1 style="color: red; text-align: center; ">Delete product with ID: ${productId}</h1>`);
    res.status(200).json({
        message: "Delete product by ID",
        data: { id: req.params.id },
        status: "success",
    });
}