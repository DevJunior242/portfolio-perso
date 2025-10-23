import { Box, Button, Divider, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function About() {
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
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <motion.img
          src="https://dev-portfolio-kappa-seven.vercel.app/avatar.png"
          height={200}
          width={200}
          style={{ borderRadius: "50%" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.5 }}
          alt="devjunior"
        />

        <Typography variant="body1" lineHeight={1.8} sx={{ ml: 2 }}>
          Bonjour 👋 Je m'appelle <b>Dev Junior</b>, un développeur web
          <b> full-stack </b>passionné basé au Burkina Faso. Je conçois et
          développe des applications web modernes, performantes et intuitives
          avec les technologies que j’aime :<b>Laravel, React, Tailwind CSS</b>{" "}
          et <b>MySQL</b>.
          <br />
          <Divider />
          <br />
          Mon objectif est de transformer des idées en solutions digitales
          efficaces, tout en offrant une expérience utilisateur fluide et un
          code propre. Je m'intéresse aussi à l’intégration de paiements
          (CinetPay, Stripe, PayPal) et à l’automatisation via des API.
          <br />
          <Divider />
          <br />
          En dehors du code, j’aime apprendre de nouvelles technologies,
          améliorer mes projets open-source sur GitHub, et partager mes
          connaissances avec d’autres développeurs.
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/projects"
        sx={{ mt: 2, fontSize: "1.1rem", px: 4 }}
      >
        Projetcs
      </Button>
    </Box>
  );
}
