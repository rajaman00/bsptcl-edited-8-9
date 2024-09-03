import React from 'react';
import { Card, Box, Typography, Avatar, Link } from '@mui/material';
import HeaderBox from './Header';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer'
import backgroundImage from '../../public/images/Switchyard at Bakhri GSS.jpg'
import { left } from '@popperjs/core';

const ProfileCard = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '#' },
    { label: 'Board Members' }
];
  return (
    <>
    <NavigationBar/>
    <HeaderBox
                backgroundImage={backgroundImage}
                title="Board Members"
                breadcrumbs={breadcrumbs}
            />
    <Card sx={{ width:'90%', display: 'flex', alignItems: 'center', padding: 2, margin:'auto', borderBottom:'1px dashed gray', marginTop:'2rem' }}>
      <Box sx={{ width: '70%' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' , textAlign:'right'}} >
          श्री जी रविशंकर
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" sx={{ fontWeight: 'bold' , textAlign:'right'}}>
          निदेशक (वित्त)
        </Typography>
        <Typography variant="body2" color="textSecondary">
          जी रविशंकर, (57 वर्ष), (डीआईएन: 08816101) मद्रास विश्वविद्यालय से गणित विषय में सातक हैं
          और भारतीय लागत लेखाकार संस्थान से लागत लेखाकार हैं। उन्होंने अन्नामलाई विश्वविद्यालय
          से कार्मिक प्रबंधन और सामाग्री प्रबंधन...
        </Typography>
        <Link href="#" sx={{ display: 'inline-flex', alignItems: 'center', mt: 1, fontWeight: 'bold' }}>
          Know More
        </Link>
      </Box>
      <Box sx={{ width: '30%', display: 'flex', justifyContent: 'center' }}>
        <Avatar 
          src="https://via.placeholder.com/150" // Replace with the actual image URL
          alt="Profile Picture"
          sx={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            border: '6px solid #0bafec', // Adjust the color to match the image border
            boxSizing: 'border-box'
          }}
        />
      </Box>
    </Card>

    <Card sx={{ width:'90%', display: 'flex', alignItems: 'center', padding: 2, margin:'auto',  borderBottom:'1px dashed gray', marginTop:'2rem' }}>
    <Box sx={{ width: '30%', display: 'flex', justifyContent: 'center' }}>
        <Avatar 
          src="https://via.placeholder.com/150" // Replace with the actual image URL
          alt="Profile Picture"
          sx={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            border: '6px solid #0bafec', // Adjust the color to match the image border
            boxSizing: 'border-box'
          }}
        />
      </Box>
      <Box sx={{ width: '70%' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          श्री जी रविशंकर
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          निदेशक (वित्त)
        </Typography>
        <Typography variant="body2" color="textSecondary">
          जी रविशंकर, (57 वर्ष), (डीआईएन: 08816101) मद्रास विश्वविद्यालय से गणित विषय में सातक हैं
          और भारतीय लागत लेखाकार संस्थान से लागत लेखाकार हैं। उन्होंने अन्नामलाई विश्वविद्यालय
          से कार्मिक प्रबंधन और सामाग्री प्रबंधन...
        </Typography>
        <Link href="#" sx={{ display: 'inline-flex', alignItems: 'center', mt: 1, fontWeight: 'bold' }}>
          अधिक जानकारी
        </Link>
      </Box>
    </Card>
    <Footer/>
    </>
  );
};

export default ProfileCard;

