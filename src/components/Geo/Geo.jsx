import { Box } from '@mui/material'
import React from 'react'
import Header from '../Header/Header'
import GeoChart from '../GeoChart'

const Geo = () => {
    return (
        <>
            <Box>
                <Header title="GEO CHART" text="Simple Geo Chart" />
            </Box>
            <Box height='75vh' ml="50px" mt="30px">
                <GeoChart />
            </Box>
        </>
    )
}

export default Geo