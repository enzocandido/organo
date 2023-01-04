import './styles.css'

const Footer = () => {
    return (
        <footer className="footer"
            style={{
                backgroundImage: "url('/images/fundo.png')",
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="/images/fb.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src="/images/tw.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <img src="/images/ig.png" alt="" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/images/logo.png" alt="" />
            </section>
            <section>
                <p>
                    Desenvolvido por Enzo Candido.
                </p>
            </section>
        </footer>
    )
}

export default Footer;