import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const Billing = () => {
  return (
    <>
      <div className="billcontainer">
        <Formik>
          {({isSubmitting}) => (
            <Form>
              <div>
                <label htmlFor="fname">First Name:</label>
                <Field type="text" name="fname"/>
              </div>
              <div>
                <label htmlFor="lname">Last Name:</label>
                <Field type="text" name="lname"/>
              </div>
              <div>
                <label htmlFor="gender">Gender:</label>
                <div>
                  <label><Field type="radio" name="gender" value="male"/>Male</label>
                  <label><Field type="radio" name="gender" value="female"/>Female</label>
                  <label><Field type="radio" name="gender" value="others"/>Others</label>
                </div>
              </div>
              <div>
                <label>Languages:</label>
                <div>
                  <label><Field type="checkbox" name="languages" value="telugu"/>Telugu</label>
                  <label><Field type="checkbox" name="languages" value="english"/>English</label>
                  <label><Field type="checkbox" name="languages" value="hindi"/>Hindi</label>
                </div>
              </div>
              <div>
                <label htmlFor="lname">Email:</label>
                <Field type="email" name="lname"/>
              </div>
              <div>
                <label htmlFor="address">Address</label>
                <Field type="textarea" rows="4" />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}

export default Billing