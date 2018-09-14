export class FireLevel {
    levelList: Array<any> = []
    constructor() {
        for (let level = 1; level < 101; level++) {
            this.levelList.push({ level: level, next: 50 * level * (level + 1) })
        }
    }
}