import { mkdirSync, writeFileSync, existsSync, readFileSync } from 'node:fs'

export function readyFileToString(location: string): string {
  return readFileSync(location).toString()
}
