import {Post} from "./Post";
import "./style/styles.css"

const post = new Post('Webpack post title')

console.log('Post to  string', post.toString())
console.log('Title upperCase', post.upperCaseTitle())