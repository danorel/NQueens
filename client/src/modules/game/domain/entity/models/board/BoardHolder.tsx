import BoardListener, {
    BoardActionListener,
    BoardHandlerListener,
} from "./BoardListener";

import { BoardType } from "../../../../types";

export default class BoardHolder implements BoardActionListener, BoardHandlerListener {

    private _full: boolean;
    private _board: BoardType;
    private _listeners: BoardListener[];

    constructor() {
        this._listeners = [];
        this._full = false;
        this._board = [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ];
    }

    public clear(): void {
        for (let i = 0; i < this._board.length; ++i) {
            for (let j = 0; j < this._board.length; ++j) {
                this._board[i][j] = 0;
            }
        }
    }

    setFull(full: boolean): void {
        this._full = full;
    }

    setPosition(x: number, y: number): void {
        this._board[x][y] = 1;
    }

    public addListener(listener: BoardListener): void {
        this._listeners.push(listener);
    }

    public removeListener(listener: BoardListener): void {
        this._listeners.splice(this._listeners.indexOf(listener), 1);
    }

    public notifyAllListeners(): void {
        this._listeners
            .forEach((listener) => listener.onBoardChanged());
    }

    get board(): BoardType {
        return this._board;
    }

    get full(): boolean {
        return this._full;
    }
}