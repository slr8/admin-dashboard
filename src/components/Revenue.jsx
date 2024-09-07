import HomeIcon from '@mui/icons-material/Home';
import LineChart from './LineChart';
import { Link } from 'react-router-dom';

const Revenue = () => {
    return (
        <>
            <div style={{ gridColumn: 'span 8', backgroundColor: 'rgb(12, 27, 66)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '15px 20px 0 20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ color: 'white' }}>Revenue Generated</span>
                        <span style={{ color: '#54bd9a', fontWeight: '700', fontSize: '1.6rem', marginTop: '5px' }}>$59,342,23</span>
                    </div>
                    <div>
                        <HomeIcon className='statIcon' />
                    </div>
                </div>
                <div style={{ height: '25vh' }}>
                    <LineChart />
                </div>
            </div>

        </>
    )
}

export default Revenue