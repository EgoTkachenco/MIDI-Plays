import * as Tone from 'tone'
import { useState } from 'react';
const octaves = [ 3, 4, 5];
const NOTES = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const synth = new Tone.PolySynth(Tone.Synth, {
    envelope: {
        attack: 0.02,
        decay: 0.1,
        sustain: 0.3,
        release: 1,
    },
}).toDestination();
const PlayMidi = ({ name, midi }) => {
    const [isPlaying, setPlaying] = useState(false);
    const [activeNotes, setActiveNotes] = useState(new Array(midi.tracks.length).fill(""));
    
    function playMidi() {
        // let synths = [];
        const now = Tone.now();
        setPlaying(true);
        midi.tracks.forEach((track, index) => {
            //create a synth for each track
            // synths.push(synth);
            //schedule all of the events
            track.notes.forEach((note) => {
                synth.triggerAttackRelease(
                    note.name,
                    note.duration,
                    note.time + now,
                    note.velocity
                );
                // console.log(note.name)
            });
        });
    }
    console.log(1)
    return (
        <div className="play-wrapper">
            <button className="btn-play"onClick={() => playMidi()}>{name}</button>

            {isPlaying && <div className="midi-play-view">
                <div className="notes" style={{ color: 'white' }}>
                    {activeNotes.map((track, i) => <div key={i}>{track || '--'}</div>)}
                </div>
            </div>}
            
        </div>
    );
};

export default PlayMidi;