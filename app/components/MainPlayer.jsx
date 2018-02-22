import React from 'react';
import Tone from 'tone';

import SynthColumn from './SynthColumn'
import ControlBar from './ControlBar'
import NavBar from './NavBar'


const MainPlayer = (props) => {

    console.log(props)

    const columns = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]

    return (
        <div className="player">
            <NavBar />
            <div id="player-body">
                {columns.map((colNum) => (
                    <div key={colNum} id={colNum} className="column">
                        <SynthColumn id={colNum} startNote={props.startNote} endNote={props.endNote} highlight={props.patternIndex === Number(colNum) ? 'playing' : null} />
                    </div>
                ))}
            </div>
            <ControlBar changeSynth={props.changeSynth} playLoop={props.playLoop} stopLoop={props.stopLoop} />
        </div>
    )
}

export default MainPlayer;
