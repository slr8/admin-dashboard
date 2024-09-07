import DataCircle from './DataCircle';
import './statbox.css'

const StatBox = ({ icon, stat, title, percentage }) => {
    return (
        <div style={{ backgroundColor: '#0c1b42', gridColumn: 'span 3' }}>
            <div className='statBox'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className='statIcon' >{icon}</div>
                    <span className='statBoxSpan'>{stat}</span>
                </div>
                <div>
                    <DataCircle />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: ' 0 20px 15px 20px' }}>
                <span className="statBoxSecondSpan">
                    {title}
                </span>
                <span className="statBoxSecondSpan">
                    {percentage}
                </span>
            </div>
        </div>
    )
}

export default StatBox