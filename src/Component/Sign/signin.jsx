import React from "react";
import { useFormik } from "formik";
import classes from "../../assets/Styles/SignIn.module.scss";
import { FormField } from "./FormField";
import { initialValues, ValidationSchema } from "./SigninValidSchema";
import { Link } from "react-router-dom";

const Signin = () => {
  const formik = useFormik({
    initialValues,
    ValidationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  const logemailProps = formik.getFieldProps("email");
  const logpasswordProps = formik.getFieldProps("password");

  return (
    <div className={classes.SignInInputs}>
      <form className={classes.SignInform} onSubmit={formik.handleSubmit}>
        <div className={classes.field}>
          <FormField
            label="Email"
            type="email"
            placeholder="Please Enter your email"
            {...logemailProps}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className={classes.error}>{formik.errors.email}</div>
          ) : null}
        </div>

        <div className={classes.field}>
          <FormField
            label="Password"
            type="password"
            placeholder="Please Enter your password"
            {...logpasswordProps}
          />
          {formik.touched.logpassword && formik.errors.logpassword ? (
            <div className={classes.error}>{formik.errors.password}</div>
          ) : null}
        </div>

        <div className={classes.submitbox}>
          <Link to="/forgetpassword" className={classes.forgetpass}>
            Forget password ?
          </Link>
          <button
            className={classes.submitboxbtn}
            type="submit"
            disabled={!(formik.isValid && formik.dirty)}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
