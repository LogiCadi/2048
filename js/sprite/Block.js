import { DataStore } from '../base/Datastore.js'

export class Block {
    constructor(site) {
        this.dataStore = DataStore.getInstance()

        this.site = site
        
        this.num = 2
    }
    draw() {
        this.siteX = this.site % 4 == 0 ? 4 : this.site % 4
        this.siteY = Math.ceil(this.site / 4)

        const canvas = this.dataStore.canvas
        const ctx = this.dataStore.ctx

        ctx.fillStyle = 'black'
        ctx.fillRect(
            canvas.width * .05 + 2.5 + canvas.width * .9 / 4 * (this.siteX - 1),
            canvas.height - canvas.width * 1.2 + 2.5 + canvas.width * .9 / 4 * (this.siteY - 1),
            canvas.width * .9 / 4 - 5,
            canvas.width * .9 / 4 - 5)

        // 显示数字
        ctx.fillStyle = 'white'
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "30px Arial";
        ctx.fillText(this.num,
            canvas.width * .05 + 2.5 + canvas.width * .9 / 4 * (this.siteX - 1) + (canvas.width * .9 / 4 - 5) / 2,
            canvas.height - canvas.width * 1.2 + 2.5 + canvas.width * .9 / 4 * (this.siteY - 1) + (canvas.width * .9 / 4 - 5) / 2)
    }
}