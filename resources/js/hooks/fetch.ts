import { ref } from "vue";
import axios, { AxiosResponse } from "axios";

const resp = ref(null)

export const useFetch = () => {
    const req = async (url: string, props: object = {}) => {
        try {
            const response = await axios({
                url,
                ...props
            });

            const { data } = response as AxiosResponse;
            resp.value = data;
            return;
        } catch (error) {
            console.warn(error);
        }
    }

    return {
        req,
        resp
    }
}