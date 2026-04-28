import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Form.css';

const UserForm = () => {
  const validationSchema = Yup.object({
    fname: Yup.string().min(2, "first name is too short").required("First Name is required"),
    Lname: Yup.string().min(2, "last name is too short").required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    contact: Yup.string().matches(/^[0-9]+$/,"Must be only digits").min(10, "Minimum 10 digits").required("Mobile number is required"),
    resume: Yup.mixed().required("Resume is required"),
    url: Yup.string().url("Invalid URL").required("URL is Required"),
    about: Yup.string().required("Tell us about yourself"),
  });

  return (
    <div className="formContainer">
      <h1 className="formtitle">Form in React</h1>
      
      <Formik
        initialValues={{
          fname: "", Lname: "", email: "", contact: "", 
          gender: "", subjects: [], resume: "", url: "", about: ""
        }}
        validationSchema={validationSchema}
        onSubmit={(values, {resetForm}) => {
          alert(JSON.stringify(values,null,2));
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* First Name */}
            <div className="formgroup">
              <label htmlFor="fname">First Name*</label>
              <Field name="fname" type="text" placeholder="Enter First Name" />
              <ErrorMessage name="fname" component="span" className="error" />
            </div>

            {/* Last Name */}
            <div className="formgroup">
              <label htmlFor="Lname">Last Name*</label>
              <Field name="Lname" type="text" placeholder="Enter Last Name" />
              <ErrorMessage name="Lname" component="span" className="error" />
            </div>

            {/* Email */}
            <div className="formgroup">
              <label htmlFor="email">Email*</label>
              <Field name="email" type="email" placeholder="Enter Email" />
              <ErrorMessage name="email" component="span" className="error" />
            </div>

            {/* Contact */}
            <div className="formgroup">
              <label htmlFor="contact">Contact*</label>
              <Field name="contact" type="tel" placeholder="Enter number" />
              <ErrorMessage name="contact" component="span" className="error" />
            </div>

            {/* Gender - Radio */}
            <div className="formgroup">
              <label>Gender*</label>
              <div className="radio-group">
                <label><Field type="radio" name="gender" value="male" /> Male</label>
                <label><Field type="radio" name="gender" value="female" /> Female</label>
                <label><Field type="radio" name="gender" value="others" /> Others</label>
              </div>
            </div>

            {/* Subjects - Checkboxes */}
            <div className="formgroup">
              <label>Your Best Subject</label>
              <div className="checkbox-group">
                <label><Field type="checkbox" name="subjects" value="english" /> English</label>
                <label><Field type="checkbox" name="subjects" value="maths" /> Maths</label>
                <label><Field type="checkbox" name="subjects" value="physics" /> Physics</label>
              </div>
            </div>

            {/* RESUME */}
            <div className="formgroup">
              <label htmlFor="url">Enter RESUME*</label>
              <Field name="resume" type="file" placeholder="Enter your resume" />
              <ErrorMessage name="resume" component="span" className="error" />
            </div>

            {/* URL */}
            <div className="formgroup">
              <label htmlFor="url">Enter URL*</label>
              <Field name="url" type="url" placeholder="Enter url" />
              <ErrorMessage name="url" component="span" className="error" />
            </div>

            {/* About */}
            <div className="formgroup">
              <label htmlFor="about">About</label>
              <Field as="textarea" name="about" placeholder="About yourself" rows="4" />
            </div>

            <p className="submit-text">Submit or Reset</p>
            <div className="btn-container">
              <Field type="submit" className="btn-submit" value="Submit"/>
              <Field type="reset" className="btn-reset" value="Reset"/>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;