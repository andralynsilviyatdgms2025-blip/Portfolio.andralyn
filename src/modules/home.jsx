
import { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Home = () => {
  const navigate = useNavigate();

  const [text, setText] = useState("");
  const fullText = "Andralyn Silviya.";

  useEffect(() => {
    let i = 0;

    const timer = setInterval(() => {
      i++;
      setText(fullText.slice(0, i));

      if (i >= fullText.length) {
        clearInterval(timer);
      }
    }, 120);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box className="home-page">

      <Box className="hero-section">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <Typography className="eyebrow">
            ✦ WELCOME TO MY PORTFOLIO
          </Typography>

          <Typography variant="h4">
            Hello, I'm
          </Typography>

          <h1 className="typing-name">
            {text}<span className="cursor">|</span>
          </h1>

          <Typography variant="h6" color="#d5bb83">
            Computer Science Student |
            Aspiring Entrepreneur
          </Typography>

          <p className="intro">
            I am passionate about technology,
            creativity and entrepreneurship.
            I believe in turning curiosity into
            code, ideas into reality, and challenges
            into opportunities.
          </p>

          <Box className="button-group">

            <Button
              className="gold-button"
              endIcon={<ArrowForwardIcon />}
              onClick={() => navigate("/projects")}
            >
              Explore My Work
            </Button>

            <Button
              className="outline-button"
              onClick={() => navigate("/about")}
            >
              About Me
            </Button>

          </Box>

        </motion.div>

        <motion.div
          className="profile-container"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3 }}
        >
          <img
            src="/profile.jpeg"
            alt="Portfolio profile"
            className="profile-photo"
          />
        </motion.div>

      </Box>

      <motion.div
        className="home-quote"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        "Turning ideas into impact."
      </motion.div>

      <footer>
        © 2026 Andralyn Silviya | Built with React
      </footer>

    </Box>
  );
};

export default Home;
