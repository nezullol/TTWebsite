import "../App.css";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';


export default function TypographyTheme(props) {
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
    <Box sx= {style}>
      <Card>
<Typography>
      <div>{props.data.name}</div>
      <div>{props.data.bio}</div>
</Typography>
      </Card>
    </Box>
  );
}
