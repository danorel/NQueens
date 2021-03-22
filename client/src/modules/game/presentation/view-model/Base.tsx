import GameView from "../view/Game";

export default interface BaseViewModel {
    attachView(baseView: GameView): void;
    detachView(): void;
}