import React from 'react';
import Tone from 'tone';

import SynthColumn from './SynthColumn'
import ControlBar from './ControlBar'


const MainPlayer = (props) => {

    console.log(props)

    const columns = ["col1", "col2", "col3", "col4", "col5", "col6", "col7", "col8", "col9", "col10", "col11", "col12", "col13", "col14", "col15", "col16"]

    return (
        <div className="player">
            <div id="player-body">
                {columns.map((colNum) => (
                    <div key={colNum} id={colNum} className="column">
                        <SynthColumn id={colNum} startNote={props.startNote} endNote={props.endNote} />
                    </div>
                ))}
            </div>
            <ControlBar changeSynth={props.changeSynth} playLoop={props.playLoop} />
        </div>
    )
}

export default MainPlayer;