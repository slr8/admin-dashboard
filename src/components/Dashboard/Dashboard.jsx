import Campaign from "../Campaign";
import Header from "../Header/Header"
import PieBased from "../PieBased";
import Revenue from "../Revenue";
import Sales from "../Sales";
import StatBox from "../StatBox"
import Transactions from "../Transactions";
import './dashboard.css'
import HomeIcon from '@mui/icons-material/Home';

const Dashboard = () => {
    return (
        <div >
            <Header
                title={'DASHBOARD'}
                text={"Welcome to your dashboard"}
            />
            <div className='dashboard'>
                <StatBox
                    icon={<HomeIcon />}
                    stat={'12, 361'}
                    title={'Emails Sent'}
                    percentage={'+14%'} />
                <StatBox
                    icon={<HomeIcon />}
                    stat={'12, 361'}
                    title={'Emails Sent'}
                    percentage={'+14%'} />
                <StatBox
                    icon={<HomeIcon />}
                    stat={'12, 361'}
                    title={'Emails Sent'}
                    percentage={'+14%'} />
                <StatBox
                    icon={<HomeIcon />}
                    stat={'12, 361'}
                    title={'Emails Sent'}
                    percentage={'+14%'} />
                <Revenue />
                <Transactions />
                <Campaign />
                <Sales />
                <PieBased />
            </div>
        </div>
    )
}

export default Dashboard