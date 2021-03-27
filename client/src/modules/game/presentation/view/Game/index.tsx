import React from 'react';

import { Grid } from "@material-ui/core";

import Bar from "./Bar"
import Chat from "./Screen";
import Board from "./Board";
import SizeSlider from "./Slider";
import GameViewModel from "../../view-model/Game";

import {
    H3Title,
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
    private interval: any;
    private viewModel: GameViewModel;

    constructor(props: GameProps) {
        super(props);
        this.interval = null;
        this.viewModel = props.viewModel;
        this.state = {
            isAutomatic: this.viewModel.isAutomatic,
        }
    }

    public componentWillMount() {
        (async () => await this.viewModel.onInit())();
    }

    public componentDidMount() {
        this.viewModel.attachView(this);
        setInterval(async () => {
            if (this.viewModel.getStateSwitch() && !this.viewModel.getStateFull() && !this.viewModel.getStateComplete())
                await this.viewModel.onMove();
        }, 1000);
    }

    public componentWillUnmount() {
        this.viewModel.detachView();
        clearInterval(this.interval);
    }

    async componentDidUpdate(prevProps: GameProps, prevState: GameState) {
        if (!prevState.isAutomatic) {

        } else
            clearInterval(this.interval);
    };

    public interact() {
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
                                <Board size={this.viewModel.getSize()}
                                       board={this.viewModel.getBoard()}/>
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
                                        <Chat value={this.viewModel.getLogs()}/>
                                        <SizeSlider disabled={!this.viewModel.getStateFull()}
                                                    value={this.viewModel.getSize()}
                                                    onChange={(_: React.ChangeEvent<{}>, value: number | number[]): Promise<void> => this.viewModel.onResize(value)}/>
                                    </Grid>
                                    <Grid item>
                                        <Bar isFull={this.viewModel.getStateFull()}
                                             isComplete={this.viewModel.getStateComplete()}
                                             isAutomatic={this.viewModel.getStateSwitch()}
                                             onClickRestart={(): Promise<void> => this.viewModel.onRestart()}
                                             onClickPerform={(): Promise<void> => this.viewModel.onMove()}
                                             onClickSwitch={(): void => this.viewModel.onSwitch()}
                                             onClickContinue={(): void => this.viewModel.onContinue()}/>
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