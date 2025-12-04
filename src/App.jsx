import PageTitle from './components/PageTitle/PageTitle'
import Banner from './components/Banner/Banner'
import TipBar from './components/TipBar/TipBar'
import ContentSection from './components/ContentSection/ContentSection'

import SoundbarBanner from './assets/soundbar-banner.png'
import SoundQualityBanner from './assets/sound-quality-banner.png'
import SubwooferImage from './assets/subwoofer-image.png'
import ConectivityImage from './assets/conectivity-image.png'

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
      <ContentSection 
        title="Subwoofer Wireless"
        subtitle="Muito mais marcante e funcional"
        texts={[
          "O Subwoofer Wireless potencializa os tons mais graves amplificando as trilhas sonoras e os efeitos de áudio típicos dos filmes de ação, deixando-os ainda mais pulsantes. E por não ter fios, sua sala fica mais organizada."
        ]}
        image={SubwooferImage}
        orientation="left"
      />
      <ContentSection 
        title="Alta conectividade"
        texts={[
          "Apresenta muitas possibilidades de conexões como auxiliar, coaxial, óptica, HDMI ARC ou porta USB. Use seu aparelho de CD, DVD, videogame, entre outros e aproveite o seu momento.",
          "Por meio da conexão Bluetooth 5.0, curta um som intenso direto do seu celular, tablet e outros equipamentos de forma rápida."
        ]}
        image={ConectivityImage}
        orientation="right"
      />
    </>
  )
}

export default App
