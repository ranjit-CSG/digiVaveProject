import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import projects from '../LocalDB/projectsData';

const ProjectTable = () => {
  return (
    <div>
      <Grid container alignItems="center">
        <Grid item xs={12} sm={6}>
          <h4 style={{ textAlign: 'left' }}>List Of Projects</h4>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" fullWidth sx={{ width: '50%', backgroundColor:'#116587',textTransform: 'none' }}>
                Create New Project
              </Button>
            </Grid>
            <Grid item xs={12}>
              <TextField id="search" label="Search" variant="outlined" size="small" fullWidth sx={{ width: '50%' }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <TableContainer component={Paper} style={{ maxHeight: 300 , marginTop:15, marginBottom:30}}>
        <Table stickyHeader aria-label="project table">
          <TableHead>
            <TableRow>
              <TableCell style={{ backgroundColor: "#116587", color: "white" }}>Project Name</TableCell>
              <TableCell style={{ backgroundColor: "#116587", color: "white" }}>Manager Assigned</TableCell>
              <TableCell style={{ backgroundColor: "#116587", color: "white" }}>Engineers Assigned</TableCell>
              <TableCell style={{ backgroundColor: "#116587", color: "white" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project, index) => (
              <TableRow key={index}>
                <TableCell style={{ fontSize: "10px" }}>{project.name}</TableCell>
                <TableCell style={{ fontSize: "10px" }}>{project.manager}</TableCell>
                <TableCell style={{ fontSize: "10px" }}>{project.engineers.join(", ")}</TableCell>
                <TableCell style={{ fontSize: "10px" }}><a href="#">Edit</a></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProjectTable;

