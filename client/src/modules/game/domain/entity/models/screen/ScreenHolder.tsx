import ScreenListener, {
    ScreenActionListener,
    ScreenHandlerListener
} from "./ScreenListener";

export default class ScreenHolder implements ScreenActionListener, ScreenHandlerListener {

    private _logs: string;
    private _listeners: ScreenListener[];

    constructor() {
        this._logs = '';
        this._listeners = [];
    }

    public println(log: string): void {
        this._logs += "> " + log + "\n";
    }

    public clear(): void {
        this._logs = '';
    }

    public addListener(listener: ScreenListener): void {
        this._listeners.push(listener);
    }

    public removeListener(listener: ScreenListener): void {
        this._listeners.splice(this._listeners.indexOf(listener), 1);
    }

    public notifyAllListeners(): void {
        this._listeners
            .forEach((listener) => listener.onScreenChanged());
    }

    get logs(): string {
        return this._logs;
    }
}