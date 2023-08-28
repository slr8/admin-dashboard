import React from 'react'
import Header from '../Header/Header'
import BarChart from '../BarChart'
import { Box } from '@mui/material'

const Bar = () => {
    return (
        <>
            <Box>
                <Header title="LINE CHART" text="Simple Line Chart" />
            </Box>
            <Box height='75vh' ml="75px">
                <BarChart />
            </Box>
        </>
    )
}

export default Bar