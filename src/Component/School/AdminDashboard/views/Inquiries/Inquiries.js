import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { matchSorter } from 'match-sorter'
import { Button, Form, FormControl } from "react-bootstrap";
import "./style.scss"
import axiosInstance from '../../../../../utils/axiosInstance';
import { APIS } from '../../../../../utils/endpoints';
import { Modal } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import axiosSchoolAdminInstance from '../../../../../utils/axiosSchoolAdminInstance';
import { _updateInquiry } from '../../../../../redux/inquiries/actions';
import {
    useTable,
    useSortBy,
    usePagination,
    useGlobalFilter,
    useAsyncDebounce,
    useFilters
} from "react-table"

// Define a default UI for filtering


function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
}) {
    const count = preFilteredRows.length
    return null;
    return (
        <input
            value={filterValue || ''}
            onChange={e => {
                setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
            }}
            placeholder={`Search ${count} records...`}
        />
    )
}

function SelectColumnFilter({
    column: { filterValue, setFilter, preFilteredRows, id },
}) {
    // Calculate the options for filtering
    // using the preFilteredRows
    // const options = React.useMemo(() => {
    //     const options = new Set()
    //     preFilteredRows.forEach(row => {
    //         options.add(row.values[id])
    //     })
    //     return [...options.values()]
    // }, [id, preFilteredRows])
    const options = ["New", "Contacted", "Readed", "Not_Seen"]
    // Render a multi-select box
    return (
        <select
            value={filterValue}
            onChange={e => {
                setFilter(e.target.value || undefined)
            }}
        >
            <option value="">All</option>
            {options.map((option, i) => (
                <option key={i} value={option}>
                    {option}
                </option>
            ))}
        </select>
    )
};



function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
}) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <span>
            Search:{' '}
            <Form.Control
                value={value || ""}
                onChange={e => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={`${count} records...`}
                style={{
                    fontSize: '1.1rem',
                    border: '0',
                    width: "40%"
                }}
            />

        </span>
    )
};

function fuzzyTextFilterFn(rows, id, filterValue) {
    return matchSorter(rows, filterValue, { keys: [row => row.values[id]] })
}
fuzzyTextFilterFn.autoRemove = val => !val

