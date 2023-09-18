import React from "react";
import Dropdown from "../../components/dropdown/Dropdown";
import TokarStanok from "../../pages/traning/trainings/img/quest_1/Токарный станок с ЧПУ.jpg";
import RadialSverilniStanok from "../../pages/traning/trainings/img/quest_1/Радиально-сверлильный станок.png";
import PloskoStanok from "../../pages/traning/trainings/img/quest_1/Плоскошлифовальный станок.jpg";
import FrezerStanok from "../../pages/traning/trainings/img/quest_1/Универсальный фрезерный станок.jpeg";
import GorizontStanok from "../../pages/traning/trainings/img/quest_1/Горизонтально-протяжной станок.jpg";

function SlideQuest_1() {
    const options = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
    ];

    return (
        <>
            <div style={{ display: "flex" }}>
                <ol style={{ listStyleType: 'upper-alpha' }}>
                    <li><img src={TokarStanok} width="150px" /></li>
                    <li><img src={RadialSverilniStanok} width="150px" /></li>
                    <li><img src={PloskoStanok} width="150px" /></li>
                    <li><img src={FrezerStanok} width="150px" /></li>
                    <li><img src={GorizontStanok} width="150px" /></li>
                </ol>

                <ol>
                    <li>Токарный станок</li>
                    <li>Сверлильный</li>
                    <li>Шлифовальный станок</li>
                    <li>Фрезерный станок</li>
                    <li>Протяжной станок</li>
                </ol>
            </div>

            <div style={{ display: "flex", textAlign: "center", justifyContent: "center" }}>
                <Dropdown
                    label="A"
                    placeholder=""
                    options={options}
                />

                <Dropdown
                    label="B"
                    placeholder=""
                    options={options}
                />

                <Dropdown
                    label="C"
                    placeholder=""
                    options={options}
                />

                <Dropdown
                    label="D"
                    placeholder=""
                    options={options}
                />

                <Dropdown
                    label="E"
                    placeholder=""
                    options={options}
                />
            </div>
        </>
    )
};

export default SlideQuest_1;