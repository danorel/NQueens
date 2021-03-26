export interface BoardActionListener {
    clear(): void;
    setFull(full: boolean): void;
    setPosition(x: number, y: number): void;
}

export interface BoardHandlerListener {
    addListener(listener: BoardListener): void;
    removeListener(listener: BoardListener): void;
    notifyAllListeners(): void;
}

export default interface BoardListener {
    onBoardChanged(): void;
}