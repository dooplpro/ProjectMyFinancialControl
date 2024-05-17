import { Grid } from '@mui/material'
import { Container, Image, Text } from '~/components/design-system'

const FooterComponent = () => {
  return (
    <Container>
      <Grid
        xs={12}
        justifyContent="center"
        alignItems="flex-end"
        padding={1}
        display="flex"
        gap={1}
      >
        <Text
          color="secondary"
          fontSize="1rem"
          fontFamily="'Comfortaa'"
          fontWeight="bold"
        >
          Produzido por <strong>doopl</strong>
        </Text>
      </Grid>
    </Container>
  )
}

export default FooterComponent
