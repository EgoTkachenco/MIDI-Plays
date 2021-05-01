import * as Tone from 'tone'
import React, { useState } from 'react';
let synths = [];
const PlayMidi = ({ name, midi }) => {

    const [isPlaying, setPlaying] = useState(false);

    
	const onPlayNote = (trackNumber, note) => {
		let el = document.getElementById(`${midi.header.name}-track-${trackNumber}`)
		el.innerText = note.name;
    }
    const toggleMIDI = () => {
        if (!isPlaying) {
            const now = Tone.now() + 0.5;
            midi.tracks.forEach((track, index) => {
                //create a synth for each track
                const synth = new Tone.PolySynth(Tone.Synth, {
                    envelope: {
                        attack: 0.02,
                        decay: 0.1,
                        sustain: 0.3,
                        release: 1,
                    },
                }).toDestination();
                //schedule all of the events
                track.notes.forEach(note => {
					synth.triggerAttackRelease(
						note.name,
                        note.duration,
                        note.time + now,
                        note.velocity
					);
					Tone.Draw.schedule(() => onPlayNote(index, note), note.time + now);
				});
				synths.push(synth);
			});
			Tone.Transport.start();
            setPlaying(true)
		} else {
			while (synths.length >= 1) {
				synths.shift().disconnect();
			}
			synths = [];
			Tone.Draw.cancel(0);
			setPlaying(false)
        }
    }
    console.log('Is play:', midi)
    return (
        <div className="play-wrapper">
            <button className="btn-play" onClick={toggleMIDI}>{name}</button>
            <div className="notes" style={{ color: 'white' }}>
				{midi.tracks.map((track, i) =>
				<div key={i} id={`${midi.header.name}-track-${i}`}>
                    ---
                </div>)}
            </div>
        </div>
    );
};

const jump_notes = [{
			time: "192i",
			noteName: "G4",
			velocity: 0.8110236220472441,
			duration: "104i"
		},
		{
			time: "192i",
			noteName: "B4",
			velocity: 0.7874015748031497,
			duration: "104i"
		},
		{
			time: "192i",
			noteName: "D5",
			velocity: 0.8031496062992126,
			duration: "104i"
		},
		{
			time: "480i",
			noteName: "G4",
			velocity: 0.7559055118110236,
			duration: "104i"
		},
		{
			time: "480i",
			noteName: "C5",
			velocity: 0.6850393700787402,
			duration: "104i"
		},
		{
			time: "480i",
			noteName: "E5",
			velocity: 0.6771653543307087,
			duration: "104i"
		},
		{
			time: "768i",
			noteName: "F4",
			velocity: 0.8661417322834646,
			duration: "104i"
		},
		{
			time: "768i",
			noteName: "A4",
			velocity: 0.8346456692913385,
			duration: "104i"
		},
		{
			time: "768i",
			noteName: "C5",
			velocity: 0.8188976377952756,
			duration: "104i"
		},
		{
			time: "1056i",
			noteName: "F4",
			velocity: 0.7007874015748031,
			duration: "104i"
		},
		{
			time: "1056i",
			noteName: "A4",
			velocity: 0.6850393700787402,
			duration: "104i"
		},
		{
			time: "1056i",
			noteName: "C5",
			velocity: 0.6614173228346457,
			duration: "104i"
		},
		{
			time: "1248i",
			noteName: "G4",
			velocity: 0.6771653543307087,
			duration: "104i"
		},
		{
			time: "1248i",
			noteName: "B4",
			velocity: 0.6771653543307087,
			duration: "104i"
		},
		{
			time: "1248i",
			noteName: "D5",
			velocity: 0.7165354330708661,
			duration: "104i"
		},
		{
			time: "1440i",
			noteName: "G4",
			velocity: 0.8818897637795275,
			duration: "248i"
		},
		{
			time: "1440i",
			noteName: "B4",
			velocity: 0.84251968503937,
			duration: "248i"
		},
		{
			time: "1440i",
			noteName: "D5",
			velocity: 0.8818897637795275,
			duration: "248i"
		},
		{
			time: "1728i",
			noteName: "G4",
			velocity: 0.8267716535433071,
			duration: "104i"
		},
		{
			time: "1728i",
			noteName: "C5",
			velocity: 0.8031496062992126,
			duration: "104i"
		},
		{
			time: "1728i",
			noteName: "E5",
			velocity: 0.8188976377952756,
			duration: "104i"
		},
		{
			time: "2016i",
			noteName: "F4",
			velocity: 0.7086614173228346,
			duration: "104i"
		},
		{
			time: "2016i",
			noteName: "A4",
			velocity: 0.7244094488188977,
			duration: "104i"
		},
		{
			time: "2016i",
			noteName: "C5",
			velocity: 0.7007874015748031,
			duration: "104i"
		},
		{
			time: "2208i",
			noteName: "C4",
			velocity: 0.9921259842519685,
			duration: "296i"
		},
		{
			time: "2208i",
			noteName: "F4",
			velocity: 0.968503937007874,
			duration: "200i"
		},
		{
			time: "2208i",
			noteName: "A4",
			velocity: 0.9606299212598425,
			duration: "208i"
		},
		{
			time: "2400i",
			noteName: "E4",
			velocity: 0.7559055118110236,
			duration: "104i"
		},
		{
			time: "2400i",
			noteName: "G4",
			velocity: 0.7007874015748031,
			duration: "104i"
		},
		{
			time: "2592i",
			noteName: "C4",
			velocity: 0.968503937007874,
			duration: "488i"
		},
		{
			time: "2592i",
			noteName: "D4",
			velocity: 0.9448818897637795,
			duration: "488i"
		},
		{
			time: "2592i",
			noteName: "G4",
			velocity: 0.937007874015748,
			duration: "488i"
		}
		]

export default PlayMidi;