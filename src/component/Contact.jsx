import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";

export default function Contact() {
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
        <Typography
          variant="h1"
          component={"h1"}
          fontWeight="bold"
          sx={{ mb: 3 ,fontSize: { xs: 20, md: 50 } }}}
        >
          Contactez-moi
        </Typography>

        <Typography variant="body1" lineHeight={1.8} sx={{ ml: 2 }}>
          Je suis disponible pour discuter de projets ou toute autre
          collaboration. N'hésitez pas à me contacter par email ou via mes
          réseaux sociaux.
          <br />
          <br />
          Si vous avez des questions ou des besoins en matière de développement,
          n'hésitez pas à me contacter.
        </Typography>
      </Box>
      <Box sx={{ mt: 4 }}>
        <motion.a
          href={`mailto:devjunior242@gmail.com`}
          target="_blank"
          style={{
            backgroundColor: colors.indigo[500],
            color: "white",
            padding: "10px 20px",
            border: `1px solid ${colors.gray[10]}`,
            borderRadius: 10,
            boxShadow: 2,
            textDecoration: "none",
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.5 }}
        >
          <b>Email :</b> devjunior242@gmail.com
        </motion.a>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 4,
          px: 10,
          mt: 10,
        }}
      >
        <motion.a
          href="https://github.com/DevJunior242"
          target="_blank"
          style={{
            backgroundColor: colors.indigo[500],
            color: "white",
            padding: "10px 20px",
            border: `1px solid ${colors.gray[10]}`,
            borderRadius: 10,
            boxShadow: 2,
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.5 }}
        >
          <GitHub />
        </motion.a>
        <motion.a
        href="https://web.facebook.com/?_rdc=1&_rdr"
          target="_blank"
          style={{
            backgroundColor: colors.indigo[500],
            color: "white",
            padding: "10px 20px",
            border: `1px solid ${colors.gray[10]}`,
            borderRadius: 10,
            boxShadow: 2,
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.5 }}
        >
          <Facebook />
        </motion.a>{" "}
        <motion.a
          href="https://www.linkedin.com/in/dev-junior-905162352/"
          target="_blank"
          style={{
            backgroundColor: colors.indigo[500],
            color: "white",
            padding: "10px 20px",
            border: `1px solid ${colors.gray[10]}`,
            borderRadius: 10,
            boxShadow: 2,
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.5 }}
        >
          <LinkedIn />
          
        </motion.a>{" "}
         
      </Box>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/"
        sx={{ mt: 2, fontSize: "1.1rem", px: 4 }}
      >
        BACK
      </Button>
    </Box>
  );
}
