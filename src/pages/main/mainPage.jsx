import React from "react";
import Header from '../../components/header/header';
import Card from '../../components/card/card';
import Tringle from '../../components/tringle/tringle';
import Footer from '../../components/footer/footer';


const MainPage = ({ title }) => {
    return (
        <>
            <Header
                title={title}
            />

            <div className="main-block flex justify-center wrap">
                <Card 
                    href="/test" 
                />
            </div>


            <Tringle />

            <Footer />
        </>

    )
}

export default MainPage;