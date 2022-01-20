import React, {useState} from "react";
import Gap from "./Gap";

const GapContainer = ({callbackButton, resetPlayer}) => {
    const [answer, setAnswer] = useState("")

    return (
        <Gap
            resetPlayer={resetPlayer}
            answer={answer}
            setAnswer={setAnswer}
            // handleSubmit={handleSubmit}
            callback = {callbackButton}
        />
    )


}

export default GapContainer;
