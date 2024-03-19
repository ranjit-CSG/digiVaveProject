import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import UserTable from './UsersTable';
import ProjectTable from './ProjectsTable';


export default function AdminDashBoard() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 'auto',
        marginTop: 10,
        maxWidth: '1200px', // Adjust maximum width as needed
      }}
    >
      <Box sx={{ textAlign: 'left', marginLeft: 2, width: '100%' }}>
        <Typography variant="body1" sx={{ mb: 2 , fontWeight:'700'}}>
          Welcome Admin
        </Typography>
      </Box>

      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{
              '& .MuiTab-root': {
                fontSize: '0.8rem', // Adjust tab label font size
                fontWeight:'700'
              },
              '& .Mui-selected': {
                borderBottom: '3px solid blue', // Adjust width of underline when tab is selected
              },
            }}
          >
            <Tab label="Users" value="1" />
            <Tab label="Projects" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><UserTable /></TabPanel>
        <TabPanel value="2"><ProjectTable /></TabPanel>
      </TabContext>
    </Box>
  );
}

