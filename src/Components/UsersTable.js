import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import employees from "../LocalDB/employeesData";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const UserTable = () => {
  return (
    <div>
      <Grid container alignItems="center">
        <Grid item xs={12} sm={6}>
          <h4 style={{ textAlign: "left"}}>List Of Users</h4>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2} sx={{ textAlign:"right"}} >
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{
                  width: "50%",
                  backgroundColor: "#116587",
                  textTransform: "none",
                }}
              >
                Create New User
              </Button>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="search"
                label="Search"
                variant="outlined"
                size="small"
                fullWidth
                sx={{ width: "50%" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <TableContainer component={Paper} style={{ maxHeight: 300, marginTop:15, marginBottom:30}}>
        <Table stickyHeader aria-label="employee table">
          <TableHead>
            <TableRow>
              <TableCell style={{ backgroundColor: "#116587", color: "white" }}>
                Employee Name
              </TableCell>
              <TableCell style={{ backgroundColor: "#116587", color: "white" }}>
                Email
              </TableCell>
              <TableCell style={{ backgroundColor: "#116587", color: "white" }}>
                Role
              </TableCell>
              <TableCell style={{ backgroundColor: "#116587", color: "white" }}>
                Status
              </TableCell>
              <TableCell style={{ backgroundColor: "#116587", color: "white" }}>
                Password
              </TableCell>
              <TableCell style={{ backgroundColor: "#116587", color: "white" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee, index) => (
              <TableRow key={index}>
                <TableCell style={{ fontSize: "10px" }}>
                  {employee.name}
                </TableCell>
                <TableCell style={{ fontSize: "10px" }}>
                  {employee.email}
                </TableCell>
                <TableCell style={{ fontSize: "10px" }}>
                  {employee.role}
                </TableCell>
                <TableCell style={{ fontSize: "10px" }}>
                  {employee.status}
                </TableCell>
                <TableCell style={{ fontSize: "10px" }}>
                  <a href="#">Reset Password</a>
                </TableCell>
                <TableCell style={{ fontSize: "10px" }}>
                  <a href="#">Edit</a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserTable;
