import InitializeResponse from '../entity/structures/InitializeResponse';

import { BoardType } from "../../types";

export default interface InitializeRepository {
    /**
     * @throws {Error} if is manual regime
     */
    prepareBoard(board: BoardType): Promise<InitializeResponse>;
}