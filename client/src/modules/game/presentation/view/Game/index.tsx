import React from 'react';

import { Grid } from "@material-ui/core";

import Board from "./Board";
import GameViewModel from "../../view-model/Game";

import { DivBackground, H3Title } from "./styles";

export interface GameStateControllable {
    interact: () => void;
}

export interface GameProps {
    viewModel: GameViewModel;
}

export interface GameState {
    isAutomatic: boolean,
}

class GameView extends React.Component<GameProps, GameState> implements GameStateControllable {
    private viewModel: GameViewModel;

    constructor(props: GameProps) {
        super(props);
        this.viewModel = props.viewModel;
        this.state = {
            isAutomatic: this.viewModel.isAutomatic,
        }
    }

    public componentDidMount() {
        this.viewModel.attachView(this);
    }

    public componentWillUnmount() {
        this.viewModel.detachView();
    }

    public interact () {
        this.setState(prevState => ({
            ...prevState,
            isAutomatic: this.viewModel.isAutomatic,
        }));
    };

    render() {
        return (<React.Fragment>
            <DivBackground>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={0}>
                            <H3Title>The Great N-queens Game!</H3Title>
                            <Board board={this.viewModel.getBoard()}/>
                        </Grid>
                    </Grid>
                </Grid>
            </DivBackground>
        </React.Fragment>);
    }
}

export default GameView;