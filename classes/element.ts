class Element {
    name: String
    combos: {[key: string]: string}
    sprite: Image
    scale: number

    constructor(name: String, combos: { [key: string]: string } = {}, sprite: Image, scale: number) {
        this.name = name
        this.combos = combos
        this.sprite = sprite
    }

    toSprite(): Sprite {
        let sprite = sprites.create(this.sprite, SpriteKind.Element)
        sprite.data = this
        sprite.setScale(1/this.scale, ScaleAnchor.Middle)
        return sprite
    }

    merge(other: Sprite) {
        let otherElement = other.data.name
        let elementTo = this.combos[otherElement]
    }
}