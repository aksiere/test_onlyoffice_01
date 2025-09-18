import { test, expect } from 'vitest'
import { main as generateTree } from '../index.js'

test('Для 5 "этажей" ёлка должна выглядеть правильно', async () => {
	const file = await generateTree(5, 't1.txt')
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
	const file = await generateTree(2, 't2.txt')
	expect(file.split('\n').filter(row => row !== '').at(-1).trim().length).toBe(1)
})

test('Для 3 "этажей" ствол должен быть шириной в 3 "блока"', async () => {
	const file = await generateTree(3, 't3.txt')
	expect(file.split('\n').filter(row => row !== '').at(-1).trim().length).toBe(3)
})

test('Для 1 "этажа" должна выводиться ошибка', async () => {
	await expect(() => generateTree(1, 't4.txt')).rejects.toThrowError('Это уже не ёлка мне кажется.')
	// expect(async () => await generateTree(1, 't4.txt')).toThrowError()
	// expect(file).toBe(`Это уже не ёлка мне кажется.`)
})
