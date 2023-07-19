import page from '../styles/page.module.scss';
import {categoryItem, categoryProducts, partnerItem, sliderItem} from "@/interfaces/common";
import Slider from "react-slick";
import {useTranslation} from "next-i18next";
import ReactHtmlParser from "react-html-parser";
import Head from "next/head";
import NotFound from "@/Components/NotFound/NotFound";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useMemo} from 'react'
import Link from "next/link";
import Image from 'next/image'
import MySlider from "@/Components/MySlider/MySlider";

function Home({products, sliders, categories, partner}: {
    products: categoryProducts,
    sliders: sliderItem[],
    categories: categoryItem[],
    partner: partnerItem[]
}) {
    const {t, i18n} = useTranslation('common')
    const structuredProducts = useMemo(() => {
        return Object.entries(products)
    }, [products])

    const settingsBrand = {
        autoplay: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: partner.length <= 3 ? partner.length : 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };


    const settings = {
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
    };

    const settings_2 = {
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return <>
        <Head>
            <title>PINLIGHT</title>
        </Head>
        {typeof sliders !== 'string' ? <>
            <div className="main-content-b">
                <div data-aos="fade-zoom-in"
                     data-aos-easing="ease-in-back"
                     data-aos-delay="300"
                     data-aos-offset="0"
                     data-aos-duration="700" className={page.home_video}>
                    <div className="full home_video_slider_box">
                        <Slider {...settings}
                                nextArrow={<div style={{cursor: 'pointer'}} className="sp-arrow sp-next-arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="60.717" height="40.707"
                                         viewBox="0 0 60.717 40.707">
                                        <g id="Arrow_right" data-name="Arrow right" transform="translate(30 5.854)">
                                            <path id="Path_11" data-name="Path 11" d="M410.133,2498.74h60"
                                                  transform="translate(-440.133 -2484.24)" fill="none" stroke="#fff"
                                                  stroke-width="1"></path>
                                            <path id="Path_15" data-name="Path 15"
                                                  d="M475.3,2482.269l20.006,20-20.006,20"
                                                  transform="translate(-465.298 -2487.769)" fill="none" stroke="#fff"
                                                  stroke-width="1"></path>
                                        </g>
                                    </svg>
                                </div>}>
                            {Array.isArray(sliders) && sliders.map(item => {
                                const translated = item.translations.find(item => item.locale === i18n.language)
                                return <li key={item.id} style={{height: '100vh'}}>
                                    <Image width={1200} height={1200}
                                           src={process.env['NEXT_PUBLIC_MAIN_PATH_WITHOUT_API'] + item.photo} alt=""/>
                                    <div data-aos="fade-zoom-left"
                                         data-aos-easing="ease-in-back"
                                         data-aos-delay="600"
                                         data-aos-duration="700"
                                         data-aos-offset="0" className={page.center + ' section-padding'}>
                                        <div className="full full_h after_logo">
                                            <div className="slider_content home_slide_content"
                                                 style={{paddingTop: "0px"}}>
                                                <h1><span style={{color: "white"}}>{translated?.title}</span>
                                                </h1>
                                                {ReactHtmlParser(translated?.description!)}</div>
                                        </div>
                                    </div>
                                </li>
                            })}
                        </Slider>
                    </div>
                </div>
                <div className="container mt-4">
                    <section className="s-1 py-5">
                        {structuredProducts.map((preItem) => {
                            const item = preItem[1];
                            return <>
                                <div className='elementor-widget-wrap elementor-element-populated'>
                                    <div
                                        className="elementor-element elementor-element-ca1ec5a elementor-widget elementor-widget-heading"
                                        data-id="ca1ec5a" data-element_type="widget" data-widget_type="heading.default">
                                        <div className="elementor-widget-container">
                                        </div>
                                    </div>
                                    <div
                                        className="elementor-element elementor-element-62019a8 elementor-widget__width-initial elementor-widget elementor-widget-heading"
                                        data-id="62019a8" data-element_type="widget" data-widget_type="heading.default">
                                        <div className="elementor-widget-container text-right">
                                            <h5 style={{fontSize: 18, paddingLeft: "20%"}}
                                                className="elementor-heading-title elementor-size-default">{categories.find(category => category.slug === preItem[0])?.translations.find(item => item.locale === i18n.language).name}</h5>
                                        </div>
                                    </div>
                                </div>
                                <Slider
                                    className={'slider_2 mt-3'}
                                    {...settings_2}
                                    nextArrow={
                                        <div
                                            style={{cursor: 'pointer'}}
                                            className="sp-arrow sp-next-arrow"
                                        >
                                            <svg
                                                width="180"
                                                height="180"
                                                viewBox="0 0 180 180"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M119 47.3166C119 48.185 118.668 48.9532 118.003 49.6212L78.8385 89L118.003 128.379C118.668 129.047 119 129.815 119 130.683C119 131.552 118.668 132.32 118.003 132.988L113.021 137.998C112.356 138.666 111.592 139 110.729 139C109.865 139 109.101 138.666 108.436 137.998L61.9966 91.3046C61.3322 90.6366 61 89.8684 61 89C61 88.1316 61.3322 87.3634 61.9966 86.6954L108.436 40.002C109.101 39.334 109.865 39 110.729 39C111.592 39 112.356 39.334 113.021 40.002L118.003 45.012C118.668 45.68 119 46.4482 119 47.3166Z"
                                                    fill="white"
                                                ></path>
                                            </svg>
                                        </div>
                                    }
                                    prevArrow={
                                        <div
                                            style={{cursor: 'pointer'}}
                                            className="sp-arrow sp-next-arrow"
                                        >
                                            <svg
                                                width="180"
                                                height="180"
                                                viewBox="0 0 180 180"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M119 47.3166C119 48.185 118.668 48.9532 118.003 49.6212L78.8385 89L118.003 128.379C118.668 129.047 119 129.815 119 130.683C119 131.552 118.668 132.32 118.003 132.988L113.021 137.998C112.356 138.666 111.592 139 110.729 139C109.865 139 109.101 138.666 108.436 137.998L61.9966 91.3046C61.3322 90.6366 61 89.8684 61 89C61 88.1316 61.3322 87.3634 61.9966 86.6954L108.436 40.002C109.101 39.334 109.865 39 110.729 39C111.592 39 112.356 39.334 113.021 40.002L118.003 45.012C118.668 45.68 119 46.4482 119 47.3166Z"
                                                    fill="white"
                                                ></path>
                                            </svg>
                                        </div>
                                    }
                                >
                                    {item.map((item) => {
                                        const translatedItem = item.translations.find(
                                            (item) => item.locale === i18n.language
                                        );
                                        return (
                                            <Link key={item.id} href={'/products/' + item.id}>
                                                <div>
                                                    <div
                                                        data-elementor-type="jet-listing-items"
                                                        data-elementor-id="472"
                                                        className="mx-2  elementor elementor-472"
                                                    >
                                                        <section
                                                            className="elementor-section elementor-top-section elementor-element elementor-element-79cfe0e elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                            data-id="79cfe0e"
                                                            data-element_type="section"
                                                            data-settings='{"jet_parallax_layout_list":[],"background_background":"classic"}'
                                                        >
                                                            <div
                                                                className="elementor-container elementor-column-gap-default">
                                                                <div
                                                                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e787678"
                                                                    data-id="e787678"
                                                                    data-element_type="column"
                                                                >
                                                                    <div
                                                                        className="elementor-widget-wrap elementor-element-populated">
                                                                        <div
                                                                            className="elementor-element elementor-element-779d908 elementor-cta--skin-classic elementor-animated-content elementor-widget elementor-widget-call-to-action"
                                                                            data-id="779d908"
                                                                            data-element_type="widget"
                                                                            data-widget_type="call-to-action.default"
                                                                        >
                                                                            <div className="elementor-widget-container">
                                                                                <a
                                                                                    className="elementor-cta"
                                                                                    href="https://brandvanegmond.com/project/customised-shiro-master-bedroom/"
                                                                                >
                                                                                    <div
                                                                                        className="elementor-cta__bg-wrapper">
                                                                                        <div
                                                                                            className="elementor-cta__bg elementor-bg"
                                                                                            style={{
                                                                                                backgroundImage: `url(${
                                                                                                    process.env[
                                                                                                        'NEXT_PUBLIC_MAIN_PATH_WITHOUT_API'
                                                                                                        ] + item.photo
                                                                                                })`,
                                                                                            }}
                                                                                            role="img"
                                                                                            aria-label="front_custom-lighting-design-master-bedroom"
                                                                                        ></div>
                                                                                        <div
                                                                                            className="elementor-cta__bg-overlay"></div>
                                                                                    </div>
                                                                                    <div
                                                                                        className="elementor-cta__content">
                                                                                        <h2 className="elementor-cta__title elementor-cta__content-item elementor-content-item">
                                                                                            {translatedItem.name}
                                                                                        </h2>
                                                                                        <div
                                                                                            className="elementor-cta__description elementor-cta__content-item elementor-content-item">
                                                                                            {ReactHtmlParser(item.description)}
                                                                                        </div>
                                                                                    </div>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </section>
                                                    </div>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </Slider>
                            </>
                        })}

                        <div
                            className="elementor-element elementor-element-b2b7dbe elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                            data-id="b2b7dbe" data-element_type="widget" data-widget_type="divider.default">
                            <div className="elementor-widget-container">
                                <div className="elementor-divider">
			<span className="elementor-divider-separator">
						</span>
                                </div>
                            </div>
                        </div>

                        <div
                            className="elementor-element elementor-element-8fd4cbd elementor-widget elementor-widget-jet-button"
                            data-id="8fd4cbd" data-element_type="widget" data-widget_type="jet-button.default">
                            <div className="elementor-widget-container">
                                <div className="elementor-jet-button jet-elements">
                                    <div className="jet-button__container">
                                        <Link
                                            className="jet-button__instance jet-button__instance--icon-right hover-effect-0"
                                            href="/products/">
                                            <div className="jet-button__plane jet-button__plane-normal"></div>
                                            <div className="jet-button__plane jet-button__plane-hover"></div>
                                            <div className="jet-button__state jet-button__state-normal">
                                            <span className="jet-button__icon jet-elements-icon"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="7.061" height="12.703"
                                                viewBox="0 0 7.061 12.703"><g id="Arrow_right" data-name="Arrow right"
                                                                              transform="translate(30.354 -4.648)"><path
                                                id="Path_11" data-name="Path 11" d="M410.133,2498.74h6"
                                                transform="translate(-440.133 -2487.74)" fill="none" stroke="#fff"
                                                stroke-width="1" opacity="0"></path><path id="Path_14"
                                                                                          data-name="Path 14"
                                                                                          d="M475.3,2482.269l6,6-6,6"
                                                                                          transform="translate(-505.302 -2477.267)"
                                                                                          fill="none" stroke="#fff"
                                                                                          stroke-width="1"></path></g></svg></span><span
                                                className="jet-button__label">{t('all-products')}</span></div>
                                            <div className="jet-button__state jet-button__state-hover">
                                            <span className="jet-button__icon jet-elements-icon"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="26.707" height="12.703"
                                                viewBox="0 0 26.707 12.703"><g id="Arrow_right" data-name="Arrow right"
                                                                               transform="translate(30 -4.648)"><path
                                                id="Path_11" data-name="Path 11" d="M410.133,2498.74h26"
                                                transform="translate(-440.133 -2487.74)" fill="none" stroke="#fff"
                                                stroke-width="1"></path><path id="Path_14" data-name="Path 14"
                                                                              d="M475.3,2482.269l6,6-6,6"
                                                                              transform="translate(-485.302 -2477.267)"
                                                                              fill="none" stroke="#fff"
                                                                              stroke-width="1"></path></g></svg></span><span
                                                className="jet-button__label">{t('all-products')}</span></div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className=" section-padding top-border p-t-30 p-b-20">
                        <div className='elementor-widget-wrap elementor-element-populated'>
                            <div
                                className="elementor-element elementor-element-ca1ec5a elementor-widget elementor-widget-heading"
                                data-id="ca1ec5a" data-element_type="widget" data-widget_type="heading.default">
                                <div className="elementor-widget-container">
                                </div>
                            </div>
                            <div
                                className="elementor-element elementor-element-62019a8 elementor-widget__width-initial elementor-widget elementor-widget-heading"
                                data-id="62019a8" data-element_type="widget" data-widget_type="heading.default">
                                <div className="elementor-widget-container text-right">
                                    <h5 style={{fontSize: 18, paddingLeft: "20%"}}
                                        className="elementor-heading-title elementor-size-default">{t('partners')}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="section-container">
                            <div className="block block-image slider">
                                <div className="block-widget-wrap">
                                    <MySlider settings={settingsBrand}>
                                        {Array.isArray(partner) && partner.map(item => {
                                            return <div key={item.id} className="item slick-slide">
                                                <div className="item-image">
                                                    <a href={item.link}>
                                                        <Image width={450} height={450}
                                                               src={process.env['NEXT_PUBLIC_MAIN_PATH_WITHOUT_API'] + item.photo}
                                                               alt={item.link}/>
                                                    </a>
                                                </div>
                                            </div>
                                        })}

                                    </MySlider>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </> : <NotFound/>}
    </>
}


export async function getServerSideProps(context: any) {
    const sliders = await fetch(process.env['NEXT_PUBLIC_MAIN_PATH'] + '/slider')
    const categoryProducts = await fetch(process.env['NEXT_PUBLIC_MAIN_PATH'] + '/category/products')
    const categories = await fetch(process.env['NEXT_PUBLIC_MAIN_PATH'] + '/categories')
    const partners = await fetch(process.env['NEXT_PUBLIC_MAIN_PATH'] + '/partner')

    const slidersJson = await sliders.json()
    const categoryProductsJson = await categoryProducts.json()
    const categoriesJson = await categories.json()
    const partnersJson = await partners.json()

    return {
        props: {
            sliders: slidersJson.sliders,
            products: categoryProductsJson.products,
            categories: categoriesJson.categories,
            partner: partnersJson.partner,
            ...(await serverSideTranslations(context.locale, ["common"])),

        }
    }
}


export default Home



