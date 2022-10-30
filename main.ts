function wenbenqupubofang (wenbenqupu: string) {
    wbqupu = "7:2,7:1,7:2,7:1,5:2,7:2,4:1,1:1,7:1,0:1,7:2,7:1,7:2,7:1,5:2,4:2,3:1,5:1,4:1,0:1,4:2,4:2,5:1,7:2,7:2,7:1,5:2,5:2,4:1,3:2,3:2,0:2,4:1,4:2,5:1,3:2,3:2,8:2,14:1,8:1,14:1,"
    js = 0
    while (wbqupu.length > 1) {
        ls = wbqupu.length
        qd = wbqupu.indexOf(",")
        yinfu = parseFloat(wbqupu.substr(0, qd - 2))
        jjpp = parseFloat(wbqupu.substr(qd - 1, 1))
        if (yinfu > 0) {
            yinfu = zy[yinfu - 1]
        }
        bofangyingfu(yinfu, jjpp)
        wbqupu = wbqupu.substr(qd + 1, ls - qd)
    }
}
function yaokong () {
    music.playTone(392, music.beat(BeatFraction.Half))
    Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
    Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Red))
    Tinybit.RGB_Car_Program().show()
    music.playTone(392, music.beat(BeatFraction.Whole))
    Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
    Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Green))
    Tinybit.RGB_Car_Program().show()
    music.playTone(392, music.beat(BeatFraction.Half))
    Tinybit.RGB_Car_Big(Tinybit.enColor.Blue)
    Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
    Tinybit.RGB_Car_Program().show()
    music.playTone(392, music.beat(BeatFraction.Whole))
    Tinybit.RGB_Car_Big(Tinybit.enColor.White)
    Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Indigo))
    Tinybit.RGB_Car_Program().show()
    music.playTone(330, music.beat(BeatFraction.Half))
    Tinybit.RGB_Car_Big(Tinybit.enColor.Cyan)
    Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Violet))
    Tinybit.RGB_Car_Program().show()
    music.playTone(392, music.beat(BeatFraction.Half))
    Tinybit.RGB_Car_Big(Tinybit.enColor.White)
    Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Purple))
    Tinybit.RGB_Car_Program().show()
    music.playTone(294, music.beat(BeatFraction.Whole))
    Tinybit.RGB_Car_Big(Tinybit.enColor.Yellow)
    Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.White))
    Tinybit.RGB_Car_Program().show()
    music.playTone(440, music.beat(BeatFraction.Whole))
    Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
    Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Yellow))
    Tinybit.RGB_Car_Program().show()
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(220, music.beat(BeatFraction.Half))
    music.playTone(196, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Whole))
    return 0
}
makerbit.onIrButton(IrButton.NUM1, IrButtonAction.Pressed, function () {
    yaokong()
})
makerbit.onIrButton(IrButton.NUM3, IrButtonAction.Pressed, function () {
    wenbenqupubofang("abc")
})
makerbit.onIrButton(IrButton.NUM2, IrButtonAction.Pressed, function () {
    yuequbofang(geququpu, gequjiepai)
})
function yuequbofang (qupu: any[], jiepai: number[]) {
    js = 0
    for (let index = 0; index < qupu.length; index++) {
        yinfu = geququpu[js]
        if (yinfu > 0) {
            yinfu = zy[yinfu - 1]
        }
        jp = jiepai[js]
        bofangyingfu(yinfu, jp)
        js += 1
    }
}
function bofangyingfu (yingfu: number, jiepai: number) {
    if (jiepai == 1) {
        music.playTone(yingfu, music.beat(BeatFraction.Whole))
    } else if (jiepai == 2) {
        music.playTone(yinfu, music.beat(BeatFraction.Half))
    } else if (yingfu == 3) {
        music.playTone(yingfu, music.beat(BeatFraction.Quarter))
    } else if (jiepai == 4) {
        music.playTone(yingfu, music.beat(BeatFraction.Eighth))
    } else if (jiepai == 5) {
        music.playTone(yingfu, music.beat(BeatFraction.Sixteenth))
    } else if (jiepai == 6) {
        music.playTone(yingfu, music.beat(BeatFraction.Double))
    } else if (jiepai == 7) {
        music.playTone(yingfu, music.beat(BeatFraction.Breve))
    } else {
        music.rest(music.beat(BeatFraction.Whole))
    }
}
let jp = 0
let jjpp = 0
let yinfu = 0
let qd = 0
let ls = 0
let js = 0
let wbqupu = ""
let gequjiepai: number[] = []
let geququpu: number[] = []
let zy: number[] = []
makerbit.connectIrReceiver(DigitalPin.P8)
Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
Tinybit.RGB_Car_Program().clear()
Tinybit.RGB_Car_Program().show()
zy = [
440,
494,
262,
294,
330,
349,
392,
220,
247,
131,
147,
165,
175,
196,
880,
988,
523,
587,
659,
698,
784
]
geququpu = [
7,
7,
7,
7,
5,
7,
4,
1,
7,
0,
7,
7,
7,
7,
5,
4,
3,
5,
4,
0,
4,
4,
5,
7,
7,
7,
5,
5,
4,
3,
3,
0,
4,
4,
5,
3,
3,
8,
14,
8,
14
]
gequjiepai = [
2,
1,
2,
1,
2,
2,
1,
1,
1,
1,
2,
1,
2,
1,
2,
2,
1,
1,
1,
1,
2,
2,
1,
2,
2,
1,
2,
2,
1,
2,
2,
2,
1,
2,
1,
2,
2,
2,
1,
1,
1
]
