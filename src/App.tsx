import Container from "@mui/material/Container";
import React from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import HomePage from "./components/homePage";

function App() {
  return (
    <div>
      <Container>
        <Header />
        <HomePage />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
