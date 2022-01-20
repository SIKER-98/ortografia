import React from "react";
import {StyledCell} from "../styles/StyledCell";

import {TETROMINOS} from "../../tetrominos";
import {Box, Typography} from "@mui/material";

const styledCellStyle = {}

const Cell = ({type}) => (
    <>
        <StyledCell type={type}
                    style={styledCellStyle}
                    color={TETROMINOS[type].color}>
            <Box style={styledCellStyle}>
                <Typography variant={'h3'}>
                    {TETROMINOS[type].word.word}
                </Typography>
            </Box>
        </StyledCell>
    </>
)


export default React.memo(Cell);
