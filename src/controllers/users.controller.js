export const getAll = (req, res) => {
    res.send("<h1 style=\"color: green; text-align: center; \">Get all users</h1>");
    // console.log(req.url);
    // console.log(req.path);
    console.log(req.query);
};

export const getById = (req, res) => {
    // console.log(req.params.id);
    const userId = req.params.id;
    res.send(`<h1 style="color: blue; text-align: center; ">Get user with ID: ${userId}</h1>`);
}

export const create = (req, res) => {
    console.log(req.body);
    res.send("<h1 style=\"color: orange; text-align: center;  \">Create a new user</h1>");
}

export const update = (req, res) => {
    const userId = req.params.id;
    console.log(req.body);
    res.send(`<h1 style="color: purple; text-align: center; ">Update user with ID: ${userId}</h1>`);
}

export const remove = (req, res) => {
    const userId = req.params.id;
    res.send(`<h1 style="color: red; text-align: center; ">Delete user with ID: ${userId}</h1>`);
}