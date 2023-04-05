// import React from 'react'
import { Box, Link } from '@mui/material'




export const Associate = () => {
    const data = ['Badgets Ops', 'Facilities', 'Financial Planing', 'Ops Group','Pats folder','Projects']


    return (
        <Box sx={{ display: 'flex', justifyContent: 'center',alignItems:'center' ,p: 9, gap: 0.5 }}>

            {
                data.map((single, index) => {
                    return (

                        <Box key={index}>
                            <Box component='span'>
                                <Box width='170px' height='30px' sx={{ backgroundColor: '#CBCBCB',  p:3, borderTopLeftRadius: '10%', borderTopRightRadius: '10%' }}  >
                                        <Link href='#'  varient='body2' textAlign='center'    underline='none' >
                                            {single}
                                        </Link>
                                </Box>
                            </Box>


                        </Box>

                    )
                })
            }
        </Box>
    )
}
