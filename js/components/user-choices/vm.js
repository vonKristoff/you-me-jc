import template from '../../templates/user-choices.html'
import classes from './computed-classes'
export default {
    name: "user-choices",
    template,
    props: ['model'],
    data() {
        return { mounted: false }
    },
    computed: {
        hasMounted() {
            return this.mounted ? "has-mounted" : ""
        }
    },
    mounted() {
        setTimeout(() => {
            this.mounted = true    
        }, 0)
    },
    methods: {
    	handle(target) {
    		this.$emit('user-action', target)
    	}
    }
}
