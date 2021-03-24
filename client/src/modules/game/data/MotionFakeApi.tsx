import MovementRepository from '../domain/repository/MovementRepository';
import MovementResponse from '../domain/entity/structures/MovementResponse';

export default class MotionFakeApi implements MovementRepository {
    /**
     * @throws {Error} if is automatic regime on
     * @throws {Error} if not valid move: index out of bounds
     */
    moveManual(): Promise<MovementResponse> {
        return new Promise((resolve, reject) => {
            const mockResponse: { i: number, j: number } = {
                i: 3,
                j: 1,
            };

            if ((mockResponse.i < 0 || mockResponse.i > 7) ||
                (mockResponse.j > 7 || mockResponse.j < 0)) {
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
    moveAutomatic(): Promise<MovementResponse> {
        return new Promise((resolve, reject) => {
            const mockResponse: { i: number, j: number } = {
                i: 3,
                j: 5,
            };

            if ((mockResponse.i < 0 || mockResponse.i > 7) ||
                (mockResponse.j > 7 || mockResponse.j < 0)) {
                reject(new Error('[Exception]: Index out of bounds!'));
                return;
            }

            resolve(mockResponse);
        });
    }
}