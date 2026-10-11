export const getAll = (req, res) => {
    // res.send("<h1 style=\"color: green; text-align: center; \">Get all users</h1>");
    // console.log(req.url);
    // console.log(req.path);
    // console.log(req.query);
    res.status(200).json({
        message: "Get all users",
        data: [
            { id: 1, name: "John Doe", email: "john.doe@example.com",password: "password123" },
        ],
        status: "success",
    });

};

export const getById = (req, res) => {
    // console.log(req.params.id);
    // const userId = req.params.id;
    // res.send(`<h1 style="color: blue; text-align: center; ">Get user with ID: ${userId}</h1>`);
    res.status(200).json({
        message: "Get user by ID",
        data: { id: req.params.id, name: "John Doe", email: "john.doe@example.com", password: "password123" },
        status: "success",
    });
}

export const create = (req, res) => {
    // console.log(req.body);
    // res.send("<h1 style=\"color: orange; text-align: center;  \">Create a new user</h1>");
    res.status(201).json({
        message: "Create a new user",
        data: req.body,
        status: "success",
    });
}

export const update = (req, res) => {
    // const userId = req.params.id;
    // console.log(req.body);
    // res.send(`<h1 style="color: purple; text-align: center; ">Update user with ID: ${userId}</h1>`);
    res.status(200).json({
        message: "Update user by ID",
        data: { id: req.params.id, ...req.body },
        status: "success",
    });
}

export const remove = (req, res) => {
    // const userId = req.params.id;
    // res.send(`<h1 style="color: red; text-align: center; ">Delete user with ID: ${userId}</h1>`);
    res.status(200).json({
        message: "Delete user by ID",
        data: { id: req.params.id },
        status: "success",
    });
}