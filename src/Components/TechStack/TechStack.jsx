import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {techList} from "./techList.jsx";
import {Chip} from "@mui/material";


export default function TechStack() {

    return (
        <Box sx={{flexGrow: 1, maxWidth: 752}}>

            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{mt: 3}} variant="h5" component="div">
                        Technologies:
                    </Typography>


                    <List>
                        {techList.map((item) =>
                            item.id % 2 !== 0 ? (
                                <ListItem key={item.id}>
                                    <ListItemAvatar>{item.icon}</ListItemAvatar>
                                    <ListItemText
                                        primary={item.type}
                                        secondary={item.name.map((n, index) => (
                                            <Chip
                                                key={index}
                                                label={n}
                                                sx={{
                                                    mx: '0.5rem',
                                                    mt: '0.5rem',
                                                    color: '#D0D0D0D1',
                                                    '& .MuiChip-label': {
                                                        color: '#D0D0D0D1',
                                                    },
                                                }}
                                            />
                                        ))}
                                    />
                                </ListItem>
                            ) : null
                        )}
                    </List>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography sx={{mt: 7}} variant="h5" component="div">
                    </Typography>

                    <List>
                        { techList.map(item => (
                            item.id % 2 === 0 ? (
                            <ListItem key={item.id} >
                                <ListItemAvatar>
                                    {item.icon}
                                </ListItemAvatar>
                                <ListItemText primary={item.type} secondary={ item.name.map((n, index) => (
                                    <Chip key={index}
                                          label={n}
                                          sx={{
                                              mx: '0.5rem',
                                              mt: '0.5rem',
                                              color: '#D0D0D0D1',
                                              '& .MuiChip-label': {
                                                  color: '#D0D0D0D1',
                                              },
                                          }}
                                    />
                                )) }/>
                            </ListItem>
                            ) : null
                        )) }
                    </List>

                </Grid>


            </Grid>
        </Box>
    );
}