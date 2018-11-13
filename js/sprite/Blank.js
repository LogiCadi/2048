import { DataStore } from '../base/Datastore.js'

/**空白块 与block的区别是没有num属性 */
export class Blank {
    constructor(site) {
        this.dataStore = DataStore.getInstance()

        this.site = site
     
    }
    draw() {
        this.siteX = this.site % 4 == 0 ? 4 : this.site % 4
        this.siteY = Math.ceil(this.site / 4)

        const canvas = this.dataStore.canvas
        const ctx = this.dataStore.ctx

        ctx.fillStyle = 'blue'
        ctx.fillRect(
            canvas.width * .05 + 2.5 + canvas.width * .9 / 4 * (this.siteX - 1),
            canvas.height - canvas.width * 1.2 + 2.5 + canvas.width * .9 / 4 * (this.siteY - 1),
            canvas.width * .9 / 4 - 5,
            canvas.width * .9 / 4 - 5)
        
    }
}