import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../theme";
import {
  Box,
  Divider,
  IconButton,
  InputBase,
  List,
  ListItem,
  Typography,
  useTheme,
  Button,
  Menu,
  MenuItem,


} from "@mui/material";
 import { DarkModeOutlined, LightModeOutlined, Menu as MenuIcon } from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";
import { color } from "motion";

const items = [
  { title: "DIAPKA", href: "/" },
  { title: "About", href: "/about" },
  { title: "projects", href: "/projects" },
  { title: "Skills", href: "/skills" },
  { title: "Contact", href: "/contact" },
];

function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);
  const handleClose = () => setOpen(false);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mx: 10,
        alignItems: "center",
        p: 2,

        mt: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <List sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          {items.map((item) => (
            <ListItem
              key={item.title}
              sx={{
                display: "inline",
                width: "auto",
                p: 0.5,
                cursor: "pointer",
                borderRadius: 2,
                "&:first-child": {
                  fontWeight: "bold",
                },
              }}
            >
              <NavLink
                to={item.href}
                style={({ isActive }) => ({
                  color: isActive ? colors.indigo[400] : colors.zinc[100],
                  textDecoration: "none",
                  transition: "0.3s",
                })}
              >
                {item.title}
                <Divider sx={{ color: colors.indigo[400] }} />
              </NavLink>
            </ListItem>
          ))}
        </List>
        <Box
          sx={{
            display: {
              xs: "block",
              md: "none",
            },
          }}
        >
          <Button
            id="menu-button"
            aria-controls={open ? "menu-fullscreen" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            style={{
              color:
                theme.palette.mode === "dark"
                  ? colors.gray[100]
                  : colors.gray[800],
            }}
          >
            <MenuIcon />
          </Button>
          <Menu
            id="menu-fullscreen"
            aria-labelledby="menu-button"
            anchorReference="none"
            open={open}
            onClose={handleClose}
            PaperProps={{
              sx: {
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                maxHeight: "100vh",
                maxWidth: "100vw",
                backgroundColor: "#F5F5F5",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              },
            }}
          >
            <Button
              onClick={handleClose}
              sx={{ fontSize: 50, fontWeight: "bold", color: "#0606CF" }}
            >
              x
            </Button>
            {items.map((item) => (
              <MenuItem
                key={item.name}
                sx={{ width: "auto" }}
                onClick={handleClose}
              >
                <NavLink
                  to={item.href}
                  style={({ isActive }) => ({
                    "&:hover": { color: "#0606CF" },
                    color: isActive ? "#FD1D1D" : "#141499",
                    textDecoration: isActive ? "underline" : "none",
                  })}
                >
                  {item.title}
                </NavLink>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Box>

      <Box sx={{ display: "flex", ml: 10 }}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <LightModeOutlined />
          ) : (
            <DarkModeOutlined />
          )}
        </IconButton>
      </Box>
    </Box>
  );
}

export default Topbar;
