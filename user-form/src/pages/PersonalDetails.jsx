import { saveUserDetails } from '../services/api';

// ... other imports

const PersonalDetails = () => {
  const handleSubmit = async (values, { setSubmitting, setStatus }) => {
    try {
      const userData = {
        personalDetails: values,
        addresses: [],
        employmentHistory: [],
        contactDetails: null
      };

      const result = await saveUserDetails(userData);
      setStatus({ success: true, message: 'Details saved successfully!' });
      console.log('Saved successfully:', result);
    } catch (error) {
      setStatus({ success: false, message: error.message });
      console.error('Save failed:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Paper className="form-container">
      <h2>Personal Details</h2>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          dob: '',
          ssn: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange, status, isSubmitting }) => (
          <Form>
            {/* ... your existing form fields ... */}
            
            {status && (
              <Alert 
                severity={status.success ? "success" : "error"}
                sx={{ mt: 2 }}
              >
                {status.message}
              </Alert>
            )}
            
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Saving...' : 'Save'}
            </Button>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};