import React from "react";
import Dropdown from "../../components/dropdown/Dropdown";

const SlideTrainer_31 = () => {

    const options = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
        { value: '6', label: '6' },
    ];

    return (
        <>
            <div style={{ display: "flex" }}>
                <ol style={{ listStyleType: 'upper-alpha' }}>
                    <li>36<sub>-0,62</sub></li>
                    <li>12±0,15</li>
                    <li>Ø36<sup>+0,1</sup></li>
                    <li>Ø48<sub>-0,062</sub></li>
                </ol>

                <ol>
                    <li>Калибр-пробка</li>
                    <li>Калибр-скоба</li>
                    <li>Нутромер</li>
                    <li>Штангенциркуль</li>
                    <li>Штангенглубиномер</li>
                    <li>Сверло</li>
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
            </div>
        </>
    )
};

export default SlideTrainer_31;