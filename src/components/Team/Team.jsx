import './team.css'
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataTeam } from '../../data/mockData'
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from '../Header/Header';
const Team = () => {
    const columns = [
        { field: "id", headerName: "ID", },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
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
            field: "accessLevel",
            headerName: "Access Level",
            flex: 1,
            renderCell: ({ row: { access } }) => {
                return (
                    <div className='type'>
                        {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                        {access === "manager" && <SecurityOutlinedIcon />}
                        {access === "user" && <LockOpenOutlinedIcon />}
                        {access}
                    </div>
                );
            },
        },
    ];

    return (
        <>
            <Header
                title={'TEAM'}
                text={'Managing Team Members'} />
            <div className="team">
                <DataGrid
                    checkboxSelection rows={mockDataTeam} columns={columns} components={{ Toolbar: GridToolbar }} />
            </div>
        </>
    )
}

export default Team