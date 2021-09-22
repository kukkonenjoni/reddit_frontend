export default function Commentscomments(props) {
    return(
        <div className="post-container" style={containerstyle}>
            <div>
                Add if user not logged - Log in
            </div>
            <div className="comments">

            </div>
        </div>
    )
}

const containerstyle = {
    marginTop: "0px",
    height: "200px",
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px"
}