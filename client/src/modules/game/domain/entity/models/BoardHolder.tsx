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
    private board: BoardType;
    private listeners: BoardListener[];

    constructor() {
        this.listeners = [];
        this.board = [
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
        for (let i = 0; i < this.board.length; ++i) {
            for (let j = 0; j < this.board.length; ++j) {
                this.board[i][j] = 0;
            }
        }
    }

    setQueen(i: number, j: number): void {
        this.board[i][j] = 1;
    }

    public addListener(listener: BoardListener): void {
        this.listeners.push(listener);
    }

    public removeListener(listener: BoardListener): void {
        this.listeners.splice(this.listeners.indexOf(listener), 1);
    }

    public notifyAllListeners(): void {
        this.listeners
            .forEach((listener) => listener.onBoardChanged());
    }
}