class Element {
    name: String
    combos: {String: String}
    sprite: Image

    constructor (name: String, combos: {String: String}, sprite: Image) {
        this.name = name
        this.combos = combos
        this.sprite = sprite
    }
}