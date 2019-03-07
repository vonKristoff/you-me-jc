import template from '../../templates/user-choices.html'
import classes from './computed-classes'
export default {
    name: "user-choices",
    template,
    props: ['model'],
    data() {
        return {}
    },
    computed: {
        ...classes
    },
    methods: {
    	handle(target) {
    		this.$emit('user-action', target)
    	}
    }
}
