import { Outlet } from 'react-router-dom'
import { Footer } from '~/components/common'
import { Flex } from '~/components/design-system'

const AuthLayout = () => {
  return (
    <Flex
      flexDirection="column"
      width="100%"
      height="100dvh"
      justifyContent="space-between"
    >
      <Flex flex={1}>
        <Outlet />
      </Flex>
      <Footer />
    </Flex>
  )
}

export default AuthLayout
