
import css from './Footer.module.css'

const Footer = () => {
    return (<footer className={css.footer}>
        <div className={css.footer__logo}>
            <h3>React Shop</h3>
        </div>

        <div className={css.footer__menu}>
            <h3>React Shop</h3>
        </div>

        <div className={css.footer__basket}>
            <h3>React Shop</h3>
        </div>

    </footer>);
}

export default Footer;