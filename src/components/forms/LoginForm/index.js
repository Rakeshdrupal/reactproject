import React from 'react';
 import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
import "./styles.scss";

const LoginForm = () => {
    return (
      <Formik
        initialValues={{ email: '', password: '', }}
        validationSchema={Yup.object({
        
            password: Yup.string()
            .max(10, 'Must be 10 characters or less')
            .required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
        <label htmlFor="password">Email Address</label>
          <Field name="password" type="email" />
          <ErrorMessage name="password" />
  
          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />
  
          <button type="submit">Submit</button>
          <div className="links">
            <Link to="/registration">
              Register
            </Link>
            {` | `}
            <Link to="/recovery">
              Reset Password
            </Link>
          </div>
        </Form>
      </Formik>
    );
  };




export default LoginForm;