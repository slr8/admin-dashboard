import PieChart from "./PieChart"

const PieBased = () => {
    return (
        <div style={{ gridColumn: 'span 4', padding: '15px 20px', backgroundColor: 'rgb(12, 27, 66)' }}>
            <div>
                <span style={{ color: 'white' }}>Sales Quantity</span>
            </div>
            <div style={{ height: '150px' }}>
                <PieChart />
            </div>
        </div>
    )
}

export default PieBased