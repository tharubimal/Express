import User from "../models/user.model.js";

// const validateObjectId = (id, res) => {
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     res.status(400).json({
//       message: "Invalid user ID",
//       data: null,
//       status: "error",
//     });
//     return false;
//   }

//   return true;
// };

export const getAll = async (req, res) => {
  // res.send("<h1 style=\"color: green; text-align: center; \">Get all users</h1>");
  // console.log(req.url);
  // console.log(req.path);
  // console.log(req.query);

  //* db query to get all users

  try {
    // const users = await User.find({}, { full_name: 1, email: 1, _id: 0 }); //? projection -> only return full_name and email fields
    const users = await User.find();
    res.status(200).json({
      message: "Get all users",
      data: users,
      // data: [
      //     { id: 1, name: "John Doe", email: "john.doe@example.com",password: "password123" },
      // ],
      status: "success",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error getting users",
      error: error.message,
      status: "error",
    });
  }
};

export const getById = async (req, res) => {
  // console.log(req.params.id);
  // const userId = req.params.id;
  // res.send(`<h1 style="color: blue; text-align: center; ">Get user with ID: ${userId}</h1>`);
  //* db query to get user by id
  try {
    const id = req.params.id;
    // if (!validateObjectId(id, res)) return;

    const user = await User.findById(id);
    // const user = await User.findOne({_id: id});

    if (!user) {
      res.status(404).json({
        message: `User: ${id} not found`,
        data: null,
        status: "error",
      });
      return;
    }
    res.status(200).json({
      message: "Get user by ID",
      data: user,
      // data: { id: req.params.id, name: "John Doe", email: "john.doe@example.com", password: "password123" },
      status: "success",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error getting user by ID",
      error: error.message,
      status: "error",
    });
  }
};

export const create = async (req, res) => {
  // console.log(req.body);
  // res.send("<h1 style=\"color: orange; text-align: center;  \">Create a new user</h1>");

  const { full_name, email, password } = req.body ?? {};
  //* db query to create a new user
  try {
    if (!full_name || !email || !password) {
      res.status(400).json({
        message: "full_name, email, and password are required",
        data: null,
        status: "error",
      });
      return;
    }

    const user = await User.create({ full_name, email, password });
    res.status(201).json({
      message: "Create a new user",
      data: user,
      status: "success",
    });
  } catch (error) {
    res.status(400).json({
      message: "Error creating user",
      error: error.message,
      status: "error",
    });
  }
};

export const update = async (req, res) => {
  // const userId = req.params.id;
  // console.log(req.body);
  // res.send(`<h1 style="color: purple; text-align: center; ">Update user with ID: ${userId}</h1>`);
  const { full_name, email, password } = req.body ?? {};

  try {
    const id = req.params.id;
    // if (!validateObjectId(id, res)) return;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { full_name, email, password },
      { returnDocument: "after" }, //? return the updated document
    );

    if (!updatedUser) {
      res.status(404).json({
        message: `User: ${id} not found`,
        data: null,
        status: "error",
      });
      return;
    }
    res.status(200).json({
      message: "Update user by ID",
      data: updatedUser,
      status: "success",
    });
    return;
  } catch (error) {
    res.status(500).json({
      message: "Error updating user by ID",
      error: error.message,
      status: "error",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const id = req.params.id;
    // if (!validateObjectId(id, res)) return;

    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      res.status(404).json({
        message: `User: ${id} not found`,
        data: null,
        status: "error",
      });
      return;
    }
    // const userId = req.params.id;
    // res.send(`<h1 style="color: red; text-align: center; ">Delete user with ID: ${userId}</h1>`);
    res.status(200).json({
      message: "Delete user by ID",
      data: deletedUser,
      status: "success",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting user by ID",
      error: error.message,
      status: "error",
    });
  }
};
