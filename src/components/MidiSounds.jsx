import { useRef } from 'react';
import MIDISounds from 'midi-sounds-react';

const MidiSounds = () => {
    const midiRef = useRef(null);
    const playTestInstrument = () => {
        if(midiRef.current) midiRef.current.playChordNow(3, [60], 2.5);
        if(midiRef.current) midiRef.current.playChordNow(3, [60], 2.5);
        if(midiRef.current) midiRef.current.playChordNow(3, [60], 2.5);
    }
    return (
        <div>
            <p><button onClick={playTestInstrument}>Play</button></p>
            <MIDISounds ref={midiRef} appElementName="root" instruments={[192]} drums={[2,33]}  />	
        </div>
    );
};

export default MidiSounds;