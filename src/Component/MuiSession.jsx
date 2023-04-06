import { Stack, Box, Link } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import SearchIcon from '@mui/icons-material/Search';

export const MuiSession = () => {
    return (
        <Box>
            <Box>
                <Box width='70%' sx={{ backgroundColor: '#E8F0F8' }}  >
                    <Box >
                        <Stack direction='row' sx={{ justifyContent: 'end', backgroundColor: '#DDDDDD', alignItems: 'end' }}>
                            <Typography variant='h6' > Recent Sessions</Typography>
                            <Box sx={{ paddingLeft: 60 }}>
                                <IconButton>
                                <SearchIcon  type="button"  />
                                </IconButton>
                                <IconButton>
                                <CancelIcon /></IconButton>
                            </Box>
                        </Stack>
                    </Box>



                    <Box >

                        <Box sx={{
                            flexGrow: 1, backgroundColor: 'white',
                            
                            '&:hover': {
                               border:'2px solid cyan',
                               backgroundColor:'#E8F0F8',
                                opacity: [0.9, 0.8, 0.7],
                            },
                        }}>
                            <Box
                                sx={{
                                    mb: 1,
                                    mx: 'auto',
                                    p: 2,
                                }}
                            >
                                <Stack spacing={3} direction="row" alignBoxs="center">
                                    <Tooltip
                                        title="John S Smith 555-555-5555 Facility Manager"
                                        placement="right"
                                        arrow
                                    >
                                        <Avatar alt='John s smith' sx={{ width: 55, height: 55 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPQmH3gZw6BGda2FbR4lpxXr09NZsI_axIg&usqp=CAU' /></Tooltip>
                                    <Stack direction="column" alignBoxs="center">
                                        <Typography noWrap variant='h6'>John S Smith</Typography>
                                        <Typography variant='body2'>04/04 2:25 AM</Typography>
                                        <Stack direction='row' spacing={2} >
                                            <Avatar sx={{ width: 22, height: 22, color: '#212121' }} >0</Avatar>
                                            <AddCircleOutlineIcon color="dark" />
                                            <Stack direction='row'>
                                                <CancelIcon color="dark" />
                                                <Typography variant='body2' sx={{ pl: 60 }}><Link href='#' underline='none' sx={{ color: '#212121', }}>Direct Sessions</Link></Typography>
                                            </Stack>
                                        </Stack>
                                    </Stack>

                                </Stack>

                            </Box>

                        </Box>

                    </Box>
                    <Box >

                        <Box sx={{ flexGrow: 1, backgroundColor: 'white','&:hover': {
                               border:'2px solid cyan',
                               backgroundColor:'#E8F0F8',
                                opacity: [0.9, 0.8, 0.7],
                            }, }}>
                            <Box
                                sx={{
                                    mb: 1,
                                    mx: 'auto',
                                    p: 2,
                                }}
                            >
                                <Stack spacing={3} direction="row" alignBoxs="center">
                                    <Tooltip
                                        title="John S Smith 555-555-5555 Facility Manager"
                                        placement="right"
                                        arrow
                                    >
                                        <Avatar alt='John s smith' sx={{ width: 55, height: 55 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPQmH3gZw6BGda2FbR4lpxXr09NZsI_axIg&usqp=CAU' /></Tooltip>
                                    <Stack direction="column" alignBoxs="center">
                                        <Typography noWrap variant='h6'>John S Smith</Typography>
                                        <Typography variant='body2'>04/04 2:25 AM</Typography>
                                        <Stack direction='row' spacing={2} >
                                            <Avatar sx={{ width: 22, height: 22, color: '#212121' }} >0</Avatar>
                                            <AddCircleOutlineIcon color="dark" />
                                            <Stack direction='row'>
                                                <CancelIcon color="dark" />
                                                <Typography variant='body2' sx={{ pl: 60 }}><Link href='#' underline='none' sx={{ color: '#212121', }}>Direct Sessions</Link></Typography>
                                            </Stack>
                                        </Stack>
                                    </Stack>

                                </Stack>

                            </Box>

                        </Box>

                    </Box>
                    <Box >

                        <Box sx={{ flexGrow: 1, backgroundColor: 'white','&:hover': {
                               border:'2px solid cyan',
                               backgroundColor:'#E8F0F8',
                                opacity: [0.9, 0.8, 0.7],
                            }, }}>
                            <Box
                                sx={{
                                    mb: 1,
                                    mx: 'auto',
                                    p: 2,
                                }}
                            >
                                <Stack spacing={3} direction="row" alignBoxs="center">
                                    <Tooltip
                                        title="John S Smith 555-555-5555 Facility Manager"
                                        placement="right"
                                        arrow
                                    >
                                        <Avatar alt='John s smith' sx={{ width: 55, height: 55 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPQmH3gZw6BGda2FbR4lpxXr09NZsI_axIg&usqp=CAU' /></Tooltip>
                                    <Stack direction="column" alignBoxs="center">
                                        <Typography noWrap variant='h6'>John S Smith</Typography>
                                        <Typography variant='body2'>04/04 2:25 AM</Typography>
                                        <Stack direction='row' spacing={2} >
                                            <Avatar sx={{ width: 22, height: 22, color: '#212121' }} >0</Avatar>
                                            <AddCircleOutlineIcon color="dark" />
                                            <Stack direction='row'>
                                                <CancelIcon color="dark" />
                                                <Typography variant='body2' sx={{ pl: 60 }}><Link href='#' underline='none' sx={{ color: '#212121', }}>Direct Sessions</Link></Typography>
                                            </Stack>
                                        </Stack>
                                    </Stack>

                                </Stack>

                            </Box>

                        </Box>

                    </Box>

                </Box>
            </Box>

        </Box>
    )
}
