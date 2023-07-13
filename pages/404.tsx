import Link from "next/link";
import {useTranslation} from "next-i18next";
import Head from "next/head";

const Page404 = () => {
    const {t} = useTranslation('common')
    return <>
        <Head>
            <title>PINLIGHT</title>
        </Head>
        <div className="page-404">
            <div className="content-page-404">
                <div className="title-error">
                    404
                </div>
                <div className="sub-title">
                </div>
                <Link className="button" href="/">
                    {t('back')}
                </Link>
            </div>
        </div>
    </>
};

export default Page404;