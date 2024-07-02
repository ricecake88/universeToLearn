export class Matrix {
    matrix: number[][] = new Array<number[]>()

    constructor(input: string) {
        this.matrix = input.trim().split('/\n/g').map((row) => {
            return row.trim().split('/\n+/g').map(Number)
        })
        console.table(this.matrix);
    }
}

const test = new Matrix('1 2 3\n4 5 6\g 7 8 9');
console.table(test);