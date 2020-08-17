import React from "react";
import classes from "./Admin.module.css";
import AddComponent from "./AddComponent/AddComponent";
import NewsPreview from "./NewsPreview/NewsPreview";
import Modal from "@material-ui/core/Modal";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ConfirmationModalWrapper from "../../components/sharedComponents/ConfirmationModalWrapper";
import EditibleModalWrapper from "../../components/sharedComponents/EditibleModalWrapper";
import CircularProgress from "@material-ui/core/CircularProgress";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";

class Admin extends React.Component {
  state = {
    personalInfo: [],
    posts: [],
    users: [],
    isOpen: false,
    focusId: null,
    moduleType: "delete",
    loading: true,
    userId: 1,
  };

  handleChange = (event) => {
    this.setState({
      userId: event.target.value,
      personalInfo: this.state.posts.filter(
        (post) => event.target.value === post.userId
      ),
      loading: false,
    });
    console.log(event.target.value);
  };
  handleOpen = (id, type) => {
      debugger;
    this.setState({
      isOpen: true,
      focusId: id,
      moduleType: type,
    });
  };

  handleClose = () => {
    this.setState({
      isOpen: false,
    });
  };
  handleDelete = (id) => {
    this.setState({
      isOpen: false,
      personalInfo: this.state.personalInfo.filter(
        (item) => item.id != this.state.focusId
      ),
    });
  };
  handleUpdate = (message) => {
    console.log(message);
    const upd = this.state.personalInfo.concat();
    upd.find((item) => item.id === this.state.focusId).body = message;
    this.setState({
      isOpen: false,
      personalInfo: upd,
    });
  };

  handleCreate = (message) => {
    let newItem = {
      userId: this.state.userId,
      id: Math.random().toString(36).substr(2, 9),
      title: "title",
      body: message,
    };
    this.setState({
      isOpen: false,
      personalInfo: [...this.state.personalInfo, newItem],
    });
  };

  date = (d) => {
    return (
      ("0" + d.getDate()).slice(-2) +
      "-" +
      ("0" + (d.getMonth() + 1)).slice(-2) +
      "-" +
      d.getFullYear()
    );
  };
  componentDidMount = () => {
    let posts;
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => {
        posts = response.data;
        axios
        .get("https://jsonplaceholder.typicode.com/users/")
        .then((response) => {
          this.setState({
            users: response.data,
            posts: posts,
            personalInfo: posts.filter(
              (post) => this.state.userId === post.userId
            ),
            loading: false,
          });
        });
      });
   
  };

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div className={classes.Loader}>
            <CircularProgress />
          </div>
        ) : (
          <>
            <AddComponent state={this.state} handleOpen={this.handleOpen} />
            <div className={(classes.AdminHeader, classes.select)}>
              <span> Your news</span>
              <FormControl className={(classes.formControl, classes.select)}>
                <InputLabel id="demo-simple-select-label">
                  Choose user
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={this.state.userId}
                  onChange={this.handleChange}
                >
                  {this.state.users.map((user, index) => (
                    <MenuItem key={index} value={user.id}>
                      user{user.id}{" "}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <NewsPreview
              personalInfo={this.state.personalInfo}
              handleOpen={this.handleOpen}
            />
            <ConfirmationModalWrapper
              type={this.state.moduleType}
              state={this.state}
              handleOpen={this.handleOpen}
              handleClose={this.handleClose}
              handleDelete={this.handleDelete}
              handleUpdate={this.handleUpdate}
              handleCreate={this.handleCreate}
            />
          </>
        )}
      </div>
    );
  }
}
export default Admin;
