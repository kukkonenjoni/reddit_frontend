import Postnav from "./Postnav"
import Filter from "./Filter"
import Posts from "./Posts"
import "../css/main.css"

export default function Main() {
    return(
        <div className="background"style={{backgroundColor: "#0C0C0C", minHeight: "92.9vh", display: "flex", justifyContent:"center"}}>
            <div className="container" style={{width: "64rem"}}>
                <Postnav />
                <div className="main-content">
                    <div className="postandfilter">
                        <Filter />
                        <Posts />
                    </div>
                    <div className="information">
                        <h1>TESTinformation</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
