import React, { Component } from 'react';
import Tone from 'tone';


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

        this.startNote = this.startNote.bind(this)
        this.endNote = this.endNote.bind(this)
        this.toggleSelected = this.toggleSelected.bind(this)
        this.changeSynth = this.changeSynth.bind(this)
        this.playLoop = this.playLoop.bind(this)
    }

    startNote(event) {
        this.state.synth.triggerAttack(event.target.textContent);
    }

    endNote(event) {
        this.state.synth.triggerRelease();
    }

    toggleSelected(event) {
        const selectedNote = document.querySelector('.selectedNote');
        if (selectedNote) {
            selectedNote.classList.remove('selectedNote');
        }
        event.target.classList.add('selectedNote')
    }

    changeSynth(event) {
        if (event.target.textContent === "Membrane Synth") {
            this.setState({
                synth: new Tone.MembraneSynth().toMaster()
            })
        } else if (event.target.textContent === "Duo Synth") {
            this.setState({
                synth: new Tone.DuoSynth().toMaster()
            })
        } else {
            this.setState({
                synth: new Tone.MonoSynth().toMaster()
            })
        }
    }

    playLoop(event) {
        let playNotes = [];
        Array.from(document.getElementsByClassName('selectedNote')).forEach(note => {
            playNotes.push(note.innerHTML)
        })
        let synth = this.state.synth
        let loop = new Tone.Loop(function () {
            let pattern = new Tone.Pattern(function (time, note) {
                synth.triggerAttackRelease(note, "8n")
            }, playNotes);
            pattern.start(0)
        }, "4n")
        loop.start(0)
        Tone.Transport.start('+0.1')
    }


    render() {

        return (
            <div className="column">
                <div className="synths">
                    <button onClick={this.changeSynth} href="#">Mono Synth</button>
                    <button onClick={this.changeSynth} href="#">Duo Synth</button>
                    <button onClick={this.changeSynth} href="#">Membrane Synth</button>
                    <button onClick={this.playLoop} href="#">Play</button>
                </div>
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
