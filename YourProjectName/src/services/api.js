const API_URL = 'http://localhost:5237/api';

export const saveUserDetails = async (userData) => {
  try {
    console.log('Sending user details:', userData);
    const response = await fetch(`${API_URL}/UserData/SaveUserDetails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to save user details');
    }
    
    const result = await response.json();
    console.log('Save successful:', result);
    return result;
  } catch (error) {
    console.error('Error saving user details:', error);
    throw error;
  }
};