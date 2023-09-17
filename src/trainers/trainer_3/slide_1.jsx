import React from "react";

const SlideTrainer_1 = () => {
    return (
        <>
            При выборе металлорежущего оборудования необходимо учитывать:
            <ol style={{ listStyleType: 'upper-alpha' }}>
                <li>Объем выпускаемой продукции, тип производства</li>
                <li>Размеры детали и расположение обрабатываемых поверхностей</li>
                <li>Требования к точности, качеству и экономичности обработки</li>
                <li>Наиболее полное использование станке по мощности и загрузке (времени работы)</li>
                <li>Удобство управления и обслуживания станка</li>
                <li>Стоимость станка</li>
                <li>Необходимость использования имеющихся станков</li>
                <li>Ориентацию на применение станков отечественного производства</li>
            </ol>

            Техническая характеристика станка должна отвечать требованиям:
            <ol>
                <li>Рабочая зона станка (высота центров, расстояние между центрами, размер стола и т.п.) должна
                    соответствовать габаритам обрабатываемой детали</li>
                <li>Мощность, жесткость и кинематические возможности станка позволять вести работу на оптимальных
                    режимах резания</li>
                <li>Производительность станка соответствовать заданному объему выпуска изделий</li>

                При проектировании технологических процессов выбирают наиболее технически и экономически подходящее
                оборудование. Как правило, в единичном производстве используется универсальное оборудование, в мелкосерийном -
                станки с ЧПУ и универсальные, в среднесерийном - станки с ЧПУ и обрабатывающие центры. В крупносерийном -
                станки с ЧПУ, обрабатывающие центры, полуавтоматы, автоматы. В массовом производстве - обрабатывающие
                центры, автоматы, автоматические линии, роторные и роторно-конвейерные линии.
            </ol>
        </>
    )
};

export default SlideTrainer_1;