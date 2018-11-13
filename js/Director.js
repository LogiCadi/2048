import { DataStore } from "./base/Datastore.js";
import { Block } from "./sprite/Block.js";
import { Blank } from "./sprite/Blank.js";

export class Director {
    constructor() {
        this.dataStore = DataStore.getInstance()
    }

    static getInstance() {
        if (!Director.instance) {
            Director.instance = new Director()
        }
        return Director.instance
    }

    /**新增数字块 */
    newBlock() {
        const blockMap = this.dataStore.get('block')

        let newSite
        do {
            // 随机1-16之间的数
            newSite = Math.floor(Math.random() * 16 + 1)
            // 位置已被占用 重新生成随机数
        } while (blockMap.get(newSite) && blockMap.get(newSite).num)

        // 添加到site
        blockMap.set(newSite, new Block(newSite))
    }

    /**平移所有数字快 */
    moveBlock(derect) {
        if (this.dataStore.isTouch) {
            // console.log(derect)
            this.dataStore.isTouch = false

            const blockList = this.dataStore.get('block')

            switch (derect) {
                case 1:
                    // →
                    for (let i = 16; i > 0; i--) {
                        if (i % 4 == 0 || !blockList.get(i) || !blockList.get(i).num) {
                            console.log(i)
                        } else {

                            if (i < 4) {
                                for (let j = 4; j > i; j--) {
                                    if (!blockList.get(j) || !blockList.get(j).num) {
                                        blockList.get(i).site = j
                                        blockList.set(j, blockList.get(i))
                                        blockList.set(i, new Blank(i))
                                        break
                                    }
                                }
                            } else if (i > 4 && i < 8) {
                                for (let j = 8; j > i; j--) {
                                    if (!blockList.get(j) || !blockList.get(j).num) {
                                        blockList.get(i).site = j
                                        blockList.set(j, blockList.get(i))
                                        blockList.set(i, new Blank(i))
                                        break

                                    }
                                }
                            } else if (i > 8 && i < 12) {
                                for (let j = 12; j > i; j--) {
                                    if (!blockList.get(j) || !blockList.get(j).num) {
                                        blockList.get(i).site = j
                                        blockList.set(j, blockList.get(i))
                                        blockList.set(i, new Blank(i))
                                        break

                                    }
                                }
                            } else if (i > 12 && i < 16) {
                                for (let j = 16; j > i; j--) {
                                    if (!blockList.get(j) || !blockList.get(j).num) {
                                        blockList.get(i).site = j
                                        blockList.set(j, blockList.get(i))
                                        blockList.set(i, new Blank(i))
                                        break

                                    }
                                }
                            }

                        }
                    }

                    // if (block_3 && (!block_4 || !block_4.num)) {
                    //     // 3移动到4
                    //     block_3.site = 4
                    //     blockList.set(4, block_3)
                    //     blockList.set(3, new Blank(3))
                    // }
                    // if (block_2 && (!block_3 || !block_3.num)) {
                    //     // 2移动到3
                    //     block_2.site = 3
                    //     blockList.set(3, block_2)
                    //     blockList.set(2, new Blank(3))
                    // }
                    // if (block_3 && !block_4) {
                    //     // 3移动到4
                    //     block_3.site = 4
                    //     blockList.set(4, block_3)
                    //     blockList.set(3, new Blank(3))
                    // }




                    this.run()
                    break;
                case 2:

                    break;
                case 3:

                    break;
                case 4:

                    break;

                default:
                    break;
            }




        }
    }

    run() {
        // 对整个blockList进行渲染
        const blockList = this.dataStore.get('block')

        for (const value of blockList.values()) {
            value && value.draw()
        }
    }
}