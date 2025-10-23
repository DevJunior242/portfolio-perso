import { Box, Grid, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

import { motion } from "motion/react";
import { title } from "motion/react-client";

const skills = [
  {
    title: "php",
    img: "https://kinsta.com/fr/wp-content/uploads/sites/4/2023/09/PHP_Feature-Image-1024x536.jpg",
  },
  {
    title: "Laravel",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUw-mCQT4z8tAqXY1cRPPuWxUVTKZ7XdtDMA&s",
  },
  {
    title: "Javascript",
    img: "https://www.tutorialrepublic.com/lib/images/javascript-illustration.png",
  },
  {
    title: "React",
    img: "https://blog.openreplay.com/images/vite-create-react-app/images/hero.png",
  },
  {
    title: "Tailwind",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
  },
  {
    title: "Bootstrap",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png",
  },
  {
    title: "motion",
    img: "https://framerusercontent.com/images/OWw1OPI2aygT3rjUDhktaQtheA.png?width=1200&height=630",
  },
  {
    title: "material-ui",
    img: "https://jquery-plugins.net/image/plugin/mui-react-component-library.png",
  },
  {
    title: "Github",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUmVtiT2DCe2v8c--tSFwB0899qoN49lgwiA&s",
  },
  {
    title: "MySQL",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM3VpCXe2YuZJjEKlLWgp2lP0nagqIRADhDQ&s",
  },
  {
    title: "Insomnia",
    img: "https://res.cloudinary.com/apideck/image/upload/v1570527747/catalog/insomnia-rest/icon128x128.jpg",
  },
  {
    title: "Rest API",
    img: "https://cdn.prod.website-files.com/62d9b9c78f111f03f778e150/68624ec9dc394e09ab806d0b_rest%20api%20image.png",
  },
   
];

export default function Skills() {
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
      <Typography
        variant="h1"
        component={"h1"}
        fontWeight="bold"
        sx={{ mb: 3,fontSize:{xs:20,md:50} }}
      >
        Mes compétences
      </Typography>
      <Grid container spacing={2} sx={{ pb: 2 }}>
        {skills.map((item, i) => (
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              mt: 2,
              borderRadius: 2,
              overflow: "hidden",
            }}
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            key={i}
          >
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.5 }}
              src={item.img}
              alt={item.title}
              style={{ width: 50, height: 50, borderRadius: 5 }}
            />
            <Typography
              variant="h5"
              component="div"
              sx={{ color: colors.gray[100] }}
            >
              {item.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
