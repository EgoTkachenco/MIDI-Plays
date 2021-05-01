import './App.css';

import {useState} from 'react'
import Menu from './components/Menu.jsx'
import Tabs from './components/Tabs.jsx'

const TABS = [
  { id: 1, name: 'Piano with Tone.js' },
  { id: 2, name: 'Play MIDIS with Tone.js' }
]

function App() {
  const [tab, setTab] = useState(TABS[1]);
  return (
    <div className="App">
      <Menu tabs={TABS} handle={setTab} />
      <Tabs tab={tab} />
      {/* { false &&
        <div>
          <div className="d-flex">
            <PlayMidi name="Paranoid" midi={midi_1} />
            <PlayMidi name="Baba O`Riley" midi={midi_2} />
          </div>

          <Piano />
        </div>
      }

      <div>
        <MidiSounds />
      </div> */}
    </div>
  );
}

export default App;
