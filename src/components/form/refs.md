import React, { Component, useRef } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  withStyles
} from "@material-ui/core";
import Attachment from "@material-ui/icons/Attachment";
import CloudDownload from "@material-ui/icons/CloudDownload";
const BulkUpload = props => {
  const { classes } = props;
  const inputRef = useRef(null);
  return (
    <div className="App">
      <input
        id="file_input_file"
        className="none"
        type="file"
        ref={inputRef }
      />
      <Input
        id="adornment-attachment"
        type="text"
        fullWidth

        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="Toggle password visibility"
              onClick={e => {
                 inputRef.current.click();
              }}
              className="login-container__passwordIcon"
            >
              <Attachment />
            </IconButton>
          </InputAdornment>
        }
      />
    </div>
  );
};

export default BulkUpload;