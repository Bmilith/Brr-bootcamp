import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

function GetApi(colors) {
  const [newColor, setAdvice] = useState("");
  const [history, sethistory] = useState([]);
  const [name, setname] = useState("Random color");

  const url = "https://www.colr.org/json/color/random";
  const fetchData = async (e) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      console.log(history);
      setAdvice(json.new_color);
      sethistory((oldstate) => [
        ...oldstate,
        {
          color: newColor,
        },
      ]);
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

          <Typography color="text.secondary" variant="body2">
            <TextField
              hiddenLabel
              onChange={(e) => setname(e.target.value)}
              id="filled-hidden-label-small"
              variant="filled"
              placeholder="enter a name "
              size="small"
            />{" "}
            <br />
            <br /> Choose name and color for the button.
          </Typography>
        </Grid>
      </Box>

      <Divider variant="middle" />
      <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
        <Button
          variant="contained"
          style={{ color: `#${newColor}` }}
          onClick={fetchData}
          endIcon={<SendIcon />}
        >
          {name}
        </Button>
      </Box>
      <Box sx={{ m: 2 }}>
        <Stack direction="row" spacing={1}>
          {history.map((item, index) => {
            return <Chip key={index} label={`#${item.color}`} />;
          })}
        </Stack>
      </Box>
    </Box>
  );
}

export default GetApi;
