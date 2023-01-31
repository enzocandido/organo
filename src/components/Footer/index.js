import './styles.css'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="footer"
            style={{
                backgroundImage: "url('/images/fundo.png')",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundColor: '#363636'
            }}>
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <FaFacebook color='#000' size='32px'/>
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <FaTwitter color='#000' size='32px'/>
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <FaInstagram color='#000' size='32px'/>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/images/logo.png" alt="" />
            </section>
            <section>
                <p>
                    Desenvolvido por Enzo Candido
                </p>
            </section>
        </footer>
    )
}

export default Footer;