// const express = require("express");
// const User = require("./user.model");
// const jwt = require("jsonwebtoken");
// //
// const userRouter = express.Router();

// userRouter.route("/").get(async (req, res) => {
//   try {
//     const user = await User.find();
//     if (user) {
//       return res.json(user);
//     } else {
//       return res.json(null);
//     }
//   } catch (error) {
//     return res.json(error);
//   }
// });

// /* 
// signup user
// */
// userRouter.route("/signup").post(async (req, res) => {
//   try {
//     const userf = await User.findOne({ email: req.body.email });
//     if (userf) {
//       return res.json(null);
//     } else {
//       const newuser = await User.create(req.body);
//       if (newuser) {
//         const token = jwt.sign({ _id: newuser._id }, "Jesus37", {
//           expiresIn: "1d",
//         });

//         return res.json({success: true, token});
//       } else {
//         return res.json(null);
//       }
//     }
//   } catch (error) {
//     return res.json(error);
//   }
// });

// /* 
// login user
// */
// userRouter.route("/login").post(async (req, res) => {
//   try {
//     const userf = await User.findOne({ email: req.body.email });
//     if (userf) {
//       const token = jwt.sign({ _id: userf._id }, "jesus37", {
//         expiresIn: "1d",
//       });

//       return res.json({success: true, token});
//     } else {
//       return res.json(null);
//     }
//   } catch (error) {
//     return res.json(error);
//   }
// });

// module.exports = userRouter;
