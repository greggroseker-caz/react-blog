import { Link } from "react-router-dom";
import "./topBar.css"

export default function TopBar() {
  const user = true;
  return (
    <div className="top">
        <div className="topLeft">
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-pinterest-p"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem"><Link to="/" style={{textDecoration:"none", color: "inherit"}}>HOME</Link></li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
            <img
            className="topImg"
            src="https://images.pexels.com/photos/4061649/pexels-photo-4061649.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
