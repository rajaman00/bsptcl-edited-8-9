import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Grids = () => {
  const rows = [
    { sNo: 1, name: 'GSS A', capacity220: '200 MVA', totalCapacity220: '400 MVA', capacity132: '150 MVA', totalCapacity132: '300 MVA', transmissionCircle: 'Circle 1' },
    { sNo: 2, name: 'GSS B', capacity220: '220 MVA', totalCapacity220: '440 MVA', capacity132: '160 MVA', totalCapacity132: '320 MVA', transmissionCircle: 'Circle 2' },
    { sNo: 3, name: 'GSS C', capacity220: '230 MVA', totalCapacity220: '460 MVA', capacity132: '170 MVA', totalCapacity132: '340 MVA', transmissionCircle: 'Circle 3' },
    { sNo: 4, name: 'GSS D', capacity220: '240 MVA', totalCapacity220: '480 MVA', capacity132: '180 MVA', totalCapacity132: '360 MVA', transmissionCircle: 'Circle 4' },
    { sNo: 5, name: 'GSS E', capacity220: '250 MVA', totalCapacity220: '500 MVA', capacity132: '190 MVA', totalCapacity132: '380 MVA', transmissionCircle: 'Circle 5' },
  ];

  return (
    <TableContainer component={Paper} sx={{ width: '80%', margin: 'auto', marginTop: 2 }}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>S.No</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Name of GSS</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} colSpan={2} align="center">220/132 KV</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} colSpan={2} align="center">132/33 KV</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Transmission Circle</TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell align="center">Capacity</TableCell>
            <TableCell align="center">Total Capacity</TableCell>
            <TableCell align="center">Capacity</TableCell>
            <TableCell align="center">Total Capacity (MVA)</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                '&:hover': { backgroundColor: '#f1f1f1', cursor: 'pointer' },
              }}
            >
              <TableCell>{row.sNo}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell align="center">{row.capacity220}</TableCell>
              <TableCell align="center">{row.totalCapacity220}</TableCell>
              <TableCell align="center">{row.capacity132}</TableCell>
              <TableCell align="center">{row.totalCapacity132}</TableCell>
              <TableCell>{row.transmissionCircle}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Grids;
