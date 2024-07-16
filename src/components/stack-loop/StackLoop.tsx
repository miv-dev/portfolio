import "./style.css"

type Stack = {
    url: string
}

const stackList: Stack[] = [
    {
        url: "images/kotlin_icon.png",
    },
    {
        url: "images/djangoproject.svg",
    },
    {
        url: "images/docker.svg",
    },
    {
        url: "images/swift.svg",
    },
    {
        url: "images/android_icon.png"
    },
    {
        url: "images/typescript-icon.svg"
    },
    {
        url: "images/python.svg"
    }
]

const StackLoop = () => {




    return (
        <div className="carousel">

                <div className="carousel__slide">
                    {[...stackList, ...stackList].map((stack) => (
                        <div
                            className="carousel__item"
                            key={stack.url}>
                            <img src={stack.url} alt=""/>
                        </div>
                    ))}
                </div>
        </div>
    )

}

export default StackLoop