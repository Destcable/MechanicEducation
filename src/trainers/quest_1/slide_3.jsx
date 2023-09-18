import React from "react";
import Form from 'react-bootstrap/Form';

function SlideQuest_3() {

    return (
        <>
            <Form>
                {['checkbox'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                            inline
                            label="A. Объем выпускаемой продукции"
                            type={type}
                            id={`inline-${type}-1`}
                        />

                        <Form.Check
                            inline
                            label="B. Стоимость затрат на расходные материалы"
                            type={type}
                            id={`inline-${type}-1`}
                        />

                        <Form.Check
                            inline
                            label="C. Требования к точности, качеству и экономичности обработки"
                            type={type}
                            id={`inline-${type}-1`}
                        />

                        <Form.Check
                            inline
                            label="D. Использование станке по мощности и загрузке"
                            type={type}
                            id={`inline-${type}-1`}
                        />

                        <Form.Check
                            inline
                            label="E. Стоимость станка"
                            type={type}
                            id={`inline-${type}-1`}
                        />

                        <Form.Check
                            inline
                            label="F. Ориентацию на применение станков отечественного производства"
                            type={type}
                            id={`inline-${type}-1`}
                        />

                        <Form.Check
                            inline
                            label="G. Удобство демонтажа станка"
                            type={type}
                            id={`inline-${type}-1`}
                        />


                    </div>
                ))}
            </Form>
        </>
    )
};

export default SlideQuest_3;