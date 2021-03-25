import MotionResponse from '../entity/structures/MotionResponse';

import { BoardType } from "../../types";

export default interface MotionRepository {
    /**
     * @throws {Error} if is manual regime
     */
    moveManual(board: BoardType): Promise<MotionResponse>;

    /**
     * @throws {Error} if is automatic regime
     */
    moveAutomatic(board: BoardType): Promise<MotionResponse>;
}