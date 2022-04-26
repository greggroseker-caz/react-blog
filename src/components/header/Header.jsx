import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">A Software Engineering Manager's</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg"  src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
    </div>
  )
}
