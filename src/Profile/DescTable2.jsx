import React from "react";
import db from "../firebase";
import DeleteFileUser from "./DeleteFileUser";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import RemoveIcon from "@material-ui/icons/RemoveCircleOutlineRounded";
import Paper from "@material-ui/core/Paper";
import Loading from "../Loading/Loading";
import "./Desc2.css";
import EventNoteIcon from "@material-ui/icons/EventNote";
import Tooltip from "@material-ui/core/Tooltip";
import SubjectIcon from "@material-ui/icons/Subject";
import IconButton from "@material-ui/core/IconButton";
import DynamicFeedRoundedIcon from "@material-ui/icons/DynamicFeedRounded";

import DeleteFileUtil from "./DeleteFileRef";
import DeleteFile from "./DeleteFile";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

export default function BasicTable(props) {
  const classes = useStyles();
  const [userFiles, setUserFiles] = React.useState([]);
  const [flag, setFlag] = React.useState(false);
  React.useEffect(() => {
    db.collection("users")
      .doc(localStorage.getItem("uid"))
      .onSnapshot((doc) => {
        setUserFiles(doc.data().notes);
      });
  }, []);

  function sortByDate() {
    setFlag(1);
  }

  function sortByType() {
    setFlag(2);
  }

  function sortBySubject() {
    setFlag(3);
  }
  React.useEffect(() => {
    if (flag === 2) {
      setUserFiles(
        userFiles.sort((a, b) => {
          return a.sem - b.sem;
        })
      );
    }
    if (flag === 1) {
      setUserFiles(
        userFiles.sort((a, b) => {
          return a.date - b.date;
        })
      );
    }
    if (flag === 3) {
      setUserFiles(
        userFiles.sort((a, b) => {
          return ("" + a.name).localeCompare(b.name);
        })
      );
    }
    setFlag(false);
  }, [flag]);

  function getNum(date) {
    var da = new Date(parseInt(date, 10));
    var dateToStr = da.toUTCString().split(" ");
    console.log(date);
    return dateToStr[2] + " " + dateToStr[1] + ", " + dateToStr[3];
  }

  const fileDelete = (fileN) => {
    DeleteFileUtil(fileN.toString());
    DeleteFileUser(fileN);
    DeleteFile(fileN);
  };

  if (userFiles === undefined)
    return (
      <div
        style={{
          marginLeft: "calc(40% - 75px)",
          marginTop: "calc(15% - 100px)"
        }}
      >
        <Loading />
      </div>
    );

  return (
    <div>
      <div className="sort-buttons">
        <Tooltip title="Sort by date">
          <IconButton style={{ marginRight: "20px" }} onClick={sortByDate}>
            <EventNoteIcon style={{ color: "#ee6f57" }} />
          </IconButton>
        </Tooltip>

        {/*sort by date*/}
        <Tooltip title="Sort by sem">
          <IconButton style={{ marginRight: "20px" }} onClick={sortByType}>
            <DynamicFeedRoundedIcon style={{ color: "#ee6f57" }} />
          </IconButton>
        </Tooltip>

        {/*sort by type*/}
        <Tooltip title="Sort by name">
          <IconButton helperText="Hel" onClick={sortBySubject}>
            <SubjectIcon style={{ color: "#f05454" }} />
            {/* sort by subject */}
          </IconButton>
        </Tooltip>
      </div>
      <TableContainer elevation={0} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Description</TableCell>
              <TableCell align="right">Semester&nbsp;</TableCell>
              <TableCell align="right">Department&nbsp;</TableCell>
              <TableCell align="right">Date added&nbsp;</TableCell>
              <TableCell align="right">&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userFiles.map((file, index) => (
              <TableRow key={file.name} className="desc-table-row">
                <TableCell component="th" scope="row">
                  {file.name}
                </TableCell>
                <TableCell align="right">{file.sem}</TableCell>
                <TableCell align="right">{file.branch}</TableCell>
                <TableCell align="right">
                  {file.date !== undefined && file.date !== null
                    ? getNum(file.date)
                    : "Date not entered"}
                </TableCell>
                <TableCell align="left">
                  <div className="remove-icon-desc-table">
                    <RemoveIcon
                      fontSize="small"
                      color="secondary"
                      onClick={() => fileDelete(file.date)}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
