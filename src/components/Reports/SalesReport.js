import React from 'react';
import {
  Paper,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const salesData = [
  { categoria: 'Eletrônicos', vendas: 45000, lucro: 15000 },
  { categoria: 'Vestuário', vendas: 35000, lucro: 12000 },
  { categoria: 'Calçados', vendas: 28000, lucro: 9000 },
  { categoria: 'Acessórios', vendas: 18000, lucro: 6000 },
];

const topProducts = [
  { produto: 'Smartphone XYZ', vendas: 150, receita: 299850 },
  { produto: 'Notebook ABC', vendas: 80, receita: 399920 },
  { produto: 'Tênis Runner', vendas: 200, receita: 59980 },
  { produto: 'Fone Bluetooth', vendas: 300, receita: 29970 },
];

const SalesReport = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>
          Relatório de Vendas
        </Typography>
      </Grid>
      
      <Grid item xs={12} md={8}>
        <Paper sx={{ p: 2, height: 400 }}>
          <Typography variant="h6" gutterBottom>
            Vendas por Categoria
          </Typography>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="categoria" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="vendas" fill="#8884d8" name="Vendas (R$)" />
              <Bar dataKey="lucro" fill="#82ca9d" name="Lucro (R$)" />
            </BarChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Produtos Mais Vendidos
          </Typography>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Produto</TableCell>
                  <TableCell align="right">Vendas</TableCell>
                  <TableCell align="right">Receita (R$)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {topProducts.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.produto}</TableCell>
                    <TableCell align="right">{row.vendas}</TableCell>
                    <TableCell align="right">
                      {row.receita.toLocaleString('pt-BR')}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SalesReport;
