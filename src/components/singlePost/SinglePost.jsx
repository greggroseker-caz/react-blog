import "./singlePost.css";

export default function SinglePost () {
    return (
      <div className="singlePost">
          <div className=".singlePostWrapper">
              <img
                src="https://images.pexels.com/photos/1428626/pexels-photo-1428626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
                className="singlePostImg"
                />
                <h1 className="singlePostTitle">
                    The Tolerant Reader Pattern
                    <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-regular fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span classname="singlePostAuthor"> Author: <b>Gregg</b></span>
                    <span classname="singlePostDate">1 hour ago</span>
                </div>
                <p  className="singlePostDesc">
                More and more enterprise software nowadays is implemented
                as distributed systems, most likely using micro services
                to a certain extent. Loose (or at least less) coupling between
                those services is the main motivation for this architectural
                style. However, loosely coupled interfaces may lead to less
                robustness, as well. Communication between micro services is
                still necessary, unless their domains are strictly segregated,
                which I would not call a distributed “system” anymore. Hence,
                robust communication between micro services is vital, which
                is why most of us will have heard of Jon Postel’s law, stating:
                Be conservative in what you do, be liberal in what you accept
                from others!
                Although first stated with reference to TCP/IP, the law has been
                applied in many other areas. Martin Fowler derived from it the service design
                pattern, most commonly known as tolerant reader. The pattern focuses on
                the collaboration of services and the contracts they share with each other
                regarding their APIs. Evolving those APIs should never compromise existing API
                consumers, thus assuring backward compatibility. But to achieve
                this not only API providers have to make sure they don’t break
                the contract, also API consumers have to read data tolerantly.
                </p>
          </div>
      </div>
    );
  }

