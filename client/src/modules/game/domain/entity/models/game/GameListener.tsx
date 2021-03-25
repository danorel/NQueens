export interface GameHandlerListener {
    addListener(listener: GameListener): void;
    removeListener(listener: GameListener): void;
    notifyAllListeners(): void;
}

export default interface GameListener {
    onGameChanged(): void;
}