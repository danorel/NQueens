import BaseViewModel from '../Base';

export default interface Playable extends BaseViewModel {
    isAutomatic: boolean;

    onClick(): void;
}