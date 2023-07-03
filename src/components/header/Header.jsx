import Button from "../UI/button/Button"
import '../UI/button/Button.css';
  

const Header = () => {
  return (
    <section className="header">
      <div className="container header">
        <div className="header-left">
          <h1>
            <span >The world&apos;s leading</span>
            <span>cross-platform secure</span>
            <span>messaging system</span>
          </h1>
          <p>SocialX is a Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Obcaecati ea aliquam sit nemo nisi! Nesciunt quis illum id quiet!
          </p>
          <div className="header-cta">
            <Button text="Get Started" btnClass={"btn-dark"} href="#"/>
            <Button text="How It Works" btnClass={"btn-orange"} href="#faq"/>
          </div>
        </div>
        <div className="header-right">
          <img src="" />
        </div>
      </div>
    </section>
  )
}

export default Header