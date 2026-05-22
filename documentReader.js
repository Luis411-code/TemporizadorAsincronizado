'use strict'
import { readFile } from 'fs/promises'
import readline from 'readline'

async function DocumentReader(filePath) {
  try {
    const contenido = await readFile(filePath, 'utf-8')
    return contenido
  } catch (error) {
    console.error('Error al leer el archivo:', error)
    throw error
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Ingrese la ruta del archivo a leer: ', async (filePath) => {
  try {
    const contenido = await DocumentReader(filePath)
    console.log('Contenido del archivo:\n', contenido)
  } catch (error) {
    console.error('No se pudo leer el archivo:', error)
  } finally {
    rl.close()
  }
})