import { useParams } from "react-router-dom"
import { useState } from "react"
import { useRecoilState } from 'recoil';
import { isLogged } from "../Recoil/globalState"
import axios from "axios";

export default function Subredditaddpost() {

    const [ Title, setTitle ] = useState("")
    const [ Text, setText ] = useState("")
    const { subreddit } = useParams()
    const [LoggedInUser] = useRecoilState(isLogged)

    const Submitpost = (event) => {
        event.preventDefault()
        if (Title) {
            const newPost = {
                title: Title,
                content: Text ? Text : ""
            }
            const config = {
                headers: { Authorization: `Bearer ${LoggedInUser.token}` }
            }
            axios.post(`https://fast-dawn-38066.herokuapp.com/api/r/${subreddit}/post`, newPost, config)
                .then((res) => console.log(res))
        } else {
            window.alert("Please Add Title!")
        }
    }


    return(
        <div style={filterstyle}>
            <form style={formstyle} onSubmit={Submitpost}>
                <input type="text" placeholder="Title" style={inputstyletitle} onChange={(e) => setTitle(e.target.value)}></input>
                <textarea style={textareastyle} type="text" placeholder="Text (optional)" onChange={(e) => setText(e.target.value)}></textarea>
                <button type="submit" style={inputstyletext}>Create post</button>
            </form>
        </div>
    )
}

const inputstyletext = {
    marginTop: "10px",
    backgroundColor: "#5F5654",
    borderRadius: "20px",
    width: "150px",
    color: "white"
}
const textareastyle = {
    marginTop: "10px",
    backgroundColor: "#5F5654",
    borderRadius: "20px",
    color: "white"
}
const inputstyletitle = {
    width: "100%",
    backgroundColor: "#5F5654",
    borderRadius: "5px",
    color: "white"
}
const formstyle = {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    justifyContent: "center",
    alignItems: "center"
}
const filterstyle = {
    backgroundColor: "#212222",
    borderRadius: "5px",
    border: "solid grey thin",
    padding: "5px 0px",
    height: "180px",
    display: "flex",
    justifyContent: "center",
    marginBottom: "15px"
}