import './form.css'
import * as yup from "yup"
import { Formik } from "formik";
import Header from '../Header/Header';
import { Button, TextField } from '@mui/material';

const Form = () => {
    const phoneRegExp =
        /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

    const checkoutSchema = yup.object().shape({
        firstName: yup.string().required("required"),
        lastName: yup.string().required("required"),
        email: yup.string().email("invalid email").required("required"),
        contact: yup
            .string()
            .matches(phoneRegExp, "Phone number is not valid")
            .required("required"),
        address1: yup.string().required("required"),
        address2: yup.string().required("required"),
    });
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        address1: "",
        address2: "",
    };
    const handleFormSubmit = (values) => {
        console.log(values);
    };

    return (
        <div>
            <Header title="CREATE USER" text="Create a New User Profile" />
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={checkoutSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div className='formBoxes'>
                            <TextField
                                className='formBox1'
                                variant="filled"
                                type="text"
                                label="First Name"
                                onChange={handleChange}
                                value={values.firstName}
                                name="firstName"
                                error={touched.firstName && errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                            />
                            <TextField
                                className='formBox2'
                                variant="filled"
                                type="text"
                                label="Last Name"
                                onChange={handleChange}
                                value={values.lastName}
                                name="lastName"
                                error={touched.lastName && errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                            />
                            <TextField
                                className='formBox3'
                                variant="filled"
                                type="text"
                                label="Email"
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                error={touched.email && errors.email}
                                helperText={touched.email && errors.email}
                            />
                            <TextField
                                className='formBox4'
                                variant="filled"
                                type="text"
                                label="Contact Number"
                                onChange={handleChange}
                                value={values.contact}
                                name="contact"
                                error={touched.contact && errors.contact}
                                helperText={touched.contact && errors.contact}
                            />
                            <TextField
                                className='formBox5'
                                variant="filled"
                                type="text"
                                label="Address 1"
                                onChange={handleChange}
                                value={values.address1}
                                name="address1"
                                error={touched.address1 && errors.address1}
                                helperText={touched.address1 && errors.address1}
                            />
                            <TextField
                                className='formBox6'
                                variant="filled"
                                type="text"
                                label="Address 2"
                                onChange={handleChange}
                                value={values.address2}
                                name="address2"
                                error={touched.address2 && errors.address2}
                                helperText={touched.address2 && errors.address2}
                            />
                            <Button type="submit" color="primary" variant="contained" >
                                Create New User
                            </Button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
};



export default Form