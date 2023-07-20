import header from './Header.module.scss'
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import store from "../../Store/store";
import {observer} from "mobx-react-lite";
import CustomLanguageDropdown from "../CustomLanguageDropdown/CustomLanguageDropdown";
import {useTranslation} from "next-i18next";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

const Header = ({modal, setModal}) => {
    const router = useRouter()
    const {t, i18n} = useTranslation('common')
    const path = usePathname()
    const {changeSearch, changeMenu, changeSettings, settings} = store
    const [categories, setCategories] = useState([])

    useEffect(() => {
        changeSettings()
        fetch(process.env['NEXT_PUBLIC_MAIN_PATH'] + '/categories')
            .then(res => res.json())
            .then(res => {
                setCategories(res.categories)
            })
    }, [])


    useEffect(() => {
        const handleRouteChange = () => {
            setModal(false)
        };


        router.events.on('routeChangeStart', handleRouteChange)

        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [router])


    return <>
        {modal ? <div
            className={`dialog-widget dialog-lightbox-widget dialog-type-buttons dialog-type-lightbox elementor-popup-modal ${modal ? 'animated' : ''}`}
            id="elementor-popup-modal-1320" aria-modal="true" role="document" tabIndex={0}>
            <div style={{
                color: 'white',
                zIndex: 10000000000,
                position: 'absolute',
                right: 30,
                top: 30,
                fontSize: 20,
                cursor: 'pointer'
            }} onClick={() => setModal(false)} className="exit">
                X
            </div>
            <div className="dialog-widget-content dialog-lightbox-widget-content animated">
                <div className="dialog-header dialog-lightbox-header"></div>
                <div className="dialog-message dialog-lightbox-message">
                    <div data-elementor-type="popup" data-elementor-id="1320"
                         className="elementor elementor-1320 elementor-location-popup"
                         data-elementor-settings="{&quot;entrance_animation&quot;:&quot;fadeInDown&quot;,&quot;exit_animation&quot;:&quot;fadeInDown&quot;,&quot;open_selector&quot;:&quot;a[href=\&quot;#product-popup\&quot;]&quot;,&quot;entrance_animation_duration&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1.2,&quot;sizes&quot;:[]},&quot;a11y_navigation&quot;:&quot;yes&quot;,&quot;triggers&quot;:[],&quot;timing&quot;:[]}"
                         style={{display: "block"}}>
                        <section
                            className="elementor-section elementor-top-section elementor-element elementor-element-9e92625 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="9e92625" data-element_type="section"
                            data-settings="{&quot;jet_parallax_layout_list&quot;:[]}">
                            <div className="elementor-container elementor-column-gap-default">
                                <div
                                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b0fc655"
                                    data-id="b0fc655" data-element_type="column">
                                    <div className="elementor-widget-wrap elementor-element-populated">
                                        <section
                                            className="elementor-section elementor-inner-section elementor-element elementor-element-02ed3a4 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                            data-id="02ed3a4" data-element_type="section"
                                            data-settings="{&quot;jet_parallax_layout_list&quot;:[]}">
                                            <div className="elementor-container elementor-column-gap-default">
                                                <div
                                                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-a953b16"
                                                    data-id="a953b16" data-element_type="column">
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                        <div
                                                            className="elementor-element elementor-element-88c33ee elementor-widget elementor-widget-heading"
                                                            data-id="88c33ee" data-element_type="widget"
                                                            data-widget_type="heading.default">
                                                            <div className="elementor-widget-container">
                                                                <h2 className="elementor-heading-title elementor-size-default">{t('categories')}</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-a268bca"
                                                    data-id="a268bca" data-element_type="column">
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                        <div
                                                            className="elementor-element elementor-element-8bb1db2 elementor-widget elementor-widget-jet-button"
                                                            data-id="8bb1db2" data-element_type="widget"
                                                            data-widget_type="jet-button.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="elementor-jet-button jet-elements">
                                                                    <div className="jet-button__container">
                                                                        <a className="jet-button__instance jet-button__instance--icon-right hover-effect-0"
                                                                           href="/products">
                                                                            <div
                                                                                className="jet-button__plane jet-button__plane-normal"></div>
                                                                            <div
                                                                                className="jet-button__plane jet-button__plane-hover"></div>
                                                                            <div
                                                                                className="jet-button__state jet-button__state-normal">
                                                                                <span
                                                                                    className="jet-button__icon jet-elements-icon"><svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width="7.061" height="12.703"
                                                                                    viewBox="0 0 7.061 12.703"><g
                                                                                    id="Arrow_right"
                                                                                    data-name="Arrow right"
                                                                                    transform="translate(30.354 -4.648)"><path
                                                                                    id="Path_11" data-name="Path 11"
                                                                                    d="M410.133,2498.74h6"
                                                                                    transform="translate(-440.133 -2487.74)"
                                                                                    fill="none" stroke="#fff"
                                                                                    stroke-width="1" opacity="0"></path><path
                                                                                    id="Path_14" data-name="Path 14"
                                                                                    d="M475.3,2482.269l6,6-6,6"
                                                                                    transform="translate(-505.302 -2477.267)"
                                                                                    fill="none" stroke="#fff"
                                                                                    stroke-width="1"></path></g></svg></span><span
                                                                                className="jet-button__label">{t('all-products')}</span>
                                                                            </div>
                                                                            <div
                                                                                className="jet-button__state jet-button__state-hover">
                                                                                <span
                                                                                    className="jet-button__icon jet-elements-icon"><svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width="26.707" height="12.703"
                                                                                    viewBox="0 0 26.707 12.703"><g
                                                                                    id="Arrow_right"
                                                                                    data-name="Arrow right"
                                                                                    transform="translate(30 -4.648)"><path
                                                                                    id="Path_11" data-name="Path 11"
                                                                                    d="M410.133,2498.74h26"
                                                                                    transform="translate(-440.133 -2487.74)"
                                                                                    fill="none" stroke="#fff"
                                                                                    stroke-width="1"></path><path
                                                                                    id="Path_14" data-name="Path 14"
                                                                                    d="M475.3,2482.269l6,6-6,6"
                                                                                    transform="translate(-485.302 -2477.267)"
                                                                                    fill="none" stroke="#fff"
                                                                                    stroke-width="1"></path></g></svg></span><span
                                                                                className="jet-button__label">{t('all-products')}</span>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        <div
                                            className="elementor-element elementor-element-a9a5ba5 elementor-widget elementor-widget-jet-listing-grid"
                                            data-id="a9a5ba5" data-element_type="widget"
                                            data-settings="{&quot;columns&quot;:&quot;4&quot;,&quot;columns_laptop&quot;:&quot;4&quot;,&quot;columns_tablet_extra&quot;:&quot;4&quot;,&quot;columns_tablet&quot;:&quot;3&quot;,&quot;columns_mobile_extra&quot;:&quot;3&quot;,&quot;columns_mobile&quot;:&quot;1&quot;}"
                                            data-widget_type="jet-listing-grid.default">
                                            <div className="elementor-widget-container">
                                                <div className="jet-listing-grid jet-listing">
                                                    <div
                                                        data-nav="{&quot;enabled&quot;:false,&quot;type&quot;:null,&quot;more_el&quot;:null,&quot;query&quot;:[],&quot;widget_settings&quot;:{&quot;lisitng_id&quot;:1323,&quot;posts_num&quot;:7,&quot;columns&quot;:4,&quot;columns_tablet&quot;:3,&quot;columns_mobile&quot;:1,&quot;is_archive_template&quot;:&quot;&quot;,&quot;post_status&quot;:[&quot;publish&quot;],&quot;use_random_posts_num&quot;:&quot;&quot;,&quot;max_posts_num&quot;:9,&quot;not_found_message&quot;:&quot;No data was found&quot;,&quot;is_masonry&quot;:false,&quot;equal_columns_height&quot;:&quot;&quot;,&quot;use_load_more&quot;:&quot;&quot;,&quot;load_more_id&quot;:&quot;&quot;,&quot;load_more_type&quot;:&quot;click&quot;,&quot;load_more_offset&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:0,&quot;sizes&quot;:[]},&quot;use_custom_post_types&quot;:&quot;&quot;,&quot;custom_post_types&quot;:[],&quot;hide_widget_if&quot;:&quot;&quot;,&quot;carousel_enabled&quot;:&quot;&quot;,&quot;slides_to_scroll&quot;:&quot;1&quot;,&quot;arrows&quot;:&quot;true&quot;,&quot;arrow_icon&quot;:&quot;fa fa-angle-left&quot;,&quot;dots&quot;:&quot;&quot;,&quot;autoplay&quot;:&quot;true&quot;,&quot;autoplay_speed&quot;:5000,&quot;infinite&quot;:&quot;true&quot;,&quot;center_mode&quot;:&quot;&quot;,&quot;effect&quot;:&quot;slide&quot;,&quot;speed&quot;:500,&quot;inject_alternative_items&quot;:&quot;&quot;,&quot;injection_items&quot;:[],&quot;scroll_slider_enabled&quot;:&quot;&quot;,&quot;scroll_slider_on&quot;:[&quot;desktop&quot;,&quot;tablet&quot;,&quot;mobile&quot;],&quot;custom_query&quot;:false,&quot;custom_query_id&quot;:&quot;7&quot;,&quot;_element_id&quot;:&quot;&quot;}}"
                                                        data-page="1" data-pages="1" data-listing-source="terms"
                                                        data-listing-id="1323" data-query-id="">
                                                        <ol style={{display: 'flex', flexWrap: 'wrap'}}>
                                                            {categories.map(item => {
                                                                return <li key={item.id} className={' col-lg-6 col-12'}>
                                                                    <h2 className="elementor-heading-title elementor-size-default">
                                                                        <Link
                                                                            style={{
                                                                                whiteSpace: "normal",
                                                                                width: "100%"
                                                                            }}
                                                                            href={`/category-products/${item.slug}`}>{item?.translations.find(item => item.locale === i18n.language)?.name}</Link>
                                                                    </h2>
                                                                </li>
                                                            })}
                                                        </ol>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="dialog-buttons-wrapper dialog-lightbox-buttons-wrapper"></div>
                <a role="button" tabIndex={0} aria-label="Close" href="#"
                   className="dialog-close-button dialog-lightbox-close-button"><i className="eicon-close"></i></a>
            </div>
        </div> : ''}

        <header id="site-header" className={`site-header header-v2 ${header.header}`}>
            <div id="header-topbar" className="topbar-v1 hidden-sm hidden-xs">
                <div className="topbar-inner">
                    <div className="section-padding">
                        <div className="section-container large p-l-r">
                            <div className="row">
                                <div className="col-md-12 topbar-right">
                                    <ul id="topbar-menu" className="menu">
                                        <li className="menu-item"><a
                                            href={settings.find(item => item.name === 'facebook')?.link}><i
                                            className="fa fa-facebook"></i></a>
                                        </li>
                                        <li className="menu-item"><a
                                            href={settings.find(item => item.name === 'linkedin')?.link}><i
                                            className="fa fa-linkedin"></i></a></li>
                                        <li className="menu-item"><a
                                            href={settings.find(item => item.name === 'instagram')?.link}><i
                                            className="fa fa-instagram"></i></a></li>
                                        <li className="menu-item"><a
                                            href={settings.find(item => item.name === 'youtube')?.link}><i
                                            className="fa fa-youtube"></i></a></li>

                                    </ul>
                                    <CustomLanguageDropdown direction={'down'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-mobile">
                <div className="section-padding">
                    <div className="section-container large">
                        <div className="row flex-row-reverse">
                            <div style={{display: 'flex', justifyContent: 'flex-end'}}
                                 className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 header-left">
                                <div className="navbar-header">
                                    <button onClick={changeMenu} type="button" id="show-megamenu"
                                            className="navbar-toggle"></button>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 header-center">
                                <div style={{textAlign: 'left'}} className="site-logo">
                                    <Link href={"/"}>
                                        <Image width="100" height="100" src="/assets/img/logo.png"
                                               alt="Rama Group – Furniture HTML Theme"/>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div style={{background: 'black', color: 'white'}} className="header-desktop">
                <div className="header-wrapper">
                    <div className="section-padding">
                        <div className="section-container large p-l-r">
                            <div className="row flex-row-reverse">
                                <div className="col-10 header-right">
                                    <div className="site-navigation">

                                        <nav id="main-navigation">
                                            <ul id="menu-main-menu" className="menu">
                                                <li className={"level-0 menu-item " + (path === ("/products") ? 'current-menu-item' : '')}>
                                                    <Link href={"/products"} locale={i18n?.language}><span
                                                        className="menu-item-text">{t('products')}</span></Link>
                                                </li>
                                                <li onClick={() => setModal(!modal)} style={{cursor: 'pointer'}}
                                                    className={"level-0 menu-item " + (path === ('') ? 'current-menu-item' : '')}>
                                                    <a>
                                                        <span
                                                            className="menu-item-text">{t('categories')}</span>
                                                    </a>
                                                </li>
                                                <li className={"level-0 menu-item " + (path === ("/about") ? 'current-menu-item' : '')}>
                                                    <Link href={"/about"} locale={i18n?.language}><span
                                                        className="menu-item-text">{t('about')}</span></Link>
                                                </li>
                                                <li className={"level-0 menu-item " + (path === ('/contact') ? 'current-menu-item' : '')}>
                                                    <Link href={"/contact"} locale={i18n?.language}><span
                                                        className="menu-item-text">{t('contact-us')}</span></Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    {/*<div className="header-page-link">*/}
                                    {/*    <div onClick={changeSearch} className="search-box ml-4">*/}
                                    {/*        <div className="search-toggle"><i className="icon-search"></i></div>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>

                                <div className=" col-2 text-center header-center">
                                    <div style={{textAlign: 'left'}} className="site-logo">

                                        <Link href={"/"} locale={i18n?.language}>
                                            <Image width={200} height={200} src={'/assets/img/logo.png'} alt={'logo'}/>
                                        </Link>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
}

export default observer(Header);





