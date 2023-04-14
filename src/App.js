import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
// import { makeStyles } from '@mui/styles';
import { Grid } from '@material-ui/core'
import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import Gotlogo from './images/gotlogo.jpg'
import Busted from './images/Busted.jpg.png'
import Round from './images/Round.jpg';
import Frame from './images/Frame.png'
import Vector from './images/Vector.svg'
import Phone from './images/Phone.png'
import './styles/AppStyles.css';
import Box from '@mui/material/Box';
// import {  NavLink } from 'react-router-dom';
import Drawer  from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import { Phone } from '@mui/icons-material';
// import { Group } from '@mui/icons-material';

function App() {
     const [mobileOpen, setMobileOpen] = useState(false)
   //hndle menu click
   const handleDrawerToggle = () => {
     setMobileOpen(!mobileOpen)
   }
    const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
        <Typography 
        color={'white'} 
        variant='h6' 
        component="div" 
        sx={{ flexGrow: 1, my:2 }}>
          {/* <DoorFrontIcon/> */}
          {/* <FastfoodIcon/>
            My Resturant */}
             <img src={Gotlogo} alt="logo" height={"60"} width="150px" />
            </Typography>
        <Divider />
                <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Gallery</Button>
          <Button color="inherit">Blog</Button>
          <Button color="inherit">Contact</Button>
               {/* <ul className='mobile-navigation'>
                <li>
                   <NavLink activeClassName="active" to={'/'}>Home</NavLink>
                </li>
                <li>
                   <NavLink to={'/message'}>About</NavLink>
                </li>
                <li>
                   <NavLink to={'/message'}>About</NavLink>
                </li>
                <li>
                   <NavLink to={'/message'}>Contact</NavLink>
                </li>
               </ul> */}
           
    </Box>
   )
  return (

    <Grid item xm={12} container spacing={2} style={{backgroundColor: ''}}>
      <Grid item lg={12} xs={12}><h1 style={{ backgroundColor: 'red'}}>
        <AppBar position="static" style={{ backgroundColor: '#ed1c24', height: '70px'}}>
          <Toolbar>
                <IconButton 
          color='inherit' 
          aria-label='open drawer' 
          edge="start" 
          sx={{
            mr: 2, 
            display: { sm: "none"} }}
             onClick={handleDrawerToggle}>
             <MenuIcon/>
          </IconButton>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <img src={Gotlogo} alt="logo"style={{ height: "60px", width: "100px", marginLeft: "80px", marginTop: "10px" }}/>
             
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
                 <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Gallery</Button>
          <Button color="inherit">Blog</Button>
          <Button color="inherit">Contact</Button>
               {/* <ul className='navigation-menu'>
                <li>
                   <NavLink activeClassName="active" to={'/'}>Home</NavLink>
                </li>
                <li>
                   <NavLink to={'/'}>About</NavLink>
                </li>
                <li>
                   <NavLink to={'/message'}>Gallery</NavLink>
                       </li>
                       <li>
                   <NavLink to={'/message'}>Blog</NavLink>
                </li>
                <li>
                   <NavLink to={'/message'}>Contact</NavLink>
                </li>
               </ul> */}
            </Box>
            
            
          {/* <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Gallery</Button>
          <Button color="inherit">Blog</Button>
          <Button color="inherit">Contact</Button> */}
           {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
           <Box component="nav">
           <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle}
            sx={{ display:{xs: 'block', sm: 'none'}, "& .muiDrawer-paper":{boxSizing: "border-box", width: "240px", }}}
           >
              {drawer}
           </Drawer>
          </Box>
          <Toolbar/>
      </AppBar>
      </h1>   
      </Grid>
       {/* Nothing is more is important than */}
      <Grid item lg={6} xs={12}><h1 style={{ backgroundColor: 'silver', textAlign: 'center', textAlign: 'justify',color: 'white' , fontSize: '20px'}}>
        <p style={{ marginLeft: '6rem'}}>
        <h1>Nothing is more</h1>
        <h1>important than Truth</h1>
        <h1>in a world that lies</h1>
        </p>
         <button style={{color: "#fff", backgroundColor: "#ed1c24", height: '30px', width: '100px', borderRadius: '20px', marginLeft: '6rem'}}>Join Us</button>
      </h1>
      </Grid>
        {/* busted photo */}
      <Grid item lg={6} xs={12}><h1 style={{ backgroundColor: 'silver' ,textAlign: "center"}}>
        <img lg={6} xs={12} src={Busted} alt="photo" style={{height: "20rem"}}/>
      </h1>
      </Grid>
      <Grid item lg={6} xs={12}><h1 style={{ backgroundColor: 'silver', textAlign: 'center' }}>
        <img lg={6} xs={12} src={Round } alt="photo" style={{height: "20rem"}}/>  
      </h1>
      </Grid>
      <Grid item lg={6} xs={12}><h1 style={{ backgroundColor: 'silver', textAlign: 'center' }}>
        <h3 style={{textAlign: "start"}}>Our mission</h3>
        <p
          style={{ fontSize: "20px",textAlign: "justify" }}>
          We bring truth and transparency to a world filled with lies. Use our app as your
          tool for knowledge and equip yourself with the information you need to make
          wise decisions in any aspect of your life as relationships,business etc.</p>
         <button style={{color: "#fff", backgroundColor: "#ed1c24", height: '30px', width: '100px', borderRadius: '20px',justifyContent:"start"}}>Join Us</button>
        
      </h1>
      </Grid> 
      <Grid item lg={6} xs={12}><h1 style={{ backgroundColor: 'silver', textAlign: 'center' }}>
         <h3 style={{textAlign: "start"}}>How it Work</h3>
        <p
          style={{ fontSize: "20px",textAlign: "justify" }}>
          We bring truth and transparency to a world filled with lies. Use our app as your
          tool for knowledge and equip yourself with the information you need to make
          wise decisions in any aspect of your life as relationships,business etc.</p>
         <button style={{color: "#fff", backgroundColor: "#ed1c24", height: '30px', width: '100px', borderRadius: '20px',justifyContent:"start"}}>Join Us</button>
      </h1>
      </Grid> 
      <Grid item lg={6} xs={12}><h1 style={{ backgroundColor: 'silver', textAlign: 'center' }}>
        <img lg={6} xs={6} sm={ 6} src={Frame} alt="photo" style={{height: "20rem"}}/>  
         
      </h1>
      </Grid> 
      <Grid item lg={12} xs={12}><h1 style={{ backgroundColor: 'silver', height: 'auto', textAlign: 'center' }}>
        <h3>Video Now How App Work</h3>
        <iframe lg={6} xs={12} md={12} width="885" height="498" src="https://www.youtube.com/embed/31SGauVu1JU?list=RD31SGauVu1JU" title="Outlaw : Sidhu Moose Wala (Official Song) Byg Byrd | Punjabi Songs 2019 | Jatt Life Studios" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </h1>
      </Grid> 
      <Grid item lg={12} xs={12}><h1 style={{ backgroundColor: ' #121212', height: '250px', textAlign: 'center' }}>
        <h3 style={{color: "white"}}>Download The App</h3>
        <p 
          style={{ fontSize: "10px",textAlign: "center",color: "white" }}>The Gate of Truth is a metaphysical structure which floats in an endless white expanse, with two doors that<br></br>
          appear like a pair of giant stone tablets with a mural engraved on them.</p>
        <button style={{ color: "black", backgroundColor: "white", height: '3rem', width: '150px', justifyContent: "start" }}>
          <p>Available on the</p>
          {/* <h6>Google Play</h6> */}
        </button>
        <button style={{ color: "black", backgroundColor: "white", height: '3rem', width: '150px', justifyContent: "start" }}>
          Downloaded on the
        </button>
         
      </h1>
      </Grid> 
      <Grid item lg={12} xs={12}><h1 style={{ backgroundColor: 'silver', height: '100px', textAlign: 'center' }}>
        <h3>User Stories</h3>
      </h1>
      </Grid> 
      <Grid item lg={6} xs={12}><h1 style={{ backgroundColor: 'silver ', textAlign: 'center' }}>
        Gate of Truths
        <p style={{fontSize: '20px', fontFamily: 'inter', fontWeight: '500',lineHeight: '24px'}}>The Gate of Truth is a metaphysical structure which floats in an
          endless white expanse, with two doors that appear like a pair of
          giant stone tablets with a mural engraved on them. There doesn|
          appear to be anything behind the structure, but when the doors
          open it reveals a dimension of information behind them.</p>
      </h1>
      </Grid>
      <Grid item lg={6} xs={12}><h1 style={{ backgroundColor: 'silver', textAlign: 'center' }}>
        <img lg={6} xs={12} src={Vector} alt="photo" style={{ height: "20rem" }} />   
      </h1>
        
      </Grid>
      <Grid item lg={6} xs={12}><h1 style={{ backgroundColor: 'silver', textAlign: 'center' }}>
        photo
      </h1>
      </Grid>
      <Grid item lg={6} xs={12}><h1 style={{ backgroundColor: 'silver', textAlign: 'center' }}>
        GATE OF TRUTH
        <p style={{fontSize: '20px', fontFamily: 'inter', fontWeight: '500',lineHeight: '24px'}}>Truth is a metaphysical structure which floats in an
          endless white expanse, with two doors that appear like a pair of
          giant stone tablets with a mural engraved on them. There doesn|
          appear to be anything behind the structure, but when the doors
          open it reveals a dimension of information behind them</p>
      </h1>
      </Grid> 
      <Grid item lg={6} xs={12}><h1 style={{ backgroundColor: 'silver', textAlign: 'center' }}>
        GATE OF TRUTH
         <p style={{fontSize: '20px', fontFamily: 'inter', fontWeight: '500',lineHeight: '24px'}}>Truth is a metaphysical structure which floats in an
          endless white expanse, with two doors that appear like a pair of
          giant stone tablets with a mural engraved on them. There doesn|
          appear to be anything behind the structure, but when the doors
          open it reveals a dimension of information behind them</p>
      </h1>
      </Grid> 
      <Grid item lg={6} xs={12}><h1 style={{ backgroundColor: 'silver', textAlign: 'center' }}>
        photo
      </h1>
      </Grid> 
      <Grid item lg={6} xs={12}><h1 style={{ backgroundColor: 'silver', textAlign: 'center' }}>
        <h3>Create Your</h3> 
        <h3>Own Story</h3>
        <p style={{fontSize: '20px', fontFamily: 'inter', fontWeight: '500',lineHeight: '24px'}}>The Gate of Truth is a metaphysical structure which floats in an
           endless white expanse, with two doors that appear like a pair of
          giant stone tablets with a mural engraved on them. </p>
        <h5>Download the App </h5>
         <button style={{ color: "black", backgroundColor: "white", height: '3rem', width: '150px', justifyContent: "start" }}>
          <p>Available on the</p>
          {/* <h6>Google Play</h6> */}
        </button>
        <button style={{ color: "black", backgroundColor: "white", height: '3rem', width: '150px', justifyContent: "start" }}>
          Downloaded on the
        </button>
         
      </h1>
      </Grid> 
      <Grid item lg={6} xs={12}><h1 style={{ backgroundColor: 'silver', textAlign: 'center' }}>
        <img lg={6} xs={12} src={Phone} alt="photo" style={{ height: "30rem" }} />     
      </h1>
      </Grid> 
      <Grid item lg={12} xs={12}><h1 style={{ backgroundColor: 'green', height: '200px',textAlign: 'center' }}>still have questions</h1></Grid> 
      <Grid item lg={12} xs={12}><h1 style={{ backgroundColor: 'red', height: '200px',textAlign: 'center' }}>Footer</h1></Grid>   
   </Grid>
  );
}

export default App;
