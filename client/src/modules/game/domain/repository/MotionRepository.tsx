import MotionResponse from '../entity/structures/MotionResponse';

export default interface MotionRepository {
    /**
     * @throws {Error} if is not valid move done
     */
    prepareMove(): Promise<MotionResponse>;
}