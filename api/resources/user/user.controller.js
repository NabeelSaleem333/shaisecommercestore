const HttpStatus = require("http-status-codes");
// import bcryptjs from 'bcryptjs';
// import jwb from 'jsonwebtoken';
// import User from "./user.model";
// import userService from "./user.service";
// import { devConfig } from "../../../config/env/development";

// export default {
//   // This REST API is used to Create User Account
//   async signup(req, res, next) {
//     try {
//       // Validate Request Params
//       const { error, value } = userService.validateUserSignUp(req.body);
//       if (error && error.details) {
//         return res.status(HttpStatus.BAD_REQUEST).json({msg: 'Invalid Request'});
//       }


//       const user = await User.create(value);
//       if(user) {
//       const token = jwb.sign({id: user._id}, devConfig.secret, {expiresIn: '1d'});
//       return res.json({succes: true, token});
//       } else {
//         return res.json({msg: 'User Already Exist'});
//       }
//     } catch (err) {
//       res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
//     }
//   },
//   // End of the CreateNewUer function
//   // ...
//   //This function is used to login the user
//   async login(req, res) {
//     try {
//       console.log(req.body);
//     const {error, value} = userService.validateUserLogin(req.body);
//     if (error && error.details) {
//       return res.status(HttpStatus.BAD_REQUEST).json(error);
//     }
//     const user = await User.findOne({email: value.email});
//     if(!user){
//       return res.status(HttpStatus.BAD_REQUEST).json({msg: 'Invalid Email or Password!'})
//     }
    // ****Password is not validating need improvements...
//     const match = bcryptjs.compare(user.password, value.password);
//     console.log(value.password);
//     console.log(user.password);
//     if(!match){
//       return res.status(HttpStatus.UNAUTHORIZED).json({err: 'Invalid Credentials!'});
//     }
//     const token = jwb.sign({id: user._id}, devConfig.secret, {expiresIn: '1d'});
//     return res.json({succes: true, token});
//     // return res.json(user);
//     } catch (error) {
//     return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);  
//     }
    
//   },
//   // This function is used for the testing purposes
//   async getUser (req, res) {
//     return res.json(req.user);
//   },
//   // ...
//   // Find User Account
//   async getAllUsers(req, res, next) {
//     try {
//       const users = await User.find();
//       if (!users) {
//         return res.status(HttpStatus).json({ msg: "List of users not found!" });
//       }
//       return res.json(users);
//     } catch (err) {
//       return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
//     }
//   },
//   // End of the FindAllUsers function
//   // ...
//   // This a REST API to Find One User by ID
//   async getUser(req, res) {
//     let { id } = req.params;
//     try {
//       const user = await User.findById(id);
//       if (!user) {
//         return res
//           .status(HttpStatus.BAD_REQUEST)
//           .json({ msg: "No user found!" });
//       }
//       return res.json(user);
//     } catch (err) {
//       return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
//     }
//   },
//   // End of the FindOneUser function
//   // ...
//   // This Function is used to delete the User
//   async deleteUser(req, res) {
//     try {
//       let { id } = req.params;
//       const user = await User.findByIdAndRemove(id);
//       if (!user) {
//         return res
//           .status(HttpStatus.BAD_REQUEST)
//           .json({ msg: "No user found!" });
//       }
//       return res.json({msg: "User has been deleted successfully!"});
//     } catch (err) {
//       return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
//     }
//   },
//   // End of DeleteUser Function
//   // ...
//   //This function is used to Update the user Information
//   async updateUser(req, res) {
//     // Validat the request params
//     try {
//       let { id } = req.params;
//       const { error, value } = userService.validateUserUpdate(req.body);
//       if (error && error.details) {
//         return res.status(HttpStatus.BAD_REQUEST).json(error);
//       }
//       // Update the Uaer
//       const user = await User.findOneAndUpdate({ _id: id }, value, {
//         new: true,
//       });
//       if (!user) {
//         return res.status(HttpStatus.NOT_FOUND).json({ msg: "User not found" });
//       }
//       return res.json({msg: "User has been updated successfully!"});
//     } catch (err) {
//       return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
//     }
//   },
//   // End of the UpdateUser function
// };
