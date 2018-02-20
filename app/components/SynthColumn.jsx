import React from 'react';
import Tone from 'tone';


const SynthColumn = (props) => {

  console.log(props.id)


  const toggleSelected = (event) => {
    const currentColumn = document.getElementById(props.id)
    const selectedNote = currentColumn.querySelector('.selectedNote');
    if (selectedNote) {
      selectedNote.classList.remove('selectedNote');
    }
    event.target.classList.add('selectedNote')
  }


  return (
    <div className="column-inner">
      <div className="note r1" onMouseDown={props.startNote} onMouseUp={props.endNote} onClick={toggleSelected}>B5</div>
      <div className="note r2" onMouseDown={props.startNote} onMouseUp={props.endNote} onClick={toggleSelected}>G5</div>
      <div className="note r3" onMouseDown={props.startNote} onMouseUp={props.endNote} onClick={toggleSelected}>E5</div>
      <div className="note r4" onMouseDown={props.startNote} onMouseUp={props.endNote} onClick={toggleSelected}>C5</div>
      <div className="note r5" onMouseDown={props.startNote} onMouseUp={props.endNote} onClick={toggleSelected}>B4</div>
      <div className="note r6" onMouseDown={props.startNote} onMouseUp={props.endNote} onClick={toggleSelected}>G4</div>
      <div className="note r7" onMouseDown={props.startNote} onMouseUp={props.endNote} onClick={toggleSelected}>E4</div>
      <div className="note r8" onMouseDown={props.startNote} onMouseUp={props.endNote} onClick={toggleSelected}>C4</div>
      <div className="note r9" onMouseDown={props.startNote} onMouseUp={props.endNote} onClick={toggleSelected}>B3</div>
      <div className="note r10" onMouseDown={props.startNote} onMouseUp={props.endNote} onClick={toggleSelected}>G3</div>
      <div className="note r11" onMouseDown={props.startNote} onMouseUp={props.endNote} onClick={toggleSelected}>E3</div>
      <div className="note r12" onMouseDown={props.startNote} onMouseUp={props.endNote} onClick={toggleSelected}>C3</div>
    </div>
  )

}

export default SynthColumn;
