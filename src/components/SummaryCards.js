import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const cards = [
  {
    title: 'Vendas Totais',
    value: 'R$ 45.987,00',
    icon: <MonetizationOnIcon sx={{ fontSize: 40 }} />,
    color: '#2196f3',
    trend: '+12% vs. mês anterior',
  },
  {
    title: 'Produtos Vendidos',
    value: '234',
    icon: <ShoppingCartIcon sx={{ fontSize: 40 }} />,
    color: '#4caf50',
    trend: '+8% vs. mês anterior',
  },
  {
    title: 'Produtos em Estoque',
    value: '1.890',
    icon: <InventoryIcon sx={{ fontSize: 40 }} />,
    color: '#ff9800',
    trend: '85% da capacidade',
  },
  {
    title: 'Crescimento',
    value: '+15%',
    icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
    color: '#e91e63',
    trend: '+5% vs. meta',
  },
];

const SummaryCards = () => {
  return (
    <Grid container spacing={3}>
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Paper
            sx={{
              p: 3,
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2,
              }}
            >
              <Box
                sx={{
                  backgroundColor: `${card.color}15`,
                  borderRadius: '12px',
                  p: 1.5,
                  mr: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {React.cloneElement(card.icon, {
                  sx: { fontSize: 40, color: card.color },
                })}
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'text.primary',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary', mt: 0.5 }}
                >
                  {card.trend}
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="h4"
              sx={{
                color: 'text.primary',
                fontWeight: 600,
                fontSize: '1.8rem',
              }}
            >
              {card.value}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default SummaryCards;
