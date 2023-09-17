'use client';

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { fetchJobList } from "@/api/fetchJobList";
import { JobData } from "@/types";
import { JobCard } from "./JobCard";

export function LoadMore() {
    const [jobItem, setJobItem] = useState<JobData[]>([]);
    const [page, setPage] = useState(1);
    const { ref, inView} = useInView();
    const pageLimit = 4;

    const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

    const loadMoreJob = async () => {
        await delay(700);
        const nextPage = page + 1;
        const newJobs = (await fetchJobList(nextPage)) ?? [];
        setJobItem((prevJobs: JobData[]) => [...prevJobs, ...newJobs]);
        setPage(nextPage);
    };

    useEffect(() => {
        if (inView && page <= pageLimit) {
            loadMoreJob();     
        }
    }, [inView]);

    return (
        <>
            <JobCard jobData={jobItem} />
            <div
                className="flex items-center justify-center col-span-1 p-4 sm:col-span-2 md:col-span-3"
                ref={ref}
            >    
            </div>
        </>
    );
}