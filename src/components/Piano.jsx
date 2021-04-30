import * as Tone from 'tone'
import React, { useState } from 'react';

let synth = new Tone.PolySynth(Tone.Synth, {
    envelope: {
        attack: 0.05,
        decay: 0.1,
        sustain: 0.3,
        release: 1,
    },
}).toDestination();
const Piano = () => {
    const [chords, setChords] = useState([])
    const playNote = (name) => {
        let now = synth.now()
        // play a chord
        synth.triggerAttackRelease([name], 0.3);
        setChords([...chords, { note: name, time: now }])
    }
    const playSong = () => {
        const player = new Tone.PolySynth(Tone.Synth, {
            envelope: {
                attack: 0.05,
                decay: 0.1,
                sustain: 0.3,
                release: 1,
            },
        }).toDestination();
        let now = player.now()
        console.log(now)
        chords.forEach(note => {
            player.triggerAttackRelease(note.note, 0.3, now + note.time);
        })
    }
    const clear = () => {
        setChords([]);
        // synth =  new Tone.PolySynth(Tone.Synth, {
        //     envelope: {
        //         attack: 0.05,
        //         decay: 0.1,
        //         sustain: 0.3,
        //         release: 1,
        //     },
        // }).toDestination();
        synth.seconds = 30
        console.log(synth.now())

    }
    const octaves = [3, 4]
    return (
        <React.Fragment>
            <button onClick={() => playSong()}>Play song</button>
            <button onClick={() => clear()}>Clear song</button>
            <div className="piano-wrapper">
                {octaves.map(octave => <div className="octava" key={octave}>
                    <button onClick={() => playNote('C' + octave)}>C{octave}</button>
                    <button onClick={() => playNote('D' + octave)}>D{octave}</button>
                    <button onClick={() => playNote('E' + octave)}>E{octave}</button>
                    <button onClick={() => playNote('F' + octave)}>F{octave}</button>
                    <button onClick={() => playNote('G' + octave)}>G{octave}</button>
                    <button onClick={() => playNote('A' + octave)}>A{octave}</button>
                    <button onClick={() => playNote('B' + octave)}>B{octave}</button>
                </div>)}
            </div>
            {chords.map(c => c.note + '  ' + c.time)}
        </React.Fragment>
    );
};

export default Piano;