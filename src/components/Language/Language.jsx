
import { useContext } from "react";
import { ShopContext } from "../../ContextReducer/Context";
import css from './Language.module.css'

const Language = () => {

    const { language, handleChangeLanguage } = useContext(ShopContext)

    return (
        <div className={css.language}
            onClick={() => { handleChangeLanguage() }}>
            <i className="large material-icons">language</i>
            <span>{language}</span>
        </div>
    );
}


export default Language;