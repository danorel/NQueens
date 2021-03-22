import BoardHolder from '../entity/models/BoardHolder';
import MovementResponse from "../entity/structures/MovementResponse";
import MovementRepository from '../repository/MovementRepository';

export default class MovementUseCase {
    private movementRepository: MovementRepository;
    private boardHolder: BoardHolder;

    public constructor(movementRepository: MovementRepository, boardHolder: BoardHolder) {
        this.movementRepository = movementRepository;
        this.boardHolder = boardHolder;
    }

    /**
     * @throws {Error} if movement is not valid or have not passed
     */
    public async makeMoveManual(): Promise<void> {
        const movementResponse: MovementResponse = await this.movementRepository.moveManual();
        this.boardHolder.setQueen(movementResponse.i, movementResponse.j);
    }

    /**
     * @throws {Error} if movement is not valid or have not passed
     */
    public async makeMoveAutomatic(): Promise<void> {
        const movementResponse: MovementResponse = await this.movementRepository.moveAutomatic();
        this.boardHolder.setQueen(movementResponse.i, movementResponse.j);
    }
}