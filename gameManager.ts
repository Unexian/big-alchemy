class GameManager {
    cursor: Cursor
    field: Sprite[]

    constructor() {
        this.cursor = new Cursor()


        controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
            // TODO
        })
    }
}

class Cursor {
    cursor: Sprite
    bound: number | null

    constructor() {
        this.cursor = sprites.create(img`
            . f f f .
            f f 1 f f
            f 1 1 1 f
            f f 1 f f
            . f f f .
        `, SpriteKind.Player)
        controller.moveSprite(this.cursor)
        this.bound = null
    }
}