import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QueryAllUsers } from '../actions';

import {H1, H3} from '../styles';

interface Props {};

const AllUsers = (props:Props) => {

  const [allData, setAllData] = useState([]);
  const [genData, setGenData] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 12;

  const [searchTerm, setSearchTerm] = useState('');
  const [searchCount, setSearchCount] = useState(0);
  const [searchDept, setSearchDept] = useState('');
  const [searchLevel, setSearchLevel] = useState('');
  const [medium, setMedium] = useState('TABLE');

  const { loading, error, data } = useQuery(QueryAllUsers);

  useEffect(() => {
    const onCompleted = (data) => {
      let _data = data.getUzrsProfiles
      setTotalPages(Math.round(_data.length / limit));
      setAllData(_data);
      setGenData(_data);
    };
    const onError = (error) => {
      console.log('Error gql: '+error);
    };
    if (onCompleted || onError) {
        if (onCompleted && !loading && !error) {
            onCompleted(data);
        } else if (onError && !loading && error) {
            onError(error);
        }
    }
  }, [loading, data, error]);

  useEffect(() => {
    if (searchTerm) {
      const filteredData = allData.filter(item => {
        return item.fullname.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
      });
      setGenData(filteredData)
      setSearchCount(filteredData.length)
      setPage(1);
    } else {
      setGenData(allData);
      setSearchCount(0);
    }
  }, [allData, searchTerm]);
  
  useEffect(() => {
    if (searchDept) {
      const filteredData = allData.filter(item => {
        return item.programme.code.indexOf(searchDept) > -1
      });
      setGenData(filteredData)
      setSearchCount(filteredData.length)
      setPage(1);
    } else {
      setGenData(allData);
      setSearchCount(0);
    }
  }, [allData, searchDept]);
  
  useEffect(() => {
    if (searchLevel) {
      const filteredData = allData.filter(item => {
        return item.level.indexOf(searchLevel) > -1
      });
      setGenData(filteredData)
      setSearchCount(filteredData.length)
      setPage(1);
    } else {
      setGenData(allData);
      setSearchCount(0);
    }
  }, [allData, searchLevel]);

  // counts
  const countByLevel = (param) => {
    let filter = allData.filter(item => item.level === param);
    return filter.length
  }

  const window = () => {
    const min = (page - 1) * limit;
    let slice = genData.slice(min, min + limit);
    return slice
  };


  const handlePageChange = (direction) => {
    if (page + direction > totalPages || page + direction <= 0) {
      return false;
    } else {
      setPage(page + direction);
    }
  }

  const Categories = () => {
    return (
      <div className="uk-container">
      <div className="uk-margin" data-uk-grid>
      <div className="uk-width-1-5@m uk-width-1-1@s">
        <div className="uk-card uk-card-hover uk-card-body">
          <H3 className="uk-card-title">
          Year 1
          </H3>
          <div className="uk-flex-center">
            {loading ? (<div className='uk-text-center' uk-spinner="ratio: 1"></div>):
            (<span className="isFigure">{countByLevel("100")}</span>)
            }
          </div>
        </div>
      </div>
      <div className="uk-width-1-5@m uk-width-1-1@s">
        <div className="uk-card uk-card-hover uk-card-body">
          <H3 className="uk-card-title">
          Year 2
          </H3>
          <div className="uk-flex-center">
            {loading ? (<div className='uk-text-center' uk-spinner="ratio: 1"></div>):
            (<span className="isFigure">{countByLevel("200")}</span>)
            }
          </div>
        </div>
      </div>

      <div className="uk-width-1-5@m uk-width-1-1@s">
        <div className="uk-card uk-card-hover uk-card-body">
          <H3 className="uk-card-title">
          Year 3
          </H3>
          <div className="uk-flex-center">
            {loading ? (<div className='uk-text-center' uk-spinner="ratio: 1"></div>):
            (<span className="isFigure">{countByLevel("300")}</span>)
            }
          </div>
        </div>
      </div>

      <div className="uk-width-1-5@m uk-width-1-1@s">
        <div className="uk-card uk-card-hover uk-card-body">
          <H3 className="uk-card-title">
          Year 4
          </H3>
          <div className="uk-flex-center">
            {loading ? (<div className='uk-text-center' uk-spinner="ratio: 1"></div>):
            (<span className="isFigure">{countByLevel("400")}</span>)
            }
          </div>
        </div>
      </div>
      
      <div className="uk-width-1-5@m uk-width-1-1@s">
        <div className="uk-card uk-card-hover uk-card-body">
          <H3 className="uk-card-title">
            Year 5
          </H3>
          <div className="uk-flex-center">
            {loading ? (<div className='uk-text-center' uk-spinner="ratio: 1"></div>):
            (<span className="isFigure">{countByLevel("500")}</span>)
            }
          </div>
        </div>
      </div>
    </div>
    </div>
    )
  }

  return (
    <>
    <Categories/>
    <div className="uk-container">
      <div>
        <H1 className={searchCount? ``:`hide`}>Search Count: {searchCount}</H1>

        <form className="uk-search uk-search-default uk-width-1-3@m uk-width-1-1@s uk-margin">
          <span data-uk-search-icon></span>
          <input className="uk-search-input" type="search" 
              onKeyUp={(e) => setSearchTerm((e.target as HTMLInputElement).value)} 
              placeholder="Search by fullname..." />
        </form>
        <form className="uk-search uk-search-default uk-width-1-3@m uk-width-1-1@s uk-margin">
          <span data-uk-search-icon></span>
          <input className="uk-search-input" type="search" 
              onKeyUp={(e) => setSearchDept((e.target as HTMLInputElement).value)} 
              placeholder="Search by course code..." />
        </form>
        <form className="uk-search uk-search-default uk-width-1-3@m uk-width-1-1@s uk-margin">
          <span data-uk-search-icon></span>
          <input className="uk-search-input" type="search" 
              onKeyUp={(e) => setSearchLevel((e.target as HTMLInputElement).value)} 
              placeholder="Search by level..." />
        </form>
      </div>
      {loading && <div className='uk-text-center' uk-spinner="ratio: 3"></div>}
      { medium === "GRID" ? 
      <div className="uk-grid-medium" data-uk-grid>
        {window().map((dataItem, i) => (
          <div key={dataItem.uid*i} className="uk-width-1-3@m uk-width-1-1@s">
            <div className="uk-card uk-card-default uk-margin uk-card-body">
              <H3 className="uk-card-title">
                {dataItem.fullname}
              </H3>
              <div className="uk-grid-medium" data-uk-grid>
                <div className="uk-width-1-2@m uk-width-1-1@s">
                  <p>
                    <strong>UserID </strong>
                    <br />{dataItem.uid}
                  </p>
                </div>
                <div className="uk-width-1-2@m uk-width-1-1@s">
                  <p>
                    <strong>matricNo </strong>
                    <br />{dataItem.matricNo}
                  </p>
                </div>
                <div className="uk-width-1-2@m uk-width-1-1@s">
                  <p>
                    <strong>studentId </strong>
                    <br />{dataItem.studentId}
                  </p>
                </div>
                <div className="uk-width-1-2@m uk-width-1-1@s">
                  <p>
                    <strong>Gender </strong>
                    <br />{dataItem.gender}
                  </p>
                </div>
                <div className="uk-width-1-2@m uk-width-1-1@s">
                  <p>
                    <strong>level </strong>
                    <br />{dataItem.level}
                  </p>
                </div>
                <div className="uk-width-1-2@m uk-width-1-1@s">
                  <p>
                    <strong>college </strong>
                    <br />{dataItem.college.code}
                  </p>
                </div>
                <div className="uk-width-1-2@m uk-width-1-1@s">
                  <p>
                    <strong>department </strong>
                    <br />{dataItem.department.name}
                  </p>
                </div>
                <div className="uk-width-1-2@m uk-width-1-1@s">
                  <p>
                    <strong>programme </strong>
                    <br />{dataItem.programme.name}
                  </p>
                </div>
                <div className="uk-width-1-2@m uk-width-1-1@s">
                  <p>
                    <strong>phone </strong>
                    <br />{dataItem.phone}
                  </p>
                </div>
                <div className="uk-width-1-2@m uk-width-1-1@s">
                  <p>
                    <strong>createdAt </strong>
                    <br />{dataItem.createdAt}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
        }
      </div> : 
      (
      <div>
      <table className="uk-table uk-table-hover uk-table-divider">
    <thead>
        <tr>
            <th>UserID</th>
            <th>matricNo</th>
            <th>fullname</th>
            <th>studentId</th>
            <th>Gender</th>
            <th>level</th>
            <th>college</th>
            <th>department</th>
            <th>programme</th>
            <th>phone</th>
            <th>omegaIpAddress</th>
            <th>lastIpAddress</th>
            <th>passwordChangedAt</th>
            <th>userAgent</th>
            <th>deviceOs</th>
            <th>deviceManufacturer</th>
            <th>Created At</th>
        </tr>
    </thead>
    <tbody>
    {window().map(dataItem => (
        <tr key={dataItem.uid}>
            <td>{dataItem.uid}</td>
            <td>{dataItem.matricNo}</td>
            <td>{dataItem.fullname}</td>
            <td>{dataItem.studentId}</td>
            <td>{dataItem.gender}</td>
            <td>{dataItem.level}</td>
            <td>{dataItem.college.code}</td>
            <td>{dataItem.department.name}</td>
            <td>{dataItem.programme.name}</td>
            <td>{dataItem.phone}</td>
            <td>{dataItem.omegaIpAddress}</td>
            <td>{dataItem.lastIpAddress}</td>
            <td>{dataItem.passwordChangedAt}</td>
            <td>{dataItem.userAgent}</td>
            <td>{dataItem.deviceOs}</td>
            <td>{dataItem.deviceManufacturer}</td>
            <td>{dataItem.createdAt}</td>
        </tr>
      ))
    }
    </tbody>
</table>
      </div>
      )
      }
      <div>
        <ul className="uk-pagination uk-flex-center uk-margin-medium-top">
          <li><div className="uk-link" onClick={() => handlePageChange(-1)}><span data-uk-pagination-previous></span></div></li>
          <li><div className="uk-link uk-active" onClick={() => setPage(page)}>{page}/{totalPages}</div></li>
          <li><div className="uk-link" onClick={() => handlePageChange(1)}><span data-uk-pagination-next></span></div></li>
        </ul>
      </div>
    </div>
    </>
  );


};

export default AllUsers;
