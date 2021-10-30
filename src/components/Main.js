import Postnav from "./Postnav"
import Filter from "./Filter"
import Posts from "./Posts"
import MainSidemenu from "./MainSidemenu"
import MainCreatecommunity from "./MainCreatecommunity"

export default function Main() {
    return(
        <div className="main-background">
            <div className="main-container">
                <Postnav />
                <div className="main-content">
                    <div className="main-postandfilter">
                        <Filter />
                        <Posts />
                    </div>
                    <div className="sidebar">
                        <MainCreatecommunity />
                    </div>
                </div>
            </div>
        </div>
    )
}
