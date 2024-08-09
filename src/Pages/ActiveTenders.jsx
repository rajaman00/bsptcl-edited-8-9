import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Link, Box, Breadcrumbs } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import backgroundImage from '../../public/images/Switchyard at Bakhri GSS.jpg'
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';

const tenders = [
  { id: 1, text: 'NIT No. 04/PR/TRZ-PAT/2024', link: 'https://example.com/tender1' },
  { id: 2, text: 'NIT No. 04/PR/TRZ/MUZ/BSPTCL/2024', link: 'https://example.com/tender2' },
  { id: 3, text: 'NIT No. 26/PR/BSPTCL/2024', link: 'https://example.com/tender3' },
  { id: 4, text: 'NIT No. 25/PR/BSPTCL/2024', link: 'https://example.com/tender4' },
  { id: 5, text: 'NIT No. 23/PR/BSPTCL/2024', link: 'https://example.com/tender5' },
  { id: 6, text: 'NIT No. 22/PR/BSPTCL/2024', link: 'https://example.com/tender6' },
  { id: 7, text: 'NIT No. 24/PR/BSPTCL/2024', link: 'https://example.com/tender7' },
];

const ActiveTenders = () => {
  return (
    <>
    <NavigationBar/>
    <Box
      sx={{
        position: 'relative',
        height: '13rem',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: 'white',
        padding: '20px',
        textAlign: 'left',
        backgroundColor:''
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
        Active Tenders
      </Typography>
      <Breadcrumbs sx={{ color: 'white', marginTop: '10px' }}>
        <Link href="/" underline="hover" sx={{ color: 'white' }}>
          Home
        </Link>
        <Link href="#" underline="hover" sx={{ color: 'white' }}>
          Tenders
        </Link>
        <Typography color="white">Active Tenders</Typography>
      </Breadcrumbs>
    </Box>

    <Card sx={{ maxWidth: 800, margin: '20px auto', padding: '10px', boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Active Tenders
        </Typography>
        <List>
          {tenders.map((tender) => (
            <ListItem 
              key={tender.id} 
              sx={{ 
                padding: '15px 0', 
                borderBottom: '1px solid #ddd', 
                transition: 'background-color 0.3s',
                '&:hover': { backgroundColor: '#f5f5f5' }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <FiberManualRecordIcon sx={{ color: '#0bafec', fontSize: 12, marginRight: 1 }} />
                <ListItemText 
                  primary={
                    <Link 
                      href={tender.link} 
                      underline="none" 
                      color="primary"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ fontSize: '16px', fontWeight: '500', transition: 'color 0.3s', '&:hover': { color: '#0056b3' } }}
                    >
                      {tender.text}
                    </Link>
                  } 
                />
              </Box>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>

    <Footer/>
    </>
  );
};

export default ActiveTenders;
