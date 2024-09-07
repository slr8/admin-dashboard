import React from 'react'
import Header from '../Header/Header'
import BarChart from '../BarChart'
import { Box } from '@mui/material'

const Bar = () => {
    return (
        <>
            <Box>
                <Header title="BAR CHART" text="Simple Bar Chart" />
            </Box>
            <Box height='75vh' ml="75px">
                <BarChart />
            </Box>
        </>
    )
}

export default Bar