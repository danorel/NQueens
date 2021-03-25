import BoardHolder from '../entity/models/BoardHolder';
import MotionResponse from "../entity/structures/MotionResponse";
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
        const response: MotionResponse = await this.movementRepository.moveManual();
        this.boardHolder.setQueen(response.x, response.y);
    }

    /**
     * @throws {Error} if movement is not valid or have not passed
     */
    public async makeMoveAutomatic(): Promise<void> {
        const response: MotionResponse = await this.movementRepository.moveAutomatic();
        this.boardHolder.setQueen(response.x, response.y);
    }
}