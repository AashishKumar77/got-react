import logo from './logo.svg';
import './App.css';
import { Grid } from '@material-ui/core'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import  Menu  from "./pages/Menu";
// import Pagenotfound from "./pages/Pagenotfound";

const Header = () => 


    function Header() {
        return (

             <div>
     
         <BrowserRouter>
             <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/message" element={<About />} />
                <Route path="/message" element={<Contact />} />
                <Route path="/messgae" element={<Blog />} />
                <Route path="*" element={<Gallery />} />
             </Routes>
         </BrowserRouter>
      
    </div>

            // <Grid item xm={12} container spacing={10} style={{ backgroundColor: 'yellow' }}>
            //     <Grid item lg={12} xs={12}><h1 style={{ backgroundColor: 'red', textAlign: 'center' }}>navbar</h1></Grid>
            //     <Grid item lg={6} xs={12}><h1 style={{ backgroundColor: 'green', textAlign: 'center' }}>Text </h1></Grid>
            //     <Grid item lg={6} xs={12}><h1 style={{ backgroundColor: 'green', textAlign: 'center' }}>photo</h1></Grid>
            //     <Grid item lg={6} xs={12}><h1 style={{ backgroundColor: 'green', textAlign: 'center' }}>photo</h1></Grid>
            //     <Grid item lg={6} xs={12}><h1 style={{ backgroundColor: 'green', textAlign: 'center' }}>text</h1></Grid>
            //     <Grid item lg={6} xs={12}><h1 style={{ backgroundColor: 'green', textAlign: 'center' }}>text</h1></Grid>
            //     <Grid item lg={6} xs={12}><h1 style={{ backgroundColor: 'green', textAlign: 'center' }}>photo</h1></Grid>
            //     <Grid item lg={12} xs={12}><h1 style={{ backgroundColor: 'green', height: '200px', textAlign: 'center' }}>Video</h1></Grid>
            //     <Grid item lg={12} xs={12}><h1 style={{ backgroundColor: 'green', height: '200px', textAlign: 'center' }}>Download the ap</h1></Grid>
            //     <Grid item lg={12} xs={12}><h1 style={{ backgroundColor: 'green', height: '100px', textAlign: 'center' }}>User stories</h1></Grid>
            //     <Grid item lg={6} xs={12}><h1 style={{ backgroundColor: 'green', textAlign: 'center' }}>text</h1></Grid>
            //     <Grid item lg={6} xs={12}><h1 style={{ backgroundColor: 'green', textAlign: 'center' }}>photo</h1></Grid>
            //     <Grid item lg={6} xs={12}><h1 style={{ backgroundColor: 'green', textAlign: 'center' }}>photo</h1></Grid>
            //     <Grid item lg={6} xs={12}><h1 style={{ backgroundColor: 'green', textAlign: 'center' }}>text</h1></Grid>
            //     <Grid item lg={6} xs={12}><h1 style={{ backgroundColor: 'green', textAlign: 'center' }}>text</h1></Grid>
            //     <Grid item lg={6} xs={12}><h1 style={{ backgroundColor: 'green', textAlign: 'center' }}>photo</h1></Grid>
            //     <Grid item lg={6} xs={12}><h1 style={{ backgroundColor: 'green', textAlign: 'center' }}>Text</h1></Grid>
            //     <Grid item lg={6} xs={12}><h1 style={{ backgroundColor: 'green', textAlign: 'center' }}>photo</h1></Grid>
            //     <Grid item lg={12} xs={12}><h1 style={{ backgroundColor: 'green', height: '200px', textAlign: 'center' }}>still have questions</h1></Grid>
            //     <Grid item lg={12} xs={12}><h1 style={{ backgroundColor: 'green', height: '200px', textAlign: 'center' }}>Footer</h1></Grid>
            // </Grid>
        )
    }


export default Header
