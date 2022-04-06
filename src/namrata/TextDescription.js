import { Typography } from "@mui/material";
import React , {useState} from "react" ;
import './text.css';
import TextEditor from './TextEditor';

// import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
 const parse = require('html-react-parser')
const config = {
  buttons: ["bold" , "italic" , "underline" , "center"]
}

function TextDescription() {
  const [value, setValue] = useState("")


  return (
    <div className='row'>
      <div className=''>
        <div style={{textAlign:"center"}}>
      
           
        </div>
         <TextEditor setValue={setValue} config={config} />
         
         <div>
           {parse(value)}
         </div>
         <Typography variant="h7" sx={{color:'#7c8493'}}>Maximum 500 characters</Typography>
      </div>
      
    </div>
  );
}

export default TextDescription;
