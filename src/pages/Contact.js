import "../App.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

function Contact(props) {
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
          <div className="Contact">
            <ul>CONTACT</ul>
            <ul>{props.data.address} </ul>
            <ul>{props.data.phone}</ul>
            <ul>{props.data.business_hours}</ul>
            <ul>{props.data.email}</ul>
            <ul></ul>
          </div>
        </Typography>
      </Card>
    </Box>
  );
}

export default Contact;
