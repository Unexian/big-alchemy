class GameManager {
    cursor: Cursor
    field: Sprite

    constructor() {
        this.cursor = new Cursor()
        this.field = sprites.create(elementList.Air.sprite, SpriteKind.Element)

        controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
            this.cursor.bound = 0
            controller.moveSprite(this.field, 100, 100)
        })
        controller.A.onEvent(ControllerButtonEvent.Released, function () {
            this.cursor.bound = null
            controller.moveSprite(this.field, 0, 0)
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