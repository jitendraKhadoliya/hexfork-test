import React, { useState } from 'react';
import useDataFetcher from './useDataFetcher';
import './hiringSection.css';
import Error from '../components/Error';
import Loader from '../components/Loader';

const HiringSection = () => {
  const URL = 'https://jsearch.p.rapidapi.com/search';
  // "9bc77343fbmsh484d6da408e357fp189298jsn5a23f55737bc",
  // "db318a4383mshb1c5484dfa90ad2p19cc3bjsncec110ea7035",
  // 7c83bf8165msh1d3a4bad1544e03p173d00jsn058027120f5f
  // 0af1ed6078msh0b162e7633687b2p1628f5jsn840c3e566c04

  const header = {
    'X-RapidAPI-Key': '9bc77343fbmsh484d6da408e357fp189298jsn5a23f55737bc',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
  };

  const query = {
    query: 'javascript',
    num_pages: '2',
    // Add other query parameters as required
  };

  // const { data, isLoading, error } = useDataFetcher(URL, header, query);

  // if (isLoading) {
  //   return <Loader />;
  // }

  // if (error) {
  //   return <Error error={error} />;
  // }

  // if (!data.length) {
  //   return null;
  // }
  // if (data) return null;

  // let endPoint = data?.data;
  // console.log("endPoint", endPoint);
  // console.log("data", data);
  // console.log("data to check", data);

  return (
    <div>
      <p className="hiring-subHeading">
        Open Positions <span>{17} </span>
      </p>
      <div className="input-section">
        <div className="first-Input">
          <input
            type="text"
            placeholder="Search Job Titles"
            className="job-search control--text"
          />
        </div>
        <div className="second-input">
          <div className="control--text">
            <select name="craft" id="craft" className="filter-select">
              <option value>select a craft</option>
              <option value="javaScript">javaScript</option>
            </select>
          </div>
          <div className=" control--text">
            <select name="team" id="team" className="filter-select">
              <option value>select an Product Team</option>
              <option value="javaScript">javaScript</option>
            </select>
          </div>
          <div className=" control--text">
            <select name="office" id="office" className="filter-select">
              <option value>select an office</option>
              <option value="javaScript">india</option>
            </select>
          </div>
        </div>
      </div>
      <hr className="hr" />

      {/* Use the fetched data here */}
      {/* <div>
        {data?.data && (
          <ul className="job-table">
            <div className="table-section job-row table-heading">
              <span>Job Title </span>
              <span>Job Location</span>
              <span>Job Employment Type</span>
              <span>Job Remote</span>
            </div>

            {data?.data?.map((item) => (
              <>
                <div key={item.id} className="table-section job-row">
                  <span className="item-job-title">{item.job_title} </span>
                  <span>
                    {item.job_city}, {item.job_country}
                  </span>
                  <span>{item.job_employment_type}</span>
                  <span>{item.job_is_remote ? "YES" : "NO"}</span>
                </div>
              </>
            ))}
          </ul>
        )}
      </div> */}
    </div>
  );
};

export default HiringSection;
