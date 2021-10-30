import { useRecoilState } from 'recoil';
import { isLogged } from "../Recoil/globalState"
import CreateCommPostModal from '../modals/CreateCommPostModal';
import { useState } from 'react';
import ModalCreateCommunity from './ModalCreateCommunity';

export default function MainCreatecommunity() {

    const [LoggedInUser] = useRecoilState(isLogged)
    const [CreateCommunity, setCreateCommunity] = useState(false)


    if (LoggedInUser) {
        return(
            <div className="information2">
                <div className="cc-background">
                </div>
                <img className="cc-img" src="https://upload.wikimedia.org/wikipedia/fi/0/0e/Reddit_-_logo.png"/>
                <h1 style={{color: "white", fontSize: "15px", margin: "5px"}}>Your personal Reddit frontpage. Come here to check in with your favorite communities.</h1>
                <div className="cc-buttons">
                    <CreateCommPostModal show={CreateCommunity} handlestate={() => setCreateCommunity(!CreateCommunity)}>
                        <ModalCreateCommunity />
                    </CreateCommPostModal>

                    <button className="cc-btn cc-createpost">Create a post</button>
                    <button className="cc-btn cc-createcom" onClick={() => setCreateCommunity(!CreateCommunity)}>Create community</button>
                </div>
            </div>
        )
    } else {
        return(
            <div className="information2" style={{height: "80px"}}>
                <h1 style={{color: "white"}}>Please Log in to create a community</h1>
            </div>
        )
    }
}