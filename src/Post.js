export class Post {
    constructor(title) {
        this.title = title
        this.date = new Date()
    }

    toString() {
        return JSON.stringify({
            title: this.title,
            date: this.date.toJSON()
        })
    }

    upperCaseTitle() {
        console.log('test')
        return this.title.toUpperCase()
    }
}