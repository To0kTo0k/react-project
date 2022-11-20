import './About.css';

const About = () => {
    return (
        <main className="Main">
            <div className="MainInfo">
                <div className="ContentBlock">
                    <div className="ContentName">
                        Москва
                    </div>
                    <div className="ContentDescription">
                        <p>Метро Чкаловская</p>
                        <p>1-ый Сыромятнический переулок, д. 37, офис 14</p>
                        <p>Номер телефона: 89500000000</p>
                    </div>
                </div>
                <div className="ContentBlock">
                    <div className="ContentName">
                        Белгород
                    </div>
                    <div className="ContentDescription">
                        <p>Проспект Богдана Хмельницкого, д. 100</p>
                        <p>Номер телефона: 89800000000</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default About;