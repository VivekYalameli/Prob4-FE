import * as React from 'react';
import ButtonAppBar from './Home';
import { Typography } from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
// {
//     "serverName": "Order Service",
//     "serverstatus": 200,
//     "appUrl": "http://localhost:9998/order/placeOrder"
// }
// const columns = [
//     {field: 'id', headerName: 'ID', width: 50},
//   { field: 'serverName', headerName: 'Server Name', width: 130 },
//   { field: 'serverstatus', headerName: 'Server Status', width: 130 },
//   { field: 'appUrl', headerName: 'Application URL', width: 300 },
//   {
//     field: 'action',
//     headerName: 'Action',
//     type: 'button',
//     renderCell: (params) => {
//         // you will find row info in params
//         <button>Action</button>
//      },
//     width: 90,
//   },
// //   {
// //     field: 'fullName',
// //     headerName: 'Full name',
// //     description: 'This column has a value getter and is not sortable.',
// //     sortable: false,
// //     width: 160,
// //     valueGetter: (params) =>
// //       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
// //   },
// ];
// const data = [{
//     id: 1,
//     serverName: "Order Service",
//     serverstatus: 201,
//     appUrl: "http://localhost:9998/order/placeOrder",
//     action: ""
// },
// {
//     id: 2,
//     serverName: "Order Service",
//     serverstatus: 401,
//     appUrl: "http://localhost:9998/order/placeOrder",
//     action: ""
// },{
//     id: 3,
//     serverName: "Order Service",
//     serverstatus: 200,
//     appUrl: "http://localhost:9998/order/service",
//     action: "running"
// }]
//const tableData = data
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
;

export default function DataTable() {
    const [healthData, setHealthData]=useState([])
    const fetchData = async()=>{
        const response = await axios.get("http://localhost:8890/api/getHealthStatus")
        setHealthData(response.data)
        
    }
    useEffect(()=>{
        fetchData()
    },[])
    console.log(healthData)
    const handleClick=(appUrl, serviceName)=>{
        axios
      .post("http://localhost:8890/api/mail", {
        serviceName: serviceName,
        url: appUrl
      })
      .then((response) => {
        // setPost(response.data);
      });
        
    }
  return (
    <>
    <ButtonAppBar/>
    <div style={{ height: 400, width: '90%', marginLeft: '60px', marginTop: '20px' }}>
        
        <Typography variant='h5'>
            {/* <DashboardIcon/> */}
            DashBoard
        </Typography>
      {/* <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      /> */}
      <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
           
            <TableCell><span style={{fontWeight: 'bold'}}>Server Names</span></TableCell>
            <TableCell><span style={{fontWeight: 'bold'}}>Server Status</span></TableCell>
            <TableCell><span style={{fontWeight: 'bold'}}>Application URL</span></TableCell>
            <TableCell><span style={{fontWeight: 'bold'}}>Action</span></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {healthData.map((row) => (
            <TableRow key={Math.random()}>
            
              <TableCell>{row.serverName}</TableCell>
              <TableCell>{row.status===200?"Running":"Down"}</TableCell>
              <TableCell>{row.applicationUrl}</TableCell>
              <TableCell>
                <Button variant="contained" disabled={(row.status === 201?true:false) || (row.status === 200?true:false)} onClick={() => handleClick(row.applicationUrl,row.serverName)}>mail</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>
  );
}