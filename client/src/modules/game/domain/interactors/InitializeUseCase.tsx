import GameHolder from "../entity/models/game/GameHolder";
import InitializeResponse from "../entity/structures/InitializeResponse";
import InitializeRepository from '../repository/InitializeRepository';

export default class InitializeUseCase {
    private holder: GameHolder;
    private repository: InitializeRepository;

    public constructor(repository: InitializeRepository, holder: GameHolder) {
        this.holder = holder;
        this.repository = repository;
    }

    /**
     * @throws {Error} if board is not initialized or not have not passed
     */
    public async prepareBoard(): Promise<void> {
        const response: InitializeResponse = await this.repository.prepareBoard(this.holder.board.board);
        if (response.ok)
            this.holder.screen.println(response.log)
    }
}