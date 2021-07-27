import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddData from "./AddData";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import ToolTip from "@material-ui/core/Tooltip";
import Upload from "../firestore";
import "./AddNotes.css";
import Util from "./AddNotesUtil";

import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(props.trigger);
  const [fileName, setFileName] = React.useState("Upload File");
  const [file, setFile] = React.useState(null);
  const [branch, setBranch] = React.useState("");
  const [name, setName] = React.useState("");
  const [sem, setSem] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setName("");
    setBranch("");
    setFileName("");
    setFile("");
    setSem("");
    // console.log(localStorage.getItem("uid"));
  };
  const handleSave = () => {
    if (
      file !== (null || undefined) &&
      name !== (null || undefined) &&
      sem !== (null || undefined) &&
      branch !== (null || undefined)
    ) {
      const genfile = Date.now();
      Upload(file, genfile.toString()).then((getURl) => {
        console.log(getURl);
        AddData(getURl, name, sem, branch, genfile);
        Util(genfile.toString(), name, sem, branch, getURl);
      });
    }
    handleClose();
  };
  const inputFileRef = React.useRef(null);

  const onFilechange = (e) => {
    if (e !== (null || undefined)) {
      if (e.target.files[0].type.replace(/(.*)\//g, "") !== "pdf")
        alert("Upload only pdf files");
      else {
        setFileName(e.target.files[0].name);
        setFile(e.target.files[0]);
      }
    }
  };
  const onBtnClick = () => {
    inputFileRef.current.click();
  };
  const onSubChange = (e) => {
    setName(e.target.value);
  };

  const onSemChange = (e) => {
    setSem(e.target.value);
  };
  const onBranchChange = (e) => {
    setBranch(e.target.value);
  };
  return (
    <div>
      <ToolTip title="Add Notes">
        <PostAddIcon className="add-remove-icons" onClick={handleClickOpen} />
      </ToolTip>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Add notes
            </Typography>
            <Button autoFocus color="inherit" onClick={handleSave}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <ul style={{ listStyleType: "none" }}>
          <li button style={{ paddingTop: "55px" }}>
            <TextField
              placeholder="Enter title"
              value={name}
              onChange={onSubChange}
              className="textfield"
            />
          </li>
          <li button style={{ paddingTop: "35px" }}>
            <TextField
              placeholder="Enter semester"
              value={sem}
              onChange={onSemChange}
              className="textfield"
            />
          </li>
          <li button style={{ paddingTop: "35px" }}>
            <TextField
              placeholder="Enter branch"
              value={branch}
              onChange={onBranchChange}
              className="textfield"
            />
          </li>
          <li style={{ textAlign: "center", marginTop: "50px" }}>
            <ListItemText
              style={{ cursor: "pointer" }}
              secondary={fileName}
              onClick={onBtnClick}
              primary={<PictureAsPdfIcon />}
            />
            <input
              type="file"
              ref={inputFileRef}
              onChange={onFilechange}
              style={{ display: "none" }}
            />
          </li>
        </ul>
      </Dialog>
    </div>
  );
}
