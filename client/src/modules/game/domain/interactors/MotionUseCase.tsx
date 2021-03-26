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
    public async prepareMove(): Promise<void> {
        const response: MotionResponse = await this.repository.prepareMove();
        if (response.move)
            this.holder.board.setPosition(response.move.x, response.move.y);
        if (response.done) {
            this.holder.board.setFull(response.done);
            this.holder.screen.println('Queen matrix resolved... We can search another solution, Neo! Agree?');
        } else if (!response.exist) {
            this.holder.isComplete = true;
            this.holder.screen.println('Mission completed... Thank you, Neo, for finding all possible solutions!')
        } else this.holder.screen.println(response.log)
    }
}