// import logo from "./logo.svg";
import "./style/SignUp.css";
import React, {useState} from 'react';
// import { withRouter } from "react-router-dom";

function SearchBar() {
    const [keyword, setKeyword] = useState("");
    const BarStyling = {width:"20rem", height: "20px", background:"#F2F1F9", border:"none", padding:"0.5rem", margin: "30px",};
  return (
      <div style={{display:"flex", justifyContent: "center"}}>
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"search pantry"}
     onChange={(e) => setKeyword(e.target.value)}
    />
    </div>
  );
}

export default SearchBar;
