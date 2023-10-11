import { FC } from 'react'
import { Home } from '@/components/Home'
import Page from '@/layouts/Page'
const HomePage: FC = () => {
  return (
    <Page title="Home">
      <Home />
    </Page>
  )
}

export default HomePage;