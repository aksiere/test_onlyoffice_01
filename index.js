function main(floors) {
	let mw = ((floors - 1) * 2) * 2 + 1

	console.log(' '.repeat(mw/2) + 'W' + ' '.repeat(mw/2))
	for (let i = 0; i < floors; i++) {
		let w = i * 4 + 1
		let f = ' '.repeat((mw-w)/2) + '*'.repeat(w)
		console.log(f)
	}
}

main(5)
