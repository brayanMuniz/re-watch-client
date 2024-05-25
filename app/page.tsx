"use client"
import React from 'react';
import axios from 'axios';

export default function Home() {
  const handleButtonClick = async () => {
    try {
      const response = await axios.get('http://localhost:8000/');
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error making the request:', error);
    }
  };

  return (
    <main>
      <div>Test</div>
      <button onClick={handleButtonClick}>Make GET Request</button>
    </main>
  );
}
