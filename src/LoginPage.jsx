import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Paper, Text, TextInput, Title, PasswordInput, Button, Alert } from "@mantine/core";
import credentials from "../passwords.config";
import { IconInfoCircle } from '@tabler/icons-react';

const icon = <IconInfoCircle />;

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!credentials.find((cred) => cred.username === username.trim() && cred.password === password.trim())) {
      setInvalidCredentials(true);
      return; 
    }

    sessionStorage.setItem("username", username);
    sessionStorage.setItem("password", password);
    console.log(sessionStorage.getItem("username"));
    console.log(sessionStorage.getItem("password"));
    navigate("/");
  };

  return (
    <div>
      {invalidCredentials && (
        <Alert
          variant="light"
          color="rgba(255, 130, 130, 1)"
          radius="md"
          title="Alert title"
          icon={icon}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
          }}
        >
          Invalid Credentials
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <Paper
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "480px",
            height: "437px",
            boxShadow: "rgb(43 40 40) 0px 0px 80px 10px",
            padding: "20px",
            border: "5px border #555",
          }}
          radius={"xl"}
          shadow="xl"
        >
          <Title mb={40}>Login</Title>
          <TextInput
            label="Username"
            withAsterisk
            placeholder="Your Username"
            leftSection={<Text>@</Text>}
            value={username}
            style={{
              width: "90%",
              marginBottom: "20px",
              marginTop: "-20px",
            }}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            type="username"
            id="username"
          />
          <PasswordInput
            label="Password"
            placeholder="Enter your Password"
            value={password}
            withAsterisk
            style={{
              width: "90%",
            }}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type="password"
            id="password"
          />
          <Button
            style={{
              border: "10px",
              padding: "10px",
              marginTop: "27px",
              marginBottom: "4px",
            }}
            type="submit"
          >
            Submit
          </Button>
        </Paper>
      </form>
    </div>
  );
}
