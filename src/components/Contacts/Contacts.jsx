import React from 'react'
import { mockDataContacts } from '../../data/mockData';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Header from '../Header/Header';

const Contacts = () => {
    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "registrarId", headerName: "Registrar ID" },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
            editable: true

        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
            editable: true

        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,

        },
        {
            field: "address",
            headerName: "Address",
            flex: 1,
            editable: true

        },
        {
            field: "city",
            headerName: "City",
            flex: 1,
            editable: true

        },
        {
            field: "zipCode",
            headerName: "Zip Code",
            flex: 1,
        },
    ];

    return (
        <>
            <Header
                title={'CONTACTS'}
                text={"List of Contacts for Future Reference"}
            />
            <div className="team">
                <DataGrid checkboxSelection rows={mockDataContacts} columns={columns} components={{ Toolbar: GridToolbar }} />
            </div>
        </>
    );
};

export default Contacts