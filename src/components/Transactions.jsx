import React from 'react'
import TransactionBox from './TransactionBox'

const Transactions = () => {
    return (
        <div style={{
            gridColumn: 'span 4',
            backgroundColor: 'rgb(12, 27, 66)',
            overflowY: 'scroll',
            height: '260.4px'
        }}>
            <div>
                <span style={{
                    color: 'white',
                    borderBottom: '3px solid #050f29',
                    display: 'block',
                    padding: '15px 0 15px 15px'
                }}>Recent Transactions</span>
            </div>
            <div>
                <TransactionBox
                    code={"01e4dsa"}
                    name={'johndoe'}
                    date={'2022-04-01'}
                    price={'$43.12'}
                />
                <TransactionBox
                    code={"01e4dsa"}
                    name={'johndoe'}
                    date={'2022-04-01'}
                    price={'$43.12'}
                />
                <TransactionBox
                    code={"01e4dsa"}
                    name={'johndoe'}
                    date={'2022-04-01'}
                    price={'$43.12'}
                />
                <TransactionBox
                    code={"01e4dsa"}
                    name={'johndoe'}
                    date={'2022-04-01'}
                    price={'$43.12'}
                />
                <TransactionBox
                    code={"01e4dsa"}
                    name={'johndoe'}
                    date={'2022-04-01'}
                    price={'$43.12'}
                />
                <TransactionBox
                    code={"01e4dsa"}
                    name={'johndoe'}
                    date={'2022-04-01'}
                    price={'$43.12'}
                />
                <TransactionBox
                    code={"01e4dsa"}
                    name={'johndoe'}
                    date={'2022-04-01'}
                    price={'$43.12'}
                />
                <TransactionBox
                    code={"01e4dsa"}
                    name={'johndoe'}
                    date={'2022-04-01'}
                    price={'$43.12'}
                />
            </div>
        </div>
    )
}

export default Transactions