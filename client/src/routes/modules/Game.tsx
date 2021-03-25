import React from 'react';
import * as H from "history";
import { Switch, Route } from "react-router";

import BoardHolder from "../../modules/game/domain/entity/models/BoardHolder";
import MotionApi from "../../modules/game/data/MotionApi";

import GameView from '../../modules/game/presentation/view/Game/index';
import MovementUseCase from "../../modules/game/domain/interactors/MovementUseCase";
import GameViewModel from "../../modules/game/presentation/view-model/Game";

interface GameRouterProps {
    history: H.History
}

const GameRouter = (props: GameRouterProps) => {
    // data layer
    const movementRepository = new MotionApi();

    // domain layer
    const boardHolder = new BoardHolder();
    const movementUseCase = new MovementUseCase(movementRepository, boardHolder);
    // view layer
    const gameViewModel = new GameViewModel(movementUseCase, boardHolder);

    return (<React.Fragment>
        <Switch>
            <Route
                path={`${props.history.location.pathname}/`}
                render={(props) => <GameView {...props} viewModel={gameViewModel} />} />
        </Switch>
    </React.Fragment>);
};

export default GameRouter;
