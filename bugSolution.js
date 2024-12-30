// bugSolution.js

import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('https://api.example.com/user');
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchUser();
  }, []);

  return (
    <View>
      {/* Safely access user data using optional chaining and nullish coalescing */}
      <Text>User Name: {user?.name ?? 'Loading...'}</Text>
      <Text>User Email: {user?.email ?? 'Loading...'}</Text> 
    </View>
  );
};

export default MyComponent; 