import { AppLayout } from 'components/AppLayout'
import styles from 'components/Footer/styles'
import { Logo } from 'components/Logo'

export const Footer = () => {
  return (
    <>
      <footer>
        <AppLayout>
          <nav>
            <ul>
              <Logo />
              <li>Preguntas frecuentes</li>
              <li>Contáctanos</li>
              <li>Información</li>
              <li>
                <span>Docred © 2019. Todos los derechos reservados </span>
              </li>
            </ul>
          </nav>
        </AppLayout>
      </footer>
      <style jsx>{styles}</style>
    </>
  )
}
