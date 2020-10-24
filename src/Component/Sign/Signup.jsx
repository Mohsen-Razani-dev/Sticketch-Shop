import React from "react";
import classes from "../../assets/Styles/Signup.module.scss";
import {FormField,TextareaField } from "./FormField";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./SignupValidSchema";
import axios from 'axios'


const Signup = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      // return Submit(values)
      alert(JSON.stringify(values, null, 2));
    }
  });

  const nameProps = formik.getFieldProps("name");
  const ageProps = formik.getFieldProps("age");
  const emailProps = formik.getFieldProps("email");
  const numberProps = formik.getFieldProps("number");
  const passwordProps = formik.getFieldProps("password");
  const confirmPasswordProps = formik.getFieldProps("confirmPassword");
  const addressProps = formik.getFieldProps("address");
  return (
    <>
      <div className={classes.signupInputs}>
        <form className={classes.Signupform} onSubmit={formik.handleSubmit}>
          <div className={classes.field}>
            <FormField
              label="Name"
              type="text"
              placeholder="Please Enter your name"
              {...nameProps}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className={classes.error}>{formik.errors.name}</div>
            ) : null}
          </div>
          <div className={classes.field}>
            <FormField
              label="Age"
              type="number"
              {...ageProps}
              placeholder="Please Enter your age"
            />
            {formik.touched.age && formik.errors.age ? (
              <div className={classes.error}>{formik.errors.age}</div>
            ) : null}
          </div>
          <div className={classes.field}>
            <FormField
              label="Email"
              type="email"
              placeholder="Please Enter your email"
              {...emailProps}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className={classes.error}>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className={classes.field}>
            <FormField
              label="Number"
              type="number"
              placeholder="Please Enter your Mobile Number"
              {...numberProps}
            />
            {formik.touched.number && formik.errors.number ? (
              <div className={classes.error}>{formik.errors.number}</div>
            ) : null}
          </div>
          <div className={classes.field}>
            <FormField
              label="Password"
              type="password"
              placeholder="Please Enter your password"
              {...passwordProps}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className={classes.error}>{formik.errors.password}</div>
            ) : null}
          </div>
          <div className={classes.field}>
            <FormField
              label="Confirm Password"
              type="password"
              placeholder="Please Confirm your password"
              {...confirmPasswordProps}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className={classes.error}>
                {formik.errors.confirmPassword}
              </div>
            ) : null}
          </div>
          <div className={classes.field}>
            <TextareaField
              label="Adress"
              type="adress"
              placeholder="Please Enter your Adress"
              {...addressProps}
            />
            {formik.touched.address && formik.errors.address ? (
              <div className={classes.error}>{formik.errors.address}</div>
            ) : null}
          </div>
          <div className={classes.submitbox}>
            <div className={classes.submitboxagree}>
              <input type="checkbox" id="agree" name="agree" value="agree" />
              <label htmlFor="agree">i agree terms and conditions</label>
            </div>
            <button
              className={classes.submitboxbtn}
              type="submit"
              disabled={!(formik.isValid && formik.dirty)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
