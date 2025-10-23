import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
const logos = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJO6dYQFqGX2TEJxyB-6mIfkoK0LdGLVy6ew&s",
  },
  {
    img: "https://avatars.githubusercontent.com/u/958072?v=4",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s",
  },
  {
    img: "https://www.datocms-assets.com/48401/1628644950-javascript.png",
  },
  {
    img: "https://jquery-plugins.net/image/plugin/mui-react-component-library.png",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png",
  },
  {
    img: "https://miro.medium.com/1*Vh4Anon5gRo_tQWNNi98_A.jpeg",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/250px-GitHub_Invertocat_Logo.svg.png",
  },
  { img: "https://www.docker.com/app/uploads/2023/08/logo-guide-logos-1.svg" },
];
export default function DIAPKA() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 100px)",
        position: "relative",
        overflow: "hidden",
        mx: { xs: 1, md: 10 },
        border: `1px solid ${colors.gray[300]}`,
        borderRadius: 2,
      }}
    >
      {/* 🔹 Image de fond principale */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.5 }}
        sx={{
          backgroundImage:
            "url(https://eu-images.contentstack.com/v3/assets/blt07f68461ccd75245/blt09a2ac83e51a0e06/661ce198092eb8747525079e/programming_20evolution.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          inset: 0,
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
          },
        }}
      />

      {/* 🔹 Logos animés avec Motion */}
      {logos.map((logo, i) => (
        <motion.img
          key={i}
          src={logo.img}
          alt="tech logo"
          style={{
            position: "absolute",
            width: "60px",

            opacity: 0.15,
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
            zIndex: 99999,
          }}
          initial={{ y: 0 }}
          animate={{
            y: ["0%", "10%", "0%"],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 🔹 Contenu principal */}
      <Box
        sx={{
          textAlign: "center",
          position: "relative",
          zIndex: 2,
          color: "#fff",
          p: 4,
        }}
      >
        <Typography variant="h2" fontWeight="bold" sx={{ mb: 3 }}>
          Soyez la bienvenue à mon portfolio
        </Typography>

        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/about"
          sx={{ mt: 2, fontSize: "1.1rem", px: 4 }}
        >
          About Me
        </Button>
      </Box>
    </Box>
  );
}
