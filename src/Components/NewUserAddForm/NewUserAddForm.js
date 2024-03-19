import React, { useState, Fragment } from "react";
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Grid,
  Select,
  MenuItem,
} from "@mui/material";

function NewUserAddForm() {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("active");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email, role, status };
    setUsers([...users, newUser]);
  };

  return (
    <Fragment>
      <Container>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="User Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                required
                fullWidth
                sx={{ marginTop: 3 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                sx={{ marginTop: 2.9 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <FormLabel component="legend">Role</FormLabel>
                <Select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <MenuItem value="Manager">Manager</MenuItem>
                  <MenuItem value="Engineer">Engineer</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl component="fieldset" style={{ marginTop: "10px" }}>
                <FormLabel component="legend">Status</FormLabel>
                <RadioGroup
                  row
                  aria-label="status"
                  name="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <FormControlLabel
                    value="active"
                    control={<Radio />}
                    label="Active"
                  />
                  <FormControlLabel
                    value="inactive"
                    control={<Radio />}
                    label="Inactive"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ float: "right", marginBottom: 3 , marginRight:5, width:'20%'}}
              >
                Create User
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{ float: "right", marginBottom: 3, marginRight:5 , width:'20%', backgroundColor:'white', color:'black'}}
              ><a href="/admin-dashboard"> Back</a>
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Fragment>
  );
}

export default NewUserAddForm;
