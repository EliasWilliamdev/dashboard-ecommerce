import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Container,
  Grid,
  Paper,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  IconButton,
  Avatar,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import SalesChart from './SalesChart';
import InventoryTable from './InventoryTable';
import SummaryCards from './SummaryCards';
import SalesReport from './Reports/SalesReport';
import InventoryReport from './Reports/InventoryReport';
import CustomerReport from './Reports/CustomerReport';
import TopProducts from './TopProducts';

function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index} style={{ width: '100%' }}>
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

const Dashboard = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ 
            fontSize: '1.5rem',
            fontWeight: 600,
            background: 'linear-gradient(45deg, #fff 30%, rgba(255,255,255,0.8) 90%)',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Dashboard E-commerce
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton color="inherit" size="large">
              <NotificationsIcon />
            </IconButton>
            <Avatar sx={{ bgcolor: 'primary.light' }}>
              <PersonIcon />
            </Avatar>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <SummaryCards />
          </Grid>
          
          <Grid item xs={12}>
            <Paper sx={{ borderRadius: '12px' }}>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                sx={{
                  '& .MuiTab-root': {
                    minHeight: '64px',
                    fontSize: '1rem',
                  },
                  '& .Mui-selected': {
                    fontWeight: 600,
                  },
                }}
              >
                <Tab label="Visão Geral" />
                <Tab label="Relatório de Vendas" />
                <Tab label="Relatório de Estoque" />
                <Tab label="Comportamento de Clientes" />
              </Tabs>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <TabPanel value={tabValue} index={0}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                  <Paper sx={{ 
                    p: 3,
                    height: 400,
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}>
                    <Typography variant="h6" color="primary" gutterBottom sx={{ fontWeight: 600 }}>
                      Vendas
                    </Typography>
                    <SalesChart />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Paper sx={{ 
                    p: 3,
                    height: 400,
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                    overflow: 'hidden',
                  }}>
                    <Typography variant="h6" color="primary" gutterBottom sx={{ fontWeight: 600 }}>
                      Produtos Mais Vendidos
                    </Typography>
                    <Box sx={{ 
                      height: 'calc(100% - 40px)',
                      overflowY: 'auto',
                      '&::-webkit-scrollbar': {
                        width: '8px',
                      },
                      '&::-webkit-scrollbar-track': {
                        background: '#f1f1f1',
                        borderRadius: '4px',
                      },
                      '&::-webkit-scrollbar-thumb': {
                        background: '#888',
                        borderRadius: '4px',
                        '&:hover': {
                          background: '#666',
                        },
                      },
                    }}>
                      <TopProducts />
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper sx={{ 
                    p: 3,
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}>
                    <Typography variant="h6" color="primary" gutterBottom sx={{ fontWeight: 600 }}>
                      Estoque
                    </Typography>
                    <InventoryTable />
                  </Paper>
                </Grid>
              </Grid>
            </TabPanel>

            <TabPanel value={tabValue} index={1}>
              <SalesReport />
            </TabPanel>

            <TabPanel value={tabValue} index={2}>
              <InventoryReport />
            </TabPanel>

            <TabPanel value={tabValue} index={3}>
              <CustomerReport />
            </TabPanel>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
