// import logo from "./logo.svg";
import React from "react"
import "./style/Dashboard.css";
// import { withRouter } from "react-router-dom";
import Mediacard from "./Mediacard.js";
import SearchBar from "./SearchBar.js";
import Divider from '@mui/material/Divider';
import TabList from '@material-ui/lab/TabList';
import Tab from '@mui/material/Tab'
// import TabContext from '@material-ui/lab/TabContext';
import Tabs from '@mui/material/Tabs';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

function Dashboard() {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
  return (
      <div className="background">
          <SearchBar />
          <div className="flex-container">
              <h1 className="tab-text"> Top</h1>
              <h1 className="tab-text">Pantries</h1>
              <h1 className="tab-text">Tags</h1>
          </div>
          <Divider/>
          {/* <hr></hr> */}
          <h1 className="title">Pantries</h1>
          <br></br>
      <div className="cards">
        <Mediacard name="Food Not Bombs" 
        startTime="1 p.m."
        endTime="4 p.m"
        days="everyday"
        image="./fnb.png"
        isOpen="OPEN"/>
        <Mediacard name="Food For Good" 
        startTime="2 p.m."
        endTime="6 p.m"
        days="weekdays"
        image="./foodbag.png"/>
    
         <Mediacard name="CalFresh" 
        startTime="12 p.m."
        endTime="6 p.m"
        days="on Monday, Wednesday"
        image="./calfresh.png"/>
        <Mediacard name="Grey Bears" 
        startTime="1 p.m."
        endTime="6 p.m"
        days="on Weekdays"
        image="./greybears.png"/>
      </div>
      <div className="tab-bar">
      <Tabs value={value} onChange={handleChange} aria-label="icon tabs example" className="tabs">
      <Tab icon={<HomeOutlinedIcon/>} sx={{backgroundColor: "#577A3B", color: "white", fontSize: "100px"}} aria-label="phone" />
      <Tab icon={<EmailOutlinedIcon />} sx={{backgroundColor: "#577A3B", color: "white"}} aria-label="favorite" />
      <Tab icon={<SearchOutlinedIcon />} className="tab" sx={{backgroundColor: "#577A3B", color: "white"}} aria-label="person" />
      <Tab icon={<MessageOutlinedIcon />} className="tab" sx={{backgroundColor: "#577A3B", color: "white"}} aria-label="person" />
      <Tab icon={<AccountCircleOutlinedIcon />} className="tab" sx={{backgroundColor: "#577A3B", color: "white"}} aria-label="person" />
    </Tabs>
    </div>
      </div>
  );
}

export default Dashboard;
