import "./styles.css";
import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Mainimg from "./components/Mainimg/Mainimg";
import Main from "./components/Main/Main";
import Beforfooter from "./components/Beforfooter/Beforfooter";
import Footer from "./components/Footer/Footer";
import MainTeacherinfo from "./components/TeacherComp/MainTeacherinfo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  const contactUsRef = useRef(null);
  const [teachers, SetTeachers] = useState([]);
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((helloRes) => SetTeachers(helloRes));
  }, []);

  return (
    <Router>
      <Header contactUsRef={contactUsRef} />

      <Mainimg />
      <Routes>
        <Route path="/" element={<Main teachers={teachers} />} />
        <Route
          path="/Teacher/:username"
          element={<MainTeacherinfo teachers={teachers} />}
        />
      </Routes>
      <Beforfooter contactUsRef={contactUsRef} />
      <Footer />
    </Router>
  );
}
