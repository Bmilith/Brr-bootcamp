import React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Style from "../style/button.module.css";

function button() {
  const GetNewColor = async (e) => {
    e.preventDefault();
    const res = await fetch("https://www.colr.org/json/color/random");
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className={Style.container}>
      <Button onClick={GetNewColor} variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </div>
  );
}

export default button;
