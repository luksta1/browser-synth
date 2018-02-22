import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import Tone from 'tone';
// import axios from 'axios'
import MainPlayer from './MainPlayer.jsx'
import Home from './Home.jsx'
import Library from './Library.jsx'


export default class Root extends Component {

    constructor() {
        super()

        this.state = {
            synth: new Tone.MonoSynth().toMaster(),
            loop: null,
            pattern: {},
            patternIndex: null
        }

        this.startNote = this.startNote.bind(this)
        this.endNote = this.endNote.bind(this)
        this.changeSynth = this.changeSynth.bind(this)
        this.playLoop = this.playLoop.bind(this)
        this.stopLoop = this.stopLoop.bind(this)
        this.createNoteArray = this.createNoteArray.bind(this)
    }


    startNote(event) {
        this.state.synth.triggerAttack(event.target.textContent);
    }

    endNote() {
        this.state.synth.triggerRelease();
    }

    changeSynth(event) {
        if (event.target.textContent === 'Membrane Synth') {
            this.setState({
                synth: new Tone.MembraneSynth().toMaster()
            })
        } else if (event.target.textContent === 'Duo Synth') {
            this.setState({
                synth: new Tone.DuoSynth().toMaster()
            })
        } else if (event.target.textContent === 'Mono Synth') {
            this.setState({
                synth: new Tone.MonoSynth().toMaster()
            })
        }
    }

    createNoteArray() {
        let playNotes = [];
        const allColumns = document.querySelectorAll('.column');
        [].forEach.call(allColumns, (column) => {
            let selected = column.querySelector('.selectedNote')
            if (selected) {
                playNotes.push(selected.innerHTML)
            } else {
                playNotes.push(0)
            }
        })
        return playNotes
    }

    playLoop() {
        let noteArr = this.createNoteArray()

        this.setState({
            pattern: new Tone.Pattern((time, note) => {
                this.state.synth.triggerAttackRelease(note, '8n')
                this.setState({
                    patternIndex: this.state.pattern.index
                })
            }, noteArr),
            loop: new Tone.Loop(() => {
                this.state.pattern.start(0)
            })
        }, () => {
            this.state.loop.start(0)
            Tone.Transport.start('+0.1')
            console.log(this.state.pattern.values)
        })
    }


    stopLoop() {
        this.state.loop.stop();
        this.state.pattern.stop()
        this.setState({
            patternIndex: null
        })
    }


    render() {
        return (

            <div id="container">
                <MainPlayer startNote={this.startNote} endNote={this.endNote} changeSynth={this.changeSynth} playLoop={this.playLoop} stopLoop={this.stopLoop} patternIndex={this.state.patternIndex} />
            </div>

        )
    }

}
