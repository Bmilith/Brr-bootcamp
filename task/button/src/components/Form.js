import React, { useState } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Render from "./Colorlist";

function GetApi() {
  const [newColor, setAdvice] = useState("");
  const [name, setname] = useState("Random color");
  const [Randomcolor, setRandomcolor] = useState("");
  // this is for random list (Lists previous (unique) text colors.)
  // from api I only get one random color all time!

  const fetchData = async (e) => {
    let url = "https://www.colr.org/json/color/random";
    try {
      const response = await fetch(url);
      const json = await response.json();

      setAdvice(json);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Typography gutterBottom variant="h5" component="div">
            Button - Task
          </Typography>
          <TextField
            hiddenLabel
            onChange={(e) => setname(e.target.value)}
            id="filled-hidden-label-small"
            variant="filled"
            value={name}
            size="small"
          />{" "}
          <Typography color="text.secondary" variant="body2">
            <br />
            <br /> Choose name and color for the button.
          </Typography>
        </Grid>
      </Box>

      <Divider variant="middle" />
      <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
        <Button
          variant="contained"
          style={{ color: `#${newColor.new_color}` }}
          onClick={fetchData}
          endIcon={<SendIcon />}
        >
          {name}
        </Button>
      </Box>

      <Typography sx={{ m: 2 }}>Drag Me!</Typography>
      <Box sx={{ m: 2 }}>
        <Stack spacing={1}>
          <Render newColor={newColor} Randomcolor={Randomcolor} />
        </Stack>
      </Box>
    </Box>
  );
}

export default GetApi;
