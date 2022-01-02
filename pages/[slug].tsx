import {useEffect} from "react";
import {NextPage} from "next";
import {useRouter} from "next/router";
import axios from "axios";

// Interfaces
import {AxiosResponse} from "axios";
import {LinkResponseInterface} from '../interface/LinkResponseInterface'

const SlugPage: NextPage = () => {
    const router = useRouter()

    const {slug} = router.query;

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleRedirect = async (): Promise<void> => {
        try {
            const {data}: AxiosResponse<LinkResponseInterface> = await axios(`http://localhost:8000/links/${slug}`)
            window.location.replace(data.url)
        } catch (err: any) {
            console.log(err)
        }
    }

    useEffect(() => {
        if(slug) {
            handleRedirect()
        }
    }, [handleRedirect, slug])


    return null
}

export default SlugPage
