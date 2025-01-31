import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  Button,
  Paper,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import '../styles/Forms.css';

const validationSchema = Yup.object({
  street: Yup.string().required('Street is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  zipCode: Yup.string()
    .matches(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code')
    .required('ZIP code is required'),
});

const Address = () => {
  const [addresses, setAddresses] = useState([]);

  const handleSubmit = (values, { resetForm }) => {
    setAddresses([...addresses, values]);
    resetForm();
  };

  const handleDelete = (index) => {
    const newAddresses = addresses.filter((_, idx) => idx !== index);
    setAddresses(newAddresses);
  };

  return (
    <Paper className="form-container">
      <h2>Address Information</h2>
      <Formik
        initialValues={{
          street: '',
          city: '',
          state: '',
          zipCode: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="street"
                  label="Street Address"
                  value={values.street}
                  onChange={handleChange}
                  error={touched.street && Boolean(errors.street)}
                  helperText={touched.street && errors.street}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  name="city"
                  label="City"
                  value={values.city}
                  onChange={handleChange}
                  error={touched.city && Boolean(errors.city)}
                  helperText={touched.city && errors.city}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  name="state"
                  label="State"
                  value={values.state}
                  onChange={handleChange}
                  error={touched.state && Boolean(errors.state)}
                  helperText={touched.state && errors.state}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  name="zipCode"
                  label="ZIP Code"
                  value={values.zipCode}
                  onChange={handleChange}
                  error={touched.zipCode && Boolean(errors.zipCode)}
                  helperText={touched.zipCode && errors.zipCode}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="submit-button"
                >
                  Add Address
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>

      {addresses.length > 0 && (
        <TableContainer className="address-table">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Street</TableCell>
                <TableCell>City</TableCell>
                <TableCell>State</TableCell>
                <TableCell>ZIP Code</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {addresses.map((address, index) => (
                <TableRow key={index}>
                  <TableCell>{address.street}</TableCell>
                  <TableCell>{address.city}</TableCell>
                  <TableCell>{address.state}</TableCell>
                  <TableCell>{address.zipCode}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleDelete(index)} color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Paper>
  );
};

export default Address;