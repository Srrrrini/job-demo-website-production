import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import { PageBtnContainer } from "./PageBtnContainer";

const JobsContainer = () => {
  const {
    getJobs,
    jobs,
    page,
    totalJobs,
    search,
    searchStatus,
    searchType,
    sort,
    numOfPages,
  } = useAppContext();
  useEffect(() => {
    getJobs();
  }, [page,search, searchStatus, searchType, sort]);
  useEffect(() => {
    getJobs();
  }, []);
  // if (isLoading) {
  //   return <Loading center />;
  // }
  if (jobs.length == 0) {
    return (
      <Wrapper>
        <h2>no jobs to display</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages>1 && <PageBtnContainer/>}
    </Wrapper>
  );
};

export default JobsContainer;
