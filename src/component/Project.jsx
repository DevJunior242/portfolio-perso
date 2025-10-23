import {
  Box,
  Grid,
  Typography,
  useTheme,
  Button,
  Card,
  Divider,
} from "@mui/material";
import { tokens } from "../theme";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { GitHub } from "@mui/icons-material";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Application e-commerce ",
    description:
      "Application e-commerce complète développée avec Laravel pour le backend et React pour le frontend. Elle intègre un système de paiement sécurisé via PayDunya, une gestion avancée des produits et des commandes, ainsi qu’une interface fluide et animée grâce à MUI et Framer Motion.",
    technologies: "Laravel, React, MySQL, PayDunya, MUI, Framer Motion",
    github: "https://github.com/DevJunior242/laravel-react-ecommerce",
    img: "image/ecom.jpg",
  },
  {
    title: "Forum",
    description:
      "Développement d'un forum interactif avec gestion des utilisateurs et commentaires imbriqués. Fonctionnalités : likes, notifications, bannissement des utilisateurs, modération des discussions.",
    technologies: "Laravel, MySQL, Tailwind",
    github: "https://github.com/DevJunior242/lara-forum",
    img: "/image/forum.jpg",
  },
  {
    title: "API de gestion de tâches",
    description:
      "Développement d'une API REST permettant la gestion des tâches avec authentification et rôles utilisateurs.",
    technologies: "Laravel, MySQL, JWT, Postman",
    github: "https://github.com/DevJunior242/track-api-app",
    img: "image/tasks.jpg",
  },
  {
    title: "Plateforme de location immobilière",
    description:
      "Application moderne de mise en relation entre bailleurs et locataires, développée avec Laravel et React. Elle intègre la gestion des annonces, la réservation des logements, un système de paiement sécurisé via PayDunya, et une interface fluide animée avec Framer Motion et MUI.",
    technologies:
      "Laravel, React, MySQL, PayDunya, MUI, Framer Motion, Tailwind CSS",
    github: "https://github.com/DevJunior242/locafacile.bf",
    img: "image/house.jpg",
  },
];

export default function Project() {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);

  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []); 
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
      <Typography
        variant="h1"
        component={"h1"}
        fontWeight="bold"
        sx={{ mb: 3, fontSize: { xs: 20, md: 50 } }}
      >
        Mes projets
      </Typography>
      {loading && <div>Loading...</div>}
      <Grid container spacing={2} sx={{ pb: 2, px: { xs: 0.5, md: 2 } }}>
        {projects.map((item, i) => (
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 2,
              borderRadius: 2,
              overflow: "hidden",
            }}
            minHeight={200}
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            key={i}
          >
            <Card
              sx={{
                width: "100%",
                height: "100%",
                boxShadow: 3,
                overflow: "hidden",
                borderRadius: 2,
                backgroundColor: "background.default",
              }}
            >
              <CardMedia
                component={motion.div}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.5 }}
                sx={{ height: 160 }}
                image={item.img}
                title={item.title}
              />

              <Box
                sx={{
                  position: "relative",
                }}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="span"
                    sx={{
                      color: colors.orange[600],
                      fontSize: { xs: 12, md: 14 },
                    }}
                  >
                    {item.technologies}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      color: colors.gray[100],
                      fontSize: { xs: 12, md: 14 },
                      fontWeight: "bold",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: colors.gray[100] }}>
                    {item.description}
                  </Typography>
                  <Typography variant="body2" sx={{ color: colors.gray[100] }}>
                    {item.technologies}
                  </Typography>
                </CardContent>

                <Box
                  component={motion.div}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "#fff",
                    fontSize: 24,
                    fontWeight: "bold",
                    borderRadius: 8,
                    cursor: "pointer",
                  }}
                >
                  <Button
                    size="large"
                    variant="contained"
                    component={Link}
                    to={item.github}
                  >
                    <GitHub />
                  </Button>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
