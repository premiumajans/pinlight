import '@/styles/globals.scss'
import type {AppProps} from 'next/app'
import MobileMenu from "@/Components/MobileMenu/MobileMenu";
import SearchWraper from "@/Components/SearchWraper/SearchWraper";
import BackToTop from "@/Components/BackToTop/BackToTop";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import {StrictMode, useEffect, useState} from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';
import {useRouter} from "next/router";
import {appWithTranslation} from "next-i18next";

function App({Component, pageProps}: AppProps) {
    const [visible, setVisible] = useState(false)
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(false)
    useEffect(() => {
        AOS.init();
        if (typeof window !== undefined) {
            if (window.screen.width < 992) {
                setVisible(true)
            }
        }
    }, [])


    useEffect(() => {
        const handleRouteChange = () => {
            setLoading(true)
        };

        const handleRouteComplete = () => {
            setLoading(false)
        };

        router.events.on('routeChangeStart', handleRouteChange)
        router.events.on('routeChangeComplete', handleRouteComplete)// If the component is unmounted, unsubscribe

        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [router])


    return <>

        <Header modal={modal} setModal={setModal}/>
        <StrictMode>
            <Component {...pageProps}/>
        </StrictMode>
        <Footer/>

        <BackToTop/>

        <SearchWraper/>
        {loading ? <div className="page-preloader">
            <div className="loader">
                <div></div>
                <div></div>
            </div>
        </div> : visible ? <MobileMenu modal={modal} setModal={setModal}/> : ''}

    </>
}


export default appWithTranslation(App);






