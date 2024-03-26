import "../App.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
function Home(props) {

  const style = {
    display: "inline-block",
    flexWrap: "wrap",
    "& > :not(style)": {
      m: 1,
      width: 600,
      height: 128,
    },
    color: "black",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 30,
  };
  
  return (
    <Box sx={style}>
      <Card>
        <Typography>
          <div className="Home">
            <div className="title">{props.data.business_name}</div>
            <div className="card-wrapper">
              Computer and mobile device repair Offering Repair solutions since
              2020 Our company offers low cost technology repair and solutions
              to both indivudals and businesses We build computers servers &
              configure networks
            </div>
          </div>
        </Typography>
      </Card>
    </Box>
  );
}

export default Home;
