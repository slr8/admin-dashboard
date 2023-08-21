import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import LightModeIcon from '@mui/icons-material/LightMode';
import './navbar.css'

const Navbar = () => {
    return (
        <div className='navBar'>
            <div className="navBarLeft">
                <input type="text" placeholder='Search' />
                <SearchIcon className='searchIcon' />
            </div>
            <div className="navBarRight">
                <ul className="navBar">
                    <li><LightModeIcon /></li>
                    <li><NotificationsIcon /></li>
                    <li><SettingsIcon /></li>
                    <li><PersonIcon /></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar