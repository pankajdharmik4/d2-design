import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Container
} from "@mui/material";

const Dashboard = () => {
  return (
    <Container maxWidth="xl">
      <Box p={3}>
        {/* Header */}
        <Typography variant="h4" fontWeight="bold" mb={4}>
          Medi-Core Dashboard
        </Typography>

        {/* Top Statistics Overview Cards */}
        <Grid container spacing={3} mb={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">New Patients</Typography>
                <Typography variant="h4" color="primary">24</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Appointments</Typography>
                <Typography variant="h4" color="secondary">18</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Available Doctors</Typography>
                <Typography variant="h4" color="success.main">12</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Revenue</Typography>
                <Typography variant="h4" color="warning.main">$9,800</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          {/* Left Column */}
          <Grid item xs={12} md={8}>
            {/* Actions */}
            <Box display="flex" gap={2} mb={3}>
              <Button variant="contained" color="primary">
                Create New Patient
              </Button>
              <Button variant="outlined" color="secondary">
                View Employee Details
              </Button>
            </Box>

            {/* Calendar (Upcoming Appointments) */}
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Upcoming Appointments Calendar
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {/* Placeholder: You can replace with a calendar library like react-big-calendar */}
                  Calendar coming soon...
                </Typography>
              </CardContent>
            </Card>

            {/* Doctor Availability Panel */}
            <Card sx={{ mt: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Doctor Availability
                </Typography>
                <Typography variant="body2">
                  Dr. Sharma: Available<br />
                  Dr. Mehta: Unavailable<br />
                  Dr. Roy: Available
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={4}>
            {/* Today's Appointments */}
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Appointments Today
                </Typography>
                <ul>
                  <li>10:00 AM – John Doe</li>
                  <li>11:30 AM – Jane Smith</li>
                  <li>02:00 PM – Alex Johnson</li>
                  <li>03:15 PM – Priya Kaur</li>
                </ul>
              </CardContent>
            </Card>

            {/* User Account Info (Admin Panel) */}
            <Card sx={{ mt: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Admin Info
                </Typography>
                <Typography>Name: Dr. Admin</Typography>
                <Typography>Role: Administrator</Typography>
                <Button variant="text" size="small" sx={{ mt: 1 }}>
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            {/* Quick Access Shortcuts */}
            <Card sx={{ mt: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Quick Shortcuts
                </Typography>
                <Button fullWidth variant="outlined" sx={{ mb: 1 }}>
                  Billing Section
                </Button>
                <Button fullWidth variant="outlined" sx={{ mb: 1 }}>
                  Reports
                </Button>
                <Button fullWidth variant="outlined">
                  Settings
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Dashboard;
