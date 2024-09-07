
const TransactionBox = ({ code, name, date, price }) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 15px',
            borderBottom: '3px solid #050f29'
        }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ color: '#54bd9a', fontWeight: '700' }}>{code}</span>
                <span style={{ color: 'white', fontSize: '14px', marginTop: '2px' }}>{name}</span>
            </div>
            <div style={{ color: 'white', fontSize: '14px' }}>{date}</div>
            <div style={{ color: 'white', backgroundColor: '#54bd9a', fontSize: '14px', borderRadius: '3px', padding: '3px' }}>{price}</div>
        </div>
    )
}

export default TransactionBox