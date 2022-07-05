import Footer from './components/Footer'
import Header from './components/Header'

const Main = ({ children }) => {
    return (
        <div className=''>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Main
