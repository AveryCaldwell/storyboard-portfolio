import * as React from 'react';
import * as Material from '@mui/material';
// import * as Icons from '@mui/icons-material';
import avesLogo from '../assets/aves-pizza.png';
import { styled, useTheme } from '@mui/material/styles';

// ICONS
// FIXME could not format icons like rest of material components
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const drawerWidth = 250;

// TRANSITION FOR OPEN AND CLOSE NAVBAR
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
// NAVBAR DATA
const data = [
    {
        name: 'About',
        icon: <AlternateEmailOutlinedIcon />,
    },
    { name: 'Contact', icon: <EmailOutlinedIcon /> },
    { name: 'Projects', icon: <FolderCopyOutlinedIcon /> },
    { name: 'Resume', icon: <DescriptionOutlinedIcon /> },
    { name: 'Skills', icon: <FolderCopyOutlinedIcon /> },
];
// STYLING
const menuStyle = [
    {
        fontSize: '10px',
        // FIXME: theming
        color: 'light',
        textAlign: 'center',
        padding: '5px',
        minWidth: '20px',
        marginTop: '8px',
        marginRight: 'auto',
        marginLeft: 'auto',
    },
];

// Contains the Menu icons for open and close
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

// Function to render the side navbar
function Navbar(props) {
    const handleClick = (targetPage) => {
        props.setCurrentPage(targetPage);
    };

    // Function to get nav bar tabs
    const getList = () => (
        <div onClick={() => setOpen(false)}>
            {data.map((item, index) => (
                <Material.Box sx={menuStyle}>
                    <Material.ListItem
                        button
                        key={index}
                        sx={menuStyle}
                        onClick={() => handleClick(item.name)}
                    >
                        <Material.ListItemIcon sx={menuStyle}>
                            {item.icon}
                        </Material.ListItemIcon>
                        <Material.ListItemText primary={item.name} />
                    </Material.ListItem>
                </Material.Box>
            ))}
        </div>
    );
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        // ========= Entire Navbar Starts =================
        <Material.Box
            className='pageBox'
            sx={{ display: 'flex', overflow: 'none' }}
        >
            <Material.CssBaseline />
            {/* =============== APP BAR =============== */}
            <AppBar position='fixed' open={open}>
                <Material.Toolbar>
                    <Material.IconButton
                        color='inherit'
                        aria-label='open drawer'
                        onClick={handleDrawerOpen}
                        edge='start'
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </Material.IconButton>
                    <Material.Typography variant='h6' noWrap component='div'>
                        <strong>Avery Caldwell</strong>
                    </Material.Typography>
                    <br />
                    <Material.Typography
                        variant='subtitle2'
                        noWrap
                        component='div'
                        sx={{ paddingLeft: 2 }}
                    >
                        Full Stack Developer
                    </Material.Typography>
                </Material.Toolbar>
            </AppBar>
            {/* ===============TOP MENU=============== */}
            <Material.Drawer
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant='persistent'
                anchor='left'
                open={open}
            >
                <DrawerHeader>
                    <Material.IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </Material.IconButton>
                </DrawerHeader>
                <Material.Divider />
                <Material.Box
                    className='navBox'
                    sx={{
                        display: 'flex',
                        cursor: 'pointer',
                        width: '250px',
                    }}
                >
                    {/* ==========LOGO========= */}
                    <img
                        src={avesLogo}
                        style={{
                            height: '150px',
                            width: '150px',
                            backgroundColor: 'dark',
                            borderRadius: 300,
                            border: '2px solid #e9f4e9',
                            boxShadow: 2,
                            left: 'calc(50% - 75px)',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            cursor: 'pointer',
                            marginBottom: '20px',
                        }}
                        onClick={() => {
                            handleClick('Landing');
                            setOpen(false);
                        }}
                        alt='AvesLogo'
                    />
                </Material.Box>
                <Material.Typography
                    variant='h6'
                    component='div'
                    sx={{
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        // left: 0,
                        fontWeight: 'light',
                        cursor: 'pointer',
                    }}
                    onClick={() => {
                        handleClick('Landing');
                        setOpen(false);
                    }}
                >
                    <div
                        style={{
                            fontSize: '14px',
                            marginLeft: '15px',
                            marginBottom: '30px',
                        }}
                    >
                        <strong>Avery Caldwell</strong>
                    </div>
                </Material.Typography>
                <Material.Divider />
                {/* =============== BOTTOM MENU=============== */}
                <Material.Box sx={menuStyle}>{getList()}</Material.Box>
            </Material.Drawer>
        </Material.Box>
    );
}

export default Navbar;
