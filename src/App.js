import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material"; //div with some shading and colors from material ui.
import Home from "./pages/Home";
import ExerciseDetails from "./pages/ExerciseDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      {/* sx- is to add styling for box and xl - extra large devices. This is used to make app responsive. */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
