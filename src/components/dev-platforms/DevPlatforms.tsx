import IonIcon from "@reacticons/ionicons";
import './style.css'

const DevPlatforms = () => {
    return (
        <div className="dev-platforms">
            <div className="dev-platforms__item">
                <h3 className={`vertical-text`}>Mobile Dev<span className="hidden lg:inline">eloper</span>
                </h3>
                <IonIcon name={"phone-portrait"}/>
            </div>
            <div className="dev-platforms__item">
                <h3 className={`vertical-text`}>Desktop Dev<span className="hidden lg:inline">eloper</span>
                </h3>
                <IonIcon name={"desktop"}/>

            </div>
            <div className="dev-platforms__item">
                <h3 className={`vertical-text`}>Backend Dev<span className="hidden lg:inline">eloper</span>
                </h3>
                <IonIcon name={"cloud"}/>

            </div>
        </div>
    )
}

export default DevPlatforms