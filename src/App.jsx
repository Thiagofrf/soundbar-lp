import PageTitle from './components/PageTitle/PageTitle'
import Banner from './components/Banner/Banner'
import TipBar from './components/TipBar/TipBar'

import SoundbarBanner from './assets/soundbar-banner.png'
import SoundQualityBanner from './assets/sound-quality-banner.png'

import './App.scss'

function App() {
  return (
    <>
      <PageTitle />
      <Banner 
        image={SoundbarBanner}
      />
      <TipBar />
      <Banner 
        image={SoundQualityBanner}
      />
    </>
  )
}

export default App
