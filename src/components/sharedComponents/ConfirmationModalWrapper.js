import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";


const ConfirmationModalWrapper = (props) => {
  let textbox = React.createRef();
  const deleteItem = () => {
    return (
      <>
        <DialogTitle id="alert-dialog-title">Delete this item?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" ref={textbox}>
            You cant restore this post again
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={props.handleDelete} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </>
    );
  };
  const updateItem = () => {
    return (
      <>
        <DialogTitle id="alert-dialog-title"> save? </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <textarea
              aria-label="minimum height"
              placeholder="Minimum 3 rows"
              defaultValue={
                props.type === "edit"
                  ? props.state.personalInfo.find(
                      (item) => item.id === props.state.focusId
                    ).body
                  : null
              }
              ref={textbox}
            ></textarea>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {props.type === "create" ? (
            <Button
              onClick={() => props.handleCreate(textbox.current.value)}
              color="primary"
            >
              create
            </Button>
          ) : (
            <Button
              onClick={() => props.handleUpdate(textbox.current.value)}
              color="primary"
            >
              Save
            </Button>
          )}
        </DialogActions>
      </>
    );
  };
  return (
    <Dialog
      open={props.state.isOpen}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {props.type === "delete" ? deleteItem() : updateItem()}
    </Dialog>
  );
};
export default ConfirmationModalWrapper;
