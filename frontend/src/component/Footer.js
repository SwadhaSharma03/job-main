import { Box } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';

const Footer = () => {
    const { palette } = useTheme();
    return (
        <>
             <Box sx={{
                height: '70px',
                bgcolor: palette.secondary.midNightBlue,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: 'black'
            }}>
                <Box component='span' sx={{ color: 'white' }}>All rights reserved.</Box>

            </Box>
        </>
    )
}

export default Footer