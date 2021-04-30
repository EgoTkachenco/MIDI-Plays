import React from 'react';
import Piano from './Piano.jsx'
import PlayMidi from './PlayMidi.jsx';
import midi_1 from '../midis/paranoid.json';
import midi_2 from '../midis/baba-o-riley.json';
// import MidiSounds from './components/MidiSounds.jsx';


const Tabs = ({ tab }) => {
    const renderTab = () => {
        switch (tab.id) {
            case 1:
                return <Piano />
            case 2:
                return (
                <React.Fragment>
                    <PlayMidi name="Paranoid" midi={midi_1} />
                    <PlayMidi name="Baba O`Riley" midi={midi_2} />
                </React.Fragment>)
            default:
                return <Piano />
        }
    } 
    return (
        <div className="content">
            {renderTab()}
        </div>
    );
};

export default Tabs;