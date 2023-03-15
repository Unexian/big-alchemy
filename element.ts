class Element {
    name: String
    combos: { [key: string]: string }
    sprite: Image
    scale: number

    constructor(name: String, combos: { [key: string]: string } = {}, sprite: Image, scale: number) {
        this.name = name
        this.combos = combos
        this.sprite = sprite
        this.scale = scale
    }

    toSprite(): Sprite {
        let sprite = sprites.create(this.sprite, SpriteKind.Element)
        sprite.data = this
        sprite.setScale(1 / this.scale, ScaleAnchor.Middle)
        return sprite
    }

    merge(self: Sprite, other: Sprite) {
        let out = elementList[self.data.combos[other.data.name]].toSprite()
        out.x = self.x
        out.y = self.y
        other.destroy()
        self.destroy()
        return out
    }
}