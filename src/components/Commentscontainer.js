import Commentspost from "./Commentspost";
import Commentscomments from "./Commentscomments";
import axios from "axios";
import Commentscreatecomment from "./Commentscreatecomment";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { isLogged } from "../Recoil/globalState";
import { useRecoilState } from "recoil";

export default function Commentscontainer() {

    const [LoggedInUser] = useRecoilState(isLogged)
    const { subreddit, post } = useParams()
    const { status, error, data, isFetching } = useQuery("Fullpostinfo", async () => {
        const { data} = await axios.get(`https://fast-dawn-38066.herokuapp.com/api/r/${subreddit}/comments/${post}`)
        return data
    });

    return(
        <div>
            <div className="background"style={{backgroundColor: "#0C0C0C", minHeight: "92.9vh", display: "flex", justifyContent:"center"}}>
                <div style={containerstyle}>
                    <div className="main-content" style={{marginTop: "25px"}}>
                        <div className="postandfilter" style={{width: "750px"}}>
                            <Commentspost data={data ? data : ""}/>
                            <Commentscreatecomment LoggedInUser={LoggedInUser}/>
                            <div className="post-container" style={containerstyle2}>
                                <Commentscomments data={data ? data.comments : ""}/>
                            </div>
                        </div>
                        <div className="information">
                            <h1 style={{color: "wheat"}}>TESTinformation</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const containerstyle = {
    width: "75rem",
    backgroundColor: "black",
    minHeight: "92.8vh",
    display: "flex",
    justifyContent: "center"
}
const containerstyle2 = {
    marginTop: "0px",
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px",
    display: "flex",
    flexDirection: "column",
    paddingBottom: "40px"
}