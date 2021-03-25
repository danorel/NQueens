import MotionRepository from '../domain/repository/MotionRepository';
import MotionResponse from '../domain/entity/structures/MotionResponse';

import { BoardType } from "../types";

export default class MotionFakeApi implements MotionRepository {
    /**
     * @throws {Error} if is automatic regime on
     * @throws {Error} if not valid move: index out of bounds
     */
    async moveManual(board: BoardType): Promise<MotionResponse> {
        const response = await fetch('/api/v1/queens/motion', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                board: board
            })
        });
        return await response.json();
    }

    /**
     * @throws {Error} if is manual regime on
     * @throws {Error} if not valid move: index out of bounds
     */
    async moveAutomatic(board: BoardType): Promise<MotionResponse> {
        const response = await fetch('/api/v1/queens/motion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json,charset=utf=8'
            },
            body: JSON.stringify({
                board: board
            })
        });
        return await response.json();
    }
}