import React from 'react';

import { Grid } from "@material-ui/core";

import Chat from "./Chat";
import Board from "./Board";
import GameViewModel from "../../view-model/Game";

import {
    H3Title,
    ButtonNext,
    ButtonRegime,
    DivExpandingContainer,
    DivCentrifyContainer,
    DivBackgroundContainer,
} from "./styles";

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
            <DivBackgroundContainer>
                <video autoPlay loop muted>
                    <source src={'videos/matrix.mp4'} type="video/mp4"/>
                </video>
                <Grid container spacing={0}>
                    <Grid container item xs={12} sm={6}>
                        <DivExpandingContainer>
                            <DivCentrifyContainer>
                                <Board board={this.viewModel.getBoard()}/>
                            </DivCentrifyContainer>
                        </DivExpandingContainer>
                    </Grid>
                    <Grid container item xs={12} sm={6}>
                        <DivExpandingContainer>
                            <DivCentrifyContainer>
                                <Grid container
                                      direction="column"
                                      justify="center"
                                      alignItems="flex-start"
                                      spacing={1}>
                                    <Grid item>
                                        <H3Title>The Great N-queens Game!</H3Title>
                                        <Chat value={this.viewModel.logs} onChange={this.viewModel.onChangeLogs}/>
                                    </Grid>
                                    <Grid item>{this.viewModel.isAutomatic
                                        ? <ButtonRegime type="button" onClick={(): void => this.viewModel.onClick()}>Automatic 👻</ButtonRegime>
                                        : (<React.Fragment>
                                            <ButtonRegime type="button" onClick={(): void => this.viewModel.onClick()}> Manual 🛠</ButtonRegime>
                                            <ButtonNext type="button" onClick={(): void => this.viewModel.onClick()}>Next ➞</ButtonNext>
                                        </React.Fragment>)}

                                    </Grid>
                                </Grid>
                            </DivCentrifyContainer>
                        </DivExpandingContainer>
                    </Grid>
                </Grid>
            </DivBackgroundContainer>
        </React.Fragment>);
    }
}

export default GameView;