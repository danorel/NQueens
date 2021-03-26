export default interface MotionResponse {
    ok: boolean,
    move: {
        x: number,
        y: number
    },
    log: string
}