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
            pattern: null
        }

        this.startNote = this.startNote.bind(this)
        this.endNote = this.endNote.bind(this)
        this.changeSynth = this.changeSynth.bind(this)
        this.playLoop = this.playLoop.bind(this)
        this.stopLoop = this.stopLoop.bind(this)
        this.timelineHighlight = this.timelineHighlight.bind(this)
    }


    startNote(event) {
        this.state.synth.triggerAttack(event.target.textContent);
    }

    endNote(event) {
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

    playLoop(event) {
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

        this.setState({
            pattern: new Tone.Pattern((time, note) => {
                this.state.synth.triggerAttackRelease(note, '8n')
            }, playNotes),

            loop: new Tone.Loop(() => {
            this.state.pattern.start(0)
        })}, () => this.timelineHighlight(allColumns))
        Tone.Transport.start('+0.1')
    }


    stopLoop(event) {
        Tone.Transport.stop()
        this.state.pattern.stop();
        this.state.loop.stop();
        console.log('after stop', this.state.loop.state)
        this.setState({
            loop: null
        })

    }

    timelineHighlight(allColumns) {
        this.state.loop.start(0);
        console.log('before stop', this.state.loop.state)
        // while(this.state.pattern.index < 16) {
        // allColumns[this.state.pattern.index].classList.add('playing')
        // if(this.state.pattern.index === 0) {
        //     allColumns[this.state.pattern.index].classList.remove('playing')
        // } else {
        //     allColumns[this.state.pattern.index - 1].classList.remove('playing')
        // }
        // }
            // column.classList.add('playing');
            // column.classList.remove('playing');

    }


    render() {
        return (

            <div id="container">
                <MainPlayer startNote={this.startNote} endNote={this.endNote} changeSynth={this.changeSynth} playLoop={this.playLoop} stopLoop={this.stopLoop} />
            </div>

        )
    }

}
