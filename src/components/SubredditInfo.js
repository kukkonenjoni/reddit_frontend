export default function SubredditInfo({subredditName, subredditDesc}) {
    return(
        <div style={infocontainer}>
            <div style={{display: "flex", marginLeft: "430px" }}>
                <img style={imgstyle} src="https://cdn.theorg.com/2f421c28-34f1-4bc8-b46c-497ad89d9dd2_medium.png" alt="Infobackground"/>
                <div>
                    <h1 style={{margin: "0px", color:"rgb(210, 210, 210)"}}>r/{subredditName} - {subredditDesc}</h1>
                    <h4 style={{margin: "0px", color:"rgb(140, 140, 140)"}}>r/{subredditName}</h4>
                </div>
                <button style={buttonstyle}>
                    Join
                </button>
            </div>
            <div style={{marginLeft: "450px", display:"flex"}}>
                <h5 style={{margin: "0px 15px", color:"rgb(140, 140, 140)"}}>Posts</h5>
                <h5 style={{margin: "0px 15px", color:"rgb(140, 140, 140)"}}>Rules</h5>
            </div>
        </div>
    )
}

const imgstyle = {
    marginTop: "-40px",
    height: "110px",
    width: "110px",
    borderRadius: "50%"
}
const infocontainer = {
    backgroundColor: "#212222", 
    height: "90px",
}
const buttonstyle = {
    width: "85px",
    height: "30px",
    margin: "0px 50px",
    marginTop: "5px",
    borderRadius: "30px",
    backgroundColor: "rgb(210, 210, 210)",
    fontSize: "17px"
}