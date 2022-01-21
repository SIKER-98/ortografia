import React, {useState} from "react";
import Gap from "./Gap";

const GapContainer = ({callbackButton, resetPlayer,setGameOver,setDropTime}) => {
    const [answer, setAnswer] = useState("")

    return (
        <Gap
            setGameOver={setGameOver}
            resetPlayer={resetPlayer}
            setDropTime={setDropTime}
            answer={answer}
            setAnswer={setAnswer}
            // handleSubmit={handleSubmit}
            callback = {callbackButton}
        />
    )


}

export default GapContainer;
