import React from 'react';
import SideNavigationComponent from '../navigation/SideNavigationComponent'


import Game from "../game/Game";

const HomePageContainer = (props) => {


        return(
            <div className="home">
                    <div className="home-wrapper">
                            <div className="column-one-wrapper">
                                {/*<SideNavigationComponent/>*/}
                                    <>{props.content}</>
                            </div>
                        <div className="column-two-wrapper">
                        <Game/>
                        </div>
                    </div>
            </div>
        )
}

export default HomePageContainer
