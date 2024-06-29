import React, { useEffect, useState } from 'react'
import { Delete } from '@mui/icons-material'
import Checkbox from '@mui/material/Checkbox';
import { Box, Divider, IconButton, Stack, Typography } from '@mui/material'
import { red, teal } from '@mui/material/colors';
import useMediaQuery from "@mui/material/useMediaQuery";

const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '30em',
    height: '12em',
    bgcolor: teal[500],
    marginTop: '0.5em',
    marginBottom: '0.5em',
    border: '2px solid'
    // bgcolor: teal[100],
}

export const CreateTodo = ({ checked, name, created_at, importance}) => {
    const isMobile = useMediaQuery("(max-width: 822px)")
    const [isChecked, setIsChecked] = useState(checked)

    const handleChecked = () => {
        setIsChecked(check => !check)
    }

  return (
    <>
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: isMobile ? "100%" : "30em",
            bgcolor: teal[50],
            borderRadius: '0.5em',
            marginTop: '0.5em',
            marginBottom: '0.5em',
            border: `1px solid ${teal[100]}`,
            }}>
            <Stack
            sx={{width: "100%", display: "flex", flexDirection: "column",
            }}>
                <Stack sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Checkbox checked={isChecked} onChange={() => handleChecked()} />
                    <Typography variant='body2'
                    sx={{textDecoration: isChecked? "line-through solid teal 1px": ''}}>
                        {name}
                    </Typography>
                </Stack>
                <Typography variant='body2' color="textSecondary"
                sx={{fontSize: '.7em', marginLeft: "4em",
                    
                }}>
                    {created_at}
                </Typography>

            </Stack>
            <IconButton disabled={isChecked ? false : true}>
                <Delete sx={{color: isChecked ? red[400] : 'gray'}} />
            </IconButton>
        </Box>
        {/* <Divider sx={{ width: isMobile ? "100%": "25em"}} />  */}
    </>
  )
}
