import { mkdirSync, writeFileSync, existsSync, readFileSync } from 'node:fs'
import path from 'path'
import { readyFileToString } from './helpers'

function component(names: string[]) {
  if (names.length === 0) {
    console.log('Component path/name is required')
    return
  }

  const componentFileReader = readyFileToString(
    path.resolve(__dirname, './templates/component/component.tamplate'),
  )
  const indexFileReader = readyFileToString(
    path.resolve(__dirname, './templates/component/index.template'),
  )
  const specFileReader = readyFileToString(
    path.resolve(__dirname, './templates/component/component.spec.template'),
  )

  names.forEach((name) => {
    const splitDir = name.split('/')
    const componentName = splitDir[splitDir.length - 1]!
    const pathName = componentName.replace(/(Layout|Component|Page)/g, '')
    const pathComponent = path.resolve(
      __dirname,
      '../src',
      splitDir.filter((dir) => dir !== componentName).join('/'),
      `${pathName}`,
    )

    if (existsSync(pathComponent)) {
      console.log(
        `The component '${name}' already exists. Therefore it will not be overwritten`,
      )
      return
    }

    const componentTemplate = componentFileReader.replace(/{{name}}/g, componentName)
    const indexTemplate = indexFileReader.replace(/{{fileName}}/g, componentName)
    const specTemplate = specFileReader.replace(/{{componentName}}/g, componentName)

    const finalPathComponent = `${pathComponent}/${componentName}.tsx`
    const finalPathIndex = `${pathComponent}/index.ts`
    const finalPathSpec = `${pathComponent}/${componentName}.spec.tsx`

    mkdirSync(pathComponent, { recursive: true })
    writeFileSync(finalPathComponent, componentTemplate)
    writeFileSync(finalPathIndex, indexTemplate)
    writeFileSync(finalPathSpec, specTemplate)

    if (/(Component|Layout)/g.test(componentName)) {
      writeFileSync(`${pathComponent}/${pathName}Styles.module.sass`, '')
    }
  })
}

export default {
  component,
}
