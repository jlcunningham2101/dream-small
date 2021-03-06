const { User } = require("../models");

const userController = {
  // GET /api/users
  getAllUser(req, res) {
    User.find({})
      .select("-__v")
      .sort({ _id: -1 })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(400);
      });
  },

  // GET /api/users/:id
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .populate([
        { path: "schedule", select: "-__v" },
        { path: "user", select: "-__v" },
      ])
      .select("-__v")
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // POST /api/users
  // expected body:
  // {
  //     "username": "mako",
  //     "email": "mako@gmail.com"
  // }
  createUser({ body }, res) {
    User.create(body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(400).json(err));
  },

  // PUT /api/users/:id
  // expected body includes at least one of the attributes below:
  // {
  //     "username": "mako",
  //     "email": "mako@gmail.com"
  // }
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },

  // DELETE /api/users/:id
  deleteUser({ params }, res) {
    // delete the user
    User.findOneAndDelete({ _id: params.id })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id" });
          return;
        }
        // remove the user from any friends arrays
        User.updateMany(
          { _id: { $in: dbUserData.teachers } },
          { $pull: { teachers: params.id } }
        )
          .then(() => {
            // remove any comments from this user
            Post.deleteMany({ username: dbUserData.username })
              .then(() => {
                res.json({ message: "Successfully deleted user" });
              })
              .catch((err) => res.status(400).json(err));
          })
          .catch((err) => res.status(400).json(err));
      })
      .catch((err) => res.status(400).json(err));
  },

  // POST /api/users/:userId/teachers/:teacherId
  addTeacher({ params }, res) {
    // add teacherId to userId's teacher list
    console.log("anything");
    User.findOneAndUpdate(
      { _id: params.userId },
      { $push: { teachers: params.teacherId } },
      { new: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },

  // DELETE /api/users/:userId/teacher/:teacherId
  deleteTeacher({ params }, res) {
    // remove teacherId from userId's teacher list
    console.log(params);
    User.findOneAndUpdate(
      { _id: params.userId },
      { $pull: { teachers: params.teacherId } },
      { runValidators: true }
    )
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = userController;
