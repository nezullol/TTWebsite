import "../App.css";
import { styled } from "@mui/material/styles";

function Home(props) {
  const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));
  return (
    <Div>
      <div className="Home">
        <div className="title">{props.data.business_name}</div>
        <div className="card-wrapper">
        <br/>  Computer and mobile device repair Offering Repair solutions since 2020
        <br/>  Our company offers low cost technology repair and solutions to both
        <br/>  indivudals and businesses We build computers servers & configure
        <br/>  networks
        </div>
      </div>
    </Div>
  );
}

export default Home;
