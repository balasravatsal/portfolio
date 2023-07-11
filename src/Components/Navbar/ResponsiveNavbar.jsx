import {
    AppBar, Box,
    Button, IconButton, Menu, MenuItem,
    Toolbar,
    Typography
} from "@mui/material";
// import VATSAL from '../../assets/VATSAL.svg'
import pages from './pages.jsx'
import {NavLink} from "react-router-dom";
import {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/VATSAL (1).svg'

const links = pages
const ResponsiveNavbar = () => {

    const [anchorElNav, setAnchorElNav] = useState(null);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <>
            <AppBar sx={{backgroundColor: 'transparent'}}>
                <Toolbar disableGutters>

                    {/* small navbar */}
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon sx={{color: "#fff"}}/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {links.map((page) => (
                                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                                    <NavLink
                                        to={page.path}
                                        style={{textDecoration: 'none', color: 'inherit'}}
                                    >
                                        <Typography textAlign="center">{page.text}</Typography>
                                    </NavLink>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>


                    <Typography
                        variant="h5"
                        noWrap
                        component={NavLink}
                        to="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            marginTop: '2rem',
                            marginBottom: '2rem'
                        }}
                    >
                        <img src={logo} alt={"Home"}/>
                    </Typography>


                    {/* big navbar */}
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        <NavLink
                            to={"/"}
                            style={{textDecoration: 'none', color: 'inherit', marginRight: "auto"}}
                        >
                            <Typography variant={"h3"} sx={{
                                fontWeight: 'bold',
                                marginTop: '1rem',
                                marginLeft: '3rem',
                            }}
                            >
                                <img src={logo} alt={"Home"}/>
                            </Typography>
                        </NavLink>


                        {pages.map((page) => (
                            <NavLink
                                key={page.id}
                                to={page.path}

                                // activeClassName="active"
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    marginRight: '1rem',
                                    marginTop: '1rem'
                                }}
                            >
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        display: 'block',
                                        padding: "8px",
                                        marginRight: "0.7rem",
                                        color: "#d0d0d0",
                                        transition: 'box-shadow background-color 0.9s ease-in',
                                        "&:hover": {backgroundColor: "#001845", boxShadow: '0px 0px 4px #001845',}
                                    }}
                                >
                                    {page.text}
                                </Button>
                            </NavLink>
                        ))}
                    </Box>

                </Toolbar>
            </AppBar>

        </>
    );
};

export default ResponsiveNavbar;