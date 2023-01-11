import Controls from './components/Controls'
import Cover from './components/Cover'
import { Info } from './components/Info'
import TrackTime from './components/TrackTime'

function App() {
  return (
    <div className='App'>
      <div id='player-1' className='player'>
        <div className='wrapper'>
          <Cover />
          <Info />
          <Controls />
          <TrackTime />
        </div>
      </div>
      <div id='player-2' className='player'>
        <div className='wrapper'>
          <div className='info-wrapper'>
            <Cover />
            <Info />
          </div>
          <Controls />
          <TrackTime />
        </div>
      </div>
      <div id='player-3' className='player'>
        <div className='wrapper'>
          <div className='info-wrapper'>
            <Cover />
            <Info />
          </div>
          <Controls />
        </div>
      </div>
    </div>
  )
}

export default App
