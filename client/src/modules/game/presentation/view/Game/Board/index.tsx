import React from 'react';

import { Grid } from '@material-ui/core';

import Row from "./Row";

import { BoardDivContainer } from "./styles";

import { BoardType } from "../../../../types";

interface BoardProps {
    board: BoardType
}

const BoardView = (props: BoardProps) => {
    return (<React.Fragment>
        <BoardDivContainer>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={0}>
                        {props.board.map(((elements, index) => (
                            <Grid key={index} item>
                                <Row elements={elements}/>
                            </Grid>
                        )))}
                    </Grid>
                </Grid>
            </Grid>
        </BoardDivContainer>
    </React.Fragment>);
};

export default BoardView;