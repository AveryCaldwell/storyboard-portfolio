// import * as React from 'react';
// import * as Material from '@mui/material';
// import avesLogo from '../assets/aves-pizza.png';

// // import * as Icons from '@mui/icons-material'
// // ICONS
// import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
// import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
// import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined';
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
// import MenuIcon from '@mui/icons-material/Menu';

// import { useState } from 'react';

// // const drawerWidth = 120;
// const data = [
//     {
//         name: 'About',
//         icon: <AlternateEmailOutlinedIcon />,
//     },
//     { name: 'Contact', icon: <EmailOutlinedIcon /> },
//     { name: 'Projects', icon: <FolderCopyOutlinedIcon /> },
//     { name: 'Resume', icon: <DescriptionOutlinedIcon /> },
//     { name: 'Skills', icon: <FolderCopyOutlinedIcon /> },
// ];

// const menuStyle = [
//     {
//         fontSize: '10px',
//         // FIXME: theming
//         color: 'light',
//         textAlign: 'center',
//         padding: '5px',
//         minWidth: '20px',
//         marginTop: '8px',
//         marginRight: 'auto',
//         marginLeft: 'auto',
//     },
// ];

// function Header(props) {
//     // const mediaSmall = Material.useMediaQuery('(min-width:400px)');
//     const handleClick = (targetPage) => {
//         props.setCurrentPage(targetPage);
//     };

//     // Function to get nav bar tabs
//     const getList = () => (
//         <div style={{ width: 120 }} onClick={() => setOpen(false)}>
//             {data.map((item, index) => (
//                 <Material.Box sx={menuStyle}>
//                     <Material.ListItem
//                         button
//                         key={index}
//                         sx={menuStyle}
//                         onClick={() => handleClick(item.name)}
//                     >
//                         <Material.ListItemIcon sx={menuStyle}>
//                             {item.icon}
//                         </Material.ListItemIcon>
//                         <Material.ListItemText primary={item.name} />
//                     </Material.ListItem>
//                 </Material.Box>
//             ))}
//         </div>
//     );

//     return (
//         <>
//             <Material.Drawer
//                 variant='permanent'
//                 open={open}
//                 anchor={'left'}
//                 onClose={() => setOpen(false)}
//                 sx={{
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                 }}
//             >
//                 {/* ===============LOGO=============== */}
//                 <Material.Box
//                     sx={{
//                         display: 'flex',
//                         margin: 5,
//                         cursor: 'pointer',
//                         width: '250px',
//                     }}
//                 >
//                     <img
//                         src={avesLogo}
//                         style={{
//                             height: '150px',
//                             width: '150px',
//                             backgroundColor: 'dark',
//                             borderRadius: 300,
//                             border: '2px solid #e9f4e9',
//                             boxShadow: 2,
//                             left: 'calc(50% - 75px)',
//                             marginLeft: 'auto',
//                             marginRight: 'auto',
//                             cursor: 'pointer',
//                         }}
//                         alt='AvesLogo'
//                     />
//                 </Material.Box>

//                 {/* ===============TOP MENU=============== */}
//                 <Material.Typography
//                     variant='h6'
//                     component='div'
//                     sx={{
//                         marginRight: 'auto',
//                         marginLeft: 'auto',
//                         // left: 0,
//                         fontWeight: 'light',
//                         cursor: 'pointer',
//                     }}
//                     onClick={() => handleClick('Landing')}
//                 >
//                     <div
//                         style={{
//                             fontSize: '14px',
//                             marginLeft: '15px',
//                             marginBottom: '30px',
//                         }}
//                     >
//                         <strong>Avery Caldwell</strong>
//                     </div>
//                 </Material.Typography>
//                 <Material.Divider />

//                 {/* ===============BOTTOM MENU=============== */}
//                 <Material.Box sx={menuStyle}>
//                     {getList()}
//                     <MenuIcon />
//                 </Material.Box>
//             </Material.Drawer>
//         </>
//     );
// }

// export default Header;
