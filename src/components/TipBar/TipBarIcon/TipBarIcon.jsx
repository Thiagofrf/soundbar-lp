import './styles.scss'

const TipBarIcon = ({icon, text}) => {
    return (
        <div className="tipBarIcon">
            <div className="tipBarIcon--image">
                <img src={icon} alt={text} />
            </div>
            <div className="tipBarIcon--text">
                {text}
            </div>
        </div>
    )
}

export default TipBarIcon