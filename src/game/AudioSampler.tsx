// if (typeof window !== 'undefined') {
//     const shootSampleUrl = require('../audioSamples/laser-blast.mp3')
//     const ctx = new AudioContext()

//     let audio: any

//     fetch(shootSampleUrl)
//         .then((data) => data.arrayBuffer())
//         .then((arrayBuffer) => ctx.decodeAudioData(arrayBuffer))
//         .then((decodedAudio) => {
//             audio = decodedAudio
//         })

//     function playback() {
//         const gainNode = ctx.createGain()
//         gainNode.gain.value = 0.05
//         const playSound = ctx.createBufferSource()
//         playSound.buffer = audio
//         playSound.connect(gainNode)
//         gainNode.connect(ctx.destination)
//         playSound.start(ctx.currentTime)
//     }

//     window.addEventListener('mousedown', playback)
// }

export default class AudioSampler {
    ctx: AudioContext
    audio: any
    url: string

    constructor(url: string) {
        this.ctx = new AudioContext()
        this.url = url
        this.loadAudio()
    }

    loadAudio() {
        fetch(this.url)
            .then((data) => data.arrayBuffer())
            .then((arrayBuffer) => this.ctx.decodeAudioData(arrayBuffer))
            .then((decodedAudio) => {
                this.audio = decodedAudio
            })
    }

    playAudio = () => {
        const gainNode = this.ctx.createGain()
        gainNode.gain.value = 0.03
        const playSound = this.ctx.createBufferSource()
        playSound.buffer = this.audio
        playSound.connect(gainNode)
        gainNode.connect(this.ctx.destination)
        playSound.start(this.ctx.currentTime)
    }
}
