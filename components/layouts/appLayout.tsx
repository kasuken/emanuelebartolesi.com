import { Fragment } from 'react'
import { Box } from '@chakra-ui/react'
import TopNav from '../shared/top-nav'
import Footer from '../shared/footer'

function AppLayout(props) {
  return (
    <Fragment>
      <TopNav />
      <Box
        textAlign="center"
        fontSize="xl"
        w={['90%', '85%', '80%']}
        maxW={1100}
        mx="auto"
      >
        <Box pt={'7rem'} pb={10}>
          {props.children}
        </Box>
      </Box>
      <Footer />
    </Fragment>
  )
}

export default AppLayout