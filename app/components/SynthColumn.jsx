import React, { Component } from 'react';
import Tone from 'tone';


/* The code below does NOT relate to your project.
   This code is just a nice BIG example of how you can make a component.
   Also it is HILARIOUS :D Have fun!
 */

export default class WinterJokes extends Component {

  constructor() {
    super()

    this.state = {
      synth: new Tone.MonoSynth().toMaster()
    }
    console.log('constructor', this.state)
    this.startNote = this.startNote.bind(this)
    this.endNote = this.endNote.bind(this)
  }

  startNote(event) {
    console.log('start', this.state)
    this.state.synth.triggerAttack(event.target.textContent);
  }

  endNote(event) {
    this.state.synth.triggerRelease();
    console.log('end', this.state)
  }

  render() {

    return (
      <div>
        <button onMouseDown={this.startNote} onMouseUp={this.endNote}>C4</button>
        <button onMouseDown={this.startNote} onMouseUp={this.endNote}>D4</button>
        <button onMouseDown={this.startNote} onMouseUp={this.endNote}>E4</button>
        <button onMouseDown={this.startNote} onMouseUp={this.endNote}>F4</button>
        <button onMouseDown={this.startNote} onMouseUp={this.endNote}>G4</button>
        <button onMouseDown={this.startNote} onMouseUp={this.endNote}>A4</button>
        <button onMouseDown={this.startNote} onMouseUp={this.endNote}>B4</button>
        <button onMouseDown={this.startNote} onMouseUp={this.endNote}>C5</button>
      </div>
    )
  }
}
