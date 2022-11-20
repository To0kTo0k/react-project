import React from "react";
import './Reviews.css';

const Reviews = () => {
    return (
        <main className="Main">
            <div className="MainInfo">
                <div className="ContentBlock">
                    <figure className="text-end">
                        <blockquote>
                            <p>Отличное качество изготовления! Буду заказывать ещё.</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">Иванов Иван, Москва</figcaption>
                    </figure>
                </div>
                <div className="ContentBlock">
                    <figure className="text-end">
                        <blockquote>
                            <p>Очень понравилось, заказ выполнен целиком в соответствие с требованиями и в срок.</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">Петров Петр, Воронеж</figcaption>
                    </figure>
                </div>
            </div>
        </main>
    )
}
export default Reviews;