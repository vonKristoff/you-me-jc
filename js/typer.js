const RANGE = 100 // speed
const MAX = 1000 // timeout
export default {
	current: [],
	complete: null,
	store: [],
	state: {
		index: 0,
		count: 0,
		running: false,
		start: 0,
		now: 0,
		last: 0,
		next: 300,
		total: 0
	},
	update() {		
		this.state.now += Date.now() - this.state.last
		this.state.count = Math.floor((this.state.now - this.state.start))
		this.state.last = this.state.now
		
		if(this.current.length != this.store.length) this.type(this.canType())
		else this.stop()

		if(this.state.running) requestAnimationFrame(() => this.update())
	},
	canType() {
		return this.state.total >= MAX || this.state.count > this.state.next
	},
	getCount() {		
		return this.state.count
	},
	getTyped() {
		return this.current.join("")
	},
	type(condition) {
		if(condition) {
			this.state.total = this.state.total < MAX ? this.state.total + this.state.next : this.state.total
			if(this.state.total < MAX) {
				this.state.start = Date.now()
				this.state.next = Math.random() * RANGE
			}
			this.current = this.store.slice(0, this.state.index)
			this.state.index++			
		}
	},
	start(input = "Some Random String", complete) {
		if(typeof input != "boolean") {
			this.reset()
			this.store = input.split("")
			this.state.running = true
			this.state.start = Date.now()
			requestAnimationFrame(() => this.update())
			this.complete = complete
		} else {
			complete(false)
		}
	},
	stop() {
		this.state.running = false
		let response = this.current.join("") 
		this.reset()
		this.complete(response)
	},
	onComplete(cb, trigger = false) {
		if(trigger) cb()
		else cb(this.current)
	},
	reset() {
		this.current = []
		this.store = []
		this.state.index = 0
		this.state.count = 0
		this.state.now = 0
		this.state.last = 0
		this.state.next = 250
		this.state.start = 0
		this.state.total = 0
	}
}