import { fetchJobList } from "@/api/fetchJobList";
import { JobCard } from "@/components/JobCard";
import { LoadMore } from "@/components/LoadMore";

const JobListPage = async () => {
  const jobdata = await fetchJobList(1);
  return (
    <div className="container max-w-5xl min-h-screen px-4 py-8 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9">
        <JobCard jobData={jobdata} />
        <LoadMore />
      </div>
    </div>
  );
};

export default JobListPage;
