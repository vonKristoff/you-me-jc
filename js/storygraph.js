import { Icon } from './icons'
function randomFrom(choices) {
	return choices[Math.floor(Math.random()*choices.length)]
}
const jobTitles = ['Javascript', 'Web', 'Node', 'Fullstack', 'Cloud', 'Frontend', 'React | Vue']
export default {
	chatbot: [{
		id: "ROOT",		
		content: [`${Icon['hi']} Hi there..! I'm JC ${Icon['me']}`, `A [${randomFrom(jobTitles)} Developer]`, true, `Do you want to talk? ${Icon['sweat']}`],
		actions: ["contact", "?", "A_2"],
		triggers: [],
		timeout: { duration: 3000, next: "OPTIONS" }
	},{
		id: "OPTIONS",		
		content: [`${Icon['robot']} tbh, I will anyway..`, true, "'hello world'", "At least we're always left with the facts.."],
		actions: ['connect','skills','links','?'],
		triggers: ['clear'],
		timeout: { duration: 0, next: "" }
	},{
		id: "CONTACT",		
		content: ["Get in touch", true, "By Phone or Email?", "Or, click the compass to explore further"],
		actions: ['explore', 'contact--phone', 'contact--email'],
		triggers: ['clear'],
		timeout: { duration: 0, next: "" }
	},{
		id: "PHONE",
		content: [true, `call me: ${Icon['call']} 07773 800950`],
		actions: ['explore', 'contact--email', '?'],
		triggers: [],
		timeout: { duration: 0, next: "" }
	},{
		id: "EMAIL",
		content: [true, "be nice: mrjcnicolas@gmail.com"],
		actions: ['explore', 'contact--phone', '?'],
		triggers: [],
		timeout: { duration: 0, next: "" }
	},{
		id: "MENU",
		content: [true, "Skills Social "],
		actions: ['connect','links','skills'],
		triggers: [],
		timeout: { duration: 0, next: "" }
	},{
		id: "LINKS",
		content: [true, `Here you could checkout..`, `${randomFrom(['and follow me on Twitter','my online CV','my Github', `A Museum Made Digital ${Icon['cool']}`])}`, "just click on any blue tag.."],
		actions: ['connect','skills', '?'],
		triggers: ['links'],
		timeout: { duration: 0, next: "" }
	},{
		id: "SKILLS",
		content: [true, "Tools of the trade ^^"],
		actions: ['connect', 'links', '?'],
		triggers: ['skills'],
		timeout: { duration: 0, next: "" }
	},{
		id: "RANDOM",		
		content: [true, 'You come to a clearing in the forest...', ],
		actions: ['north', 'east', 'south', 'west'],
		triggers: ['clear'],
		timeout: { duration: 0, next: "" }
	},{
		id: "NORTH",		
		content: [true, 'The path leads through to white water rapids.', ],
		actions: ['explore', 'east', 'south', 'west'],
		triggers: [],
		timeout: { duration: 0, next: "" }
	},{
		id: "EAST",		
		content: [true, 'The trees become thicker and the light around you darkens.', ],
		actions: ['north', 'explore', 'south', 'west'],
		triggers: [],
		timeout: { duration: 0, next: "" }
	},{
		id: "SOUTH",		
		content: [true, 'You find yourself looking up at the brightly coloured fournier.', ],
		actions: ['north', 'east', 'explore', 'west'],
		triggers: [],
		timeout: { duration: 0, next: "" }
	},{
		id: "WEST",		
		content: [true, 'The remains of a recently used campfire makes you think of marshmallows.', ],
		actions: ['north', 'east', 'south', 'explore'],
		triggers: [],
		timeout: { duration: 0, next: "" }
	}],
	actions: [{
		id: "contact",
		label: `Hi ${Icon['ok']}`,
		target: "CONTACT"
	},{
		id: "connect",
		label: `${Icon['call']}`,
		target: "CONTACT"
	},{
		id: "A_2",
		label: `No ${Icon['ohgod']}`,
		target: "OPTIONS"
	},{
		id: "?",
		label: `${Icon['mystery']}`,
		target: "RANDOM"
	},{
		id: "contact--phone",
		label: `${Icon['phone']}`,
		target: "PHONE"
	},{
		id: "contact--email",
		label: `${Icon['email']}`,
		target: "EMAIL"
	},{
		id: "contact--social",
		label: `${Icon['social']}`,
		target: "SOCIAL"
	},{
		id: "explore",
		label: `${Icon['explore']}`,
		target: "MENU"
	},{
		id: "links",
		label: `${Icon['links']}`,
		target: "LINKS"
	},{
		id: "skills",
		label: `${Icon['skills']}`,
		target: "SKILLS"
	},{
		id: 'north',
		label: `N`,
		target: "NORTH"
	},{
		id: 'east',
		label: `E`,
		target: "EAST"
	},{
		id: 'south',
		label: `S`,
		target: "SOUTH"
	},{
		id: 'west',
		label: `W`,
		target: "WEST"
	}]
}