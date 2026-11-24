import { Box, Button } from "@mui/material";
import { useNavigate, useLocation }
  from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <Box className="navbar">

      <h2 onClick={() => navigate("/")}>
         ANDRALYN ✦ | Portfolio
      </h2>

      <Box className="nav-links">
        {pages.map((page) => (
          <Button
            key={page.name}
            onClick={() => navigate(page.path)}
            sx={{
              color: location.pathname === page.path
                ? "#d5bb83"
                : "#f5eddd",
              textTransform: "none"
            }}
          >
            {page.name}
          </Button>
        ))}
      </Box>

    </Box>
  );
};

export default Navbar;