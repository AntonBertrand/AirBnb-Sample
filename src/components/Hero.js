import hero_img from "../hero-img.png"

export default function Hero() {

    return (
        <section className="hero--section">
            <img className="hero--img" src={hero_img}></img>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactice activities led by one-of-a-kind hosts - All without leaving home</p>
        </section>
    )
}