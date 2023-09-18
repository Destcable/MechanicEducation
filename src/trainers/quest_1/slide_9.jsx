import React from "react";
import Dropdown from "../../components/dropdown/Dropdown";
import StanokPrisposobl from "../../pages/traning/trainings/img/quest_1/Станочное приспособление.png";
import VspomogInstrument from "../../pages/traning/trainings/img/quest_1/Вспомогательный инструмент.jpg";
import SborochnoePrisposobl from "../../pages/traning/trainings/img/quest_1/Сборочное приспособление.jpg";
import ControlPrisposobl from "../../pages/traning/trainings/img/quest_1/Контрольное приспособление.jpg";
import PrisposoblDlyaZagotovok from "../../pages/traning/trainings/img/quest_1/Приспособление для захвата.jpg";

function SlideQuest_9() {
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
                    <li><img src={StanokPrisposobl} width="150px" /></li>
                    <li><img src={VspomogInstrument} width="150px" /></li>
                    <li><img src={SborochnoePrisposobl} width="150px" /></li>
                    <li><img src={ControlPrisposobl} width="150px" /></li>
                    <li><img src={PrisposoblDlyaZagotovok} width="150px" /></li>
                </ol>

                <ol>
                    <li>Станочное приспособление</li>
                    <li>Вспомогательный инструмент</li>
                    <li>Сборочное приспособление</li>
                    <li>Контрольное приспособление</li>
                    <li>Приспособления для захвата заготовок</li>
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

export default SlideQuest_9;