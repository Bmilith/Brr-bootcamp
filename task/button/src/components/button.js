import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Style from "../style/button.module.css";

function GetApi(colors) {
  const [advice, setAdvice] = useState("");
  const [history, sethistory] = useState("");

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
          color: advice,
        },
      ]);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className={Style.container}>
      <Button
        style={{ color: `#${advice}` }}
        onClick={fetchData}
        variant="contained"
        endIcon={<SendIcon />}
      >
        heloo
      </Button>
    </div>
  );
}

export default GetApi;
