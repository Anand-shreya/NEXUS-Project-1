import Login from "../components/Login";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

import LandingPage from "./LandingPage";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function MainPage() {
  var [users, setUsers] = useState("");
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage users={users}></LoginPage>} />
        <Route
          path="/sign-up"
          element={<SignUpPage passChildData={setUsers} users={users}></SignUpPage>}
        />
        <Route
          path="/User"
          element={<LandingPage user="Shreya"></LandingPage>}
        />
      </Routes>
    </Router>
  );
}
export default MainPage;
