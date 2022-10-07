const headData = `
    <link rel="stylesheet" href="./css/global.css">
`

const header = `
    <header>
        <div class="logo">
            <img src="./img/logo.svg" alt="logo">
            <h1>Mr. Geek</h1>
        </div>
        <input type="search" placeholder="¿Qué desea buscar?">
        <a href="./login.html">
            <button class="secondary">Login</button>
        </a>
    </header>
`

const footer = `
    <footer>
        <div class="logo">
            <img src="./img/logo.svg" alt="logo">
            <h1>Mr. Geek</h1>
        </div>
        <nav>
            <ul>
                <li>
                    <a href="">
                        Quienes somos
                        </a>
                </li>
                <li>
                    <a href="">
                        Política de privacidad
                        </a>
                </li>
                <li>
                    <a href="">
                        Programa de fidelidad
                        </a>
                </li>
                <li>
                    <a href="">
                        Nuestras Tiendas
                        </a>
                </li>
                <li>
                    <a href="">
                        Quiero ser franquiciado
                        </a>
                </li>
                <li>
                    <a href="">
                        Anúncie aquí
                        </a>
                </li>
            </ul>
        </nav>
        <form>
            <h5>Hable con nosotros</h5>
            <input type="text" placeholder="Nombre">
            <textarea placeholder="Escribe tu mensaje"></textarea>
            <button class="primary">Enviar mensaje</button>
        </form>
    </footer>
    <div class="credits">
        <p>Desarrollado por Francisco Pessano</p>
        <p>2022</p>
    </div>
`

const head = document.querySelector('head')
const body = document.querySelector('body')

head.insertAdjacentHTML('afterbegin', headData)
body.insertAdjacentHTML('afterbegin', header)
body.insertAdjacentHTML('beforeend', footer)