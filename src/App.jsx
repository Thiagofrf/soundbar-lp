import PageTitle from './components/PageTitle/PageTitle'
import Banner from './components/Banner/Banner'
import TipBar from './components/TipBar/TipBar'
import ContentSection from './components/ContentSection/ContentSection'

import SoundbarBanner from './assets/soundbar-banner.png'
import SoundQualityBanner from './assets/sound-quality-banner.png'
import SubwooferImage from './assets/subwoofer-image.png'
import ConectivityImage from './assets/conectivity-image.png'
import InstallationImage from './assets/installation-image.png'

import './App.scss'

function App() {
  return (
    <>
      <PageTitle />
      <Banner 
        image={SoundbarBanner}
      />
      <div className="plainText">
        <p>
          Com a <b>Soundbar com Subwoofer Wireless Pulse</b>, você vai levar para a sua sala o impactante som do cinema de forma prática, sem ocupar espaço e sem cabos. Reúna a família e amigos e desfrute!
        </p>
      </div>
      <div className="plainText blackBg">
        <h2>
          Soundbar com Subwoofer Wireless Pulse
        </h2>
        <p>
          Transforme um simples som em uma potência.
        </p>
      </div>
      <div className="plainText">
        <p>
          A Soundbar e o Subwoofer Wireless Pulse oferecem, juntos, uma experiência de áudio profunda e poderosa. Um efeito que envolve todo o ambiente!
        </p>
        <p>
          Sem complicações! Conecte sua Soundbar com Subwoofer Wireless Pulse, por meio das conexões bluetooth, auxiliar, coaxial, óptica e HDMI ARC, para assistir filmes, séries e outros tipos de entretenimento ou escute suas músicas preferidas pela porta USB. A Soundbar com Subwoofer Wireless Pulse é discreta, moderna e combina com qualquer decoração.
        </p>
      </div>
      <TipBar />
      <div className="plainText">
        <h2>
          Maior qualidade sonora que estimula os seus sentidos
        </h2>
        <p>
          A interação entre a Soundbar e o Subwoofer entrega uma potência de 300 W RMS, com 2.1 canais. São dois alto-falantes integrados e sem a necessidade de configurar diversas caixas de som em sua sala. Acompanhe os jogos de futebol e veja o show da sua banda preferida com mais realismo e emoção.
        </p>
        <p>
          E para aprimorar ainda mais os efeitos sonoros, possui três modos de equalização: músicas, filmes e notícias. É um ajuste que se adequa em distintos conteúdos e, assim, cria um som virtual surround que garante maior nível de imersão.
        </p>
      </div>
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
      <ContentSection 
        title="Inovador e de fácil instalação"
        texts={[
          "Com o suporte, você pode pendurar a Soundbar com Subwoofer Wireless Pulse na parede da sua casa para otimizar espaço ou na estante."
        ]}
        image={InstallationImage}
        orientation="center"
      />
      <div className="plainText">
        <h2>
          Garantia
        </h2>
        <p>
          A Soundbar com Subwoofer Wireless conta com a alta qualidade da marca Pulse e disponibiliza <b>3 anos de garantia</b> contra defeitos de fabricação.
        </p>
      </div>
    </>
  )
}

export default App
