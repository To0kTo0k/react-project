import {Link} from "react-router-dom";
import './Home.css';

const Home = () => {
    return (
        <main className="Main">
            <div className="MainInfo">
                <div className="ContentBlock">
                    <div className="ContentTitle">
                        <h3>Создание стикеров</h3>
                        <br/>
                    </div>
                    <div className="ContentImage">
                        <img src="/mainPage1.jpg"/>
                    </div>
                    <div className="ContentDescription">
                        <br/>
                        <p>Стикеры - одна из самых эффективных форм рекламы на самоклеящейся основе.</p>
                        <p>Используются практически в любой сфере деятельности человека.</p>
                        <p>Материал изготовления - бумага или пленка.</p>
                    </div>
                </div>
                <div className="ContentBlock">
                    <div className="ContentTitle">
                        <h3>Печать на одежде</h3>
                        <br/>
                    </div>
                    <div className="ContentImage">
                        <img src="/mainPage2.jpg"/>
                    </div>
                    <div className="ContentDescription">
                        <br/>
                        <p>Доступны шелкография (трафаретная печать) - продавливание краски на изделие через
                            трафарет,</p>
                        <p>цифровая печать - нанесение краски на изделение при помощи специального принтера,</p>
                        <p>термотрансфер - приплавка пленки с изображением к продукции,</p>
                        <p>сублимация - перевод логотипа при помощи пресса с подложки на изделие.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Home;