import React, { useState } from 'react';
import '../../style/apiStyle/ApiHomeStyle.css';

const ApiHome = () => {
  const [commits, setCommits] = useState([]);
  const [isDataExtracted, setIsDataExtracted] = useState(false);

  const extractData = async () => {
    try {
      const response = await fetch('https://api.github.com/repos/hadley/ggplot2/commits');
      const data = await response.json();
      
      const extractedData = data.map((commit) => ({
        id: commit.id,
        node_id: commit.node_id,
        name: commit.commit.author.name,
        date: commit.commit.author.date,
        sha: commit.sha,
      }));

      setCommits(extractedData); 
      setIsDataExtracted(true);  
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div style={{ display: 'flex',justifyContent: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{textAlign: '-webkit-center'}}>
            <p className='description-para-api'>The External Json Link Was Provided You Can Extract The Values By Clicking The Button Below...</p>
            <p onClick={extractData} style={{ marginBottom: '20px' }} className='extract-button'>Extract the Values</p>
        </div>

        <table border="1" style={{ borderCollapse: 'collapse', maxHeight: '550px',  
              overflowY: 'auto',
              width: '90vw',
              display: 'block',
              tableLayout: 'fixed',
              float: 'inline-end',
              margin: '0px 53px 0px 0px',
              padding: '10px' }}>
          <thead>
            <tr>
              <th style={{ minWidth: '43vw' }} >Node ID</th>
              <th style={{ minWidth: '10vw' }}>Name</th>
              <th style={{ minWidth: '8vw' }}>Date</th>
              <th style={{ minWidth: '23vw' }}>SHA</th>
            </tr>
          </thead>
          <tbody>
            {!isDataExtracted ? (
              <tr>
                <td colSpan="5">No values extracted</td>
              </tr>
            ) : (
              commits.map((commit, index) => (
                <tr key={index}>
                  <td style={{ width: '25%' }}>{commit.node_id}</td>
                  <td>{commit.name}</td>
                  <td>{commit.date}</td>
                  <td>{commit.sha}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApiHome;
