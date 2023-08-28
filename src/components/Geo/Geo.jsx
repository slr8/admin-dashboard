import { Box } from '@mui/material'
import React from 'react'
import Header from '../Header/Header'
import GeoChart from '../GeoChart'

const Geo = () => {
    return (
        <>
            <Box>
                <Header title="LINE CHART" text="Simple Line Chart" />
            </Box>
            <Box height='75vh' ml="50px" mt="30px">
                <GeoChart />
            </Box>
        </>
    )
}

export default Geo