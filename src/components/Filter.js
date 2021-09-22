import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurn, faArrowDown, faAtom, faUpload } from '@fortawesome/free-solid-svg-icons'

export default function Filter() {
    return(
        <div className="filter">
            <div className="flex">
                <FontAwesomeIcon icon={faBurn} className="filter-icon"/>
                <h1 className="filter-text">Hot</h1>
            </div>
            <div className="flex">
                <h1 className="filter-text">Everywhere</h1>
                <FontAwesomeIcon icon={faArrowDown} className="filter-icon" style={{marginTop: "4px"}}/>
            </div>
            <div className="flex">
                <FontAwesomeIcon icon={faAtom} className="filter-icon"/>
                <h1 className="filter-text">New</h1>
            </div>
            <div className="flex">
                <FontAwesomeIcon icon={faUpload} className="filter-icon"/>
                <h1 className="filter-text">Top</h1>
            </div>
        </div>
    )
}