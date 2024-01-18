import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import HomePage from "./Home";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

const App = () => {
  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" component={Link} to="/">
              <Typography variant="h6">밀러의 법칙</Typography>
            </Button>
            <Button color="inherit" component={Link} to="/login">
              <Typography variant="h6">파스텔의 법칙(log in)</Typography>
            </Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/login" exact element={<SignUpForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
