export interface BoardActionListener {
    clear(): void;
    set(x: number, y: number): void;
}

export interface BoardHandlerListener {
    addListener(listener: BoardListener): void;
    removeListener(listener: BoardListener): void;
    notifyAllListeners(): void;
}

export default interface BoardListener {
    onBoardChanged(): void;
}