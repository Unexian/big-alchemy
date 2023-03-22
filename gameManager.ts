class GameManager {
    cursor: Sprite
    field: Sprite[] = []

    constructor() {
        this.cursor = sprites.create(img`
            . f f f .
            f f 1 f f
            f 1 1 1 f
            f f 1 f f
            . f f f .
        `, SpriteKind.Player)
        controller.moveSprite(this.cursor)

        this.field[0] = elementList.Air.toSprite()
        this.field[0].left = 20
        this.field[1] = elementList.Water.toSprite()
        this.field[1].right = 140

        controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
            sprites.allOfKind(SpriteKind.Element).forEach(function (i) {
                if (this.cursor.overlapsWith(i)) {
                    controller.moveSprite(i, 100, 100)
                    return
                }
            })
        })
        controller.A.onEvent(ControllerButtonEvent.Released, function () {
            for (let i of sprites.allOfKind(SpriteKind.Element)) {
                controller.moveSprite(i, 0, 0)
                for (let j of sprites.allOfKind(SpriteKind.Element)) {
                    if (i.overlapsWith(j)) {
                        this.field.push(i.data.merge(i, j))
                    }
                }
            }
        })
    }
}