import * as React from "react";
import * as Material from "@mui/material";
import avesLogo from "../assets/aves-pizza.png";

// import * as Icons from '@mui/icons-material'
// ICONS
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import { useState } from "react";

// const drawerWidth = 120;
const data = [
  {
    name: "About",
    icon: <AlternateEmailOutlinedIcon />,
  },
  { name: "Contact", icon: <EmailOutlinedIcon /> },
  { name: "Projects", icon: <FolderCopyOutlinedIcon /> },
  { name: "Resume", icon: <DescriptionOutlinedIcon /> },
  { name: "Skills", icon: <FolderCopyOutlinedIcon /> },
];
function Header(props) {
  const mediaSmall = Material.useMediaQuery("(min-width:400px)");
  const [open, setOpen] = useState(false);
  const getList = () => (
    <div style={{ width: 120 }} onClick={() => setOpen(false)}>
      {data.map((item, index) => (
        <Material.ListItem button key={index}>
          <Material.ListItemIcon>{item.icon}</Material.ListItemIcon>
          <Material.ListItemText primary={item.name} />
        </Material.ListItem>
      ))}
    </div>
  );

  return (
    <>
      <Material.Button onClick={() => setOpen(true)}>Click me</Material.Button>
      <Material.Drawer
        variant="permanent"
        open={open}
        anchor={"left"}
        onClose={() => setOpen(false)}
      >
        {/* {___________LOGO_______} */}
        <img
          src={avesLogo}
          style={{
            height: "50px",
            width: "50px",
            backgroundColor: "dark",
            borderRadius: 300,
            border: "2px solid #e9f4e9",
            boxShadow: 2,
            marginLeft: "auto",
            marginRight: "auto",
            cursor: "pointer",
          }}
          alt="AvesLogo"
        />

        <Material.Typography
          variant="h6"
          component="div"
          sx={{
            marginRight: "auto",
            left: 0,
            fontWeight: "light",
            cursor: "pointer",
          }}
          onClick={() => props.setCurrentPage("Landing")}
        >
          <div
            style={{
              display: mediaSmall ? "block" : "none",
            }}
          >
            <strong>Avery Caldwell</strong>
          </div>
        </Material.Typography>

        {/* {getList()} */}
        <Material.Divider />
        {getList()}
      </Material.Drawer>
    </>
  );
}
// {_______DRAWER OPTION__________}
//    return (
//       <React.Fragment>

//             <Material.Box sx={{ display: 'flex' }}>

//       <Material.CssBaseline />
//       <Material.AppBar
//        position="fixed"
//        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
//        >

//       </Material.AppBar>
//        <Material.Drawer
//         sx={{             width: drawerWidth,
//             flexShrink: 0,
//             '& .MuiDrawer-paper': {
//                 width: drawerWidth,
//                 boxSizing: 'border-box',             },         }}         variant="permanent"         anchor="left"         >         <Material.Toolbar />
//                     <Material.Divider />
//                      {/* ________BOTTOM HALF OF SIDE MENU___________ */}
//          <Material.List>
//            {['About', 'Projects', 'Resume', 'Contact', 'Skills'].map((text, index) => (
//               <Material.ListItem key={text}  disablePadding>               <Material.ListItemButton  >
//                  <Material.ListItemIcon >
//                  </Material.ListItemIcon>
//                 <Material.ListItemText primary={text} />
//               </Material.ListItemButton>
//             </Material.ListItem>
//            ))}
//          </Material.List>
//          <Material.Divider />
//        <Material.List>
//           {['GitHub', 'LinkedIn', 'Email'].map((text, index) => (
//               <Material.ListItem key={text} disablePadding>
//                <Material.ListItemButton>
//                 <Material.ListItemIcon>
//                 </Material.ListItemIcon>
//                 <Material.ListItemText primary={text} />
//               </Material.ListItemButton>
//             </Material.ListItem>
//           ))}

//          </Material.List>
//                  </Material.Drawer  >
//      </Material.Box>
//            </React.Fragment>
//    );
//  }
// {___________LOGO_______}
//             <Material.Toolbar>
//             <img src={avesLogo} style={{ height: '50px', width: '50px', backgroundColor: 'dark', borderRadius: 300, border: '2px solid #e9f4e9', boxShadow: 2, marginRight: 10, cursor: 'pointer', }}
//                 alt='AvesLogo' />

//             <Material.Typography
//                 variant='h6'
//                 component='div'
//                 sx={{
//                     marginRight: 'auto',
//                     left: 0,
//                     fontWeight: 'light',
//                     cursor: 'pointer',
//                 }}
//                 onClick={() => props.setCurrentPage('Landing')}
//             >
//                 <div style={{
//                     display: mediaSmall ? 'block' : 'none',
//                 }}>
//                     <strong>Avery Caldwell</strong>, Full-Stack Developer
//                 </div>
//             </Material.Typography>
//         </Material.Toolbar><div></div>

export default Header;
