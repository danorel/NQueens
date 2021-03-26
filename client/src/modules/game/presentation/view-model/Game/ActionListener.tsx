import BaseViewModel from '../Base';

export default interface GameActionListener extends BaseViewModel {
    isAutomatic: boolean;

    onMove(): Promise<void>;
    onSwitch(): void;
    onContinue(): void;
}