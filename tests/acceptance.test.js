import { test, expect } from 'vitest'
import { main as generateTree } from '../index.js'
import { existsSync } from 'fs'

test('Файл должен существовать', async () => {
	const filename = 't0.txt'
	const file = await generateTree(5, filename)
	expect(existsSync(filename)).toBe(true)
})

test('Файл не должен быть пустым для корректного количества этажей (>1 && <51)', async () => {
	const file1 = await generateTree(2, 't1.txt')
	const file2 = await generateTree(50, 't1.txt')
	expect(file1.split('\n').filter(row => row !== '').length).toBeGreaterThan(0)
	expect(file2.split('\n').filter(row => row !== '').length).toBeGreaterThan(0)
})

test('Для 5 "этажей" ёлка должна выглядеть правильно', async () => {
	const file = await generateTree(5, 't2.txt')
	expect(file).toBe(`         W         
         *         
      @*****       
     *********@    
  @*************   
 *****************@
       TTTTT       
       TTTTT       
`)
})

test('Для 2 "этажей" ствол должен быть шириной в 1 "блок"', async () => {
	const file = await generateTree(2, 't3.txt')
	expect(file.split('\n').filter(row => row !== '').at(-1).trim().length).toBe(1)
})

test('Для 3 "этажей" ствол должен быть шириной в 3 "блока"', async () => {
	const file = await generateTree(3, 't4.txt')
	expect(file.split('\n').filter(row => row !== '').at(-1).trim().length).toBe(3)
})

test('Для <2 "этажей" должна выводиться ошибка', async () => {
	await expect(() => generateTree(-1, 't5.txt')).rejects.toThrowError('NOT_MANY_FLOORS')
	await expect(() => generateTree(0, 't5.txt')).rejects.toThrowError('NOT_MANY_FLOORS')
	await expect(() => generateTree(1, 't5.txt')).rejects.toThrowError('NOT_MANY_FLOORS')
})

test('Для >51 "этажа" должна выводиться ошибка', async () => {
	await expect(() => generateTree(51, 't6.txt')).rejects.toThrowError('TOO_MANY_FLOORS')
	await expect(() => generateTree(100, 't6.txt')).rejects.toThrowError('TOO_MANY_FLOORS')
	await expect(() => generateTree(1000000000000, 't6.txt')).rejects.toThrowError('TOO_MANY_FLOORS')
})

