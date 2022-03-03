
import css from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={css.footer}>
            <div className={css.footer__links}>
                <div>
                    <h4>React shop</h4>
                    <a href="https://github.com/DanyaMarkov">
                        Github автора
                    </a>
                </div>
                <div>
                    <h5>В данном проекте отточены следующие навыки и технологии:</h5>
                    <ul>
                        <li>Управление стейтом благодаря хукам useContext и useReducer</li>
                        <li>Использование CSS модулей</li>
                        <li>Использование библиотеки Axios для взаимодействия с API</li>
                        <li>Работа с анимациями и всплывающими окнами</li>
                    </ul>
                </div>
            </div>

            <div className={css.footer__copyright}>
                <div>
                    © {new Date().getFullYear()} Copyright Text

                </div>
            </div>

        </footer>
    );
}

export default Footer;