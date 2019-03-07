import Chatbot from './components/chatbot/vm'
import Icons from './icons'
import Skills from './components/skills/vm'
import Links from './components/links/vm'
const FeaturesLookup = {
    skills: Skills,
    links: Links
}
export default {
	el: "#root",
	components: { Chatbot, Skills },
	data: {
		preloader: Icons,
		feature: false
	},
	methods: {
		handleFeature(features) {
			let f = features[0]
			this.feature = (FeaturesLookup[f]) ? FeaturesLookup[f] : false
		}
	}
}