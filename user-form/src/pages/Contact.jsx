import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Paper, Grid } from '@mui/material';
import '../styles/Forms.css';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  additionalEmail: Yup.string()
    .email('Invalid email address'),
  residencePhone: Yup.string()
    .matches(/^\+?[\d\s-]+$/, 'Invalid phone number')
    .required('Residence phone is required'),
  businessPhone: Yup.string()
    .matches(/^\+?[\d\s-]+$/, 'Invalid phone number'),
  webAddress: Yup.string()
    .url('Invalid URL format')
});

const Contact = () => {
  const handleSubmit = (values) => {
    console.log(values);
    // Add your save logic here
  };

  return (
    <Paper className="form-container">
      <h2>Contact Details</h2>
      <Formik
        initialValues={{
          email: '',
          additionalEmail: '',
          residencePhone: '',
          businessPhone: '',
          webAddress: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="email"
                  label="Email Address"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="additionalEmail"
                  label="Additional Email Address"
                  type="email"
                  value={values.additionalEmail}
                  onChange={handleChange}
                  error={touched.additionalEmail && Boolean(errors.additionalEmail)}
                  helperText={touched.additionalEmail && errors.additionalEmail}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="residencePhone"
                  label="Residence Phone Number"
                  value={values.residencePhone}
                  onChange={handleChange}
                  error={touched.residencePhone && Boolean(errors.residencePhone)}
                  helperText={touched.residencePhone && errors.residencePhone}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="businessPhone"
                  label="Business Phone Number"
                  value={values.businessPhone}
                  onChange={handleChange}
                  error={touched.businessPhone && Boolean(errors.businessPhone)}
                  helperText={touched.businessPhone && errors.businessPhone}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="webAddress"
                  label="Web Address"
                  value={values.webAddress}
                  onChange={handleChange}
                  error={touched.webAddress && Boolean(errors.webAddress)}
                  helperText={touched.webAddress && errors.webAddress}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="submit-button"
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

export default Contact;