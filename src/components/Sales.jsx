import BarChart from "./BarChart"

const Sales = () => {
    return (
        <div style={{ gridColumn: 'span 4', padding: '15px 20px', backgroundColor: 'rgb(12, 27, 66)' }}>
            <div>
                <span style={{ color: 'white' }}>Sales Quantity</span>
            </div>
            <div style={{ height: '140px' }}>
                <BarChart />
            </div>
        </div>
    )
}

export default Sales