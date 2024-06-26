import { ReactNode } from "react"
import Header from "../../../components/ui/Header/Header"
import HomeButton from "../../../components/ui/homeButton/homeButton"
import FlexBetween from "../../../ui/Semantic/FlexBetween"

interface TraningPageUIProps {
    title: string,
    tabs: ReactNode[],
    countTab: number,
    lengthTabs: number,
    children: ReactNode,
}

export default function TraningPageUI(props: TraningPageUIProps) {

    return (
        <>
            <Header />
            <div className="bg_color_block d-flex flex-column ">
                <div className="d-flex justify-content-center align-center">
                    <div className="content1 d-flex flex-column max-content w-100">
                        <HomeButton href="/" />
                        <div className="container1">
                            <div className="container_header">
                                <FlexBetween
                                    className="align-items-center"
                                >
                                    <p className="container_title">Динамическая инфографика</p>
                                    <p className="text-white pe-3">
                                        {`${props.countTab + 1} / ` + props.lengthTabs}
                                    </p>
                                </FlexBetween>
                                <div className="d-flex tab-exercise-container">
                                    {props.tabs}
                                    {/* <div className="active_tab"></div> */}
                                </div>
                            </div>
                            <div className="container-exercise w-100">


                                <p className="text-zadanie w-100 fs-6">
                                    {props.title}
                                    {props.children}
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}