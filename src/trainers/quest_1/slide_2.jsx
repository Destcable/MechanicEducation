import React from "react";
import Form from 'react-bootstrap/Form';

function SlideQuest_2() {

    return (
        <>
            <Form>
                {['checkbox'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                            inline
                            label="A.Барабанно-фрезерные"
                            type={type}
                            id={`inline-${type}-1`}
                        />

                        <Form.Check
                            inline
                            label="B. Вертикально-фрезерные"
                            type={type}
                            id={`inline-${type}-1`}
                        />

                        <Form.Check
                            inline
                            label="C. Наклонно-фрезерные"
                            type={type}
                            id={`inline-${type}-1`}
                        />

                        <Form.Check
                            inline
                            label="D.Продольные одностоечные"
                            type={type}
                            id={`inline-${type}-1`}
                        />

                        <Form.Check
                            inline
                            label="E. Вертикальные бесконсольные"
                            type={type}
                            id={`inline-${type}-1`}
                        />

                        <Form.Check
                            inline
                            label="F. Горизонтальные бесконсольные"
                            type={type}
                            id={`inline-${type}-1`}
                        />

                        <Form.Check
                            inline
                            label="G.Разные фрезерные"
                            type={type}
                            id={`inline-${type}-1`}
                        />


                    </div>
                ))}
            </Form>
        </>
    )
};

export default SlideQuest_2;