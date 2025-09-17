import { appendFileSync, writeFileSync } from 'fs'

const FILE = 'tree.txt'

const SPACE = ' '
const STAR = 'W'
const GIFT = '@'
const STICK = '*'
const BASE = 'T'

function addFloor(str = '') {
	appendFileSync(FILE, str + '\n')
}

function main(floors) {
	writeFileSync(FILE, '')

	if (floors <= 1) throw new Error('Это уже не ёлка мне кажется.')
	if (floors > 50) throw new Error('Не надо...')

	const mw = (floors - 1) * 2 * 2 + 1 + 2
	const bw = floors < 3 ? 1 : floors < 4 ? 3 : 5

	// console.log(SPACE.repeat(mw/2) + STAR + SPACE.repeat(mw/2))
	addFloor(SPACE.repeat(mw/2) + STAR + SPACE.repeat(mw/2))

	for (let i = 0; i < floors; i++) {
		let w = i * 4 + 1
		let f = i > 0 ? i % 2 === 1 ? SPACE.repeat((mw-w)/2-1) + GIFT + STICK.repeat(w) + SPACE.repeat((mw-w)/2) : SPACE.repeat((mw-w)/2) + STICK.repeat(w) + GIFT + SPACE.repeat((mw-w)/2-1) : SPACE.repeat((mw-w)/2) + STICK.repeat(w) + SPACE.repeat((mw-w)/2)

		// console.log(f)
		addFloor(f)
	}
	
	// console.log((SPACE.repeat(mw/2-Math.floor(bw/2)) + (BASE.repeat(bw)) + (SPACE.repeat(mw/2-Math.floor(bw/2)))))
	// console.log((SPACE.repeat(mw/2-Math.floor(bw/2))) + (BASE.repeat(bw)) + (SPACE.repeat(mw/2-Math.floor(bw/2))))
	addFloor((SPACE.repeat(mw/2-Math.floor(bw/2))) + (BASE.repeat(bw)) + (SPACE.repeat(mw/2-Math.floor(bw/2))))
	addFloor((SPACE.repeat(mw/2-Math.floor(bw/2))) + (BASE.repeat(bw)) + (SPACE.repeat(mw/2-Math.floor(bw/2))))
}

main(5)
