export const Icon = {
	hi: "👋",
	me: "🥐",
	sweat: "😅",
	robot: "🤖",
	explore: "🧭",
	links: "🔗",
	ok: "👍",
	ohgod: "🤦‍♀️",
	mystery: "🔮",
	phone: "☎️",
	email: "📩",
	skills: "⚡",
	call: "📞",
	social: "🙂",
	cool: "😎"
}
const store = []
Object.keys(Icon).forEach(icon => store.push(Icon[icon]))
export default store

