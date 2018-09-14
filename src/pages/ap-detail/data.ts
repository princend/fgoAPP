export class AP {
    masterApList: Array<any> = [];
    constructor() {
        let a = 125;
        let b=135
        for (let i = 1; i < 10; i++) {
            this.masterApList.push({ level: i, ap: 19 + i })
        }
        for (let i = 10; i < 15; i++) {
            this.masterApList.push({ level: i, ap: 21 + i })
        }
        for (let i = 15; i < 20; i++) {
            this.masterApList.push({ level: i, ap: 23 + i })
        }
        for (let i = 20; i < 101; i++) {
            this.masterApList.push({ level: i, ap: 25 + i })
        }
        for (let i = 101; i < 121; i++) {
            i % 2 != 0 ? a += 1 : false;
            this.masterApList.push({ level: i, ap: a  })
        }
        for (let i = 121; i < 141; i++) {
            i % 4 == 1 ? b += 1 : false;
            this.masterApList.push({ level: i, ap: b  })
        }

        this.masterApList.push(
            {level:141,ap:140},
            {level:142,ap:140},
            {level:143,ap:141},
            {level:144,ap:141},
            {level:145,ap:141},
            {level:146,ap:141},
            {level:147,ap:142},
            {level:148,ap:142},
            {level:149,ap:142},
            {level:150,ap:142},
        )

    }
}