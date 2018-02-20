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
            synth: new Tone.MonoSynth().toMaster()
        }

        this.startNote = this.startNote.bind(this)
        this.endNote = this.endNote.bind(this)

        this.changeSynth = this.changeSynth.bind(this)
        this.playLoop = this.playLoop.bind(this)
    }

    startNote(event) {
        console.log('start', event.target.textContent)
        this.state.synth.triggerAttack(event.target.textContent);
    }

    endNote(event) {
        this.state.synth.triggerRelease();
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
        const allColumns = document.querySelectorAll('.column');
        [].forEach.call(allColumns, function (column) {
            let selected = column.querySelector('.selectedNote')
            console.log(selected)
            if (selected) {
                playNotes.push(selected.innerHTML)
            } else {
                playNotes.push(0)
            }
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
        console.log(this.playLoop)
        return (

            <div id="container">
                <MainPlayer startNote={this.startNote} endNote={this.endNote} changeSynth={this.changeSynth} playLoop={this.playLoop} />
            </div>

        )
    }

}