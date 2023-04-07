import { Box, Stack, Button } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import Grid from "@mui/material/Grid";




export const MuiStations = () => {
    return (
        <Box m={4} overflow={'hidden'}>

            <Stack direction="row" spacing={2}>
                {/* First column */}

                <Box width='53%' >
                    <Box sx={{ backgroundColor: '#ffff' }}  >
                        {/* BioMedical heading */}
                        <Box >

                            <Grid container sx={{ justifyContent: 'end', backgroundColor: '#DDD7FF', alignItems: 'center' }}>
                                <Grid item xs={5}
                                >
                                    <IconButton>
                                        <Avatar sx={{ width: 25, height: 25, bgcolor: 'black' }} >ss</Avatar>
                                    </IconButton>
                                </Grid>
                                <Grid item xs={4} sx={{ justifyContent: 'end' }}>
                                    <Typography variant='h6' sx={{ fontSize: 17 }} > BioMedical</Typography></Grid>
                                <Grid item xs={3}>
                                    <IconButton>
                                        <ArrowCircleLeftIcon type="button" />
                                    </IconButton>
                                    <IconButton>
                                        <ArrowCircleRightIcon type="button" />
                                    </IconButton>
                                    <IconButton>
                                        <ArrowDropDownCircleIcon /></IconButton>
                                    <IconButton>
                                        <ArrowDropDownCircleIcon /></IconButton>
                                </Grid>
                            </Grid>
                        </Box>
                        {/* Station Statement heading */}
                        <Box >
                            <Stack direction='row' sx={{ justifyContent: 'center', backgroundColor: '#D2DEE8', alignItems: 'center', }}>

                                <Typography variant='h6' sx={{ fontSize: 16 }}  > Station Statement</Typography>

                            </Stack>
                        </Box>
                        {/* Station statement content */}
                        <Box >
                            <Stack direction='row' sx={{ justifyContent: 'center', backgroundColor: '#ffff', alignItems: 'center' }}>

                                <Typography variant='body2' m={2} >This team reviews clinical equipment operations for the hospital. We evaluate<br /> equipment preventative maintenance and completion of all critical equipment </Typography>

                            </Stack>
                        </Box>
                        {/* Station Associate heading */}
                        <Box >
                            <Grid container sx={{ justifyContent: 'end', backgroundColor: '#D2DEE8', alignItems: 'center' }}>
                                <Grid item xs={5}>
                                    <IconButton>
                                        <Avatar sx={{ width: 25, height: 25, bgcolor: 'black' }} >ss</Avatar>
                                    </IconButton>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='h6' sx={{ fontSize: 16 }} > Station Associates</Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <IconButton>
                                        <CameraAltIcon type="button" />
                                    </IconButton>


                                </Grid>
                            </Grid>

                        </Box>
                        {/* Station Associate 1 */}
                        <Box >

                            <Box sx={{
                                flexGrow: 1, backgroundColor: 'white',

                            }}>
                                <Box
                                    sx={{
                                        mx: 'auto',
                                        p: 2,
                                    }}
                                >
                                    <Stack spacing={3} direction="row" alignBoxs="center">

                                        <Avatar alt='John s smith' sx={{ width: 55, height: 55 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPQmH3gZw6BGda2FbR4lpxXr09NZsI_axIg&usqp=CAU' />
                                        <Avatar alt='John s smith' sx={{ width: 55, height: 55 }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQPQmH3gZw6BGda2FbR4lpxXr09NZsI_axIg&usqp=CAU' />


                                    </Stack>

                                </Box>

                            </Box>

                        </Box>
                        {/* Station session heading */}
                        <Box >
                            <Grid container sx={{ justifyContent: 'end', backgroundColor: '#D2DEE8', alignItems: 'center' }}>
                                <Grid item xs={6}>

                                    <Typography variant='h6' sx={{ fontSize: 16 }} >Station  Sessions</Typography></Grid>
                                <Grid item xs={1}>
                                    <IconButton>
                                        <AccessTimeOutlinedIcon type="button" />
                                    </IconButton>
                                </Grid>



                            </Grid>

                        </Box>
                        {/* Station session 1 */}
                        <Box >

                            <Box sx={{
                                flexGrow: 1, backgroundColor: 'white', '&:hover': {
                                    backgroundColor: '#E8F0F8',
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}>
                                <Box
                                    sx={{
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
                                            <Typography variant='body2'>04/04 2:25 AM  4  <IconButton>
                                                <ArrowDropDownCircleIcon /></IconButton>  </Typography>
                                        </Stack>
                                        <Typography variant='caption' sx={{ paddingLeft: 45 }}>Bi-Plane</Typography>

                                        <FileDownloadOutlinedIcon />
                                    </Stack>
                                    <Typography>Our new Bi-plane Imaging suite is completed. It is state of the art. We received donations for most of this cost. This will greatly improved imaging services and enhance patient care. Thanks</Typography>

                                </Box>

                            </Box>

                        </Box>
                        {/* Station session 2 */}
                        <Box >

                            <Box sx={{
                                flexGrow: 1, backgroundColor: 'white', '&:hover': {
                                    backgroundColor: '#E8F0F8',
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
                                            <Typography variant='body2'> 2:25 AM
                                            </Typography>
                                        </Stack>
                                        <Typography sx={{ paddingLeft: 47 }}><Button variant='outlined' size='small'>reply</Button></Typography>
                                        <ArrowCircleRightIcon />
                                    </Stack>
                                    <Typography>Our new Bi-plane Imaging suite is completed. It is state of the art. We received donations for most of this cost. This will greatly improved imaging services and enhance patient care. Thanks</Typography>

                                </Box>

                            </Box>

                        </Box>
                        {/* Station update */}
                        <Box >
                            <Stack >
                                <Accordion direction='row' sx={{ justifyContent: 'center', mb: 1, backgroundColor: '#D2DEE8', alignItems: 'center' }}>
                                    <AccordionSummary id='panel1-header' aria-controls='panel1-content' expandIcon={<AddCircleIcon />}>
                                        <Typography variant='h6' sx={{ paddingLeft: 38, fontSize: 16 }} >Station  Updates</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ height: '100px' }}>
                                        <Typography></Typography>
                                    </AccordionDetails>
                                </Accordion>
                                {/* <Typography   >Station  Updates</Typography>
                                <Box sx={{ paddingLeft: 32 }}>
                                    <IconButton>
                                        <AddCircleIcon type="button" />
                                    </IconButton>


                                </Box> */}
                            </Stack>

                        </Box>
                        {/* Recognize */}
                        <Box >
                            <Stack >
                                <Accordion direction='row' sx={{ justifyContent: 'end', mb: 1, backgroundColor: '#D2DEE8', alignItems: 'end' }}>
                                    <AccordionSummary id='panel1-header' aria-controls='panel1-content' expandIcon={<AddCircleIcon />}>
                                        <Typography variant='h6' sx={{ paddingLeft: 34, fontSize: 16 }} >Recognize Your Associate</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ height: '100px' }}>
                                        <Typography></Typography>
                                    </AccordionDetails>
                                </Accordion>
                                {/* <Typography   >Station  Updates</Typography>
                                <Box sx={{ paddingLeft: 32 }}>
                                    <IconButton>
                                        <AddCircleIcon type="button" />
                                    </IconButton>


                                </Box> */}
                            </Stack>

                        </Box>
                        {/* Rate this station */}
                        <Box >
                            <Stack >
                                <Accordion direction='row' sx={{ justifyContent: 'end', mb: 1, backgroundColor: '#D2DEE8', alignItems: 'end' }}>
                                    <AccordionSummary id='panel1-header' aria-controls='panel1-content' expandIcon={<AddCircleIcon />}>
                                        <Typography variant='h6' sx={{ paddingLeft: 38, fontSize: 16 }} >Rate this station</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ height: '100px' }}>
                                        <Typography></Typography>
                                    </AccordionDetails>
                                </Accordion>
                                {/* <Typography   >Station  Updates</Typography>
                                <Box sx={{ paddingLeft: 32 }}>
                                    <IconButton>
                                        <AddCircleIcon type="button" />
                                    </IconButton>


                                </Box> */}
                            </Stack>

                        </Box>

                    </Box>
                </Box>
                {/* Second Column */}
                <Box width='37%'>
                    <Box sx={{ backgroundColor: '#ffff' }}  >
                        {/* Station Photos */}
                        <Box>
                            <Grid container sx={{ justifyContent: 'end', backgroundColor: '#DDD7FF', alignItems: 'center' }}>
                                <Grid item xs={6}>
                                    <Typography variant='h6' sx={{ fontSize: 16 }} >Station Photos</Typography></Grid>
                                <Grid item xs={1}>
                                    <IconButton>
                                        <ArrowDropDownCircleIcon /></IconButton>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box >

                            <Box sx={{
                                flexGrow: 1, backgroundColor: 'white'
                            }}>
                                <Box
                                    sx={{
                                        mx: 'auto',
                                        p: 2,
                                    }}
                                >
                                    <Stack spacing={1} direction="row" height="200px" sx={{ justifyContent: 'center' }}>

                                        <Typography noWrap variant='body' sx={{}}>No Photos Yet</Typography>


                                    </Stack>

                                </Box>

                            </Box>

                        </Box>
                        {/* Station board progress report */}
                        <Box >
                            <Grid container sx={{ justifyContent: 'end', backgroundColor: '#D2DEE8', alignItems: 'center' }}>
                                <Grid item xs={3}>
                                    <IconButton>
                                        <Avatar sx={{ width: 25, height: 25, bgcolor: 'black' }} >ab</Avatar>
                                    </IconButton>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography variant='h6' sx={{ fontSize: 16 }} > Station Boards Progress Report</Typography>

                                </Grid>
                                <Grid item xs={1}>
                                    <IconButton>
                                        <ArrowDropDownCircleIcon type="button" />
                                    </IconButton>


                                </Grid>
                            </Grid>

                        </Box>
                        <Box >

                            <Box sx={{
                                flexGrow: 1, backgroundColor: 'white'
                            }}>
                                <Box
                                    sx={{
                                        mx: 'auto',
                                        p: 2,
                                    }}
                                >
                                    <Stack spacing={1} direction="row" height="100px" sx={{ justifyContent: 'center' }}>

                                        <Typography noWrap variant='body' sx={{}}> <Box >

                                            <Box sx={{
                                                flexGrow: 1, backgroundColor: 'white'
                                            }}>
                                                <Box
                                                    sx={{
                                                        mx: 'auto',
                                                        p: 2,
                                                    }}
                                                >
                                                    <Stack spacing={1} direction="row" height="150px" sx={{ justifyContent: 'center' }}>

                                                        <Typography noWrap variant='body' sx={{}}>No Project Boards</Typography>


                                                    </Stack>

                                                </Box>

                                            </Box>

                                        </Box></Typography>


                                    </Stack>

                                </Box>

                            </Box>

                        </Box>
                        {/* Station Files */}
                        <Box >
                            <Grid container sx={{ justifyContent: 'end', backgroundColor: '#D2DEE8', alignItems: 'encenter' }}>
                                <Grid item xs={7}>
                                    <Typography variant='h6' sx={{ fontSize: 16 }} > Station Files</Typography>
                                </Grid>
                            </Grid>

                        </Box>
                        <Box >

                            <Box sx={{
                                flexGrow: 1, backgroundColor: 'white'
                            }}>
                                <Box
                                    sx={{
                                        mx: 'auto',
                                        p: 2,
                                    }}
                                >
                                    <Stack spacing={1} direction="row" height="100px" sx={{ justifyContent: 'center' }}>

                                        <Typography noWrap variant='body' sx={{}}> <Box >

                                            <Box sx={{
                                                flexGrow: 1, backgroundColor: 'white'
                                            }}>
                                                <Box
                                                    sx={{
                                                        mx: 'auto',
                                                        p: 2,
                                                    }}
                                                >


                                                </Box>

                                            </Box>

                                        </Box></Typography>


                                    </Stack>

                                </Box>

                            </Box>

                        </Box>
                        {/* Task Board */}
                        <Box >
                            <Grid container sx={{ justifyContent: 'end', backgroundColor: '#D2DEE8', alignItems: 'center' }}>
                                <Grid item xs={5}>
                                    <IconButton>
                                        <MapsUgcIcon />
                                    </IconButton>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='h6' sx={{ fontSize: 16 }} > Task Boards</Typography></Grid>
                                <Grid item xs={1}>
                                    <IconButton>
                                        <SignalCellularAltIcon type="button" />
                                    </IconButton>


                                </Grid>
                            </Grid>

                        </Box>
                        <Box >

                            <Box sx={{
                                flexGrow: 1, backgroundColor: 'white'
                            }}>
                                <Box
                                    sx={{
                                        mx: 'auto',
                                        p: 2,
                                    }}
                                >
                                    <Stack spacing={1} direction="row" height="50px" sx={{ justifyContent: 'center' }}>

                                        <Typography noWrap variant='body' sx={{}}> <Box >

                                            <Box sx={{
                                                flexGrow: 1, backgroundColor: 'white'
                                            }}>
                                                <Box
                                                    sx={{
                                                        mx: 'auto',
                                                        p: 2,
                                                    }}
                                                >
                                                    <Stack spacing={1} direction="row" height="50px" sx={{ justifyContent: 'center' }}>

                                                        <Typography noWrap variant='body' sx={{}}>No Project Tasks entered</Typography>


                                                    </Stack>

                                                </Box>

                                            </Box>

                                        </Box></Typography>


                                    </Stack>

                                </Box>

                            </Box>

                        </Box>
                        {/* Add view/station meassgaes */}
                        <Box >
                            <Grid container sx={{ justifyContent: 'end', backgroundColor: '#D2DEE8', alignItems: 'center' }}>
                                <Grid item xs={8}>
                                    <Typography variant='h6' sx={{  fontSize: 16 }} > Add/Views Station Messages</Typography>
                                </Grid>
                            </Grid>

                        </Box>
                        <Box >

                            <Box sx={{
                                flexGrow: 1, backgroundColor: 'white',

                            }}>
                                <Box
                                    sx={{
                                        mx: 'auto',
                                        p: 2,
                                    }}
                                >
                                    <Grid container   alignBoxs="center" justifyContent={'center'} gap={2}>
                                        <Grid item xs={4} sx={{ width: 230, height: 65, backgroundColor: '#CCCCCC', display: 'flex' }}  ><Avatar sx={{ m: 2 }}><MailOutlinedIcon /></Avatar><Avatar sx={{ m: 2 }}><MailOutlinedIcon /></Avatar></Grid>
                                        <Grid item xs={2} sx={{ width: 100, height: 65, backgroundColor: '#CCCCCC', borderRadius: 6 }} ></Grid>
                                        <Grid item xs={4} sx={{ width: 230, height: 65, backgroundColor: '#CCCCCC', display: 'flex' }} ><Avatar sx={{ m: 2 }}><MicOutlinedIcon /></Avatar><Avatar sx={{ m: 2 }}><MapsUgcIcon /></Avatar></Grid>


                                    </Grid>

                                </Box>

                            </Box>

                        </Box>

                    </Box>

                </Box>
            </Stack>
        </Box>


    )
}
