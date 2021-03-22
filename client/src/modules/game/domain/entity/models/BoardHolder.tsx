import BoardListener from "./BoardListener";

import { BoardType } from "../../../types";

interface BoardOperationsListener {
    clear(): void;
    setQueen(i: number, j: number): void;
}

interface BoardChangingListener {
    addListener(listener: BoardListener): void;
    removeListener(listener: BoardListener): void;
    notifyAllListeners(): void;
}

export default class BoardHolder implements BoardOperationsListener, BoardChangingListener {
    private _board: BoardType;
    private _listeners: BoardListener[];

    constructor() {
        this._listeners = [];
        this._board = [
            [1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0],
            [0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1],
            [0, 1, 0, 1, 0, 0, 0, 0],
        ];
    }

    public clear(): void {
        for (let i = 0; i < this._board.length; ++i) {
            for (let j = 0; j < this._board.length; ++j) {
                this._board[i][j] = 0;
            }
        }
    }

    setQueen(i: number, j: number): void {
        this._board[i][j] = 1;
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
}