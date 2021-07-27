import React from "react";
import Card from "./Card";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./Home.css";
import firebase from "firebase";
import "firebase/storage";
import db from "../firebase";
import { createMuiTheme } from "@material-ui/core/styles";
// import useMediaQuery from "@material-ui/core/useMediaQuery";

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
  const [image, setImages] = React.useState([]);

  React.useEffect(() => {
    const arr = [];
    db.collection("notes")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          arr.push({
            date: doc.id,
            file: doc.data().file,
            sem: doc.data().sem,
            branch: doc.data().branch,
            user: doc.data().user,
            name: doc.data().name
          });
        });
        setImages(arr);
      });
  }, []);

  return (
    <div className="homepage">
      <div style={{ marginTop: "20px", overflow: "hidden" }}>
        <Grid
          container
          spacing={5}
          style={{ padding: "24px 5px" }}
          className={classes.root}
        >
          {image.map((item, index) => {
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
  );
}
