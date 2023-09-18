import React from "react";
import Dropdown from "../../components/dropdown/Dropdown";
import Rezec from "../../pages/traning/trainings/img/quest_1/Резец.png";
import Freza from "../../pages/traning/trainings/img/quest_1/Фреза.jpg";
import Sverlo from "../../pages/traning/trainings/img/quest_1/Сверло.jpg";  
import Metchik from "../../pages/traning/trainings/img/quest_1/Метчик.jpg";
import Plashka from "../../pages/traning/trainings/img/quest_1/Плашка.jpg";

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
                    <li><img src={Rezec} width="150px" /></li>
                    <li><img src={Freza} width="150px" /></li>
                    <li><img src={Sverlo} width="150px" /></li>
                    <li><img src={Metchik} width="150px" /></li>
                    <li><img src={Plashka} width="150px" /></li>
                </ol>

                <ol>
                    <li>Резец</li>
                    <li>Фреза</li>
                    <li>Сверло</li>
                    <li>Метчик</li>
                    <li>Плашка</li>
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