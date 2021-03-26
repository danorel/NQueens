import GameListener from "../../../domain/entity/models/game/GameListener";
import GameActionListener from "./ActionListener";

import GameView from "../../view/Game";

import GameHolder from "../../../domain/entity/models/game/GameHolder";

import MotionUseCase from "../../../domain/interactors/MotionUseCase";
import InitializeUseCase from "../../../domain/interactors/InitializeUseCase";

import { BoardType } from "../../../types";

export default class GameViewModel implements GameActionListener, GameListener {

    public view?: GameView;
    public holder: GameHolder;
    public motionUseCase: MotionUseCase;
    public initializeUseCase: InitializeUseCase;

    public isAutomatic: boolean;

    constructor(initializeUseCase: InitializeUseCase,
                motionUseCase: MotionUseCase,
                holder: GameHolder,
                isAutomatic: boolean = false) {
        this.holder = holder;
        this.holder.addListener(this);
        this.motionUseCase = motionUseCase;
        this.initializeUseCase = initializeUseCase;
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

    public onSwitch(): void {
        this.isAutomatic = !this.isAutomatic;
        this.notifyView();
    }

    public onContinue(): void {
        this.holder.board.clear();
        this.holder.board.setFull(false);
        this.notifyView();
    }

    public async onInit(): Promise<void> {
        await this.initializeUseCase.prepareBoard();
        this.notifyView();
    }

    public async onMove(): Promise<void> {
        await this.motionUseCase.prepareMove();
        this.notifyView();
    }

    public async onResize(value: number | number[]): Promise<void> {
        if (typeof value === 'number')
            this.holder.board.setSize(value);
        await this.onInit()
        this.notifyView();
    }

    public getLogs(): string {
        return this.holder.screen.logs;
    }

    public getSize(): number {
        return this.holder.board.size;
    }

    public getBoard(): BoardType {
        return this.holder.board.board;
    }

    public getSwitch(): boolean {
        return this.isAutomatic;
    }

    public getBoardState(): boolean {
        return this.holder.board.full;
    }
}