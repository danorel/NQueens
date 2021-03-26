import InitializeRepository from "../domain/repository/InitializeRepository";
import InitializeResponse from '../domain/entity/structures/InitializeResponse';

import { BoardType } from "../types";

export default class InitializeApi implements InitializeRepository {
    /**
     * @throws {Error} if is automatic regime on
     * @throws {Error} if not valid move: index out of bounds
     */
    async prepareBoard(board: BoardType): Promise<InitializeResponse> {
        const response = await fetch('/api/v1/queens/initialize', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                board: board
            })
        })
        return await response.json();
    }
}