import axios from "axios"
import { useState } from "react"
import { useRecoilState } from "recoil"
import { isLogged } from "../Recoil/globalState"
import { Redirect } from "react-router"

export default function ModalCreateCommunity() {

    const [LoggedInUser] = useRecoilState(isLogged)
    const [Community, setCommunity] = useState("")
    const [Description, setDescription] = useState("")

    console.log(LoggedInUser, Community)
    const createCommunity = (event) => {
        event.preventDefault()
        const newSubreddit = {
            name: Community,
            description: Description
        }
        const config = {
            headers: { Authorization: `Bearer ${LoggedInUser.token}` }
        };
        axios.post("https://fast-dawn-38066.herokuapp.com/api/r/createcommunity", newSubreddit, config)
            .then(res => res.status == 200 ?  setCommunity("") : "")
            .then(res => res.status == 200 ?  setDescription("") : "")

    }

    return(
        <div>
            <h1>Name</h1>
            <h3>Community names including capitalization cannot be changed.</h3>
            <form onSubmit={createCommunity}>
                <h1>r/<input placeholder={Community ? Community : "Create a community..."} onChange={(e) => setCommunity(e.target.value)}></input></h1>
                <h3>Community description</h3>
                <input placeholder={Description ? Description : "Community description..."} onChange={(e) => setDescription(e.target.value)}></input>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}