import React from "react";
import Form from 'react-bootstrap/Form';

function SlideQuest_4() {

    return (
        <>
            Наиболее технически и экономически подходящее оборудование:
            <ul>
                <li>в единичном производстве – (<Form.Control size="sm" type="text" placeholder="Пропущенное слово" />, станки с ЧПУ, автоматы)</li>
                <li>в серийном – (<Form.Control size="sm" type="text" placeholder="Пропущенные слова" />, роторные линии, автоматы) </li>
                <li>в массовом – (<Form.Control size="sm" type="text" placeholder="Пропущенные слова" />, станки с ЧПУ, универсальное)</li>
            </ul>
        </>
    )
};

export default SlideQuest_4;