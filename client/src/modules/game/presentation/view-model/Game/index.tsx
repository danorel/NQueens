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

    public logs: string;
    public isAutomatic: boolean;

    constructor(movementUseCase: MovementUseCase, holder: BoardHolder, isAutomatic: boolean = false) {
        this.holder = holder;
        this.movementUseCase = movementUseCase;
        this.holder.addListener(this);
        // Data fields
        this.logs = '';
        this.isAutomatic = isAutomatic;
    }

    public onBoardChanged(): void {
        throw new Error("Method not implemented.");
    }

    private notifyView = (): void => {
        if (this.view)
            this.view.interact();
    };

    public onChangeLogs = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        this.logs = event.target.value;
        this.notifyView();
    }

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
        await this.movementUseCase.makeMoveManual();
        this.notifyView();
    }

    public getBoard(): BoardType {
        return this.holder.board;
    }
}