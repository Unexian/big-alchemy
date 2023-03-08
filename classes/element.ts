class Element {
    name: String
    combos: {[key: string]: string}
    sprite: Image

    constructor(name: String, combos: { [key: string]: string } = {}, sprite: Image) {
        this.name = name
        this.combos = combos
        this.sprite = sprite
    }

    toSprite(): Sprite {
        let sprite = sprites.create(this.sprite, SpriteKind.Element)
        sprite.data = this
        return sprite
    }
}