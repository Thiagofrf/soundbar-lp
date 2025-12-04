import TipBarIcon from './TipBarIcon/TipBarIcon'
import tipBarProperties from './tipbar-data.js'

import './styles.scss'

const TipBar = () => {
    return (
        <div className="tipBar">
            {tipBarProperties.map((item, index) => (
                <TipBarIcon 
                    key={index}
                    icon={item.icon}
                    text={item.text}
                />
            ))}
        </div>
    )
}

export default TipBar