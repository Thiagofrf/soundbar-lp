import "./styles.scss"

const ContentSection = ({ title, subtitle, texts, image, orientation}) => {
    return (
        <div className={`contentSection ${orientation}`}>
            <div className="textContent">
                <h3>
                    {title}
                </h3>
                {subtitle && <h4>{subtitle}</h4>}
                {texts.map((text, index) => (
                    <p key={index}>
                        {text}
                    </p>
                ))}
            </div>
            <div className="imageContent">
                <img src={image} alt={title} />
            </div>
        </div>
    )
}

export default ContentSection