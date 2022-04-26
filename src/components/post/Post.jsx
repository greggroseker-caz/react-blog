import "./post.css";

export default function Post() {
  return (
    <div className="post">
        <img
        className="postImg"
        src="https://images.pexels.com/photos/3184451/pexels-photo-3184451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt=""
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Tech</span>
                <span className="postCat">Gadgets</span>
            </div>
            <span className="postTitle">
                The tolerant reader pattern.
            </span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
        Design the client or service to extract only
        what is needed, ignore unknown content,
        and expect variant data structures. 
        </p>
    </div>
  );
}
