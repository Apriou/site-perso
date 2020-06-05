import React from 'react';
import { withStyles } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//import InboxIcon from '@material-ui/icons/MoveToInbox';
//import DraftsIcon from '@material-ui/icons/Drafts';
//import SendIcon from '@material-ui/icons/Send';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GetAppIcon from '@material-ui/icons/GetApp';

import '../css/ProfilMenu.css'

const StyledMenu = withStyles({
  paper: {
    //border: '1px solid #d3d4d5',
    backgroundColor: "rgba(0, 0, 0, 0.7)"
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
   const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
          //backgroundColor: "rgba(0, 0, 0, 0.7)" //fond focus
        //backgroundColor: theme.palette.primary.main,
        //'& .MuiListItemIcon-root, & .MuiListItemText-primary': {
         // color: theme.palette.common.white,
        //},
      },
      color: theme.palette.common.white, //Couleur text
      fontWeight: theme.typography.fontWeightBold,
      fontFamily: "Segoe UI"
    },
  }))(MenuItem); 
  
  export function ProfilMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
      };

    const download = () => {
        const link = document.createElement('a');
        link.href = `./ressources/CV_PRIOU_Arnaud.pdf`; //Chemin
        link.download = "CV_PRIOU_Arnaud.pdf"; //Nom du fichier que l'on souhaite donner
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); 
    }
    
      return (
        <div>
 {/*          <Button
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            Open Menu
          </Button> */}
          <AccountCircleIcon onClick={handleClick} style={{ height: "2.3rem", width: "2.3rem" }} /> 
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem onClick={download}>               
                {/* <a href={"./ressources/CV_PRIOU_Arnaud.pdf"} download> */}
                    <ListItemIcon>
                        <GetAppIcon fontSize="small" style={{ color: "white" }}/>
                    </ListItemIcon>                  
               {/*  </a>    */}       
                Mon CV (pdf)                        
            </StyledMenuItem>
        {/*     <StyledMenuItem>
              <ListItemIcon>
                <DraftsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </StyledMenuItem> */}
     
          </StyledMenu>
        </div>
      );
    }