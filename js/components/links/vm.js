import template from '../../templates/links.html'
import classes from './computed-classes'
import { linksCollection } from '../../config'

export default {
    name: "links",
    template,
    props: [],
    data() {
        return {
        	collection: linksCollection
        }
    },
    computed: {
        ...classes
    }
}
