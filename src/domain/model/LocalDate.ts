export class LocalDate {
    day: number
    month: number
    year: number

    constructor(day: number, month: number, year: number) {
        this.day = day
        this.month = month
        this.year = year
    }

    format() {
        return `${this.day}/${this.month}/${this.year}`
    }
}