import React from 'react';
import Form from 'react-bootstrap/Form';

function SlideQuest_7() {
    return (
        <Form>
            {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                        inline
                        label="A. Частота использования инструмента"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                    />

                    <Form.Check
                        inline
                        label="B. Стоимость станка"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                    />

                    <Form.Check
                        inline
                        label="C. Твердость державки инструмента"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                    />

                    <Form.Check
                        inline
                        label="D. Использование станке по мощности"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                    />

                    <Form.Check
                        inline
                        label="E. Температура нагрева шпинделя станка"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                    />
                </div>
            ))}
        </Form>
    );
}

export default SlideQuest_7;