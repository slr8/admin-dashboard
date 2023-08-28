import React from 'react'
import Header from '../Header/Header'
import { Box } from '@mui/material'
import LineChart from '../LineChart'

const Line = () => {
    return (
        <>
            <Box>
                <Header title="LINE CHART" text="Simple Line Chart" />
            </Box>
            <Box height='75vh' ml="75px">
                <LineChart />
            </Box>
        </>
    )
}

export default Line