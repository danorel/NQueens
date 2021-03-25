import MovementRepository from '../domain/repository/MovementRepository';
import MotionResponse from '../domain/entity/structures/MotionResponse';

export default class MotionFakeApi implements MovementRepository {
    /**
     * @throws {Error} if is automatic regime on
     * @throws {Error} if not valid move: index out of bounds
     */
    async moveManual(): Promise<MotionResponse> {
        try {
            const response = await fetch('/api/v1/queens/motion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json,charset=utf=8'
                }
            });
            return await response.json();
        } catch (err) {
            throw err;
        }
    }

    /**
     * @throws {Error} if is manual regime on
     * @throws {Error} if not valid move: index out of bounds
     */
    async moveAutomatic(): Promise<MotionResponse> {
        try {
            const response = await fetch('/api/v1/queens/motion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json,charset=utf=8'
                }
            });
            return await response.json();
        } catch (err) {
            throw err;
        }
    }
}