import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, InputBase, Drawer, List, ListItem, ListItemAvatar, Avatar, ListItemText,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Pagination, Button
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const members = [
  { name: 'test1...', avatar: 'https://via.placeholder.com/40' },
  { name: 'test2', avatar: 'https://via.placeholder.com/40' },
  { name: 'test3', avatar: 'https://via.placeholder.com/40' },
  { name: 'test4', avatar: 'https://via.placeholder.com/40' },
  { name: 'ALBANIE MACAP...', avatar: 'https://via.placeholder.com/40' },
  { name: 'ALBANIE MACAP...', avatar: 'https://via.placeholder.com/40' },
  { name: 'ALBANIE MACAP...', avatar: 'https://via.placeholder.com/40' },
  // Add more members here...
];

const rows = [
  { member: 'test1...', date: 'Thu 01-Aug-2024', zone: 'Male Public Washroom', shift: '03:00 PM to 11:00 PM', checkIn: '02:49 PM to 11:04 PM', duration: '08:14', source: 'App', request: 'TimeSheet', status: 'Pending' },
  { member: 'test2', date: 'Thu 01-Aug-2024', zone: 'Male Public Washroom', shift: '03:00 PM to 11:00 PM', checkIn: '02:49 PM to 11:04 PM', duration: '08:14', source: 'App', request: 'TimeSheet', status: 'Pending' },
  { member: 'test3', date: 'Thu 01-Aug-2024', zone: 'Male Public Washroom', shift: '03:00 PM to 11:00 PM', checkIn: '02:49 PM to 11:04 PM', duration: '08:14', source: 'App', request: 'TimeSheet', status: 'Pending' },
  { member: 'test4', date: 'Thu 01-Aug-2024', zone: 'Male Public Washroom', shift: '03:00 PM to 11:00 PM', checkIn: '02:49 PM to 11:04 PM', duration: '08:14', source: 'App', request: 'TimeSheet', status: 'Pending' },
  { member: 'ALBANIE MACAP...', date: 'Thu 01-Aug-2024', zone: 'Male Public Washroom', shift: '03:00 PM to 11:00 PM', checkIn: '02:49 PM to 11:04 PM', duration: '08:14', source: 'App', request: 'TimeSheet', status: 'Pending' },
  // Add more rows here...
];

const TimeSheet = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleMemberClick = (memberName) => {
    setSelectedMember(memberName);
  };

  const filteredRows = selectedMember ? rows.filter(row => row.member === selectedMember) : rows;

  return (
    <div className='page-content' style={{ display: 'flex' }}>
      {/* Sidebar */}
      <Drawer variant="permanent">
        <List>
          {members.map((member, index) => (
            <ListItem button key={index} onClick={() => handleMemberClick(member.name)}>
              <ListItemAvatar>
                <Avatar src={member.avatar} />
              </ListItemAvatar>
              <ListItemText primary={member.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <div style={{ flexGrow: 1, padding: '16px' }}>
        <AppBar position="static">
          <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6">Time Sheet</Typography>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input type="date" style={{ marginRight: '8px' }} />
              <input type="date" style={{ marginRight: '8px' }} />
              <div style={{ position: 'relative', marginRight: '16px' }}>
                <SearchIcon style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)' }} />
                <InputBase placeholder="Search Member" style={{ paddingLeft: '32px' }} />
              </div>
              <Button variant="contained" color="primary">Approve All</Button>
            </div>
          </Toolbar>
        </AppBar>

        {/* Table */}
        <TableContainer component={Paper} style={{ marginTop: '16px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Zone</TableCell>
                <TableCell>Scheduled Shift</TableCell>
                <TableCell>Check In / Check Out</TableCell>
                <TableCell>Work Duration</TableCell>
                <TableCell>Source</TableCell>
                <TableCell>Request</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.zone}</TableCell>
                  <TableCell>{row.shift}</TableCell>
                  <TableCell>{row.checkIn}</TableCell>
                  <TableCell>{row.duration}</TableCell>
                  <TableCell>{row.source}</TableCell>
                  <TableCell>{row.request}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary" size="small">{row.status}</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <Pagination count={3} color="primary" style={{ marginTop: '16px', float: 'right' }} />
      </div>
    </div>
  );
};

export default TimeSheet;
