import React from 'react';
import axios from 'axios';
import { useState } from "react";

import RenderingMeme from '../FetchingMemes/RenderingMeme';
import './input.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MDBCol, MDBRow, } from 'mdbreact';
import { Button } from 'react-bootstrap';


//Form Validation Logic
const Schema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name should be more than 3 characters")
    .required("Name is required"),
  caption: Yup.string()
    .required("Caption is required"),
  url: Yup.string()
    .matches(/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i, "Provide Valid URL")
    .required("URL is required")
});



function Input() {

  const [memes, setMemes] = useState([]);


  //When user want to GET all Memes
  function fetchMemes() {
    axios.get('http://localhost:8081/memes')
      .then((response) => {

        setMemes(response.data);
        console.log(response.data);
      });
  }

  //When user wants to POST a meme
  function saveMemes(values) {

    const data = {
      name: values.name,
      caption: values.caption,
      url: values.url
    };

    axios.post('http://localhost:8081/memes', data)
      .then((response) => {
        // handle success
        var resData = response.data;
        let data = JSON.stringify(resData);
        console.log(data);

      });
    
    //successfully Added Toaster
    toast.success('🚀 Meme Added Successfully!', {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  }

  


  return (
    <>

      <div className="container ">
        <h4 className="">Please Upload Your Meme Details Here 📢</h4>
      </div>
      <br/>

      
      <div className="row">
        <div className="col lg-12 lg-4 ml-3">
          <Formik
            initialValues={{ name: "", caption: "", url: "" }}
            validationSchema={Schema}
            onSubmit={(values, { setSubmitting,resetForm }) => {
              saveMemes(values);
              resetForm();
              setSubmitting(false);
            }}
          >

            {({ touched, errors, isSubmitting }) => (
              <Form className="mx-auto container center_div">
                <div className="form-group ">
                  <label htmlFor="name">Username</label>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    className="pr-0" width={100}
                    className={`form-control ${touched.name && errors.name ? "is-invalid" : ""
                      }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="name"
                    className="invalid-feedback"
                  />
                </div>

                <div className="form-group ">
                  <label htmlFor="caption">Caption</label>
                  <Field
                    type="text"
                    name="caption"
                    placeholder="Enter Caption"

                    className={`form-control ${touched.caption && errors.caption ? "is-invalid" : ""
                      }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="caption"
                    className="invalid-feedback"
                  />
                </div>

                <div className="form-group ">
                  <label htmlFor="url">URL</label>
                  <Field
                    type="text"
                    name="url"
                    placeholder="Enter URL"

                    className={`form-control ${touched.url && errors.url ? "is-invalid" : ""
                      }`}
                  />
                  <ErrorMessage
                    component="div"
                    name="url"
                    className="invalid-feedback"
                  />
                </div>

               
                    <Button  size="6" className="py-2 px-md-5 btn-lg btn-block
                    btn-sm-block float-center"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Please wait..." : "Submit"}
                    </Button>
                    <ToastContainer position="bottom-right"
                      autoClose={1500}
                      hideProgressBar
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover />
                  
              </Form>
            )}
          </Formik>
        </div>
      </div>


      <br/>
      <br/>
      <br/>

      {/* Rendering Memes on Clicking */}
      
      

    </>


  )
}
export default Input;
