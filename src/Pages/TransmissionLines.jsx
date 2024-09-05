import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import NavigationBar from '../../components/NavigationBar';
import HeaderBox from './Header';
import Footer from '../../components/Footer'
import backgroundImage from '../../public/images/Switchyard at Bakhri GSS.jpg'

const TransmissionLines = () => {
  const rows = [
    { sNo: 1, name: 'Line A', circuit: 'Single', routeLength: '50 km', totalLength: '52 km', conductorType: 'ACSR' },
    { sNo: 2, name: 'Line B', circuit: 'Double', routeLength: '100 km', totalLength: '105 km', conductorType: 'Copper' },
    { sNo: 3, name: 'Line C', circuit: 'Single', routeLength: '80 km', totalLength: '82 km', conductorType: 'AAC' },
    { sNo: 4, name: 'Line D', circuit: 'Double', routeLength: '120 km', totalLength: '125 km', conductorType: 'AAAC' },
    { sNo: 5, name: 'Line E', circuit: 'Triple', routeLength: '150 km', totalLength: '155 km', conductorType: 'ACSR' },
  ];

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Transmission N/W', href: '#' },
    { label: 'Current Infrastructure' }
  ];
  return (
    <>
        <NavigationBar/>
    <HeaderBox
      backgroundImage={backgroundImage}
      title="Transmission Lines"
      breadcrumbs={breadcrumbs}
    />
    <TableContainer component={Paper} sx={{ width: '80%', margin: 'auto', marginTop: 2, marginBottom: 2 }}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead sx={{ backgroundColor: '#0bafec' }}>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>S.No</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Name of Line</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Circuit</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Route Length</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Total Length</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Conductor Type</TableCell>
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
              <TableCell sx={{ padding: '16px' }}>{row.sNo}</TableCell>
              <TableCell sx={{ padding: '16px' }}>{row.name}</TableCell>
              <TableCell sx={{ padding: '16px' }}>{row.circuit}</TableCell>
              <TableCell sx={{ padding: '16px' }}>{row.routeLength}</TableCell>
              <TableCell sx={{ padding: '16px' }}>{row.totalLength}</TableCell>
              <TableCell sx={{ padding: '16px' }}>{row.conductorType}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Footer/>
    </>

  );
};

export default TransmissionLines;
