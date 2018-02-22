import React from 'react';
import Tone from 'tone'

const ControlBar = (props) => {

    const clearSelected = (event) => {
        const selectedNotes = document.querySelectorAll('.selectedNote');
        [].forEach.call(selectedNotes, function (note) {
            note.classList.remove('selectedNote')
        })
        props.stopLoop();
        // Tone.Transport.stop()
        // Tone.Transport.cancel()
    }


    return (
        <footer>
            <div className="controlBar">
                <div id="synth-options">
                    <button className="control-square" id="mono" onClick={props.changeSynth}>Mono Synth</button>
                    <button className="control-square" id="duo" onClick={props.changeSynth}>Duo Synth</button>
                    <button className="control-square" id="membrane" onClick={props.changeSynth}>Membrane Synth</button>
                </div>
                <div id="drum-options">
                    <div id="drum-dropdown"></div>
                </div>
                <div id="control-options">
                    <button className="control-round" id="play" onClick={props.playLoop}>Play</button>
                    <button className="control-round" id="stop" onClick={props.stopLoop}>Stop</button>
                    <button className="control-round" id="clear" onClick={clearSelected} >Clear</button>
                    <button className="control-round" id="save">Save</button></div>
            </div>
        </footer>
    )

}

export default ControlBar;
