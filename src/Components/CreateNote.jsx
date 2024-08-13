import {
  Box,
  Modal,
  TextField,
  Typography,
  Button,
  IconButton,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
} from "@mui/material";
import { Close, Create } from "@mui/icons-material";
import React, { useState } from "react";
// import "../scss/styles.css"
import "../scss/styles.css"

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "whitesmoke",
  borderRadius: "0.3em",
  boxShadow: "0.3em 0.3em 0.3em #222",
  p: 4,
};

export const CreateNote = ({ open, closeModal, category, mobile }) => {
  const [rows, setRows] = useState(1);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [err, setError] = useState({
    title: false,
    details: false
  })
  const [errorText, setErrorText] = useState({
    title: '',
    details: ''
  })
 const [importance, setImportance] = useState('normal')
  const handleFocus = () => setRows(4);
  const handleBlur = () => setRows(1);

  const handleSumbit = (event) => {
    event.preventDefault();

    if (title === '' && details === '') {
        setError({
            title: true,
            details: true
        })
        setErrorText({
            title: 'Title cannot be empty!',
            details: 'Details cannot be empty!',
        })
        
    } else {
        if (title === '') {
            setError({
                title: true
            })
            setErrorText({
                title: 'Title cannot be empty!',
            })
        }
        if (details === '') {
            setError({
                details: true,
            })
            setErrorText({
                details: 'Details cannot be empty!'
            })
        }

    }
    setImportance('normal')
  }

  const capital = category.charAt(0).toUpperCase() + category.slice(1);
  return (
    <div>
      <Modal open={open} onClose={closeModal}>
        <Box sx={{ ...styles, width: mobile ? 300 : 400 }}>
          <IconButton
            onClick={closeModal}
            sx={{ position: "absolute", top: "0", right: "0" }}
          >
            <Close color="primary" />
          </IconButton>
          <Typography variant="h6" component="h2" gutterBottom color="primary">
            Create {capital}
          </Typography>
          <form noValidate onSubmit={(e) => {handleSumbit(e)}}>
            <TextField
              fullWidth
              label={category === "todo" ? "Todo" : "Title"}
              sx={{ marginBottom: "1em" }}
              onChange={(e) => {setTitle(e.target.value)}}
              error={err['title']}
              helperText={errorText['title']}
            />
            {category === "todo" ? (
              ""
            ) : (
              <TextField
                fullWidth
                label="Details"
                sx={{ marginBottom: "1em" }}
                multiline
                rows={rows}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(e) => {setDetails(e.target.value)}}
                error={err['details']}
                helperText={errorText['details']}
              />
            )}
            <FormControl>
              <FormLabel>Importance</FormLabel>
              <RadioGroup value={importance} onChange={(e)=> {setImportance(e.target.value)}}>
                <FormControlLabel value='normal' control={<Radio />} label='Normal' />
                <FormControlLabel value='important' control={<Radio />} label='Important' />
                <FormControlLabel value='urgent' control={<Radio />} label='Urgent' />
              </RadioGroup>
            </FormControl>

            <Button type='submit' variant="contained" endIcon={<Create />}>
              Create {capital}
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};
