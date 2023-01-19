// import { useTable } from 'react-table';
// import styled from 'styled-components';
import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

function OrderMenuTable() {
  const rows: GridRowsProp = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ];
  const columns: GridColDef = [
    { field: 'col1', headerName: '메뉴', width: 250 },
    { field: 'col2', headerName: '수량', width: 250 },
    { field: 'col3', headerName: '가격', width: 250 },
  ];
  return (
    <div style={{ height: 400, width: '100%' }}>
      {/* =======
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "DataGridPro", col2: "is Awesome" },
    { id: 3, col1: "MUI", col2: "is Amazing" },
    { id: 3, col1: "MUI", col2: "is Amazing" },
  ];
  const columns: GridColDef = [
    { field: "col1", headerName: "메뉴", width: 250 },
    { field: "col2", headerName: "수량", width: 250 },
    { field: "col3", headerName: "가격", width: 250 },
  ];
  return (
    <div style={{ height: 400, width: "100%" }}>
>>>>>>> ea484a941ec6c5b1b84ef32cc92b57f2ccaf91ca */}
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

export default OrderMenuTable;
