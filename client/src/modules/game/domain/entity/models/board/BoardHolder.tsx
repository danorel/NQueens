import BoardListener, {
    BoardActionListener,
    BoardHandlerListener,
} from "./BoardListener";

import { BoardType } from "../../../../types";

export default class BoardHolder implements BoardActionListener, BoardHandlerListener {

    private _size: number;
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
        this._size = this._board.length;
    }

    public clear(): void {
        for (let i = 0; i < this._board.length; ++i) {
            for (let j = 0; j < this._board.length; ++j) {
                this._board[i][j] = 0;
            }
        }
    }

    setSize(size: number): void {
        this._size = size;
        this._full = false
        this._board = [...Array(size)].map(_ => Array(size).fill(0));
    }

    setFull(full: boolean): void {
        this._full = full;
    }

    setPosition(x: number, y: number): void {
        if ((x < 0 || x > this._size) || (y < 0 || y > this._size))
            return

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

    get size(): number {
        return this._size;
    }

    get full(): boolean {
        return this._full;
    }
}