import GameHolder from "../../../domain/entity/models/game/GameHolder";
import GameListener from "../../../domain/entity/models/game/GameListener";
import MotionUseCase from "../../../domain/interactors/MotionUseCase";

import GameView from "../../view/Game";
import GameActionListener from "./ActionListener";

import { BoardType } from "../../../types";

export default class GameViewModel implements GameActionListener, GameListener {

    public view?: GameView;
    public holder: GameHolder;
    public motionUseCase: MotionUseCase;

    public isAutomatic: boolean;

    constructor(motionUseCase: MotionUseCase, holder: GameHolder, isAutomatic: boolean = false) {
        this.holder = holder;
        this.holder.addListener(this);
        this.motionUseCase = motionUseCase;
        // Data fields
        this.isAutomatic = isAutomatic;
    }

    public onGameChanged(): void {
        if (this.isAutomatic && !this.getLogs())
            this.holder.screen.println("Hello! Please press Next to start the algorithm.");
    }

    private notifyView = (): void => {
        if (this.view)
            this.view.interact();
    };

    public attachView(baseView: GameView): void {
        this.view = baseView;
    }

    public detachView(): void {
        this.view = undefined;
    }

    public onClickRegime(): void {
        this.isAutomatic = !this.isAutomatic;
        this.notifyView();
    }

    public async onClickNext(): Promise<void> {
        await this.motionUseCase.makeMoveManual();
        this.notifyView();
    }

    public getLogs(): string {
        return this.holder.screen.logs;
    }

    public getBoard(): BoardType {
        return this.holder.board.board;
    }
}