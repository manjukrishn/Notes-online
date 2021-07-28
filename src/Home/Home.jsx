import React from "react";
import Card from "./Card";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./Home.css";
import firebase from "firebase";
import Topbar from "../Navbar/Topbar";
import "firebase/storage";
import { createMuiTheme } from "@material-ui/core/styles";
// import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function Home(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    paper: {
      color: theme.palette.text.secondary
    }
  }));

  const classes = useStyles();
  console.log(props.searchItem);
  const [notes, setNotes] = React.useState([]);
  React.useEffect(() => {
    setNotes(props.searchItem);
  }, [props.searchItem]);
  return (
    <div>
      <div className="homepage">
        <div style={{ marginTop: "20px", overflow: "hidden" }}>
          <Grid
            container
            spacing={5}
            style={{ padding: "24px 5px" }}
            className={classes.root}
          >
            {notes.map((item, index) => {
              console.log(item);
              return (
                <Grid
                  className={classes.paper}
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={4}
                  xl={3}
                >
                  <Card item={item} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </div>
  );
}
