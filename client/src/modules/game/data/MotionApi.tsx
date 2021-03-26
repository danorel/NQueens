import MotionRepository from '../domain/repository/MotionRepository';
import MotionResponse from '../domain/entity/structures/MotionResponse';

export default class MotionApi implements MotionRepository {
    /**
     * @throws {Error} if is automatic regime on
     * @throws {Error} if not valid move: index out of bounds
     */
    async moveManual(): Promise<MotionResponse> {
        const response = await fetch('/api/v1/queens/resolve', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            }
        });
        return await response.json();
    }

    /**
     * @throws {Error} if is manual regime on
     * @throws {Error} if not valid move: index out of bounds
     */
    async moveAutomatic(): Promise<MotionResponse> {
        const response = await fetch('/api/v1/queens/resolve', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json,charset=utf=8'
            }
        });
        return await response.json();
    }
}