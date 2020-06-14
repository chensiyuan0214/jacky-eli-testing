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

const useStyles = makeStyles({
    bar: {
        maxWidth: '270px'
    },
    large: {
        width: '50px',
        height: '50px'
    }
});

export interface BarData {
    notifications?: number;
    mail?: number;
    avatarPath?: string;
}

export const Bar : React.FC<BarData> = ( data ) => {

    const classes = useStyles();

    return (
        <Box border={1} borderColor="primary.main" m={1} className={ classes.bar } >
            <IconButton  color="primary" aria-label="More Info">
                <InfoIcon/>
            </IconButton>
            <IconButton color="primary" aria-label="Settings">
                <SettingsIcon/>
            </IconButton>
            <IconButton color="primary" aria-label="Notifications">
                <Badge badgeContent={ data.notifications } color="error" anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}} >
                    <NotificationsIcon/>
                </Badge>
            </IconButton>
            <IconButton color="primary" aria-label="Mail">
                <Badge badgeContent={ data.mail } color="error" anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}} >
                    <MailIcon/>
                </Badge>
            </IconButton>
            <IconButton>
                <Avatar src= { data.avatarPath } className={ classes.large } />
            </IconButton>

        </Box>
    );
};
