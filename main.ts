input.touchD2.onEvent(ButtonEvent.Up, function () {
    strip.setAll(0x000000)
    encrypt(verses[vnum])
})
input.touchD1.onEvent(ButtonEvent.Up, function () {
    strip.showAnimation(light.rainbowAnimation, 500)
    vnum += 1
    if (vnum > 4) {
        vnum = 0
    }
    encrypt(VNames[vnum])
    strip.showAnimation(light.sparkleAnimation, 500)
})
function doDash () {
    pixel.setColor(0x0000ff)
    pause(200)
    pixel.setColor(0x000000)
    strip.setPixelColor(1, 0x0000ff)
    strip.setPixelColor(2, 0x0000ff)
    shift_strip()
}
function encrypt (text: string) {
    for (let index2 = 0; index2 <= text.length - 1; index2++) {
        chr = text.charAt(index2)
        code = morse[alphabet.indexOf(chr)]
        playCode(code)
        pause(500)
    }
}
function doDot () {
    pixel.setColor(0xffff00)
    pause(100)
    pixel.setColor(0x000000)
    strip.setPixelColor(1, 0xffff00)
    shift_strip()
}
function shift_strip () {
    for (let index = 0; index <= 25; index++) {
        shft = 25 - index
        strip.setPixelColor(shft + 4, strip.pixelColor(shft))
    }
    strip.setPixelColor(0, 0x000000)
    strip.setPixelColor(1, 0x000000)
    strip.setPixelColor(2, 0x000000)
    strip.setPixelColor(3, 0x000000)
}
function playCode (text: string) {
    for (let index = 0; index <= text.length - 1; index++) {
        if ("-" == text.charAt(index)) {
            doDash()
        }
        if ("." == text.charAt(index)) {
            doDot()
        }
        if (" " == text.charAt(index)) {
            doSpace()
            pause(500)
        }
    }
}
function doINIT () {
    verse = ""
    morse = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
    ".----",
    "..---",
    "...--",
    "....-",
    ".....",
    "-....",
    "--...",
    "---..",
    "----.",
    "-----",
    " "
    ]
    j316 = "for god so loved the world"
    P23 = "the lord is my shepherd"
    Phl4 = "i can do all things"
    Isaiah263 = "thou wilt keep him in perfect peace"
    _2Tim316 = "all scripture is given by inspiration of god"
    verses = [
    Phl4,
    P23,
    j316,
    Isaiah263,
    _2Tim316
    ]
    VNames = [
    "ph4",
    "p23",
    "j316",
    "i26",
    "2tim"
    ]
    vn = ""
    alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    " "
    ]
}
function doSpace () {
    pixel.setColor(0x00ff00)
    pause(200)
    pixel.setColor(0x000000)
    strip.setPixelColor(0, 0x00ff00)
    strip.setPixelColor(1, 0x000000)
    strip.setPixelColor(2, 0x000000)
    shift_strip()
}
let vn = ""
let _2Tim316 = ""
let Isaiah263 = ""
let Phl4 = ""
let P23 = ""
let j316 = ""
let verse = ""
let shft = 0
let alphabet: string[] = []
let morse: string[] = []
let code = ""
let chr = ""
let verses: string[] = []
let VNames: string[] = []
let vnum = 0
let strip: light.NeoPixelStrip = null
pixel.setColor(0xff0000)
doINIT()
pause(1000)
pixel.setColor(0x000000)
strip = light.createStrip(pins.A2, 30)
vnum = 0
encrypt(VNames[vnum])
strip.showAnimation(light.sparkleAnimation, 500)
