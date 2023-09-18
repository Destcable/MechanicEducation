import React from "react";
import OrderList from "../../components/orderList/orderList";

const SlideTrainer_1 = () => {
    return (
        <>
            <p>Содержание токарной операции по переходам:</p>
            <ol>
                <li>Установить и закрепить деталь</li>
                <li>Подрезать торец, выдерживая размер 36<sub>-0,62</sub></li>
                <li>Сверлить отв. Ø20<sup>+0,52</sup></li>
                <li>Расточить отв. Ø36<sup>+0,1</sup>, выдерживая размер 12±0,15</li>
                <li>Точить поверхность Ø48<sub>-0,062</sub>, выдерживая размер 16±0,2</li>
            </ol>
        </>
    )
};

export default SlideTrainer_1;