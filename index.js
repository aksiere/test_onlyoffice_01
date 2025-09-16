const SPACE = ' '
const STAR = 'W'
const STICK = '*'
const BASE = 'T'

function main(floors) {
	if (floors <= 1) {
		console.log('Это бред')
		return
	}

	let mw = ((floors - 1) * 2) * 2 + 1

	console.log(SPACE.repeat(mw/2) + STAR + SPACE.repeat(mw/2))
	for (let i = 0; i < floors; i++) {
		let w = i * 4 + 1
		let f = SPACE.repeat((mw-w)/2) + STICK.repeat(w)
		console.log(f)
	}

	const bw = (floors < 4 ? 3 : 5)
	console.log((SPACE.repeat(mw/2-Math.floor(bw/2)) + (floors < 4 ? BASE.repeat(3) : BASE.repeat(5)) + (SPACE.repeat(mw/2-Math.floor(bw/2)))))
	console.log((SPACE.repeat(mw/2-Math.floor(bw/2))) + (floors < 4 ? BASE.repeat(3) : BASE.repeat(5)) + (SPACE.repeat(mw/2-Math.floor(bw/2))))
}

main(2)
