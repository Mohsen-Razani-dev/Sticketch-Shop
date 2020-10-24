import react from "react";
import * as yup from "yup";

export const initialValues = {
  name: "",
  age: "",
  email: "",
  number: "",
  password: "",
  confirmPassword: ""
};

//creating the validation schema
export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("A name is required")
    .min(2, "Name must be at least 2 characters"),
  age: yup
    .number()
    .required("Please supply your age")
    .min(18, "You must be at least 18 years")
    .max(60, "You must be at most 60 years"),
  email: yup
    .string()
    .email()
    .required("Email is a required field"),
  address: yup
    .string()
    .required("address is a required field")
    .min(20, "address must be at least 20 characters"),
  number: yup
    .string()
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
      "Phone number is not valid"
    ),

  password: yup
    .string()
    .required("Please enter your password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .when("password", {
      is: password => (password && password.length > 0 ? true : false),
      then: yup.string().oneOf([yup.ref("password")], "Password doesn't match")
    })
});
