export default function Commentscomments({ data }) {

    function formatdate(date) {
        let newDate = date.split("-")
        let newDate2 = newDate[2].split(".")
        newDate2 = newDate2[0].replace(/[^a-z^0-9]+/g, " ");
        newDate2 = newDate2.split(" ")
        newDate[2] = newDate2[0].toString()
        newDate2.shift()
        newDate2.pop()
        newDate2 = newDate2.toString().replace(/,/g, ":")
        const theDate = `${newDate2} ${newDate[2]}/${newDate[1]}`
        return theDate
    }

    return(
        <div className="post-container" style={containerstyle}>
            <div>
                Add if user not logged - Log in
            </div>
            <div className="comments" style={{margin: "0px 15px"}}>
                {data ? data.map((comment) => {
                    return(
                        <div className="comment">
                            <div className="single-header" style={{display: "flex"}}>
                                <img style={{borderRadius: "50%", width: "20px"}} src="https://cdn.theorg.com/2f421c28-34f1-4bc8-b46c-497ad89d9dd2_medium.png" />
                                <h3 style={usernamestyle}>{comment.createdBy.url} · {formatdate(comment.createdAt)}</h3>
                            </div>
                            <div className="single-comment" style={commentcontainerstyle}>
                                <div>
                                    <h2 style={commentstyle}>{comment.content}</h2>
                                </div>
                                {comment.comments.map((nestedcomment) => {
                                return(
                                    <div style = {{marginLeft: "10px", marginTop: "15px"}}>
                                        <div style={{display: "flex"}}>
                                            <img alt="reddit_logo" style={{borderRadius: "50%", width: "20px"}} src="https://cdn.theorg.com/2f421c28-34f1-4bc8-b46c-497ad89d9dd2_medium.png" />
                                            <h3 style={usernamestyle}>{nestedcomment.createdBy.url} · {formatdate(nestedcomment.createdAt)}</h3>
                                        </div>
                                        <div style={commentcontainerstyle}>
                                            <h2 style={commentstyle}>{nestedcomment.content}</h2>
                                        </div>
                                    </div>
                                )
                            })}
                            </div>
                        </div>
                    )
                }): ""}
            </div>
        </div>
    )
}

const containerstyle = {
    marginTop: "0px",
    height: "200px",
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px",
    display: "flex",
    flexDirection: "column",
    paddingBottom: "40px"
}
const commentcontainerstyle = {
    borderLeft: "2px solid white",
    margin: "10px"
}
const usernamestyle = {
    color:"rgb(210, 210, 210)",
    marginLeft: "5px",
    fontSize: "11px",
    marginTop: "2px"
}
const commentstyle = {
    color:"rgb(210, 210, 210)",
    marginLeft: "5px"
}
