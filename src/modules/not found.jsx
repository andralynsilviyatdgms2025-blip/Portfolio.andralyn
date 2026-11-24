
import { Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import FolderIcon from "@mui/icons-material/Folder";
import CodeIcon from "@mui/icons-material/Code";
import EmailIcon from "@mui/icons-material/Email";

const NotFound = () => {

  const navigate = useNavigate();

  const pages = [
    { name: "Home", icon: <HomeIcon />, path: "/" },
    { name: "About", icon: <PersonIcon />, path: "/about" },
    { name: "Projects", icon: <FolderIcon />, path: "/projects" },
    { name: "Skills", icon: <CodeIcon />, path: "/skills" },
    { name: "Contact", icon: <EmailIcon />, path: "/contact" }
  ];

  return (
    <Box className="not-found">

      <motion.h1
        className="error-number"
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity
        }}
      >
        404
      </motion.h1>

      <h2>Oops! Lost in cyberspace?</h2>

      <p>
        The page you are looking for does not exist.
        Let's find your way back!
      </p>

      <Box className="error-links">

        {pages.map((page) => (

          <motion.div
            key={page.name}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >

            <Button
              onClick={() => navigate(page.path)}
              className="error-button"
            >

              {page.icon}

              <span>{page.name}</span>

            </Button>

          </motion.div>

        ))}

      </Box>

    </Box>
  );
};

export default NotFound;
