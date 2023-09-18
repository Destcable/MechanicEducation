import React from "react";
import Form from 'react-bootstrap/Form';

function SlideQuest_6() {
    
    return (
        <>
            <Form>
                {['checkbox'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                            inline
                            label="A.Торцовые"
                            type={type}
                            id={`inline-${type}-1`}
                        />

                        <Form.Check
                            inline
                            label="B. Шпоночные"
                            type={type}
                            id={`inline-${type}-1`}
                        />

                        <Form.Check
                            inline
                            label="C. Протяжные"
                            type={type}
                            id={`inline-${type}-1`}
                        />

                        <Form.Check
                            inline
                            label="D. Концевые"
                            type={type}
                            id={`inline-${type}-1`}
                        />

                        <Form.Check
                            inline
                            label="E. Фасонные"
                            type={type}
                            id={`inline-${type}-1`}
                        />

                        <Form.Check
                            inline
                            label="F. Наклонные"
                            type={type}
                            id={`inline-${type}-1`}
                        />

                        <Form.Check
                            inline
                            label="G.Отрезные"
                            type={type}
                            id={`inline-${type}-1`}
                        />


                    </div>
                ))}
            </Form>
        </>
    )
};

export default SlideQuest_6;