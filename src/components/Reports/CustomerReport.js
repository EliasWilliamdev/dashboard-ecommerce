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
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const customerActivity = [
  { mes: 'Jan', novos: 120, ativos: 450, recorrentes: 280 },
  { mes: 'Fev', novos: 150, ativos: 480, recorrentes: 300 },
  { mes: 'Mar', novos: 180, ativos: 520, recorrentes: 350 },
  { mes: 'Abr', novos: 160, ativos: 550, recorrentes: 380 },
  { mes: 'Mai', novos: 140, ativos: 580, recorrentes: 400 },
  { mes: 'Jun', novos: 190, ativos: 600, recorrentes: 420 },
];

const topCustomers = [
  { cliente: 'João Silva', compras: 15, valorTotal: 12500 },
  { cliente: 'Maria Santos', compras: 12, valorTotal: 9800 },
  { cliente: 'Pedro Oliveira', compras: 10, valorTotal: 8500 },
  { cliente: 'Ana Costa', compras: 8, valorTotal: 7200 },
];

const CustomerReport = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>
          Comportamento dos Clientes
        </Typography>
      </Grid>

      <Grid item xs={12} md={8}>
        <Paper sx={{ p: 2, height: 400 }}>
          <Typography variant="h6" gutterBottom>
            Atividade dos Clientes
          </Typography>
          <ResponsiveContainer width="100%" height="90%">
            <AreaChart data={customerActivity}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="novos"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
                name="Novos Clientes"
              />
              <Area
                type="monotone"
                dataKey="recorrentes"
                stackId="1"
                stroke="#82ca9d"
                fill="#82ca9d"
                name="Clientes Recorrentes"
              />
              <Area
                type="monotone"
                dataKey="ativos"
                stackId="1"
                stroke="#ffc658"
                fill="#ffc658"
                name="Clientes Ativos"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>

      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Melhores Clientes
          </Typography>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Cliente</TableCell>
                  <TableCell align="right">Compras</TableCell>
                  <TableCell align="right">Total (R$)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {topCustomers.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.cliente}</TableCell>
                    <TableCell align="right">{row.compras}</TableCell>
                    <TableCell align="right">
                      {row.valorTotal.toLocaleString('pt-BR')}
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

export default CustomerReport;
