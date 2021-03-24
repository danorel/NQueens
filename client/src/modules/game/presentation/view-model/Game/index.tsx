import React from "react";

import BoardHolder from "../../../domain/entity/models/BoardHolder";
import MovementUseCase from "../../../domain/interactors/MovementUseCase";
import BoardListener from "../../../domain/entity/models/BoardListener";

import GameView from "../../view/Game";
import Playable from "./Playable";

import { BoardType } from "../../../types";

export default class GameViewModel implements Playable, BoardListener {
    public view?: GameView;
    public holder: BoardHolder;
    public movementUseCase: MovementUseCase;

    public logs: string = '';
    public isAutomatic: boolean = true;

    constructor(movementUseCase: MovementUseCase, holder: BoardHolder, isAutomatic: boolean = false) {
        this.holder = holder;
        this.movementUseCase = movementUseCase;
        this.isAutomatic = isAutomatic;
        this.holder.addListener(this);
    }

    onBoardChanged(): void {
        throw new Error("Method not implemented.");
    }

    public onChangeLogs = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        this.logs = event.target.value;
        this.notifyView();
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

    getBoard(): BoardType {
        return this.holder.board;
    }
}