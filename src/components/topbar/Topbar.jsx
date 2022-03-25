import "./topbar.scss";
import { Person, Mail, LinkedIn, WhatsApp } from "@material-ui/icons";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Aldo.
          </a>
          <div className="itemContainer" onClick={()=>{ alert("+62 857 9445 8643")}}>
            <Person className="icon" />
            <span >+62 857 9445 8643</span>
          </div>
          <div className="itemContainer" onClick={()=>alert("o.faurian@gmail.com")}>
            <Mail className="icon" />
            <span>o.faurian@gmail.com</span>
          </div>
          <div className="itemContainer-linkind">
            <a href="https://www.linkedin.com/in/aldo-apdilla-faurian-443b16186" target="_blank">
              <LinkedIn className="icon" />
              <span>My Linked Profile</span>
            </a>
          </div>
          <div className="itemContainer-linkind">
            <a href="https://wa.me/6285794458643" target="_blank">
              <WhatsApp className="icon" />
              <span>My WhatsApp Contact</span>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
