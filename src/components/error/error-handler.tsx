import React from "react";

export default function ErrorHandler() {

    return (
        <div>
            <h2>
                Ошибка загрузки страницы
            </h2>
            <p>
                Приносим свои извинения, ресурс верменно не доступен. Попробуйте заказать бургер позже.
            </p>
            <p>
                <a href="/">Перезагрузить страницу</a>
            </p>
        </div>
    );

}