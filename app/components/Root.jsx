import React, { Component } from 'react';
import Tone from 'tone';
import { NavLink } from 'react-router-dom'


/* The code below does NOT relate to your project.
   This code is just a nice BIG example of how you can make a component.
   Also it is HILARIOUS :D Have fun!
 */

export default class SynthColumn extends Component {

    constructor() {
        super()

        this.state = {
            synth: new Tone.MonoSynth().toMaster()
        }
        console.log('constructor', this.state)
        this.startNote = this.startNote.bind(this)
        this.endNote = this.endNote.bind(this)
        this.toggleSelected = this.toggleSelected.bind(this)
    }

    startNote(event) {
        console.log('start', this.state)
        this.state.synth.triggerAttack(event.target.textContent);
    }

    endNote(event) {
        this.state.synth.triggerRelease();
        console.log('end', this.state)
    }

    toggleSelected(event) {
        const selectedNote = document.querySelector('.selected');
        if (selectedNote) {
            selectedNote.classList.remove('selected');
        }
        event.target.classList.add('selected')
    }

    render() {

        return (
            <div className="column">
                <div className="note r1" onMouseDown={this.startNote} onMouseUp={this.endNote} onClick={this.toggleSelected}>B5</div>
                <div className="note r2" onMouseDown={this.startNote} onMouseUp={this.endNote} onClick={this.toggleSelected}>G5</div>
                <div className="note r3" onMouseDown={this.startNote} onMouseUp={this.endNote} onClick={this.toggleSelected}>E5</div>
                <div className="note r4" onMouseDown={this.startNote} onMouseUp={this.endNote} onClick={this.toggleSelected}>C5</div>
                <div className="note r5" onMouseDown={this.startNote} onMouseUp={this.endNote} onClick={this.toggleSelected}>B4</div>
                <div className="note r6" onMouseDown={this.startNote} onMouseUp={this.endNote} onClick={this.toggleSelected}>G4</div>
                <div className="note r7" onMouseDown={this.startNote} onMouseUp={this.endNote} onClick={this.toggleSelected}>E4</div>
                <div className="note r8" onMouseDown={this.startNote} onMouseUp={this.endNote} onClick={this.toggleSelected}>C4</div>
                <div className="note r9" onMouseDown={this.startNote} onMouseUp={this.endNote} onClick={this.toggleSelected}>B3</div>
                <div className="note r10" onMouseDown={this.startNote} onMouseUp={this.endNote} onClick={this.toggleSelected}>G3</div>
                <div className="note r11" onMouseDown={this.startNote} onMouseUp={this.endNote} onClick={this.toggleSelected}>E3</div>
                <div className="note r12" onMouseDown={this.startNote} onMouseUp={this.endNote} onClick={this.toggleSelected}>C3</div>
            </div>
        )
    }
}
