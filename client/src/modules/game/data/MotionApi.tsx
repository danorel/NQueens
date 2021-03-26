import MotionRepository from '../domain/repository/MotionRepository';
import MotionResponse from '../domain/entity/structures/MotionResponse';

export default class MotionApi implements MotionRepository {
    /**
     * @throws {Error} if is automatic regime on
     * @throws {Error} if not valid move: index out of bounds
     */
    async prepareMove(): Promise<MotionResponse> {
        const response = await fetch('/api/v1/queens/resolve', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            }
        });
        return await response.json();
    }
}