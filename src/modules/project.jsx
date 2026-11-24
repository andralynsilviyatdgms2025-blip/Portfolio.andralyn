
import { Box, Chip, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CodeIcon from "@mui/icons-material/Code";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const Project = ({ skillsOnly = false }) => {

  const navigate = useNavigate();

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Material UI",
    "Git & GitHub",
    "Problem Solving",
    "Communication",
    "Leadership",
    "Entrepreneurship"
  ];

  const experience = [
    {
      title: "Student Well-Being Minister",
      description:
        "Represented students and contributed to student welfare initiatives."
    },
    {
      title: "Mess Committee Coordinator",
      description:
        "Coordinated student feedback and worked towards improving dining experiences."
    },
    {
      title: "Student Entrepreneurial Market",
      description:
        "Participated in entrepreneurial activities and developed teamwork and business skills."
    },
    {
      title: "Public Speaking & Debate",
      description:
        "Participated in Tamil debate competitions and hosted school programmes."
    },
    {
      title: "Sports & Team Leadership",
      description:
        "Participated in swimming, kabaddi, karate, badminton and chess."
    }
  ];

  return (
    <Box className="page">

      <p className="eyebrow">
        LEARNING, BUILDING & GROWING
      </p>

      <h1 className="page-title">
        {skillsOnly ? "My Skills" : "My Work & Experience"}
      </h1>

      {!skillsOnly && (
        <>
          <h2 className="section-title">My Projects</h2>

          <motion.div
            className="portfolio-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
          >
            <CodeIcon sx={{ fontSize: 45, color: "#d5bb83" }} />

            <h2>Personal Portfolio Website</h2>

            <p>
              A responsive portfolio developed using
              React, Vite, Material UI and Framer Motion.
              It showcases my education, projects,
              interests, skills and achievements.
            </p>

            <Box className="button-group">
              <Chip label="React" />
              <Chip label="Material UI" />
              <Chip label="Vite" />
            </Box>

            <Button
              className="gold-button"
              onClick={() => navigate("/")}
              sx={{ marginTop: 3 }}
            >
              View Portfolio
            </Button>

          </motion.div>
        </>
      )}

      <h2 className="section-title">My Skills</h2>

      <Box className="skills-grid">

        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ scale: 1.08 }}
          >
            <Chip
              label={skill}
              sx={{
                color: "#d5bb83",
                border: "1px solid #d5bb83",
                padding: "10px",
                fontSize: "15px",
                height: "45px"
              }}
            />
          </motion.div>
        ))}

      </Box>

      {!skillsOnly && (
        <>
          <h2 className="section-title">
            Leadership & School Experience
          </h2>

          <Box className="card-grid">

            {experience.map((item, index) => (
              <motion.div
                key={item.title}
                className="portfolio-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >

                <EmojiEventsIcon
                  sx={{ color: "#d5bb83", fontSize: 35 }}
                />

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </motion.div>
            ))}

          </Box>
        </>
      )}

    </Box>
  );
};

export default Project;
