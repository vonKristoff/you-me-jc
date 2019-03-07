import Vue from 'vue/dist/vue'
import app from './app'

new Vue(...app)

console.log("Hi 👋 Nice to see you here as well! 🤖")
console.dir({
	me: {
		name: "JCN",
		type: "Developer",
		version: "incremental"
	},
	context: {
		framework: "Vue",
		notes: "A little something 'zeitgeisty' for a website, rather than another portfolio"
	}
})