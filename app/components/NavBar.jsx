import React from 'react';
import Tone from 'tone'

const NavBar = (props) => {

    return (
        <header>
            <div className="navBar">
                <div id="nav-options">
                    <h2>Browser Synth</h2>
                    <button className="control-square" id="library">Library</button>
                </div>
            </div>
        </header>
    )
}

export default NavBar;