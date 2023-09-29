import React from "react";
import Dropdown from "../../components/dropdown/Dropdown";


const SlideTrainer_22 = () => {

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
                    <li>Наружный торец</li>
                    <li>Сквозное отверстие</li>
                    <li>Глухое отверстие</li>
                    <li>Наружная цилиндрическая поверхность</li>
                </ol>

                <ol>
                    <li>Отрезной резец</li>
                    <li>Проходной резец</li>
                    <li>Подрезной резец</li>
                    <li>Канавочный резец</li>
                    <li>Расточной резец</li>
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

export default SlideTrainer_22;