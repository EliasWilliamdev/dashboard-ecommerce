import React, { memo } from 'react';

import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Typography,
  Box,
  Chip,
} from '@mui/material';

const topProducts = [
  {
    name: 'Smartphone XYZ',
    sales: 150,
    revenue: 299850,
    image: 'https://via.placeholder.com/150?text=Smartphone',
    trend: '+12%',
  },
  {
    name: 'Notebook ABC',
    sales: 80,
    revenue: 399920,
    image: 'https://via.placeholder.com/150?text=Notebook',
    trend: '+8%',
  },
  {
    name: 'Tênis Runner',
    sales: 200,
    revenue: 59980,
    image: 'https://via.placeholder.com/150?text=Tenis',
    trend: '+15%',
  },
  {
    name: 'Fone Bluetooth',
    sales: 300,
    revenue: 29970,
    image: 'https://via.placeholder.com/150?text=Fone',
    trend: '+20%',
  },
];

const TopProducts = memo(() => {
  // This component displays the top products
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper', p: 0 }}>
      {topProducts.map((product, index) => (
        <ListItem
          key={index}
          sx={{
            py: 2,
            px: 0,
            borderBottom: index < topProducts.length - 1 ? '1px solid #eee' : 'none',
            '&:hover': {
              bgcolor: 'rgba(0, 0, 0, 0.02)',
            },
          }}
        >
          <ListItemAvatar>
            <Avatar
              src={product.image}
              alt={product.name}
              variant="rounded"
              sx={{
                width: 56,
                height: 56,
                borderRadius: 2,
                mr: 1,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                {product.name}
              </Typography>
            }
            secondary={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontWeight: 500 }}
                >
                  {product.sales} vendas
                </Typography>
                <Chip
                  label={product.trend}
                  size="small"
                  color="success"
                  variant="outlined"
                  sx={{ height: 20, borderRadius: 1 }}
                />
              </Box>
            }
            sx={{ my: 0 }}
          />
          <Typography
            variant="subtitle1"
            color="primary"
            sx={{ fontWeight: 600, minWidth: 100, textAlign: 'right' }}
          >
            {`R$ ${product.revenue.toLocaleString('pt-BR')}`}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
});

export default TopProducts;
