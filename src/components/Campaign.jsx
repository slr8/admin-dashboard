import './campaign.css'

const Campaign = () => {
    return (
        <div style={{ gridColumn: 'span 4', padding: '15px 20px', backgroundColor: 'rgb(12, 27, 66)' }}>
            <div>
                <span style={{ color: 'white' }}>Campaign</span>
            </div>
            <div class="campaign-border">
                <div class="campaign">
                </div>
            </div>
            <div>
                <p style={{ color: '#54bd9a', margin: '10px 0 0 0', textAlign: 'center' }}>$78,523 revenue generated</p>
                <p style={{ color: 'white', margin: '0', textAlign: 'center' }}>Includes extra misc expenditures and costs</p>
            </div>
        </div >
    )
}

export default Campaign