import React from 'react';

import { Grid } from '@material-ui/core';

import Row from "./Row";

import { BoardDivContainer } from "./styles";

import { BoardType } from "../../../../types";

interface MatcherProps {
    size: number;
}

const SizeMatcher = (props: MatcherProps): string => {
    if (props.size <= 5)
        return 'small';
    if (props.size <= 8)
        return 'medium';
    return 'large';
}

interface BoardProps {
    size: number;
    board: BoardType;
}

const BoardView = (props: BoardProps) => {
    const size: string = SizeMatcher(props);

    return (<React.Fragment>
        <BoardDivContainer>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={0}>
                        {props.board.map(((elements, index) => (
                            <Grid key={index} item>
                                <Row size={size} elements={elements}/>
                            </Grid>
                        )))}
                    </Grid>
                </Grid>
            </Grid>
        </BoardDivContainer>
    </React.Fragment>);
};

export default BoardView;