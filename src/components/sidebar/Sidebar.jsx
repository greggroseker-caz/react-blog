import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img src="https://i.postimg.cc/QCJrMFqP/IMG-1400.jpg" 
          alt=""
          />
          <p>My name is Gregg Roseker. I'm an Engineering Manager,
            and Developer. I work out of my home office in Hackney,
            London for the ProdEng Team at Cazoo, but this blog,
            its content and opinions are my own. I write about tech,
            culture, gadgets, cycling, the web, where we're
            going and where we've been. 
            </p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Culture</li>
          <li className="sidebarListItem">Gadgets</li>
          <li className="sidebarListItem">Code</li>
          <li className="sidebarListItem">Web</li>
          <li className="sidebarListItem">Cycling</li>
        </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-instagram"></i>
            <i className="sidebarIcon fa-brands fa-twitter"></i>
            <i className="sidebarIcon fa-brands fa-pinterest-p"></i>
        </div>
        </div>
    </div>
  );
}
