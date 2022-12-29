import { FormRow, Alert, FormRowSelect } from "./../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "./../../assets/wrappers/DashboardFormPage";

const AddJob = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    handleChange,
    clearValues,
    createJob,
    setEditJob,
    editJob
  } = useAppContext();
  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!position || !company || !jobLocation) {
    //   displayAlert();
    //   return;
    // }
    if (isEditing) {
      editJob()
      return;
    }
    createJob();
  };
  const handleClear = (e) => {
    e.preventDefault();
    clearValues();
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "Edit Job" : "Add Job"} </h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          <FormRow
            type="text"
            name="jobLocation"
            value={jobLocation}
            lableText="job location"
            handleChange={handleJobInput}
          />
          <FormRowSelect
            name="status"
            handleChange={handleJobInput}
            list={statusOptions}
            labelText="status"
            value={status}
          />
          <FormRowSelect
            name="jobType"
            handleChange={handleJobInput}
            list={jobTypeOptions}
            labelText="Job Type"
            value={jobType}
          />
          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              Submit
            </button>
            <button className="btn btn-block clear-btn" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
