import { useQuery } from "react-query";
import { fetchFredData } from "../services/getData";

const fetchChartsData = async () => {
    return await fetchFredData();
};

const useChartsData = (params) => {
    const { data, refetch, status } = useQuery(['ChartsData'], () => fetchChartsData(params), {
        refetchOnWindowFocus: false,
        enabled: false
    });
    console.log(data)
    const modifiedIsLoading = status === 'loading' || status === 'idle';
    return {
        ChartsDataData:data,
        isChartsDataLoading: modifiedIsLoading,
        ChartsDataRefetch:refetch,
    };
};

export default useChartsData;