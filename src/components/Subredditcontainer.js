import { useParams } from "react-router"
import { useQuery } from "react-query";
import axios from "axios";
import Filter from "./Filter";
import Subredditheader from "./Subredditheader";
import SubredditInfo from "./SubredditInfo";
import Subredditposts from "./Subredditposts";
import Subredditaddpost from "./Subredditaddpost";
import { useRecoilState } from 'recoil';
import { isLogged } from "../Recoil/globalState"



export default function Subredditcontainer() {

    const { subreddit } = useParams()
    const [LoggedInUser] = useRecoilState(isLogged)

    const { status, error, data, isFetching } = useQuery("subredditPosts", async () => {
        const { data } = await axios.get(`https://fast-dawn-38066.herokuapp.com/api/r/${subreddit}`)
        return data
    });
    return(
        <div>
            {data ? <>
            <Subredditheader />
            <SubredditInfo subredditName={data ? data.obj.name : ""} subredditDesc={data ? data.obj.description : ""}/>
            <div className="main-background">
                <div className="main-container">
                    <div className="main-content" style={{marginTop: "25px"}}>
                        <div className="main-postandfilter">
                            {LoggedInUser ? <Subredditaddpost /> : ""}
                            <Filter />
                            <Subredditposts data={data ? data.obj.posts : ""}/>
                        </div>
                        <div className="information">
                            <h1>TESTinformation</h1>
                            {console.log(data.obj.posts)}
                        </div>
                    </div>
                </div>
            </div>
            </>:
            <div style={loadingstyle}>
                <h1>Loading...</h1>
            </div>}
        </div>
    )
}

const loadingstyle = {
    backgroundColor:"rgb(50, 50, 50)",
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}
