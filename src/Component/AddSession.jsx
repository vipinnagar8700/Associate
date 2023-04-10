import { Box, Stack, Grid, OutlinedInput, FormControl, Divider, FormControlLabel, Radio } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import JoditEditor from 'jodit-react';
import React, { useState, useRef } from 'react';
import MessageIcon from '@mui/icons-material/Message';
import SendIcon from '@mui/icons-material/Send';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import Form from 'react-bootstrap/Form';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import MarkUnreadChatAltOutlinedIcon from '@mui/icons-material/MarkUnreadChatAltOutlined';

export const AddSession = ({ placeholder }) => {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    // const config = useMemo(
    //     {
    //         readonly: false, // all options from https://xdsoft.net/jodit/docs/,
    //         placeholder: placeholder || 'Start typings...'
    //     },
    //     [placeholder]
    // );
    // const [show, setShow] = useState(true)

    const [val, setVal] = useState([]);
    const handleAdd = () => {
        const abc = [...val, []]
        setVal(abc)
    }
    const handleChange = (onChangeValue, i) => {
        const inputdata = [...val]
        inputdata[i] = onChangeValue.target.value;
        setVal(inputdata)
    }

    const handleDelete = (i) => {
        const deleteVal = [...val]
        deleteVal.splice(i)

        setVal(deleteVal)
    }
    console.log(val, "data-")



    return (
        <Box>
            <Box >
                <Stack>
                    <Box m={4} width='80%' >
                        <Grid container sx={{ justifyContent: 'end', backgroundColor: '#DDD7FF', alignItems: 'center' }}>

                            <Grid item xs={6} sx={{ justifyContent: 'end' }}>
                                <Typography variant='h6' sx={{ fontSize: 17 }} > Add Session</Typography></Grid>
                            <Grid item xs={0.5}
                            >
                                <IconButton>
                                    <Avatar sx={{ width: 25, height: 25, bgcolor: 'white', color: 'black' }} >x</Avatar>
                                </IconButton>
                            </Grid>

                        </Grid>
                        <Box >
                            <Grid container sx={{ justifyContent: 'end', backgroundColor: '#ffff' }}>
                                <Grid item xs={6}>
                                    <Box >
                                        <Box >
                                            <Stack m={1} sx={{ backgroundColor: '#DDD7FF', borderRadius: 3 }}>
                                                <Box border='1px solid #A6A6A6' m={1} bgcolor='white' minHeight='260px'>
                                                    <JoditEditor
                                                        ref={editor}
                                                        value={content}
                                                        // config={config}
                                                        tabIndex={1} // tabIndex of textarea
                                                        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                                        onChange={newContent => { }}
                                                    />
                                                    <Divider />
                                                </Box>
                                                <Grid container m={1}>
                                                    <Grid item xs={1} >
                                                        <IconButton><MessageIcon /></IconButton>
                                                    </Grid>
                                                    <Grid item xs={1}>

                                                        <FormControlLabel value="" control={<Radio />} />
                                                    </Grid>
                                                    <Grid item xs={2}>
                                                        <IconButton><ArrowDropDownCircleIcon onClick={() => handleAdd()} /></IconButton>
                                                    </Grid>
                                                    <Grid item xs={1}>
                                                        <IconButton><MobileScreenShareIcon /></IconButton>
                                                    </Grid>
                                                    <Grid item xs={5}>
                                                        <FormControlLabel value="" control={<Radio />} />
                                                    </Grid>
                                                    <Grid item xs={1}>
                                                        <IconButton><SendIcon color='primary' /></IconButton>
                                                    </Grid>
                                                </Grid>
                                                {val.map((data, i) => {
                                                    return (
                                                        <Grid container marginLeft={3} alignItems="center">

                                                            <Grid item>
                                                                <Form.Group controlId="formFile" className="mb-3">
                                                                    <Form.Control type="file" lable="No file choosen" />
                                                                    <Form.Label label="Choose a file"></Form.Label>
                                                                </Form.Group>
                                                            </Grid>
                                                            <Grid item>

                                                                <Form.Group controlId="exampleForm.ControlInput1">
                                                                    <Form.Control type="text" onClick={e => handleChange(e, i)} placeholder="Name of file" size="medium" />
                                                                </Form.Group>
                                                            </Grid>
                                                            <Grid item >
                                                                <IconButton onClick={() => handleDelete(i)}><Avatar sx={{ backgroundColor: 'red' }} variant="rounded" size="small" >-</Avatar></IconButton>
                                                            </Grid>
                                                        </Grid>
                                                    )
                                                })}
                                            </Stack>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={6} >
                                    <Grid container m={1} width='auto' sx={{ justifyContent: 'end', backgroundColor: '#DDD7FF', alignItems: 'center' }}>
                                        <Grid item xs={5}
                                        >
                                            <IconButton>
                                                <AddCircleIcon />
                                            </IconButton>
                                        </Grid>
                                        <Grid item xs={7} sx={{ justifyContent: 'end' }}>
                                            <Typography variant='h6' sx={{ fontSize: 17 }} > Add Associates</Typography></Grid>


                                    </Grid>
                                    <Grid container m={1} spacing={2}>
                                        <Grid item>
                                            <Typography variant='body'>Search by Name:</Typography>
                                        </Grid>
                                        <Grid item  >
                                            <FormControl sx={{ width: '20vh' }}  >
                                                <OutlinedInput placeholder="Search Associates" size='small' />
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Box>
                        <Box>
                            <Stack backgroundColor='#C7C7C7' width="200px">
                                <Box direction='row'>
                                    <IconButton><MailOutlinedIcon sx={{color:'#ffff'}}/></IconButton>
                                    <IconButton><MailOutlinedIcon sx={{color:'#ffff'}}/></IconButton>
                                    <IconButton><MicOutlinedIcon sx={{color:'#ffff'}}/></IconButton>
                                    <IconButton><MarkUnreadChatAltOutlinedIcon sx={{color:'#ffff'}}/></IconButton>
                                    <IconButton><AlternateEmailOutlinedIcon sx={{color:'#ffff'}}/></IconButton>
                                </Box>
                            </Stack>
                        </Box>
                    </Box>


                </Stack>

            </Box>
            <Box>

            </Box>
        </Box>
    )

}
