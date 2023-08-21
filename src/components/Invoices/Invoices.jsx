import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { mockDataInvoices } from '../../data/mockData';
import Header from '../Header/Header';
import './invoices.css'
const Invoices = () => {
    const columns = [
        { field: "id", headerName: "ID" },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            renderCell: (params) => (
                <div style={{ color: 'lightgreen' }}>
                    {params.row.name}
                </div>
            ),
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "cost",
            headerName: "Cost",
            flex: 1,
            renderCell: (params) => (
                <div style={{ color: 'lightgreen' }}>
                    {params.row.cost}
                </div>
            ),
        },
        {
            field: "date",
            headerName: "Date",
            flex: 1,
        },
    ];

    return (
        <>
            <Header
                title={'INVOICES'}
                text={"List of Invoice Balances"}
            />
            <div className="team">
                <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} components={{ Toolbar: GridToolbar }} />
            </div>
        </>
    );
};
export default Invoices