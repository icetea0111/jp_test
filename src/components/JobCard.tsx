import { JobData } from "@/types";
import Image from "next/image";

export interface JobDataProps {
    jobData : JobData[] | null;
}

export function JobCard({ jobData } : JobDataProps) {
    return (
    <>
      {jobData ? (
        jobData.map((job) => (
          <section key={job.id} className="w-[294px] box-border border border-solid border-gray03 rounded-xl">
            <figure className="h-[180px] relative overflow-hidden rounded-t-xl">
              <Image
                src={job.image}
                alt={job.title}
                fill
                className="object-cover"
              />
              <div className="absolute bg-opacity-50 rounded top-4 right-4 w-7 h-7 bg-gray01">
                <button className={
                    "bg-opacity-50 bg-center bg-no-repeat w-7 h-7 hover:bg-bookmark_on " +
                    (job.bookmark ? "bg-bookmark_on" : "bg-bookmark_off")
                }></button>
              </div>
            </figure>
            <div className="p-5 pt-2.5 pb-4">
              <div className="">
                <h1 className="text-xl font-bold leading-8 truncate text-gray01">{job.title}</h1>
                <p className="text-xs truncate text-gray02">{job.skills}</p>
              </div>
              <div className="pt-3 mt-2 border-t border-solid border-gray03">
                  <div className="flex">
                    <h2 className="flex items-center">
                      <figure className="w-6 h-6 mr-2">
                        <Image src={job.company.logo} width={24} height={24} alt={job.company.name} className="align-middle" />
                      </figure>
                      <strong className="leading-6">{job.company.name}</strong>
                    </h2>
                    <div className="pl-4 ml-2 bg-left bg-no-repeat bg-star">
                      <strong className="text-gray01">{job.company.grade}</strong>
                      <span className="ml-1 text-gray02">({job.company.grade_count})</span>
                    </div>
                  </div>
                  <p className="mt-2 text-sm truncate text-gray02">{job.appeal}</p>
              </div>
              <h3 className="pt-2 mt-2 border-t border-solid border-gray03">
                <strong className="block pl-6 text-sm leading-6 bg-left bg-no-repeat bg-won">취업 축하금: {job.reward_text}</strong>
              </h3>
            </div>
          </section>
        ))
      ) : (
        <div className="text-xl font-bold">No Data</div>
      )}
    </>
    )
}