import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Aldo.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+63 857 9445 8643</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>o.faurian@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar

