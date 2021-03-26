import MotionRepository from '../domain/repository/MotionRepository';
import MotionResponse from '../domain/entity/structures/MotionResponse';

export default class MotionMockApiTest implements MotionRepository {
    /**
     * @throws {Error} if is automatic regime on
     * @throws {Error} if not valid move: index out of bounds
     */
    prepareMove(): Promise<MotionResponse> {
        return new Promise((resolve, reject) => {
            const mockResponse: MotionResponse = {
                ok: false,
                done: false,
                exist: false,
                move: {
                    x: -1,
                    y: 5,
                },
                log: 'Not valid move.'
            };

            if ((mockResponse.move.x < 0 || mockResponse.move.x > 7) ||
                (mockResponse.move.y > 7 || mockResponse.move.y < 0)) {
                reject(new Error('[Exception]: Index out of bounds!'));
                return;
            }

            resolve(mockResponse);
        });
    }
}