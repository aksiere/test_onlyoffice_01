const SPACE = ' '
const STAR = 'W'
const STICK = '*'
const BASE = 'T'

function main(floors) {
	let mw = ((floors - 1) * 2) * 2 + 1

	console.log(SPACE.repeat(mw/2) + STAR + SPACE.repeat(mw/2))
	for (let i = 0; i < floors; i++) {
		let w = i * 4 + 1
		let f = SPACE.repeat((mw-w)/2) + STICK.repeat(w)
		console.log(f)
	}
	console.log(SPACE.repeat(mw/2-2) + BASE.repeat(5) + SPACE.repeat(mw/2-2))
	console.log(SPACE.repeat(mw/2-2) + BASE.repeat(5) + SPACE.repeat(mw/2-2))
}

main(2)
