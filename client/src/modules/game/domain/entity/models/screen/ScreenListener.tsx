export interface ScreenActionListener {
    clear(): void;
    println(log: string): void;
}

export interface ScreenHandlerListener {
    addListener(listener: ScreenListener): void;
    removeListener(listener: ScreenListener): void;
    notifyAllListeners(): void;
}

export default interface ScreenListener {
    onScreenChanged(): void;
}