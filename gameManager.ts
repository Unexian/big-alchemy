class GameManager {
    cursor: Sprite
    field: Sprite[] = []
    found: String[] = ["Air", "Water", "Fire", "Earth"]

    constructor() {
        this.cursor = sprites.create(img`
            . f f f .
            f f 1 f f
            f 1 1 1 f
            f f 1 f f
            . f f f .
        `, SpriteKind.Player)
        controller.moveSprite(this.cursor)
        this.cursor.z = 100

        this.field[0] = elementList.Air.toSprite()
        this.field[0].left = 20
        this.field[0].top = 30
        this.field[1] = elementList.Water.toSprite()
        this.field[1].right = 80
        this.field[1].top = 30
        this.field[2] = elementList.Earth.toSprite()
        this.field[2].left = 20
        this.field[2].bottom = 90
        this.field[3] = elementList.Fire.toSprite()
        this.field[3].right = 80
        this.field[3].bottom = 90

        this.registerControls();
    }

    private registerControls() {
        controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
            sprites.allOfKind(SpriteKind.Element).forEach(function (i) {
                if (this.cursor.overlapsWith(i)) {
                    controller.moveSprite(i, 100, 100)
                    return
                }
            })
        })
        controller.A.onEvent(ControllerButtonEvent.Released, function () {
            this.mergeOverlappingSprites();
        });

        controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
            this.createNewElement();
        })
    }

    private mergeOverlappingSprites() {
        for (let i of sprites.allOfKind(SpriteKind.Element)) {
            controller.moveSprite(i, 0, 0)
            for (let j of sprites.allOfKind(SpriteKind.Element)) {
                if (i.overlapsWith(j)) {
                    let merge = i.data.merge(i, j)
                    if (merge) {
                        i.destroy()
                        j.destroy()
                        if (this.found.indexOf(merge.data.name) == -1) {
                            game.showLongText("You found a new element: " + merge.data.name, DialogLayout.Bottom)
                            this.found.push(merge.data.name)
                        }
                        this.field.push(merge)
    }   }   }   }   }

    private createNewElement() {
        let element = game.askForString("Choose an element")
        if (element === undefined) { return }
        element = toLowerFirstUpper(element)
        if (this.found.indexOf(element) != -1) {
            this.field.push(elementList[element].toSprite())
            this.field[this.field.length-1].x = this.cursor.x
            this.field[this.field.length-1].y = this.cursor.y
        } else if (elementList[element]) {
            game.splash("Element has not been discovered")
        } else {
            game.splash("Element does not exist")
        }
    }
}