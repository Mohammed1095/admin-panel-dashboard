import './UserLList.css';
import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import male from '../../assets/images/male-avatar.jpg';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'user',
    headerName: 'User',
    width: 200,
    renderCell: (params) => {
      return (
        <div className="userListUser">
          <img className="userListImg" src={params.row.avatar} alt="" />
          {params.row.userName}
        </div>
      );
    },
  },
  { field: 'email', headerName: 'Email', width: 200 },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
  },
  {
    field: 'transactions',
    headerName: 'Transaction Volume',
    width: 160,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 150,
    renderCell: (params) => {
      return (
        <>
          <Link to={'/user/' + params.row.id}>
            <button className="userListEdit">Edit</button>
          </Link>
          <DeleteOutline
            className="userListDelete"
            // onClick={() => handleDelete(params.row.id)}
          />
        </>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    userName: 'Jon Snow',
    avatar: male,
    email: 'jon@gmail.com',
    status: 'active',
    transactions: '$ 150.00',
  },
  {
    id: 2,
    userName: 'Jon Snow',
    avatar: male,
    email: 'jon@gmail.com',
    status: 'active',
    transactions: '$ 150.00',
  },
  {
    id: 3,
    userName: 'Jon Snow',
    avatar: male,
    email: 'jon@gmail.com',
    status: 'active',
    transactions: '$ 150.00',
  },
  {
    id: 4,
    userName: 'Jon Snow',
    avatar: male,
    email: 'jon@gmail.com',
    status: 'active',
    transactions: '$ 150.00',
  },
  {
    id: 5,
    userName: 'Jon Snow',
    avatar: male,
    email: 'jon@gmail.com',
    status: 'active',
    transactions: '$ 150.00',
  },
  {
    id: 6,
    userName: 'Jon Snow',
    avatar: male,
    email: 'jon@gmail.com',
    status: 'active',
    transactions: '$ 150.00',
  },
  {
    id: 7,
    userName: 'Jon Snow',
    avatar: male,
    email: 'jon@gmail.com',
    status: 'active',
    transactions: '$ 150.00',
  },
  {
    id: 8,
    userName: 'Jon Snow',
    avatar: male,
    email: 'jon@gmail.com',
    status: 'active',
    transactions: '$ 150.00',
  },
  {
    id: 9,
    userName: 'Jon Snow',
    avatar: male,
    email: 'jon@gmail.com',
    status: 'active',
    transactions: '$ 150.00',
  },
  {
    id: 10,
    userName: 'Jon Snow',
    avatar: male,
    email: 'jon@gmail.com',
    status: 'active',
    transactions: '$ 150.00',
  },
  {
    id: 11,
    userName: 'Jon Snow',
    avatar: male,
    email: 'jon@gmail.com',
    status: 'active',
    transactions: '$ 150.00',
  },
  {
    id: 12,
    userName: 'Jon Snow',
    avatar: male,
    email: 'jon@gmail.com',
    status: 'active',
    transactions: '$ 150.00',
  },
];

export default function UserList() {
  return (
    <div className="userList">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={12}
        rowsPerPageOptions={[12]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
