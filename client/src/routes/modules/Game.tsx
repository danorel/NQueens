import React from 'react';
import * as H from "history";
import { Switch, Route } from "react-router";

import MotionApi from "../../modules/game/data/MotionApi";
import MotionUseCase from "../../modules/game/domain/interactors/MotionUseCase";

import GameView from '../../modules/game/presentation/view/Game/index';
import GameHolder from "../../modules/game/domain/entity/models/game/GameHolder";
import GameViewModel from "../../modules/game/presentation/view-model/Game";
import BoardHolder from "../../modules/game/domain/entity/models/board/BoardHolder";
import ScreenHolder from "../../modules/game/domain/entity/models/screen/ScreenHolder";

interface GameRouterProps {
    history: H.History
}

const GameRouter = (props: GameRouterProps) => {
    // data layer
    const movementRepository = new MotionApi();

    // domain layer
    const boardHolder = new BoardHolder();
    const screenHolder = new ScreenHolder();
    const gameHolder = new GameHolder(boardHolder, screenHolder);

    // adapters layer
    const movementUseCase = new MotionUseCase(movementRepository, gameHolder);

    // view layer
    const gameViewModel = new GameViewModel(movementUseCase, gameHolder);

    return (<React.Fragment>
        <Switch>
            <Route
                path={`${props.history.location.pathname}/`}
                render={(props) => <GameView {...props} viewModel={gameViewModel} />} />
        </Switch>
    </React.Fragment>);
};

export default GameRouter;
