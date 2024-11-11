import React, { useState } from 'react';
import { Tabs, Tab, Box, TextField, Button, Typography, Grid, Paper } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import SidebarMenu from './SideBarMenu';

function AdminTest() {
  const [tabIndex, setTabIndex] = useState(0);
  const [closingDate, setClosingDate] = useState(null);  // Blank default date
  const [publicationDate, setPublicationDate] = useState(null);  // Blank default date
  const [file, setFile] = useState(null);  // To handle file upload

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Format dates to MongoDB format (ISO 8601)
    const formattedClosingDate = closingDate ? closingDate.toISOString() : null;
    const formattedPublicationDate = publicationDate ? publicationDate.toISOString() : null;

    // Create FormData object to handle file upload
    const formData = new FormData();
    formData.append('headline', event.target.headline.value);
    formData.append('closingDate', formattedClosingDate);
    formData.append('publicationDate', formattedPublicationDate);
    formData.append('aliasName', event.target.aliasName.value);
    formData.append('details', event.target.details.value);
    if (file) {
      formData.append('document', file);
    }

    // Now you can send formData to your backend API using fetch or axios
    // Example:
    // fetch('/api/upload', {
    //   method: 'POST',
    //   body: formData,
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={2}>
        {/* Sidebar Menu */}
        <Grid item xs={3} sx={{ backgroundColor: '#f5f5f5' }}>
          <SidebarMenu />
        </Grid>

        {/* Main Content */}
        <Grid item xs={9}>
          <Box sx={{ width: '100%', padding: 2 }}>
            <Paper elevation={3} sx={{ borderRadius: '12px', overflow: 'hidden' }}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: 'divider',
                  backgroundColor: '#f5f5f5',
                  padding: '16px',
                }}
              >
                <Tabs
                  value={tabIndex}
                  onChange={handleTabChange}
                  aria-label="NIT/RFP Tabs"
                  textColor="primary"
                  indicatorColor="primary"
                  centered
                  sx={{ "& .MuiTab-root": { fontWeight: 'bold' } }}
                >
                  <Tab label="Add" />
                  <Tab label="View" />
                  <Tab label="Archive" />
                </Tabs>
              </Box>

              {/* Add Tab Content */}
              {tabIndex === 0 && (
                <Box p={4} sx={{ backgroundColor: '#ffffff' }}>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                    Add NIT/RFP
                  </Typography>
                  <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField fullWidth name="headline" label="Headline" margin="normal" variant="outlined" />
                      </Grid>
                      <Grid item xs={6}>
                        <DatePicker
                          label="Closing Date and Time"
                          value={closingDate}
                          onChange={(newValue) => setClosingDate(newValue)}
                          renderInput={(params) => (
                            <TextField {...params} fullWidth margin="normal" variant="outlined" />
                          )}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <DatePicker
                          label="Publication Date and Time"
                          value={publicationDate}
                          onChange={(newValue) => setPublicationDate(newValue)}
                          renderInput={(params) => (
                            <TextField {...params} fullWidth margin="normal" variant="outlined" />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          variant="contained"
                          component="label"
                          sx={{
                            marginTop: 2,
                            marginBottom: 2,
                            backgroundColor: '#2196f3',
                            '&:hover': { backgroundColor: '#1976d2' },
                          }}
                        >
                          Upload Document
                          <input type="file" hidden onChange={handleFileChange} />
                        </Button>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField fullWidth name="aliasName" label="Alias Name" margin="normal" variant="outlined" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          name="details"
                          label="Details"
                          margin="normal"
                          variant="outlined"
                          multiline
                          rows={4}
                        />
                      </Grid>
                    </Grid>

                    <Box mt={4}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{
                          fontWeight: 'bold',
                          paddingX: 4,
                          paddingY: 1.5,
                          backgroundColor: '#2196f3',
                          '&:hover': { backgroundColor: '#1976d2' },
                        }}
                      >
                        Submit
                      </Button>
                      <Button
                        variant="outlined"
                        color="secondary"
                        sx={{
                          marginLeft: 2,
                          fontWeight: 'bold',
                          paddingX: 4,
                          paddingY: 1.5,
                        }}
                      >
                        Reset
                      </Button>
                    </Box>
                  </form>
                </Box>
              )}

              {/* View Tab Content */}
              {tabIndex === 1 && (
                <Box p={4}>
                  <Typography variant="h6">View NIT/RFP</Typography>
                  {/* Implement viewing logic here */}
                </Box>
              )}

              {/* Archive Tab Content */}
              {tabIndex === 2 && (
                <Box p={4}>
                  <Typography variant="h6">Archive NIT/RFP</Typography>
                  {/* Implement archive logic here */}
                </Box>
              )}
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}

export default AdminTest;
