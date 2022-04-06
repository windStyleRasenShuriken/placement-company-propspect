import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';



export default function Fifthcc() {
    const [skill, setSkill] = useState('')
    const [skillArr, setSkillArr] = useState([])
  return (
    <Grid item container spacing={2} sx={{display: "flex"}}>
      
    <Grid item xs={3} sm={5}>
          <Typography
            sx={{
              fontFamily: "Epilogue",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "18px",
            }}
          >
            Required Skill  
          </Typography>
        
        <br/>
          <Typography
            sx={{
              color: "#7C8493",
              fontFamily: "Epilogue",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
            //   width: "200px"
            }}
          >
            Add required skills for the job
          </Typography>
        
      </Grid>
      <Grid item xs={2} sm={1}/>
      <Grid item  xs={7} sm={6}>
     
<div style={{ marginTop: "12px", marginBottom: "24px" }} >
<div style={{ marginTop: "12px", marginBottom: "12px" }} >
    <TextField
        onChange={(e) => {
            setSkill(e.target.value)
        }}
        sx={{ width: "auto", backgroundColor: "#F8F8F8" }}
        margin="dense"
        variant="outlined"
        label="Type the skills gained here"
        id=" skill gained"
        value={skill}
    />
</div>
<div>
    {skillArr.map((skill, skillIndex) => {
        return (
            <span key={skillIndex + skill} style={{ padding: "6px", paddingLeft: "12px", paddingRight: "12px", borderRadius: "8px", background: "#F8F8FD", fontSize: "18px", marginRight: '12px', color: "#1A50B2", fontFamily: "Popins" }}>
                {skill}
                <IconButton sx={{ color: "#1A50B2" }} onClick={() => {
                    let newSkillArr = [...skillArr]
                    newSkillArr.splice(skillIndex, 1)
                    setSkillArr(newSkillArr)
                }}>
                    <ClearIcon />
                </IconButton>
            </span>
        )
    })}
</div>
<div style={{ marginTop: "12px", marginBottom: "12px" }} >
    <Button sx={{}} variant="outlined" startIcon={<AddIcon />} onClick={() => {
        let newSkillArr = [...skillArr]
        newSkillArr.push(skill)
        setSkillArr(newSkillArr)
        setSkill('')
    }}>
        Add Skill
    </Button>
</div>
</div>
      </Grid>
      
    </Grid>
  );
}












