
import { useContext } from "react";
import { ShopContext } from "../../ContextReducer/Context";

const Language = () => {

    const { language, handleChangeLanguage } = useContext(ShopContext)

    return (
        <div
            onClick={() => { handleChangeLanguage() }}>
            <i class="large material-icons">language</i>
            <span>{language}</span>
        </div>
    );
}


export default Language;