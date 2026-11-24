import { Box } from "@mui/material";
import { motion } from "framer-motion";

import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";

const Contact = () => {

  const contacts = [
    {
      name: "Email",
      icon: <EmailIcon />,
      value: "Send me an email",
      url: "mailto:andralynsilviya2008@gmail.com"
    },
    {
      name: "GitHub",
      icon: <GitHubIcon />,
      value: "Explore my repositories",
      url: "https://github.com/andralynsilviyatdgms2025-blip"
    },
    {
      name: "LinkedIn",
      icon: <LinkedInIcon />,
      value: "Connect professionally",
      url: "https://www.linkedin.com/in/andralyn-silviya-g-243443415?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    },
    {
      name: "Instagram",
      icon: <InstagramIcon />,
      value: "Find me on Instagram",
      url: "https://www.instagram.com/_x.lyn._/"
    },
    {
      name: "Phone",
      icon: <PhoneIcon />,
      value: "Contact me",
      url: "tel:8072618163"
    }
  ];

  return (
    <Box className="page">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >

        <p className="eyebrow">GET IN TOUCH</p>

        <h1 className="page-title">Let's Connect.</h1>

        <p className="intro">
          I am always excited to explore new ideas,
          collaborations and learning opportunities.
          Feel free to connect with me!
        </p>

      </motion.div>

      <Box className="card-grid">

        {contacts.map((contact, index) => (

          <motion.a
            key={contact.name}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-card contact-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ scale: 1.04 }}
          >

            <Box className="card-icon">
              {contact.icon}
            </Box>

            <h2>{contact.name}</h2>

            <p>{contact.value} ↗</p>

          </motion.a>

        ))}

      </Box>

    </Box>
  );
};

export default Contact;