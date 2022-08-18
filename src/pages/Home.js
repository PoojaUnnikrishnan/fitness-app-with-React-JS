import { Box } from "@mui/material";
import React, { useState } from "react";
import Exercises from "../Component/Exercises";
import HeroBanner from "../Component/HeroBanner";
import SearchExercises from "../Component/SearchExercises";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodypart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </Box>
  );
};

export default Home;
