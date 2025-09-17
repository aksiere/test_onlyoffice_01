import { test, expect } from 'vitest'
import { main as generateTree } from '../index.js'

test('Для 5 "этажей" должно быть 8 строк в файле', async () => {
	const file = await generateTree(5, 't1.txt')
	expect(file.split('\n').filter(row => row !== '').length).toBe(8)
})

test('Для 2 "этажей" ствол должен быть шириной в 1 "блок"', async () => {
	const file = await generateTree(2, 't2.txt')
	expect(file.split('\n').filter(row => row !== '').at(-1).trim().length).toBe(1)
})
