import BaseViewModel from '../Base';

export default interface GameActionListener extends BaseViewModel {
    isAutomatic: boolean;

    onInit(): Promise<void>;
    onMove(): Promise<void>;
    onRestart(): Promise<void>;
    onSwitch(): void;
    onContinue(): void;
    onResize(value: number | number[]): Promise<void>;
}