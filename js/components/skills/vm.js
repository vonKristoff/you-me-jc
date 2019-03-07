import template from '../../templates/skills.html'
import classes from './computed-classes'
import { skillsCollection } from '../../config'
export default {
    name: "skills",
    template,
    props: [],
    data() {
        return {
        	collection: skillsCollection
        }
    },
    computed: {
        ...classes
    }
}
