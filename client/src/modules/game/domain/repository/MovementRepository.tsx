import MovementResponse from '../entity/structures/MovementResponse';

export default interface MovementRepository {
    /**
     * @throws {Error} if is manual regime
     */
    moveManual(): Promise<MovementResponse>;

    /**
     * @throws {Error} if is automatic regime
     */
    moveAutomatic(): Promise<MovementResponse>;
}