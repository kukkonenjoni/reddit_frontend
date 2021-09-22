import "../css/main.css"
import { useParams } from "react-router"
import { useQuery } from "react-query";
import axios from "axios";
import Postnav from "./Postnav";
import Filter from "./Filter";
import Subredditheader from "./Subredditheader";
import SubredditInfo from "./SubredditInfo";
import Subredditposts from "./Subredditposts";
export default function Subredditcontainer() {

    const { subreddit } = useParams()
    console.log(subreddit)

    const { status, error, data, isFetching } = useQuery("subredditPosts", async () => {
        const { data } = await axios.get(`http://localhost:5000/api/r/${subreddit}`)
        return data
    });
    return(
        <div>
            {data ? <>
            <Subredditheader />
            <SubredditInfo subredditName={data ? data.obj.name : ""} subredditDesc={data ? data.obj.description : ""}/>
            <div className="background"style={{backgroundColor: "#0C0C0C", minHeight: "92.9vh", display: "flex", justifyContent:"center"}}>
                <div className="container" style={{width: "64rem"}}>
                    <div className="main-content" style={{marginTop: "25px"}}>
                        <div className="postandfilter">
                            <Filter />
                            <Subredditposts data={data ? data.obj.posts : ""}/>
                        </div>
                        <div className="information">
                            <h1>TESTinformation</h1>
                        </div>
                    </div>
                </div>
            </div>
            </>: "Add 404 page here, subredditcontainer.js"}
        </div>
    )
}
