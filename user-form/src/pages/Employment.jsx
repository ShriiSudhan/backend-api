import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  Button,
  Paper,
  Grid,
  Card,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import '../styles/Forms.css';

const validationSchema = Yup.object({
  company: Yup.string().required('Company name is required'),
  position: Yup.string().required('Position is required'),
  startDate: Yup.date().required('Start date is required'),
  endDate: Yup.date(),
  responsibilities: Yup.string().required('Responsibilities are required'),
});

const Employment = () => {
  const [employmentHistory, setEmploymentHistory] = useState([]);

  const handleSubmit = (values, { resetForm }) => {
    setEmploymentHistory([...employmentHistory, values]);
    resetForm();
  };

  const handleDelete = (index) => {
    const newHistory = employmentHistory.filter((_, idx) => idx !== index);
    setEmploymentHistory(newHistory);
  };

  return (
    <Paper className="form-container">
      <h2>Employment History</h2>
      <Formik
        initialValues={{
          company: '',
          position: '',
          startDate: '',
          endDate: '',
          responsibilities: '',
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
                  name="company"
                  label="Company Name"
                  value={values.company}
                  onChange={handleChange}
                  error={touched.company && Boolean(errors.company)}
                  helperText={touched.company && errors.company}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="position"
                  label="Position"
                  value={values.position}
                  onChange={handleChange}
                  error={touched.position && Boolean(errors.position)}
                  helperText={touched.position && errors.position}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="startDate"
                  label="Start Date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={values.startDate}
                  onChange={handleChange}
                  error={touched.startDate && Boolean(errors.startDate)}
                  helperText={touched.startDate && errors.startDate}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  name="endDate"
                  label="End Date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={values.endDate}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="responsibilities"
                  label="Responsibilities"
                  multiline
                  rows={4}
                  value={values.responsibilities}
                  onChange={handleChange}
                  error={touched.responsibilities && Boolean(errors.responsibilities)}
                  helperText={touched.responsibilities && errors.responsibilities}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="submit-button"
                >
                  Add Employment
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>

      <Grid container spacing={2} className="employment-grid">
        {employmentHistory.map((job, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{job.company}</Typography>
                <Typography variant="subtitle1">{job.position}</Typography>
                <Typography variant="body2">
                  {new Date(job.startDate).toLocaleDateString()} - 
                  {job.endDate ? new Date(job.endDate).toLocaleDateString() : 'Present'}
                </Typography>
                <Typography variant="body2">{job.responsibilities}</Typography>
                <IconButton
                  onClick={() => handleDelete(index)}
                  color="error"
                  className="delete-button"
                >
                  <DeleteIcon />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Employment;