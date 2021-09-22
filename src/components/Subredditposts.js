import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router';

export default function Subredditposts({ data }) {

    const { url } = useRouteMatch()


    return (
          <div className="posts">
              {
                data.map((post) => {
                    return(
                    <div className="post-container">
                        <div className="post-upvotes">
                            <FontAwesomeIcon icon={faChevronUp} style={{fontSize:"30px", color:"rgb(231, 231, 231)"}}/>
                            <h2 style={{fontSize:"20px", color:"rgb(231, 231, 231)"}}>{post.upvotes.length}</h2>
                            <FontAwesomeIcon icon={faChevronDown} style={{fontSize:"30px", color:"rgb(231, 231, 231)"}}/>
                        </div>
                        <div className="post">
                            <div className="post-information">
                                    <h2 className="default pi-h2">/r/{post.subreddit.name}</h2>
                                    <h3 className="default pi-h3">Posted by
                                            /u/{post.createdBy.name}
                                    </h3>
                            </div>
                                <div className="post-content">
                                    <h3 className="pc-h3">{post.formatted_title}</h3>
                                    <h1 className="pc-h1">{post.content}</h1>
                                </div>
                                <Link style={{textDecoration: "none"}} to={`${url}/comments/${post.title}`}>
                                    <div className="post-lower">
                                        <FontAwesomeIcon icon={faComment} style={{fontSize:"15px", color:"rgb(231, 231, 231)"}}/>
                                        <h4 style={{color: "white", margin: "0px 10px"}}>{post.comments.length || 0}</h4>
                                        <h4 className="pl-h4" style={{margin: "0px"}}>Comments</h4>
                                    </div>
                                </Link>
                        </div>
                    </div>
                    )
                })
                }
          </div>
      );

}