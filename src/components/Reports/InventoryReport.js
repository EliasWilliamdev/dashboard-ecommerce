import React from 'react';
import {
  Paper,
  Typography,
  Grid,
  Alert,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
} from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';

const lowStockItems = [
  { produto: 'Smartphone XYZ', quantidade: 5, minimo: 20 },
  { produto: 'Notebook ABC', quantidade: 3, minimo: 15 },
  { produto: 'Fone Bluetooth', quantidade: 8, minimo: 30 },
];

const stockByCategory = [
  { name: 'Eletrônicos', value: 450 },
  { name: 'Vestuário', value: 300 },
  { name: 'Calçados', value: 200 },
  { name: 'Acessórios', value: 150 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const InventoryReport = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>
          Relatório de Estoque
        </Typography>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2, height: 400 }}>
          <Typography variant="h6" gutterBottom>
            Distribuição de Estoque por Categoria
          </Typography>
          <ResponsiveContainer width="100%" height="90%">
            <PieChart>
              <Pie
                data={stockByCategory}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                label
              >
                {stockByCategory.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Alertas de Reposição
          </Typography>
          <Alert severity="warning" sx={{ mb: 2 }}>
            {lowStockItems.length} produtos precisam de reposição
          </Alert>
          <List>
            {lowStockItems.map((item, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <WarningIcon color="warning" />
                </ListItemIcon>
                <ListItemText
                  primary={item.produto}
                  secondary={`Quantidade atual: ${item.quantidade} | Mínimo: ${item.minimo}`}
                />
                <Chip
                  label="Repor Estoque"
                  color="warning"
                  size="small"
                  sx={{ ml: 2 }}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default InventoryReport;
