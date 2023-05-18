import * as React from 'react';
import * as Material from '@mui/material';
import * as IconsMaterial from '@mui/icons-material';
import avesLogo from '../assets/aves-pizza.png';

function HeaderMenu(props) {
    //  The menu when it is clicked
    const [anchorEl, setAnchorEl] = React.useState(null);
    //  Tracks whether the menu is open or not,
    const open = Boolean(anchorEl);
    // Updates the current page when a menu item is clicked
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    //  called when the menu is closed
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <Material.Tooltip title='Menu'>
                {/* Menu Icon that appears at certain media size */}
                <Material.IconButton
                    size='large'
                    edge='start'
                    color='inherit'
                    aria-label='menu'
                    sx={{ mr: 2 }}
                    onClick={handleClick}
                >
                    <IconsMaterial.Menu
                        sx={{
                            color: 'white',
                        }}
                    />
                </Material.IconButton>
            </Material.Tooltip>

            <Material.Menu
                anchorEl={anchorEl}
                id='account-menu'
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            >
                {/* About tab in nav bar renders About component on click*/}
                <Material.MenuItem
                    onClick={() => props.setCurrentPage('About')}
                >
                    <Material.ListItemIcon>
                        <IconsMaterial.Person fontSize='small' />
                    </Material.ListItemIcon>
                    About Me
                </Material.MenuItem>
                {/* Portfolio tab in nav bar renders Portfolio component on click*/}
                <Material.MenuItem
                    onClick={() => props.setCurrentPage('Portfolio')}
                >
                    <Material.ListItemIcon>
                        <IconsMaterial.CollectionsBookmark fontSize='small' />
                    </Material.ListItemIcon>
                    Portfolio
                </Material.MenuItem>
                {/* Contact tab in nav bar renders Contact component on click*/}
                <Material.MenuItem
                    onClick={() => props.setCurrentPage('Contact')}
                >
                    <Material.ListItemIcon>
                        <IconsMaterial.ContactPage fontSize='small' />
                    </Material.ListItemIcon>
                    Contact
                </Material.MenuItem>
                {/* Resume tab in nav bar renders Resume component on click*/}
                <Material.MenuItem
                    onClick={() => props.setCurrentPage('Resume')}
                >
                    <Material.ListItemIcon>
                        <IconsMaterial.DocumentScanner fontSize='small' />
                    </Material.ListItemIcon>
                    Resume
                </Material.MenuItem>
            </Material.Menu>
        </React.Fragment>
    );
}
// Function to render Header component
function Header(props) {
    const buttonSX = {
        color: 'white',
        position: 'relative',

        '&:before': {
            content: "''",
            position: 'absolute',
            width: '0',
            height: '2px',
            bottom: '-3px',
            left: '50%',
            transform: 'translate(-50%,0%)',
            backgroundColor: 'white',
            visibility: 'hidden',
            transition: 'all 0.3s ease-in-out',
        },
        '&:hover:before': {
            visibility: 'visible',
            width: '100%',
        },
    };
    const buttonSXSelected = {
        color: 'white',
        position: 'relative',
        borderBottom: '2px solid white',
        borderRadius: 0,
        bottom: -2,
    };
    //  Media queries
    const mediaSize = Material.useMediaQuery('(min-width:900px)');
    const mediaSmall = Material.useMediaQuery('(min-width:400px)');
    return (
        <header className='header'>
            <Material.Box sx={{ flexGrow: 1 }}>
                <Material.AppBar position='fixed' sx={{ height: '64px' }}>
                    {/* Logo image */}
                    <Material.Toolbar>
                        <img
                            src={avesLogo}
                            style={{
                                height: '50px',
                                width: '50px',
                                // FIXME: theming
                                backgroundColor: 'dark',
                                borderRadius: 300,
                                border: '2px solid #e9f4e9',
                                boxShadow: 2,
                                marginRight: 10,
                                cursor: 'pointer',
                            }}
                            alt='Aves Logo'
                            onClick={() => props.setCurrentPage('Landing')}
                        />
                        {/* Logo text */}
                        <Material.Typography
                            variant='h6'
                            component='div'
                            sx={{
                                marginRight: 'auto',
                                left: 0,
                                // FIXME: theming
                                fontWeight: 'light',
                                cursor: 'pointer',
                            }}
                            onClick={() => props.setCurrentPage('Landing')}
                        >
                            <div
                                style={{
                                    display: mediaSmall ? 'block' : 'none',
                                }}
                            >
                                <strong>Avery Caldwell</strong>, Full-Stack
                                Developer
                            </div>
                            {/* Navigation */}
                        </Material.Typography>
                        {mediaSize === true && (
                            // conditional rendering for different media sizes
                            <div>
                                <Material.Button
                                    color='inherit'
                                    onClick={() =>
                                        props.setCurrentPage('About')
                                    }
                                    sx={
                                        props.currentPage === 'About'
                                            ? buttonSXSelected
                                            : buttonSX
                                    }
                                >
                                    About Me
                                </Material.Button>
                                <Material.Button
                                    color='inherit'
                                    onClick={() =>
                                        props.setCurrentPage('Portfolio')
                                    }
                                    sx={
                                        props.currentPage === 'Portfolio'
                                            ? buttonSXSelected
                                            : buttonSX
                                    }
                                >
                                    Portfolio
                                </Material.Button>
                                <Material.Button
                                    color='inherit'
                                    onClick={() =>
                                        props.setCurrentPage('Contact')
                                    }
                                    sx={
                                        props.currentPage === 'Contact'
                                            ? buttonSXSelected
                                            : buttonSX
                                    }
                                >
                                    Contact
                                </Material.Button>
                                <Material.Button
                                    color='inherit'
                                    onClick={() =>
                                        props.setCurrentPage('Resume')
                                    }
                                    sx={
                                        props.currentPage === 'Resume'
                                            ? buttonSXSelected
                                            : buttonSX
                                    }
                                >
                                    Resume
                                </Material.Button>
                            </div>
                        )}
                        {mediaSize !== true && (
                            <HeaderMenu setCurrentPage={props.setCurrentPage} />
                        )}
                    </Material.Toolbar>
                </Material.AppBar>
            </Material.Box>
        </header>
    );
}

export default Header;
