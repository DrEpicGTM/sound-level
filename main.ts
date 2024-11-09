basic.forever(function () {
    if (input.soundLevel() > 80) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            # . # . #
            # # # # #
            `)
        basic.pause(500)
        basic.showString("danger")
    } else {
        basic.showString("safe")
    }
})
