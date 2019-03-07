import TypeWriter from '../type-writer/vm'
import UserChoices from '../user-choices/vm'
import template from '../../templates/chatbot.html'
import classes from './computed-classes'
import graph from '../../storygraph'

export default {
    name: "chatbot",
    template,
    components: { TypeWriter, UserChoices },
    props: [],
    data() {
        return {
        	actions: [],
        	context: "ROOT"
        }
    },
    computed: {
        ...classes,
        getCurrentContext() {
        	return graph.chatbot.filter(item => item.id === this.context).pop()
        },
        getCurrentActions() {
        	return this.actions.reduce((accum, id) => {
        		let action = graph.actions.filter(item => item.id === id).pop()
        		accum.push(action)
        		return accum
        	}, [])
        }
    },
    methods: {
    	addChoices(update) {
    		this.actions = update.actions
    	},
    	updateContext(context) {
    		this.context = context
    		this.$nextTick(() => this.handleTriggers())
    	},
        choiceComplete() {
            const to = this.getCurrentContext.timeout
            const n = to.next.toString()
            if(to.next.length > 0) setTimeout(() => {
                var nxt = this.getCurrentContext.timeout.next.toString()
                if(n === nxt) this.updateContext(to.next) 
            }, to.duration)
        },
        handleTriggers() {
            let features = this.getCurrentContext.triggers
            if(features.length > 0) this.$emit('trigger-feature', features)
        }
    }
}
