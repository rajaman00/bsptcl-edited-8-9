import React from "react";
import { Box, Typography, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Paper, IconButton, Link } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HeaderBox from './Header';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer'
import backgroundImage from '../../public/images/Switchyard at Bakhri GSS.jpg'

const ActiveTenderDetails = () => {
  const details = [
    { label: "Head Line", value: "1st Tender Extension Notice (NIT) No- 32/PR/BSPTCL/2024", color: "red" },
    { label: "Description", value: "1st Tender Extension Notice (NIT) No- 32/PR/BSPTCL/2024", color: "red" },
    { label: "Alias Name", value: "1st Tender Extension Notice (NIT) No- 32/PR/BSPTCL", color: "blue" },
    { label: "Closing Date", value: "20 Dec 2024", color: "red" },
    { label: "Publishing Date", value: "06 Dec 2024", color: "red" },
  ];

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Procurements', href: '#' },
    { label: 'Tenders' },
    { label: 'Active Tenders' },
    { label: 'View Active Tenders' }
  ];

  return (
    <>
    <NavigationBar />
     
      <HeaderBox
        backgroundImage={backgroundImage}
        title="View Active Tenders"
        breadcrumbs={breadcrumbs}
      />
    <Box p={4} bgcolor="#f9f9f9">
      <Box display="flex" alignItems="center" mb={3}>
        <IconButton>
         <Link href='/active-tenders'><ArrowBackIcon color="primary" /></Link> 
        </IconButton>
        <Typography variant="h5" ml={2}>
          Active Tender Details
        </Typography>
      </Box>
      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableBody>
            {details.map((detail, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography variant="body1" fontWeight="bold">
                    {detail.label}
                  </Typography>
                </TableCell>
                <TableCell>:</TableCell>
                <TableCell>
                  <Typography
                    variant="body1"
                    color={detail.color || "textPrimary"}
                  >
                    {detail.value || "-"}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    <Footer/>
    </>
  );
};

export default ActiveTenderDetails;
