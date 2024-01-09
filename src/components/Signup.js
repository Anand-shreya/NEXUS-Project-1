import Button from "./Button";
import Switch from "./Switch";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

// const Input = styled.input`
//   background: transparent;
//   border-radius: 20px;
//   border: 2px solid #bf4f74;
//   color: #bf4f74;
//   margin: 5px 1em;
//   padding: 0.25em 1em;
//   width: 300px;
//   height: 30px;
//   font-family: "Oswald", sans-serif;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   height: 100%;
//   align-items: center;
//   justify-content: center;
// `;

// const P = styled.p`
//   font-family: "Oswald", sans-serif;
// `;


import Img from "../Images/Mapple_Leaf.jpg";

const Input = styled.input`
  background: rgb(2,0,36);
  background: linear-gradient(105deg, rgb(135 35 65) 0%, rgb(190 49 68) 28%, rgb(172 123 117) 81%);
   border-radius: 20px;
  border: 2px solid #bf4f74;
  color: white;
  margin: 5px 1em;
  padding: 0.25em 1em;
  width: 300px;
  height: 30px;
  font-family: "Oswald", sans-serif;
  
  @media (max-width: 768px) {
    width: 35vw;
    height: 30px;
  }
  @media (max-width: 425px) {
    width: 200px;
   // padding: 0;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const Wrap = styled.div`
  margin: 0px 5px;
  padding: 0em 1em;
  //border: 1px solid red;
  display: flex;
  flex-direction: column;
  height: 400px;
  align-items: center;
  justify-content: center;
  width: 300px;
  backdrop-filter: blur(10px);
  @media (max-width: 768px) {
    width: 45vw;
    height: 45vw;
  }
  @media (max-width: 425px) {
    width: 200px;
    height:100%;
    background-image: url(${Img});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const P = styled.p`
  font-family: "Oswald", sans-serif;
  color:#FF8989;
  font-weight: 800;
`;

function SignUp(props) {
  const navigate = useNavigate();
  var newUser = { ...props.users };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (Password !== cnfPassword) {
      alert("Password don't match");
    } else if (newUser[Email]) {
      alert("user already exist");
    } else {
      alert("Registration successful!!!");
      newUser = { ...newUser, [Email]: { Name, Password } };
      navigate("/");
    }
    props.passChildData(newUser);
  };

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  return (
    <Wrap>
      <Switch sb="#872341" lb="#BE3144" />
      <Form onSubmit={handleSubmit}>
        <P>USER REGISTERATION</P>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
          required
        ></Input>

        <Input
          type="email"
          name="Email"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
          required
        ></Input>

        <Input
          type="password"
          name="Password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
          required
        ></Input>

        <Input
          type="password"
          name="ConfirmPassword"
          placeholder="Confirm Password"
          onChange={(event) => setCnfPassword(event.target.value)}
          required
        ></Input>
        <Button value="Register" background='#FF8989'></Button>
      </Form>
    </Wrap>
  );
}
export default SignUp;
