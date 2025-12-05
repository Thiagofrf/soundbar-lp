import './styles.scss'

const TipBarIcon = ({icon, text}) => {
    return (
        <div className="tipBarIcon">
            <div className="tipBarIcon--image">
                <img src={icon} />
            </div>
            <div className="tipBarIcon--text">
                {Array.isArray(text) ? text.map((line, index) => (
                    <span key={index}>{line}<br /></span>
                )) :
                    <span>{text}</span>
                }
            </div>
        </div>
    )
}

export default TipBarIcon