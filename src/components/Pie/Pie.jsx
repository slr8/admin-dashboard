import { Box } from '@mui/material'
import React from 'react'
import Header from '../Header/Header'
import PieChart from '../PieChart'

const Pie = () => {
    return (
        <>
            <Box>
                <Header title="BAR CHART" text="Simple Bar Chart" />
            </Box>
            <Box height='75vh'>
                <PieChart />
            </Box>
        </>
    )
}

export default Pie