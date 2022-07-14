export default class AudioSampler {
    ctx: AudioContext

    audio: any

    url: string

    playSound: any

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
        this.playSound = this.ctx.createBufferSource()
        this.playSound.buffer = this.audio
        this.playSound.connect(gainNode)
        gainNode.connect(this.ctx.destination)
        this.playSound.start(this.ctx.currentTime)
    }

    stopAudio = () => {
        this.playSound.stop(this.ctx.currentTime)
    }
}
