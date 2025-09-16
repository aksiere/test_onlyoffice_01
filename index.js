function main(floors) {
	let maxWidthWithoutGifts = ((floors - 1) * 2) * 2 + 1

	for (let i = 0; i < floors; i++) {
		let w = i * 4 + 1
		let f = ' '.repeat((maxWidthWithoutGifts-w)/2) + '*'.repeat(w)
		console.log(f)
	}
}

main(5)
