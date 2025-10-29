import "../App.css"
import Logo from "../assets/logo.png"


function Header() {
  return (   
    <>
        <section>
            <div id="logo-image">
                <img src={Logo} alt="" />
            </div>
            <div id="input-div">
                <input type="text" />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div id="anchor-button">
                <a href="">Cadastre-se</a>
                <button>Entrar</button>
            </div>
            <i class="fa-solid fa-cart-shopping" id="cart"></i>
        </section>
    </>
  )
}

export default Header
