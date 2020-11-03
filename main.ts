input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        music.changeTempoBy(30)
        music.playMelody("G F E F G F E F ", 208)
        music.playTone(262, music.beat(BeatFraction.Eighth))
        music.playTone(196, music.beat(BeatFraction.Whole))
    }
})
