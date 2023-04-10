

import { Box, Stack, Grid } from '@mui/material';
// import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export const Stations = () => {

    const data = ['All Associates', 'Biomedical', 'Finance', 'Hospital Security','Human Resources','Information Technology','Leadership','Process Improvement','Productivity','Project Management','Volunteers']
    return (
        <Box>
            <Box>
                <Stack m={5}>
                    <Box width="20%" sx={{ backgroundColor: '#ffff' }}   >
                        <Box sx={{ backgroundColor: '#ffff' }}  >
                            {/* BioMedical heading */}
                            <Box >

                                <Grid container sx={{ justifyContent: 'end', backgroundColor: '#DDD7FF', alignItems: 'center' }}>
                                   
                                    <Grid item xs={7} sx={{ justifyContent: 'end' }}>
                                        <Typography sx={{fontSize:19}}> Stations</Typography></Grid>

                                </Grid>
                            </Box>
                            
                            {
                data.map((single, index) => {
                    return (

                        <Box key={index}>
                            
                            <Box direction='row' backgroundColor="white" >
                                <Typography p={1} sx={{fontSize:14,'&:hover': {
                            //    border:'2px solid cyan',
                               backgroundColor:'#C7C7C7',
                                // opacity: [0.9, 0.8, 0.7],
                            },}}> {single}</Typography>
                            </Box>

                        </Box>

                    )
                })
            }
                            {/* Station Statement heading */}
                            

                        </Box>


                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}
