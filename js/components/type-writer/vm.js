import template from '../../templates/type-writer.html'
import typer from '../../typer'
import classes from './computed-classes'
export default {
    name: "type-writer",
    template,
    props: ['model'],
    data() {
        return { 
        	paragraphs: [],
        	typer
        }
    },
    computed: {
        ...classes,
        count() {
        	return this.typer.getCount()
        },
        typed() {
        	return this.typer.getTyped()
        },
        isTyping() {
            return this.typed.length > 0 ? "is-typing" : ""
        }
    },
    mounted() {
    	this.startTalking()
    },
    methods: {
        uid(num) {
            return `${num}--${Date.now()}`
        },
    	startTalking() {
    		this.model.content.reduce(this.inSequence, Promise.resolve()).then(() => this.$emit('section-complete'))
    	},
    	inSequence(chain, item) {
    		return chain.then(() => {
    			return new Promise(resolve => {
    				this.typer.start(item, p => resolve(this.triggerNext(p)))
    			})    			
    		})
    	},
	    triggerNext(addChat) {
	    	if(addChat) {
                if(this.paragraphs.length > 3) this.paragraphs.splice(0, 1)
                this.paragraphs.push({ text: addChat, stamp: `key-${Date.now()}` })
	    	} else {
                this.$emit('update-choices', { actions: this.model.actions })
            }
	    }
	},
	watch: {
		"model.id": function(curr, prev) {
            if(this.model != undefined && curr !== prev) this.startTalking()			
		}
	}
}
