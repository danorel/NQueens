import BaseViewModel from '../Base';

export default interface GameActionListener extends BaseViewModel {
    isAutomatic: boolean;

    onClickNext(): Promise<void>;
    onClickRegime(): void;
}