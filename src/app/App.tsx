import { Providers } from '../providers'
import { MainPage } from '../pages/MainPage'
import { Header } from '../components/header'

export const App = (): JSX.Element => {
  return (
    <Providers>
      <Header />
      <MainPage />
    </Providers>
  )
}
