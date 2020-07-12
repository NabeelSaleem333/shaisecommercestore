// import joi from "joi";

// export default {
//   // This function is used to validate user
//   validateUserSignUp(body) {
//     const schema = joi.object().keys({
//       // _id: joi.string().required(),
//       // username: joi.string().required(),
//       email: joi.string().email().required(),
//       password: joi.string().required(),
//       // date: joi.date().required(),
//       // mode: joi.number().required(),
//     });
//     const { error, value } = joi.validate(body, schema);
//     if (error && error.details) {
//       return { error };
//     } else {
//       return { value };
//     }
//   },
//   // This function is used to validate the user before updating it
//   validateUserUpdate(body) {
//     const schema = joi.object().keys({
//       username: joi.string().optional(),
//       email: joi.string().optional(),
//       password: joi.string().optional(),
//       date: joi.date().optional(),
//       mode: joi.number().optional(),
//     });
//     const { error, value } = joi.validate(body, schema);
//     // return error if anything goes wrong
//     if (error && error.details) {
//       return { error };
//     } else {
//       return { value };
//     }
//   },
//     // This function is used to validate the user before updating it
//     validateUserLogin(body) {
//       const schema = joi.object().keys({
//         email: joi.string().required(),
//         password: joi.string().required(),
//       });
//       const { error, value } = joi.validate(body, schema);
//       // return error if anything goes wrong
//       if (error && error.details) {
//         return { error };
//       } else {
//         return { value };
//       }
//     },
// };
