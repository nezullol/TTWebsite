import "../App.css";
import { styled } from "@mui/material/styles";

function Contact(props) {
  const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));
  return (
    <Div>
      
    <div className="Contact">
      <ul>CONTACT</ul>
      <ul>{props.data.address} </ul>
      <ul>{props.data.phone}</ul>
      <ul>{props.data.business_hours}</ul>
      <ul>{props.data.email}</ul>
      <ul>
      </ul>
    </div>
    </Div>
  );
}

export default Contact;
