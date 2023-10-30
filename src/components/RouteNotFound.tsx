import { Box, Grid, Typography } from "@mui/material";

const RouteNotFound = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "75vh" }} // Ensures full viewport height
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={4}
          bgcolor="#90caf9"
          boxShadow={6}
          color="black"
          textAlign="center"
          width="100%" // Full width of the grid item
        >
          <Typography variant="h4">404 - Not Found</Typography>
          <Typography variant="body1">
            Sorry, the page you are looking for does not exist.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default RouteNotFound;
