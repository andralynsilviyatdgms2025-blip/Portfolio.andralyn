
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

const About = () => {

  const details = [
    {
      icon: <SchoolIcon />,
      title: "My College Life",
      content:
        "I am pursuing B.SC Computer Science and AI with minor in Entrepreneurship at Ashoka University. My college journey allows me to explore technology, entrepreneurship, interdisciplinary learning and innovative problem-solving."
    },
    {
      icon: <SchoolIcon />,
      title: "My School Life",
      content:
        "I completed my schooling at Tenkasi District Government Model School. I developed my interests in academics, leadership, public speaking and sports."
    },
    {
      icon: <EmojiEventsIcon />,
      title: "Leadership & Achievements",
      content:
        "I served as Student Well-Being Minister,managed the hosting team of school events ,coordinated the mess committee and participated in debates, swimming, kabaddi, karate, badminton and chess."
    },
    {
      icon: <FavoriteIcon />,
      title: "My Interests",
      content:
        "1 Coding, 2 web development, 3 entrepreneurship, 4 creative writing, 5 public speaking, 6 sports and exploring new ideas."
    },
    {
      icon: <LightbulbIcon />,
      title: "My Vision",
      content:
        "My ambition is to become an entrepreneur and build meaningful technology that makes education more accessible and engaging."
    }
  ];

  return (
    <Box className="page">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="eyebrow">GET TO KNOW ME</p>

        <h1 className="page-title">My Journey.</h1>

        <p className="intro">
          Beyond the code, I am a curious learner,
          a creative thinker and an aspiring
          entrepreneur who believes in continuous
          growth.
        </p>
      </motion.div>

      <Box className="card-grid">

        {details.map((item, index) => (

          <motion.div
            className="portfolio-card"
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -8 }}
          >

            <Box className="card-icon">
              {item.icon}
            </Box>

            <Typography variant="h5">
              {item.title}
            </Typography>

            <p>{item.content}</p>

          </motion.div>

        ))}

      </Box>

    </Box>
  );
};

export default About;