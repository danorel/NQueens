import GameListener, {
    GameHandlerListener,
} from "./GameListener";

import BoardHolder from "../board/BoardHolder";
import ScreenHolder from "../screen/ScreenHolder";

export default class GameHolder implements GameHandlerListener {

    private _isComplete: boolean;
    private readonly _board: BoardHolder;
    private readonly _screen: ScreenHolder;
    private _listeners: GameListener[];

    constructor(board: BoardHolder, screen: ScreenHolder) {
        this._isComplete = false;
        this._board = board;
        this._screen = screen;
        this._listeners = []
    }

    public addListener(listener: GameListener): void {
        this._listeners.push(listener);
    }

    public removeListener(listener: GameListener): void {
        this._listeners.slice(this._listeners.indexOf(listener), 1);
    }

    public notifyAllListeners(): void {
        this._board.notifyAllListeners();
        this._screen.notifyAllListeners();
    }

    get screen(): ScreenHolder {
        return this._screen;
    }

    get board(): BoardHolder {
        return this._board;
    }

    set isComplete(isComplete: boolean) {
        this._isComplete = isComplete;
    }

    get isComplete(): boolean {
        return this._isComplete;
    }
}