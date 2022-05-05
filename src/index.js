import {Post} from "./Post";
import "./style/styles.css"
import json from './assets/json'
import Logo from './assets/webpack-logo.png'
import xml from './assets/data.xml'

const post = new Post('Webpack post title', Logo)

console.log('Post to  string', post.toString())
console.log('Title upperCase', post.upperCaseTitle())

console.log('JSON --->', json)

console.log('xml ', xml)