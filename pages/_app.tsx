import 'styles/globals.scss'

import type { AppProps } from 'next/app'

import { ReactNotifications } from 'react-notifications-component'

const MyApp = ({ Component, pageProps }: AppProps) => (
    <>
        <ReactNotifications />
        <title>Twitter Impact Program</title>
        <Component {...pageProps} />
    </>
)

export default MyApp
