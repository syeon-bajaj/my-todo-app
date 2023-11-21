import { useEffect, useState } from "react"
import { useNavigate } from "react-router"


export default function SignUp() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("age", age);
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("password", password);
        navigate("/")
    }

    return (

        <form
            onSubmit={handleSubmit}
            style={
                {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "519px",
                    height: "474px"
                }
            }
        >
            <h3>Sign Up</h3>

            <label style={{
                width: "100%",
                textAlign: "left"
            }} htmlFor="name">Name</label>
            <input 
                value={name}
                onChange={(event) => {
                    setName(event.target.value)
                }}
                style={{
                    width: "100%",
                    height: "45px",
                    display: "block",
                    flex: "none"
                }} type="name" placeholder="name" id="name" 
            />

            <label style={{
                width: "100%",
                textAlign: "left"
            }} htmlFor="Age">Age</label>

            <input 
                value={age}
                onChange={(event) => {
                    setAge(event.target.value)
                }}
                style={{
                    width: "100%",
                    height: "45px",
                    display: "block",
                    flex: "none"
                }} type="age" placeholder="age" id="age" 
            />
            
            <label 
            style={
                {
                    width: "100%",
                    textAlign: "left"
                }
            } 
            htmlFor="username">Username</label>
            <input 
                value={username}
                onChange={(event) => {
                    setUsername(event.target.value)
                }
            }

            style = {{
                width: "100%",
                height: "45px",
                display: "block",
                flex: "none"
            }} type="username" placeholder="username" id="username"
            />

            <label 
            style={
                {
                    width: "100%",
                    textAlign: "left"
                }
            } 
            htmlFor="password">Set Password</label>
            <input 
                value={password}
                onChange={(event) => {
                    setPassword(event.target.value)
                }
            }

            style = {{
                width: "100%",
                height: "45px",
                display: "block",
                flex: "none"
            }} type="password" placeholder="password" id="password"
            />
            
        </form>
        
    )
    
}