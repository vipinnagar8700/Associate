import { Box, Typography,  OutlinedInput,FormControl ,Divider } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'




export const MuiSearch = () => {
    return (
        <Box sx={{ p: 9 }}>

            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 300,
                bgcolor: 'white',
                boxShadow: 24,
                // p: 4

            }}>
                <Box><Typography sx={{textAlign:'center', p:2,backgroundColor:'#DDD7FF' }} variant="h6" component="h2">
                    Search<CloseIcon href='#' sx={{textAlign:'end',pl:20}}/>
                </Typography>
                <Divider/>
                </Box>
                <FormControl sx={{ width: '30ch',p:2 }}>
                    <OutlinedInput placeholder="Search" color="primary" />
                </FormControl>
            </Box>
        </Box>

    )
}
