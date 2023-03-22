let elementList: {[key: string]: Element} = {
    "Air": new Element("Air",
        { "Fire": "Smoke", "Water": "Mist", "Earth": "Dust", "Air": "Pressure" },
        img`
    . . . . . . . . . . . . . . . .
    . 1 . . . . . . . 1 . . . . . .
    1 1 1 . . 1 . . 1 1 1 . . 1 . .
    . . . . 1 1 1 . . . . . 1 1 1 .
    . 1 . . . . . . . 1 . . . . . .
    1 1 1 . . 1 . . 1 1 1 . . 1 . .
    . . . . 1 1 1 . . . . . 1 1 1 .
    . 1 . . . . . . . 1 . . . . . .
    1 1 1 . . 1 . . 1 1 1 . . 1 . .
    . . . . 1 1 1 . . . . . 1 1 1 .
    . 1 . . . . . . . 1 . . . . . .
    1 1 1 . . 1 . . 1 1 1 . . 1 . .
    . . . . 1 1 1 . . . . . 1 1 1 .
    . 1 . . . . . . . 1 . . . . . .
    1 1 1 . . 1 . . 1 1 1 . . 1 . .
    . . . . 1 1 1 . . . . . 1 1 1 .
    `, 1),
    "Dust": new Element("Dust", {}, img`
    . . . . . . d . . . . . . . . .
    . . . . . . . . . . d . . . d .
    . . . . . . . . . . . . . . . .
    . . d d . . d . d . . . d . . .
    . . d . . . . . . . . d d d . .
    . . . . . . . . . d d d d d . .
    . . . . . d . . d d d d . . . .
    . . . . . . . d d d d d d . . .
    . d d d . . d d d . . . . . . .
    . d d d d . d d . . . . . . d .
    . . d d d d d . . . . . . . . .
    . . . d d d . . . . d d d . . .
    . . . d d d . . . d d d d d d d
    . . . d d d d d d d d d d d d d
    . d d d d d d d d d d d d d d d
    d d d d d d d d d d d d d d d d
    `, 1),
    "Earth": new Element("Earth",
        { "Water": "Mud", "Fire": "Lava", "Air": "Dust", "Earth": "Land" },
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . e e e e . . . . . .
            . . . . . e e e e e e . . . . .
            . . . . e e e e d d e e . . . .
            . . . . e e e d e e d e . . . .
            . . . e e e d e e e d e e . . .
            . . e e e d e e e e e d e e . .
            . . e d d e e e e e e e d e e .
            . e e d e e e e e e e e e d e .
            e e d e e e e e e e e e e e d e
        `, 1),
    "Energy": new Element("Energy", {}, img`
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . .
    . 5 . . . . . . . . . . . . 5 .
    5 . . . . . . . . . . . . . . 5
    5 . . . . . . 5 5 5 5 . . . . 5
    5 . . . . . 5 5 5 5 . . . . . 5
    5 . . . . 5 5 5 5 . . . . . . 5
    5 . . . 5 5 5 5 . . . . . . . 5
    5 . . 5 5 5 5 5 5 5 5 5 . . . 5
    5 . . . 5 5 5 5 5 5 5 5 5 . . 5
    5 . . . . . . 5 5 5 5 5 . . . 5
    5 . . . . . 5 5 5 5 5 . . . . 5
    5 . . . . 5 5 5 5 5 . . . . . 5
    5 . . . 5 5 5 5 5 . . . . . . 5
    5 . . . . . . . . . . . . . . 5
    . 5 . . . . . . . . . . . . 5 .
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . .
    `, 1),
    "Fire": new Element("Fire",
        { "Earth": "Lava", "Fire": "Energy", "Water": "Steam", "Air": "Smoke" },
        img`
    . . . . . . . . . . . . . . . .
    . . . . . . . 2 2 2 . . . . . .
    . . . . . . . 2 4 2 . . . . . .
    . . . . . . 2 2 4 2 2 . . . . .
    . . . . . . 2 4 4 4 2 . . . . .
    . . . . . 2 2 4 5 4 2 2 . . . .
    . . . . 2 2 4 4 5 4 4 2 2 . . .
    . . . 2 2 4 4 5 5 5 4 4 2 2 . .
    . . . 2 4 4 5 5 1 5 5 4 4 2 . .
    . . . 2 4 5 5 1 1 1 5 5 4 2 . .
    . . . 2 4 5 1 1 1 1 1 5 4 2 . .
    . . . 2 4 5 1 1 1 1 1 5 4 2 . .
    . . . 2 4 4 5 1 1 1 5 5 4 2 . .
    . . . 2 2 4 5 5 5 5 5 4 2 2 . .
    . . . . 2 2 4 4 4 4 4 2 2 . . .
    . . . . . 2 2 2 2 2 2 2 . . . .
    `, 1),
    "Lava": new Element("Lava", {}, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . 2 2 . . . . . .
    . . . . . . . 2 2 2 2 . . . . .
    . . . . . . 2 2 4 4 4 2 2 2 2 .
    . . . . 2 2 4 4 4 4 4 4 4 4 4 2
    . . 2 2 4 4 4 5 5 5 5 5 5 5 4 2
    . 2 4 4 4 5 5 5 4 5 5 4 5 5 4 2
    2 4 4 4 5 5 4 5 5 5 5 5 5 5 4 2
    2 4 5 5 5 4 4 5 4 5 5 5 4 5 4 2
    2 4 5 5 5 5 5 5 5 5 4 5 5 4 2 .
    2 4 4 5 5 5 5 4 5 5 5 4 4 4 2 .
    . 2 4 4 4 5 5 5 5 5 4 4 2 2 . .
    . . 2 2 4 4 4 4 4 4 2 2 . . . .
    . . . . 2 2 2 2 2 2 . . . . . .
    . . . . . . 2 2 2 . . . . . . .
    `, 1),
    "Mist": new Element("Mist", {}, img`
    . . . . . . . . . . . . . . . .
    . 1 1 1 . . . . . 1 1 1 . . . .
    . . . . . 1 1 1 . . . . . 1 1 1
    . 1 1 1 . . . . . 1 1 1 . . . .
    . . . . . 1 1 1 . . . . . 1 1 1
    . 1 1 1 . . . . . 1 1 1 . . . .
    . . . . . 1 1 1 . . . . . 1 1 1
    . 1 1 1 . . . . . 1 1 1 . . . .
    . . . . . 1 1 1 . . . . . 1 1 1
    . 1 1 1 . . . . . 1 1 1 . . . .
    . . . . . 1 1 1 . . . . . 1 1 1
    . 1 1 1 . . . . . 1 1 1 . . . .
    . . . . . 1 1 1 . . . . . 1 1 1
    . 1 1 1 . . . . . 1 1 1 . . . .
    . . . . . 1 1 1 . . . . . 1 1 1
    . . . . . . . . . . . . . . . .
    `, 1),
    "Mud": new Element("Mud", {}, img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . e e . . . . . . . . .
    . . . e e e e e . . e e e e . .
    . . e e e e e e e e e e e e e .
    . e e e e e e e e e e e e e . .
    e e e e e e e e e e e e e . . .
    e e e e e e e e e e e e e . . .
    e e e e e e e e e e e e e . . .
    . e e e e e e e e e e e e e . .
    . . e e . . . e e e e e e e e .
    . . . . . . . . e e e e e e . .
    . . . . . . . . . . e e e . . .
    . . . . . . . . . . . . . . . .
    `, 1),
    "Smoke": new Element("Smoke", {}, img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . c c c . . . . . .
        . . c c c . c c c c . . . . . .
        . . c c c c c c c c . . . . . .
        . . c c c c c c . . c c . . . .
        . . . c c c c . . c c c . . . .
        . . . . c c c . . c c c . . . .
        . . . . c c c c c . . . . . . .
        . . . . c c c c c c . . . . . .
        . . . . c c c c c c c . . . . .
        . . . . c c c c c c c . . . . .
        . . . . c c c c c c c . . . . .
        . . . . . c c c c c c . . . . .
        . . . . . . . c c . . . . . . .
    `, 1),
    "Steam": new Element("Steam", {}, img`
        . . . . . . . . . . . . . . . .
        . . . 1 1 1 1 1 . . . . . . . .
        . . 1 1 1 1 1 1 1 . . 1 1 . . .
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . .
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . .
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . .
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        . 1 1 . 1 1 1 1 1 1 1 1 1 1 1 1
        . . . . 1 1 1 1 1 1 1 1 1 1 1 .
        . . . . . 1 1 1 1 1 . . . 1 1 .
        . . . . . . 1 1 1 . . . . . . .
        . . . . . . . 1 . . . . . . . .
        . . . . . . . 1 . . . . . . . .
    `, 1),
    "Water": new Element("Water",
        { "Earth": "Mud", "Air": "Mist", "Fire": "Steam", "Water": "Puddle" },
        img`
    . . . . . . . . . . . . . . . .
    . . . . . . . 9 9 9 . . . . . .
    . . . . . . . 9 8 9 . . . . . .
    . . . . . . 9 9 8 9 9 . . . . .
    . . . . . . 9 8 8 8 9 . . . . .
    . . . . . 9 9 8 9 8 9 9 . . . .
    . . . . 9 9 8 8 9 8 8 9 9 . . .
    . . . 9 9 8 8 9 9 9 8 8 9 9 . .
    . . . 9 8 8 9 9 9 9 9 8 8 9 . .
    . . . 9 8 9 9 9 9 9 9 9 8 9 . .
    . . . 9 8 9 9 9 9 9 9 9 8 9 . .
    . . . 9 8 9 9 9 9 9 9 9 8 9 . .
    . . . 9 8 8 9 9 9 9 9 9 8 9 . .
    . . . 9 9 8 9 9 9 9 9 8 9 9 . .
    . . . . 9 9 8 8 8 8 8 9 9 . . .
    . . . . . 9 9 9 9 9 9 9 . . . .
    `, 1),
    "Pressure": new Element("Pressure",
        {},
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . 1 1 1 1 1 . .
            . . . . . . . . . 1 1 1 1 1 1 .
            . . . . . . . . . 1 1 1 1 1 1 1
            . . . . . . . . . . 1 1 1 1 1 1
            . . . . . . . . . . 1 1 1 1 1 1
            . . . f f f f f . . . . 1 1 1 1
            . . f 1 2 1 2 1 f . . . 1 1 1 .
            . f 2 1 2 1 2 1 1 f . . . . . .
            . f 1 2 1 1 1 2 2 f . . . . . .
            . f 1 1 1 8 1 1 1 f . . . . . .
            . f 2 2 1 8 8 2 1 f . . . . . .
            . f 1 1 2 1 8 1 2 f . . . . . .
            . . f 2 1 1 8 1 f . . . . . . .
            . . . f f f f f . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, 1),
    "Stone": new Element("Stone",
        {},
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, 1),
    "Land": new Element("Land",
        {},
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . 7 . . . . . . . . . .
            . . . . 7 e 7 . . . . . . . . .
            . . 7 . 7 e 7 . . . . . . . . .
            . 7 7 7 . e . . . . . . . . . .
            . 7 e 7 . e . 7 7 7 7 . . . . .
            . . e . . 7 7 7 7 7 7 7 7 . . .
            . . e 7 7 7 7 7 7 7 7 7 7 7 7 .
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
            7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
        `, 1),
    "Puddle": new Element("Puddle",
        {},
        img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . 5 5 . . . . . . . . .
            . . . . . 5 5 . . . . . . . . .
            . . . 9 9 5 5 9 9 9 . . . . . .
            . . 9 9 9 5 5 9 9 9 9 9 . . . .
            . . 9 9 9 5 5 5 5 9 9 9 . . . .
            . . 9 9 9 5 5 5 5 9 9 9 . . . .
            . . 9 9 9 9 9 9 9 9 9 9 . . . .
            . . . 9 9 9 9 9 9 9 9 9 . . . .
            . . . . 9 9 9 9 9 9 . . . . . .
            . . 9 9 . . . . . . . . . . . .
            . . 9 9 . . . . . . . . . . . .
            . . . . . . . 9 9 . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, 1)

}