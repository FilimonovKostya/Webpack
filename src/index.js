import {Post} from "@models/Post";
import "./style/styles.css"
import json from './assets/json'
import Logo from '@/assets/webpack-logo'
import xml from './assets/data'
import csv from './assets/data'

const post = new Post('Webpack post title', Logo)

console.log('Post to  string', post.toString())
console.log('Title upperCase', post.upperCaseTitle())

console.log('JSON --->', json)

console.log('xml ', xml)

console.log('CSV', csv)