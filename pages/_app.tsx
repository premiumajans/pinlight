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
import {appWithTranslation} from "next-i18next";
import {useRouter} from "next/router";

function App({Component, pageProps}: AppProps) {
    const [loading, setLoading] = useState(false)
    const [visible, setVisible] = useState(false)
    const router = useRouter()

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

        <Header/>
        <StrictMode>
            <Component {...pageProps}/>
        </StrictMode>
        <Footer/>

        <BackToTop/>

        <SearchWraper/>
        {visible ? <MobileMenu/> : ''}
        {loading ? <div className="page-preloader">
            <div className="loader">
                <div></div>
                <div></div>
            </div>
        </div> : ''}
    </>
}


export default appWithTranslation(App);






