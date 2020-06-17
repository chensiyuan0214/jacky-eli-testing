import React from "react";
import Box from "@material-ui/core/Box";
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';
import Badge from "@material-ui/core/Badge";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    bar: {
        maxWidth: '300px'
    },
    large: {
        width: '60px',
        height: '60px'
    }
});

export interface BarData {
    notifications?: number;
    mail?: number;
    avatarPath?: string;
}

export const Bar : React.FC<BarData> = ( data : BarData ) => {

    const classes = useStyles();

    return (
        
        <Box border={1} borderColor="primary.main" m={1} className={ classes.bar } p={ 1 }>
            <Grid container direction="row" justify="space-evenly" alignItems="center" >

                <Grid item>
                    <IconButton  color="primary" aria-label="More Info">
                        <InfoIcon/>
                    </IconButton>
                </Grid>

                <Grid item>
                    <IconButton color="primary" aria-label="Settings">
                        <SettingsIcon/>
                    </IconButton>
                </Grid>
                    
                <Grid item>
                    <IconButton color="primary" aria-label="Notifications">
                        <Badge badgeContent={ data.notifications } color="error" anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}} >
                            <NotificationsIcon/>
                        </Badge>
                    </IconButton>
                </Grid>
                    
                <Grid item>
                    <IconButton color="primary" aria-label="Mail">
                        <Badge badgeContent={ data.mail } color="error" anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}} >
                            <MailIcon/>
                        </Badge>
                    </IconButton>
                </Grid>

                <Box ml={1.5}>
                    <Grid item>
                        <Avatar src={ data.avatarPath } className={ classes.large } />
                    </Grid>
                </Box>
                

            </Grid>
        </Box>

    );
};
