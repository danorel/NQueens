import BoardHolder from "../../../domain/entity/models/BoardHolder";
import MovementUseCase from "../../../domain/interactors/MovementUseCase";

import GameView from "../../view/Game";
import Playable from "./Playable";

import { BoardType } from "../../../types";

export default class GameViewModel implements Playable {
    public view?: GameView;
    public holder: BoardHolder;
    public movementUseCase: MovementUseCase;

    public size: number;
    public board: BoardType;
    public isAutomatic: boolean = true;

    constructor(movementUseCase: MovementUseCase, holder: BoardHolder, isAutomatic: boolean = false, size: number = 8) {
        this.holder = holder;
        this.movementUseCase = movementUseCase;
        this.size = size;
        this.board = Array(size).fill(Array(size).fill(0));
        this.isAutomatic = isAutomatic;
    }

    private notifyView = (): void => {
        if (this.view)
            this.view.interact();
    };

    attachView(baseView: GameView): void {
        this.view = baseView;
    }

    detachView(): void {
        this.view = undefined;
    }

    onClick(): void {
        this.isAutomatic = !this.isAutomatic;
        this.notifyView();
    }
}