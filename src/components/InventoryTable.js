import React, { memo } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Box,
  IconButton,
  Tooltip,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

const data = [
  {
    id: 1,
    produto: 'Smartphone XYZ',
    quantidade: 50,
    preco: 1999.99,
    categoria: 'Eletrônicos',
    status: 'Em estoque',
  },
  {
    id: 2,
    produto: 'Notebook ABC',
    quantidade: 30,
    preco: 4999.99,
    categoria: 'Eletrônicos',
    status: 'Em estoque',
  },
  {
    id: 3,
    produto: 'Tênis Runner',
    quantidade: 5,
    preco: 299.99,
    categoria: 'Calçados',
    status: 'Baixo estoque',
  },
  {
    id: 4,
    produto: 'Camiseta Sport',
    quantidade: 200,
    preco: 79.99,
    categoria: 'Vestuário',
    status: 'Em estoque',
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Em estoque':
      return {
        color: 'success',
        variant: 'outlined',
      };
    case 'Baixo estoque':
      return {
        color: 'warning',
        variant: 'outlined',
      };
    default:
      return {
        color: 'default',
        variant: 'outlined',
      };
  }
};

const InventoryTable = memo(() => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="inventory table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 600, fontSize: '0.95rem' }}>Produto</TableCell>
            <TableCell align="right" sx={{ fontWeight: 600, fontSize: '0.95rem' }}>
              Quantidade
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: 600, fontSize: '0.95rem' }}>
              Preço (R$)
            </TableCell>
            <TableCell sx={{ fontWeight: 600, fontSize: '0.95rem' }}>Categoria</TableCell>
            <TableCell sx={{ fontWeight: 600, fontSize: '0.95rem' }}>Status</TableCell>
            <TableCell align="right" sx={{ fontWeight: 600, fontSize: '0.95rem' }}>
              Ações
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => {
            const statusColor = getStatusColor(row.status);
            return (
              <TableRow
                key={row.id}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  transition: 'background-color 0.2s',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                <TableCell component="th" scope="row" sx={{ fontWeight: 500 }}>
                  {row.produto}
                </TableCell>
                <TableCell align="right">{row.quantidade}</TableCell>
                <TableCell align="right">
                  {row.preco.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                  })}
                </TableCell>
                <TableCell>
                  <Chip
                    label={row.categoria}
                    size="small"
                    variant="outlined"
                    sx={{ borderRadius: '6px' }}
                  />
                </TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    size="small"
                    color={statusColor.color}
                    variant={statusColor.variant}
                    sx={{ borderRadius: '6px' }}
                  />
                </TableCell>
                <TableCell align="right">
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                    <Tooltip title="Visualizar detalhes">
                      <IconButton size="small" color="primary">
                        <VisibilityIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Editar produto">
                      <IconButton size="small" color="primary">
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
});

export default InventoryTable;
