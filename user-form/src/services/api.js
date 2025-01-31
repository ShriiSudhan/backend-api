const API_URL = 'http://localhost:5237/api';

export const saveUserData = async (userData) => {
  try {
    console.log('Attempting to save data:', userData);
    const response = await fetch(`${API_URL}/UserData`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    
    console.log('Response status:', response.status);
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      throw new Error('Failed to save data');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error saving data:', error);
    throw error;
  }
};

export const getUserData = async () => {
  try {
    console.log('Fetching user data...');
    const response = await fetch(`${API_URL}/UserData`);
    console.log('Get response status:', response.status);
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      throw new Error('Failed to fetch data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

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