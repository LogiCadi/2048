import { DataStore } from "../base/Datastore.js";

export class Background {
    constructor() {

    }

    draw() {
        const ctx = DataStore.getInstance().ctx
        const canvas = DataStore.getInstance().canvas

        ctx.fillStyle = 'blue'
        ctx.fillRect(
            canvas.width * .05,
            canvas.height - canvas.width * 1.2,
            canvas.width * .9,
            canvas.width * .9)

        ctx.strokeStyle = 'yellow'
        ctx.beginPath();
        ctx.lineWidth = "5";
        for (let i = 0; i < 5; i++) {
            // 横线
            ctx.moveTo(canvas.width * .05 - 2.5,
                canvas.height - canvas.width * 1.2 + canvas.width * .9 / 4 * i);
            ctx.lineTo(canvas.width * .05 + canvas.width * .9 + 2.5,
                canvas.height - canvas.width * 1.2 + canvas.width * .9 / 4 * i);
            // 竖线
            ctx.moveTo(canvas.width * .05 + canvas.width * .9 / 4 * i,
                canvas.height - canvas.width * 1.2 - 2.5);
            ctx.lineTo(canvas.width * .05 + canvas.width * .9 / 4 * i,
                canvas.height - canvas.width * 1.2 + canvas.width * .9 + 2.5);
        }

        ctx.stroke();
    }
}