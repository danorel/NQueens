import GameHolder from "../entity/models/game/GameHolder";
import MotionResponse from "../entity/structures/MotionResponse";
import MotionRepository from '../repository/MotionRepository';

export default class MotionUseCase {
    private holder: GameHolder;
    private repository: MotionRepository;

    public constructor(repository: MotionRepository, holder: GameHolder) {
        this.holder = holder;
        this.repository = repository;
    }

    /**
     * @throws {Error} if movement is not valid or have not passed
     */
    public async makeMoveManual(): Promise<void> {
        const response: MotionResponse = await this.repository.moveManual(this.holder.board.board);
        this.holder.board.set(response.move.x, response.move.y);
        this.holder.screen.println(response.log)
    }

    /**
     * @throws {Error} if movement is not valid or have not passed
     */
    public async makeMoveAutomatic(): Promise<void> {
        const response: MotionResponse = await this.repository.moveAutomatic(this.holder.board.board);
        this.holder.board.set(response.move.x, response.move.y);
        this.holder.screen.println(response.log)
    }
}