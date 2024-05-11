import Make from './make'

const filterArgs = process.argv.slice(2)
const [command, ...executables] = filterArgs

if (command.includes('make:')) {
  const makeCommand = command.replace('make:', '')

  switch (makeCommand) {
    case 'component':
    case 'components':
    case 'layout':
    case 'page':
      Make.component(executables)
      break

    default:
      console.log('Command not found')
  }
}