const Inquiries = () => {
    const dispatch = useDispatch();
    const inquiriesData = useSelector(state => state.inquiriesData)
    const filterTypes = React.useMemo(
        () => ({
            // Add a new fuzzyTextFilterFn filter type.
            fuzzyText: fuzzyTextFilterFn,
            // Or, override the default text filter to use
            // "startWith"
            text: (rows, id, filterValue) => {
                return rows.filter(row => {
                    const rowValue = row.values[id]
                    return rowValue !== undefined
                        ? String(rowValue)
                            .toLowerCase()
                            .startsWith(String(filterValue).toLowerCase())
                        : true
                })
            },
        }),
        []
    )

    const [data, setData] = useState([]);

    const [Loading, setLoading] = useState(false)

    const [showQueryModal, setshowQueryModal] = useState(false);
    const closeQueryModal = () => setshowQueryModal(false);
    const [showUnlockModal, setshowUnlockModal] = useState(false);
    const closeUnlockModal = () => setshowUnlockModal(false);

    const [queryModalDetails, setqueryModalDetails] = useState({});
    const handleMarkContacted = () => {
        axiosSchoolAdminInstance.put(APIS._markContacted(queryModalDetails._id))
            .then(res => {
                console.log("marked contacted ", res.data);
                setqueryModalDetails({
                    ...queryModalDetails,
                    hasContacted: true
                });
                const inq = inquiriesData;
                const newData = inq.map(el => {
                    if (el._id === queryModalDetails._id) {
                        el.hasContacted = true;
                        el.statusArray = [...el.statusArray, "Contacted"];
                        // el.status = <div >
                        //     {newStatusArray?.map((el, ind) => {
                        //         if (ind + 1 === newStatusArray.length)
                        //             return <span>{el} </span>
                        //         return <span>{el}, </span>
                        //     })}
                        // </div>;
                        el.status = el.statusArray.join(", ")
                    }
                    return el;
                });
                dispatch(_updateInquiry(newData));
            })
    }
    const QueryModal = React.memo(() => {
        return <Modal show={showQueryModal}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={closeQueryModal}>

            <Modal.Header closeButton>
                <Modal.Title>Inquiry</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div>
                    Parent Name : {queryModalDetails.parentName}
                </div>
                <div>
                    Child Name : {queryModalDetails.childName}
                </div>

                <div>
                    Mobile Number : {queryModalDetails.mobileNumber}
                </div>

                <div>
                    Grade : {queryModalDetails.grade}
                </div>

                <div>
                    Address : <div>{queryModalDetails.address}</div>
                </div>

                <div>
                    Remarks : <div>{queryModalDetails.remarks}</div>
                </div>

                <div>
                    Academic Records :
                    {queryModalDetails?.academicRecords?.map(i => {
                    return <img src={i} alt="" style={{ height: "10rem" }} />
                })}
                </div>

                {
                    !queryModalDetails.hasContacted ? <div>
                        <Button onClick={handleMarkContacted}>
                            Mark Contacted
                    </Button>
                    </div> : <div className="text-success">Already Contacted</div>
                }
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary"
                    onClick={closeQueryModal}
                >Close</Button>
            </Modal.Footer>

        </Modal>
    }, []);

    const viewModal = React.useCallback((Qdata) => {
        setqueryModalDetails(Qdata);
        if (Qdata.isUnlocked) {
            setshowQueryModal(true);
        }
        else setshowUnlockModal(true);
    }, [inquiriesData])

    useEffect(() => {
        if (queryModalDetails) {
            if (!queryModalDetails.readed && queryModalDetails.isUnlocked) {
                axiosSchoolAdminInstance.put(APIS._markQueryReaded(queryModalDetails._id))
                    .then(res => {
                        console.log("marked readed ", res.data);
                        console.log("queryModalDetails is ", queryModalDetails);
                        setqueryModalDetails({
                            ...queryModalDetails,
                            readed: true
                        });
                        const inq = inquiriesData;
                        const newData = inq.map(el => {
                            if (el._id === queryModalDetails._id) {
                                el.readed = true;
                                el.statusArray = [...el.statusArray, "Readed"]
                                el.status = el.statusArray.join(", ")
                            }
                            return el;
                        })
                        console.log("new data will be ", newData);
                        dispatch(_updateInquiry(newData));
                        setData(newData)

                    })
            }
        }
    }, [queryModalDetails]);

    const handleUnlockInquery = (entry) => {
        axiosSchoolAdminInstance
            .get(APIS._unlockInquiry(schoolAdminDetails?.schoolDetails?.schoolId, queryModalDetails._id))
            .then(res => {
                console.log(res.data);
                closeUnlockModal();
                window.location.reload();
            })
        console.log(entry)
    };
    const UnLockModal = (entry) => {
        return <Modal show={showUnlockModal}
            aria-labelledby="contained-modal-title-vcenter"
            centered onHide={closeUnlockModal}>
            <Modal.Header closeButton>
                <Modal.Title>Unlock Inquiry</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{queryModalDetails.creditsRequired} Credits will be deducted if you unlock this inquiry</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => setshowUnlockModal(false)}>Close</Button>
                <Button variant="primary"
                    onClick={() => handleUnlockInquery(entry)}
                >Unlock Inquery</Button>
            </Modal.Footer>
        </Modal>
    };
    const schoolAdminDetails = useSelector(state => state.schoolAdminDetails)
     
    const getData = () => {
        setLoading(true);
        axiosInstance.get(APIS._getQueries(schoolAdminDetails?.schoolDetails?.schoolId))
            .then(res => {
                console.log("got data ", res.data.data)
                var allData = res.data.data.queries;
                if (allData === undefined) {
                    setData([]);
                    return;
                }
                allData = allData.reverse();
                allData = allData.map((entry, i) => {
                    entry.index = i + 1;
                    if (entry.parentName?.length > 11) {
                        entry.short_parentName = entry.parentName.substr(0, 10) + "...";
                    } else entry.short_parentName = entry.parentName;
                    if (entry.childName?.length > 11) {
                        entry.short_childName = entry.childName.substr(0, 10) + "...";
                    } else entry.short_childName = entry.childName;
                    if (entry.remarks?.length > 11) {
                        entry.short_remarks = entry.remarks.substr(0, 10) + "...";
                    } else entry.short_remarks = entry.remarks

                    entry.statusArray = [];
                    if (entry.hasContacted) entry.statusArray.push("Contacted");
                    if (!entry.isUnlocked) entry.statusArray.push("Locked");
                    if (entry.readed) entry.statusArray.push("Readed");
                    else entry.statusArray.push("Not_Seen");
                    if (new Date(entry.createdAt).getTime()
                        > schoolAdminDetails.lastViewedInquiry)
                        entry.statusArray.push("New");
                    // entry.status = <div >
                    //     {entry.statusArray?.map((el, ind) => {
                    //         if (ind + 1 === entry.statusArray.length)
                    //             return <span id={el}>{el} </span>
                    //         return <span id={el}>{el}, </span>
                    //     })}
                    // </div>;
                    entry.status = entry.statusArray.join(", ")
                    entry.View = <Button onClick={() => viewModal(entry)}>View</Button>
                    return entry
                })
                dispatch(_updateInquiry(allData));
                //setData(allData)
                setLoading(false);
            })
    };

    const updateLastViewedTimeBackend = () => {
        axiosSchoolAdminInstance
            .put(APIS._lastQueryViewTimeUpdate(schoolAdminDetails._id, Date.now()))
            .then(res => {
                console.log("updated Last View on backend", res.data);
            })
    };
    useEffect(() => {
       // console.log("----school admindetails are ", schoolAdminDetails);
        if (schoolAdminDetails)
            getData();
    }, [schoolAdminDetails?.schoolDetails]);

    useEffect(() => {
        updateLastViewedTimeBackend();
    }, []);

    useEffect(() => {
        if (inquiriesData?.length > 0) {
            console.log("setting data ", inquiriesData)
            setData(inquiriesData)
        }
        else setData([])
    }, [inquiriesData])

    const defaultColumn = React.useMemo(
        () => ({
            // Let's set up our default Filter UI
            Filter: DefaultColumnFilter,
        }),
        []
    )

    const columns = React.useMemo(
        () => [
            {
                Header: "S.No.",
                accessor: 'index',
                canFilter: false
            },
            {
                Header: 'Parent Name',
                accessor: 'short_parentName',
                canFilter: false
            },
            {
                Header: 'Child Name',
                accessor: 'short_childName',
                canFilter: false,
            },
            {
                Header: 'Phone Number',
                accessor: 'mobileNumber',
                canFilter: false
            },
            {
                Header: 'Remark',
                accessor: 'short_remarks',
                disableSortBy: true,
                canFilter: false
            },
            {
                Header: 'Grade',
                accessor: 'grade',
                disableSortBy: true,
                canFilter: false
            },
            {
                Header: 'Status',
                accessor: 'status',
                Filter: SelectColumnFilter,
                filter: 'includes',
                disableSortBy: true
            },
            {
                Header: 'View',
                accessor: 'View',
                disableSortBy: true
            }
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        visibleColumns,
        preGlobalFilteredRows,
        setGlobalFilter,
        state,
        state: { pageIndex, pageSize },
    } = useTable({
        columns,
        data,
        defaultColumn,
        filterTypes
    }, useFilters, useGlobalFilter, useSortBy, usePagination);


    return (
        <>
            <UnLockModal />
            <QueryModal />

            <table {...getTableProps()} className="table table-striped table-hover">

                <thead>

                    <tr>
                        <th
                            colSpan={visibleColumns.length}
                            style={{
                                textAlign: 'left',
                            }}
                        >
                            <GlobalFilter
                                preGlobalFilteredRows={preGlobalFilteredRows}
                                globalFilter={state.globalFilter}
                                setGlobalFilter={setGlobalFilter}
                            />

                        </th>

                    </tr>
                    {headerGroups.map((headerGroup, index) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th scope="col" {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    <div className="d-flex">
                                        {column.render('Header')}
                                        <span>
                                            {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                                        </span>
                                        <div>{column.canFilter ? column.render('Filter') : null}</div>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {!Loading && page.map((row, i) => {
                        prepareRow(row)
                        // console.log(row)
                        return (
                            <tr scope="row"  {...row.getRowProps()}>
                                {row.cells.map((cell, ind) => {
                                    if (ind === 6)
                                        return <td unselectable="on"
                                            {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    return <td unselectable="on"
                                        onselectstart="return false;"
                                        onmousedown="return false;"
                                        className={row.original?.isUnlocked === false ? `blurry-text` : ""}
                                        {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                    {
                        Loading && [1, 2, 3, 4, 5, 6].map(row => {
                            return (
                                <tr scope="row" >
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map(cell => {
                                        return <td
                                        >
                                            <Skeleton />
                                        </td>
                                    })}
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>

            <div className="pagination">
                <button className="p-btn" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                </button>
                <button className="p-btn" onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {'<'}
                </button>
                <button className="p-btn" onClick={() => nextPage()} disabled={!canNextPage}>
                    {'>'}
                </button>
                <button className="p-btn" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {'>>'}
                </button>
                <span className="d-flex align-items-center pl-1 pr-1">
                    Page
                    <strong>
                        &nbsp; {pageIndex + 1} of {pageOptions.length}
                    </strong>
                </span>
                <span className="d-flex align-items-center pl-1 pr-1">
                    &nbsp;| Go to page:
                    <Form.Control
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={e => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(page)
                        }}
                        style={{ width: '100px' }}
                    />
                </span>
                <Form.Control
                    as="select"
                    style={{ width: "8rem" }}
                    className="btn-primary ml-1"
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </Form.Control>
            </div>
        </>
    )
}

export default Inquiries

