import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../Home/Card";
import "./SubjectsPage.css";
import Topbar from "./SubjectsPageTopbar";
import Grid from "@material-ui/core/Grid";

export default function Home() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    paper: {
      color: theme.palette.text.secondary
    }
  }));

  const classes = useStyles();
  let x = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13
  ];
  return (
    <div style={{marginTop:"105px"}}>
      <div className="subjectspage-topbar">
        <Topbar />
      </div>
      <Grid className="subjectspage" container spacing={10}>
        {x.map((item, index) => {
          return (
            <Grid item xs={12} sm={6} lg={4} xl={3}>
              <Card />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
