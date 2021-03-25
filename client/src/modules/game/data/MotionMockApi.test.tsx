import MotionRepository from '../domain/repository/MotionRepository';
import MotionResponse from '../domain/entity/structures/MotionResponse';

export default class MotionMockApiTest implements MotionRepository {
    /**
     * @throws {Error} if is automatic regime on
     * @throws {Error} if not valid move: index out of bounds
     */
    moveManual(): Promise<MotionResponse> {
        return new Promise((resolve, reject) => {
            const mockResponse: { x: number, y: number } = {
                x: 3,
                y: 1,
            };

            if ((mockResponse.x < 0 || mockResponse.x > 7) ||
                (mockResponse.y > 7 || mockResponse.y < 0)) {
                reject(new Error('[Exception]: Index out of bounds!'));
                return;
            }

            resolve(mockResponse);
        });
    }

    /**
     * @throws {Error} if is manual regime on
     * @throws {Error} if not valid move: index out of bounds
     */
    moveAutomatic(): Promise<MotionResponse> {
        return new Promise((resolve, reject) => {
            const mockResponse: { x: number, y: number } = {
                x: 3,
                y: 5,
            };

            if ((mockResponse.x < 0 || mockResponse.x > 7) ||
                (mockResponse.y > 7 || mockResponse.y < 0)) {
                reject(new Error('[Exception]: Index out of bounds!'));
                return;
            }

            resolve(mockResponse);
        });
    }
}