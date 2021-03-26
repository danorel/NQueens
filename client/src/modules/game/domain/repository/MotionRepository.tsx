import MotionResponse from '../entity/structures/MotionResponse';

export default interface MotionRepository {
    /**
     * @throws {Error} if is manual regime
     */
    moveManual(): Promise<MotionResponse>;

    /**
     * @throws {Error} if is automatic regime
     */
    moveAutomatic(): Promise<MotionResponse>;
}