import "./sidebar.css"
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import ContactsIcon from '@mui/icons-material/Contacts';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import MapIcon from '@mui/icons-material/Map';
import Item from './Item/Item'
import { useState } from "react";

const SideBar = () => {
    let [selectedCategory, setSelectedCatogry] = useState('dashboard')
    console.log(selectedCategory);
    return (
        <div className='sideBar'>
            <div className="sideBarHeader"><p>Admin</p></div>
            <div className="user">
                <img src="/Images/120277032_2044641705673412_3186762487097734078_n.jpg" />
                <h1>Ali Osama</h1>
                <p>Fancy Admin</p>
            </div>
            <Item
                icon={<HomeIcon />}
                to={'/'}
                title={'Dashboard'}
                name={'dashboard'}
                selectedCatogry={selectedCategory}
                setSelectedCatogry={setSelectedCatogry}
            />
            <p style={{ margin: '0 0 0 20px', color: 'gray' }}>Data</p>
            <Item
                icon={<GroupIcon />}
                to={'/team'}
                title={'Manage Team'}
                name={'team'}
                selectedCatogry={selectedCategory}
                setSelectedCatogry={setSelectedCatogry}
            />
            <Item
                icon={<ContactsIcon />}
                to={'/contacts'}
                title={'Contacts Information'}
                name={'contacts'}
                selectedCatogry={selectedCategory}
                setSelectedCatogry={setSelectedCatogry} />
            <Item
                icon={<ReceiptIcon />}
                to={'/invoices'}
                title={'Invoices Balances'}
                name={'invoices'}
                selectedCatogry={selectedCategory}
                setSelectedCatogry={setSelectedCatogry} />
            <p style={{ margin: '0 0 0 20px', color: 'gray' }}>Pages</p>
            <Item
                icon={<PersonIcon />}
                to={'/form'}
                title={'Profile Form'}
                name={'form'}
                selectedCatogry={selectedCategory}
                setSelectedCatogry={setSelectedCatogry} />
            <Item
                icon={<CalendarMonthIcon />}
                to={'/calendar'}
                title={'Calendar'}
                name={'calendar'}
                selectedCatogry={selectedCategory}
                setSelectedCatogry={setSelectedCatogry} />
            <Item
                icon={<LiveHelpIcon />}
                to={'/faq'}
                title={'FAQ Page'}
                name={'faq'}
                selectedCatogry={selectedCategory}
                setSelectedCatogry={setSelectedCatogry} />
            <p style={{ margin: '0 0 0 20px', color: 'gray' }}>Charts</p>
            <Item
                icon={<BarChartIcon />}
                to={'/bar'}
                title={'Bar Chart'}
                name={'bar'}
                selectedCatogry={selectedCategory}
                setSelectedCatogry={setSelectedCatogry} />
            <Item
                icon={<PieChartIcon />}
                to={'/pie'}
                title={'Pie Chart'}
                name={'pie'}
                selectedCatogry={selectedCategory}
                setSelectedCatogry={setSelectedCatogry} />
            <Item
                icon={<ShowChartIcon />}
                to={'/line'}
                title={'Line Chart'}
                name={'line'}
                selectedCatogry={selectedCategory}
                setSelectedCatogry={setSelectedCatogry} />
            <Item
                icon={<MapIcon />}
                to={'/geography'}
                title={'Geo Chart'}
                name={'geo'}
                selectedCatogry={selectedCategory}
                setSelectedCatogry={setSelectedCatogry} />
        </div>
    )
}

export default SideBar