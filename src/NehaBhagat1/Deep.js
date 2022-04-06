import {
  Button,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Divider,
  Checkbox,
  Avatar,
  IconButton,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import guy from "./img/guy.png";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import Nomad from './Nomad.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NavLink } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
function createData(name, rating, status, date, submit, view, report) {
  return { name, rating, status, date, submit, view, report };
}

const rows = [
  createData(
    <Grid sx={{ display: "flex" }}>
      <Checkbox sx={{ color: "#D6DDEB" }} />
      <Avatar src={guy} alt="guy" />
      <Typography sx={{ marginTop: "4%" }}>Jake Gyll</Typography>
    </Grid>,
    <Typography>
      <Rating max={1} />
      0.0
    </Typography>,
    <Box
      style={{
        border: "1px solid #FFB836",
        height: "34px",
        width: "96px",
        borderRadius: "17px",
        color: "#FFB836",
        textAlign: "center",
      }}
    >
      <Typography sx={{ marginTop: "4%" }}>Interview</Typography>
    </Box>,
    "15 Mar 2021, 12:47 PM",
    <Typography sx={{
      fontFamily: 'Epilogue',
      fontWeight: '500',
      fontSize: '18px',
      lineHeight: '160%',
      color: '#25324B'
    }}>
      Designer
    </Typography>,
    <Button variant="outlined" sx={{ border: '1px solid #4640DE', backgroundColor: '#E9EBFD', color: '#4640DE' }}>See Application</Button>,
    <IconButton>
      <MoreHorizIcon sx={{ fontSize: 'xx-large', color: '#25324B' }} />
    </IconButton>
  ),
  createData(
    <Grid sx={{ display: "flex" }}>
      <Checkbox sx={{ color: "#D6DDEB" }} />
      <Avatar src={guy} alt="guy" />
      <Typography sx={{ marginTop: "4%" }}>Jake Gyll</Typography>
    </Grid>,
    <Typography>
      <Rating max={1} />
      0.0
    </Typography>,
    <Box
      sx={{
        border: "1px solid #FFB836",
        height: "34px",
        width: "96px",
        borderRadius: "17px",
        color: "#FFB836",
      }}
    ><Typography sx={{ marginTop: "4%" }}>
        Interview
      </Typography>

    </Box>,
    "15 Mar 2021, 12:47 PM",
    <Typography sx={{
      fontFamily: 'Epilogue',
      fontWeight: '500',
      fontSize: '18px',
      lineHeight: '160%',
      color: '#25324B'
    }}>
      JavaScript Dev
    </Typography>,
    <Button variant="outlined" sx={{ border: '1px solid #4640DE', backgroundColor: '#E9EBFD', color: '#4640DE' }}>See Application</Button>,
    <IconButton>
      <MoreHorizIcon sx={{ fontSize: 'xx-large', color: '#25324B' }} />
    </IconButton>
  ),
  createData(
    <Grid sx={{ display: "flex" }}>
      <Checkbox sx={{ color: "#D6DDEB" }} />
      <Avatar src={guy} alt="guy" />
      <Typography sx={{ marginTop: "4%" }}>Jake Gyll</Typography>
    </Grid>,
    <Typography>
      <Rating defaultValue={1} max={1} />
      4.0
    </Typography>,
    <Box
      sx={{
        border: "1px solid #4640DE",
        height: "34px",
        width: "96px",
        borderRadius: "17px",
        color: "#4640DE",
      }}
    ><Typography sx={{ marginTop: "4%" }}>Shortlisted</Typography>

    </Box>,
    "15 Mar 2021, 12:47 PM",
    <Typography sx={{
      fontFamily: 'Epilogue',
      fontWeight: '500',
      fontSize: '18px',
      lineHeight: '160%',
      color: '#25324B'
    }}>
      Golang Dev
    </Typography>,
    <Button variant="outlined" sx={{ border: '1px solid #4640DE', backgroundColor: '#E9EBFD', color: '#4640DE' }}>See Application</Button>,
    <IconButton>
      <MoreHorizIcon sx={{ fontSize: 'xx-large', color: '#25324B' }} />
    </IconButton>
  ),
  createData(
    <Grid sx={{ display: "flex" }}>
      <Checkbox sx={{ color: "#D6DDEB" }} />
      <Avatar src={guy} alt="guy" />
      <Typography sx={{ marginTop: "4%" }}>Jake Gyll</Typography>
    </Grid>,
    <Typography>
      <Rating max={1} />
      0.0
    </Typography>,
    <Box
      sx={{
        border: "1px solid #FF6550",
        height: "34px",
        width: "96px",
        borderRadius: "17px",
        color: "#FF6550",
      }}
    >
      <Typography sx={{ marginTop: "4%" }}>
        Declined
      </Typography>
    </Box>,
    "15 Mar 2021, 12:47 PM",
    <Typography sx={{
      fontFamily: 'Epilogue',
      fontWeight: '500',
      fontSize: '18px',
      lineHeight: '160%',
      color: '#25324B'
    }}>
      NET Dev
    </Typography>,

    <Button variant="outlined" sx={{ border: '1px solid #4640DE', backgroundColor: '#E9EBFD', color: '#4640DE' }}>See Application</Button>,
    <IconButton>
      <MoreHorizIcon sx={{ fontSize: 'xx-large', color: '#25324B' }} />
    </IconButton>
  ),
  createData(
    <Grid sx={{ display: "flex" }}>
      <Checkbox sx={{ color: "#D6DDEB" }} />
      <Avatar src={guy} alt="guy" />
      <Typography sx={{ marginTop: "4%" }}>Jake Gyll</Typography>
    </Grid>,
    <Typography>
      <Rating defaultValue={1} max={1} />
      4.0
    </Typography>,
    <Box
      sx={{
        border: "1px solid #56CDAD",
        height: "34px",
        width: "96px",
        borderRadius: "17px",
        color: "#56CDAD",
      }}
    >
      <Typography sx={{ marginTop: "4%" }}>
        Hired
      </Typography>

    </Box>,
    "15 Mar 2021, 12:47 PM",
    <Typography sx={{
      fontFamily: 'Epilogue',
      fontWeight: '500',
      fontSize: '18px',
      lineHeight: '160%',
      color: '#25324B'
    }}>
      Graphic Design
    </Typography>,

    <Button variant="outlined" sx={{ border: '1px solid #4640DE', backgroundColor: '#E9EBFD', color: '#4640DE' }}>See Application</Button>,
    <IconButton>
      <MoreHorizIcon sx={{ fontSize: 'xx-large', color: '#25324B' }} />
    </IconButton>
  ),
  createData(
    <Grid sx={{ display: "flex" }}>
      <Checkbox sx={{ color: "#D6DDEB" }} />
      <Avatar src={guy} alt="guy" />
      <Typography sx={{ marginTop: "4%" }}>Jake Gyll</Typography>
    </Grid>,
    <Typography>
      <Rating defaultValue={1} max={1} />
      4.0
    </Typography>,
    <Box
      sx={{
        border: "1px solid #26A4FF",
        height: "34px",
        width: "96px",
        borderRadius: "17px",
        color: "#26A4FF",
      }}
    >
      <Typography sx={{ marginTop: "4%" }}>
        Interviewed
      </Typography>
    </Box>,
    "15 Mar 2021, 12:47 PM",
    <Typography sx={{
      fontFamily: 'Epilogue',
      fontWeight: '500',
      fontSize: '18px',
      lineHeight: '160%',
      color: '#25324B'
    }}>
      Designer
    </Typography>,

    <Button variant="outlined" sx={{ border: '1px solid #4640DE', backgroundColor: '#E9EBFD', color: '#4640DE' }}>See Application</Button>,
    <IconButton>
      <MoreHorizIcon sx={{ fontSize: 'xx-large', color: '#25324B' }} />
    </IconButton>
  ),
  createData(
    <Grid sx={{ display: "flex" }}>
      <Checkbox sx={{ color: "#D6DDEB" }} />
      <Avatar src={guy} alt="guy" />
      <Typography sx={{ marginTop: "4%" }}>Jake Gyll</Typography>
    </Grid>,
    <Typography>
      <Rating max={1} />
      0.0
    </Typography>,
    <Box
      sx={{
        border: "1px solid #FF6550",
        height: "34px",
        width: "96px",
        borderRadius: "17px",
        color: "#FF6550",
      }}
    >
      <Typography sx={{ marginTop: "4%" }}>
        Declined
      </Typography>
    </Box>,
    "15 Mar 2021, 12:47 PM",
    <Typography sx={{
      fontFamily: 'Epilogue',
      fontWeight: '500',
      fontSize: '18px',
      lineHeight: '160%',
      color: '#25324B'
    }}>
      Designer
    </Typography>,

    <Button variant="outlined" sx={{ border: '1px solid #4640DE', backgroundColor: '#E9EBFD', color: '#4640DE' }}>See Application</Button>,
    <IconButton>
      <MoreHorizIcon sx={{ fontSize: 'xx-large', color: '#25324B' }} />
    </IconButton>
  ),
  createData(
    <Grid sx={{ display: "flex" }}>
      <Checkbox sx={{ color: "#D6DDEB" }} />
      <Avatar src={guy} alt="guy" />
      <Typography sx={{ marginTop: "4%" }}>Jake Gyll</Typography>
    </Grid>,
    <Typography>
      <Rating max={1} />
      0.0
    </Typography>,
    <Box
      sx={{
        border: "1px solid #4640DE",
        height: "34px",
        width: "96px",
        borderRadius: "17px",
        color: "#4640DE",
      }}
    >
      <Typography sx={{ marginTop: "4%" }}>
        Shortlisted
      </Typography>
    </Box>,
    "15 Mar 2021, 12:47 PM",
    <Typography sx={{
      fontFamily: 'Epilogue',
      fontWeight: '500',
      fontSize: '18px',
      lineHeight: '160%',
      color: '#25324B'
    }}>
      Designer
    </Typography>,

    <Button variant="outlined" sx={{ border: '1px solid #4640DE', backgroundColor: '#E9EBFD', color: '#4640DE' }}>See Application</Button>,
    <IconButton>
      <MoreHorizIcon sx={{ fontSize: 'xx-large', color: '#25324B' }} />
    </IconButton>
  ),
];

export default function Deep() {
  const [open, setopen] = useState(false);
  const [readMore, setReadMore] = useState(false);

  return (
    <Grid container>
      <Grid item container>
        <Grid item xs={4} lg={8.5} display={"flex"}>
          <img src={Nomad} alt={''} style={{ paddingLeft: '2%',width:'50px',height:'60px' }} />

          <Typography variant='body2' fontFamily={'poppins'} fontSize={'28px'} marginTop={'5px'} marginLeft={"1%"}><b>Nomad </b></Typography>
          <IconButton style={{ margin: "-10px" }} ><ExpandMoreIcon fontSize='large' /></IconButton>
        </Grid>

        <Grid item xs={2} lg={1} sx={{paddingLeft:'8%'}}>
           <IconButton >
           <NotificationsActiveOutlinedIcon/>
           </IconButton>
         </Grid>
        {/* <Grid lg={1} /> */}

        <Grid item xs={6} lg={2} sx={{ paddingLeft: '2%',marginLeft:'10px' }}>
          <NavLink to={'/postajob'} style={{ textDecoration: 'none' }} > <Button variant='contained'
            sx={{
              borderRadius: '0px', backgroundColor: '#1a50b2', marginTop: '2%',
              ':hover': { color: '#1a50b2', backgroundColor: 'white' }
            }}
          >Post a Job</Button></NavLink>
        </Grid>
      </Grid>
      <Grid item container xs={12} display={"flex"} justifyContent={"space-between"} marginTop={'20px'}>
        <Grid xs={12} lg={4}>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "30px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "25px",
              letterSpacing: "0.03em",
              textAlign: "left",
              marginTop: "2.5%",
            }}
          >
            Total Applicants : 19
          </Typography>
        </Grid>

        <Grid xs={12} lg={8} display={"flex"}>
          <Search style={{ border: "1px solid #D6DDEB", width: "500px" }}>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "#A8ADB7" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Applicants"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Button
            variant="outlined"
            sx={{
              textTransform: "capitalize",
              border: "1px solid #D6DDEB",
              color: "#25324B",
            }}
          >
            <FilterListIcon sx={{ color: "#25324B" }} />
            Filter
          </Button>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ marginLeft: "1%" }}
          ></Divider>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#E9EBFD",
              color: "#4640DE",
              fontWeight: "700",
              marginLeft: '1%'
            }}
          >
            Pipeline View{" "}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FFFFFF",
                color: "#4640DE",
                marginLeft: "9px",
              }}
            >
              Table View
            </Button>
          </Button>
        </Grid>
      </Grid>

      <TableContainer
        component={Paper}
        sx={{ border: "1px solid #D6DDEB", marginTop: "2%" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "#687182" }} align="left">
                <Checkbox sx={{ color: "#D6DDEB" }} />
                Full Name{" "}
                <ArrowDropDownIcon sx={{ width: "18px", height: "18px" }} />
              </TableCell>
              <TableCell sx={{ color: "#687182" }} align="left">
                Score{" "}
                <ArrowDropDownIcon sx={{ width: "18px", height: "18px" }} />
              </TableCell>
              <TableCell sx={{ color: "#687182" }} align="left">
                Hiring Stage{" "}
                <ArrowDropDownIcon sx={{ width: "18px", height: "18px" }} />
              </TableCell>
              <TableCell sx={{ color: "#687182" }} align="left">
                Applied Date{" "}
                <ArrowDropDownIcon sx={{ width: "18px", height: "18px" }} />
              </TableCell>
              <TableCell sx={{ color: "#687182" }} align="left">
                Job Role{" "}
                <ArrowDropDownIcon sx={{ width: "18px", height: "18px" }} />
              </TableCell>
              <TableCell sx={{ color: "#687182" }} align="center">
                Action{" "}
                <ArrowDropDownIcon sx={{ width: "18px", height: "18px" }} />
              </TableCell>
              <TableCell sx={{ color: "white" }} align="center">
                Action{" "}

              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => {
              if (index > 4) {
                if (open) {
                  return (
                    <TableRow
                      key={row.name + index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" align="left">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.rating}</TableCell>
                      <TableCell align="center">{row.status}</TableCell>
                      <TableCell align="left">{row.date}</TableCell>
                      <TableCell align="left">{row.submit}</TableCell>
                      <TableCell align="center">
                        <Button>{row.view}</Button>
                      </TableCell>
                      <TableCell align="center">{row.report}</TableCell>
                    </TableRow>
                  );
                }
                return null;
              }

              return (
                <TableRow
                  key={row.name + index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="left">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.rating}</TableCell>
                  <TableCell align="center">{row.status}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">{row.submit}</TableCell>
                  <TableCell align="center">
                    <Link to={'/application'} style={{ textDecoration: "none" }}><Button>{row.view}</Button></Link>
                  </TableCell>
                  <TableCell align="center">{row.report}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Button
        variant="contained"
        onClick={() => {
          setopen(!open);
          setReadMore(!readMore);
        }}
        sx={{ marginTop: "20px" }}
      >
        {!readMore ? <>View more</> : <>View Less</>}
      </Button>
    </Grid>
  );
}
