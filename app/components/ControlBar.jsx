import React, { Component } from 'react';
import Tone from 'tone'

export default class ControlBar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            bpm: 120
        }

        this.clearSelected = this.clearSelected.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    clearSelected(event) {
        const selectedNotes = document.querySelectorAll('.selectedNote');
        [].forEach.call(selectedNotes, function (note) {
            note.classList.remove('selectedNote')
        })
        this.props.stopLoop();
        // Tone.Transport.stop()
        // Tone.Transport.cancel()
    }

    handleChange(event) {
        this.setState({
            bpm: event.target.value
        }, () => {
            Tone.Transport.bpm.value = this.state.bpm;
        })
    }

    render() {
        return (
            <footer>
                <div className="controlBar">
                    <div id="synth-options">
                        <button className="control-square" id="mono" onClick={this.props.changeSynth}>Mono Synth</button>
                        <button className="control-square" id="duo" onClick={this.props.changeSynth}>Duo Synth</button>
                        <button className="control-square" id="membrane" onClick={this.props.changeSynth}>Membrane Synth</button>
                    </div>
                    <div id="bpm-options">
                        <h6>BPM (80 - 240)</h6>
                        <div className="slidercontainer">
                            <input className="slider" type="range" min="80" max="240" value={this.state.bpm} onChange={this.handleChange}></input>
                        </div>
                    </div>
                    <div id="control-options">
                        <button className="control-round" id="play" onClick={this.props.playLoop}>Play</button>
                        <button className="control-round" id="stop" onClick={this.props.stopLoop}>Stop</button>
                        <button className="control-round" id="clear" onClick={this.clearSelected} >Clear</button>
                        <button className="control-round" id="save">Save</button></div>
                </div>
            </footer>
        )

    }

}

// export default ControlBar;
