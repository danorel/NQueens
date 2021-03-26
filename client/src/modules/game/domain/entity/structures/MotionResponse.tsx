export default interface MotionResponse {
    ok: boolean,
    move: {
        x: number,
        y: number
    },
    done: boolean,
    exist: boolean,
    log: string
}