import BaseViewModel from '../Base';

export default interface Playable extends BaseViewModel {
    logs: string;
    isAutomatic: boolean;

    onClickNext(): Promise<void>;
    onClickRegime(): void;
}