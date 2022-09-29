import "./App.css";
import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import Box from "@mui/material/Box";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon sx={{ mr: 1 }} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container maxWidth="md" sx={{ backgroundColor: "warning.main", p: 5 }}>
          <Typography
            variant="h2"
            align="center"
            sx={{ color: "text.primary", bgcolor: "grey.300" }}
            // color={"text.primary"}
            // bgcolor={"warning.light"}
            gutterBottom
          >
            Photo Album
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            bgcolor="grey.300"
            paragraph
          >
            The container centers your content horizontally. It's the most basic
            layout element. While containers can be nested, most layouts do not
            require a nested container.A fluid container width is bounded by the
            maxWidth prop value.
          </Typography>
          <Box>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  See my photos
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="secondary" sx={{ mt: 2 }}>
                  Secondary actions
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>

        <Container maxWidth="lg" sx={{ padding: "20px 0" }}>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    image="https://source.unsplash.com/random"
                    title="Image title"
                    sx={{ paddingTop: "56.25%" }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>
                      This is media card. They should be easy to scan for
                      relevant and actionable information.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer>
        <Box
          sx={{ bgcolor: "success.dark", padding: "50px 0", color: "white" }}
        >
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center">
            Although cards can support multiple actions, UI controls, and an
            overflow menu, use restraint and remember that cards are entry
            points to more complex and detailed information.
          </Typography>
        </Box>
      </footer>
    </>
  );
};

export default App;
