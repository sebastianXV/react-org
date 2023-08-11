import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <p> Desarrollado por Sebastian Rojas</p>
            <div className="links">
                <a href='https://www.linkedin.com/in/sebastian-rojas-2ba603245/'>
                    <img src="/img/Linkedin.png" alt='Linkedin' />
                </a>
                <a href='https://github.com/sebastianXV'>
                    <img src="/img/Github.png" alt='Github' />
                </a>
            </div>
        </div>
        <img src='/img/Logo.png' alt='org' />

    </footer>
}
export default Footer