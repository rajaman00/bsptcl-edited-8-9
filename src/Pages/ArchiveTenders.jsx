import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, FormControl, InputLabel, Select, MenuItem, Link, Box, Typography, Breadcrumbs } from '@mui/material';
import backgroundImage from '../../public/images/Switchyard at Bakhri GSS.jpg'
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';
function ArchiveTenders() {
    const documents = [
        { title: "1st Tender Extension Notice for NIT No. 19/PR/BSPTCL/2024, PR No. 002493", year: 2024, url: "http://example.com/1" },
        { title: "1st Tender Extension Notice for NIT No. 17/PR/BSPTCL/2024, PR No. 001883", year: 2024, url: "http://example.com/2" },
        { title: "NIT No. 12/PR/BSPTCL/2024 CORRIGENDUM-2", year: 2024, url: "http://example.com/3" },
        { title: "NIT No. 12/PR/BSPTCL/2024 CORRIGENDUM-2", year: 2023, url: "http://example.com/4" },
        { title: "NIT No. 12/PR/BSPTCL/2024 CORRIGENDUM-2", year: 2023, url: "http://example.com/5" },
        { title: "NIT No. 12/PR/BSPTCL/2024 CORRIGENDUM-2", year: 2022, url: "http://example.com/6" },
        //...other documents
    ];

    const years = [...new Set(documents.map(doc => doc.year))].sort((a, b) => b - a);
    const [yearFilter, setYearFilter] = useState(years[0].toString());

    const filteredDocuments = documents.filter(doc => doc.year.toString() === yearFilter);

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
                padding: '20px',
                textAlign: 'left',
                color: 'white',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Shadow effect with transparency
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.7)', // Additional shadow
                    zIndex: 1, // Ensure this is below the text and links
                },
                zIndex: 2, // Ensure the content is above the shadow
            }}
        >
            <Typography variant="h2" sx={{ fontWeight: 'bold', zIndex: 3, position: 'relative' }}>
                Archive Tenders
            </Typography>
            <Breadcrumbs sx={{ color: 'white', marginTop: '10px', zIndex: 3, position: 'relative' }}>
                <Link href="/" underline="hover" sx={{ color: 'white' }}>
                    Home
                </Link>
                <Link href="#" underline="hover" sx={{ color: 'white' }}>
                    Tenders
                </Link>
                <Typography color="white">Archive Tenders</Typography>
            </Breadcrumbs>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
            <TableContainer 
                component={Paper} 
                sx={{ width: '80%', boxShadow: 3, borderRadius: 2, padding: '16px' }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
                    <FormControl sx={{ width: '20%' }}>
                        <InputLabel id="year-select-label">Filter by Year</InputLabel>
                        <Select
                            labelId="year-select-label"
                            value={yearFilter}
                            onChange={(e) => setYearFilter(e.target.value)}
                            label="Filter by Year"
                        >
                            {years.map(year => (
                                <MenuItem key={year} value={year.toString()}>{year}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Document Title</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Year</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredDocuments.map((doc, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <Link 
                                        href={doc.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        sx={{ textDecoration: 'none', color: '#1976d2' }}
                                    >
                                        {doc.title}
                                    </Link>
                                </TableCell>
                                <TableCell>{doc.year}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>

        <Footer/>
        </>
    );
}

export default ArchiveTenders;
