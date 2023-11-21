import { Box, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import React, { useEffect, useState } from 'react';
import LoginPage from "./LoginPage"
import './App.css'; // Import the stylesheet
import TodoList from './TodoList';
import { useNavigate } from 'react-router-dom';


const App = () => {
  const navigation = useNavigate();
  useEffect(() => {
    if(!sessionStorage.getItem("username") && !sessionStorage.getItem("password")) {
      navigation("/login")
    }
  }, []);
  return (
    <Box>
      <TodoList />
    </Box>
  )
};

export default App;
