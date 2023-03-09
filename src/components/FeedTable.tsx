import React, { useMemo } from 'react';
import { useTable, useFilters, useGlobalFilter, useSortBy, usePagination } from 'react-table';
import {BsChevronDoubleLeft, BsChevronDoubleRight, BsChevronLeft, BsChevronRight} from 'react-icons/bs';
import {FaSort, FaSortDown, FaSortUp} from 'react-icons/fa';
import { PageButton } from './atoms/PageButton';
import { TypeFill } from './atoms/TableFill';
import { AvatarCell } from './atoms/AvatarCell';

type ColumnProps = {
    value: string;
};

const FEEDCOLUMNS = [
    {
        Header : 'Id',
        accessor : 'id'
    },
    {
        Header : 'Nickname',
        accessor : 'nickname',
    },
    {
        Header : 'Contents',
        accessor : 'contents'
    },
    {
        Header : 'Email',
        accessor : 'email'
    },
    {
        Header : 'Type',
        accessor : 'type',
        Cell: ({ value }: ColumnProps) => (
            TypeFill(value)
        ),
    },
    {
        Header : 'Report',
        accessor: 'report',
        Cell: ({ value }: ColumnProps) => (
            <div className=" flex justify-start">
                <h3>{value ? ("🚨") : ("")}</h3>
            </div>
        ),
    }
];

const MOCK_DATA = [
    {"id":1,"nickname":"어피치","contents":"Balchen","email":"dbalchen0@craigslist.org","type":"피드", "report":true},
    {"id":2,"nickname":"Jarred","contents":"Lias","email":"jlias1@statcounter.com","type":"댓글", "report":false},
    {"id":3,"nickname":"Doralynne","contents":"McGarrahan","email":"dmcgarrahan2@fema.gov","type":"피드", "report":false},
    {"id":4,"nickname":"Thatch","contents":"Belk","email":"tbelk3@ycombinator.com","type":"댓글", "report":false},
    {"id":5,"nickname":"토마토","contents":"안녕하세요~~!ㅉㅇㄹㄴㅁㄹ","email":"dledwitch4@paginegialle.it","type":"댓글", "report":false},
    {"id":6,"nickname":"Dwain","contents":"영ㅇ군알 ㄴ","email":"dledwitch4@paginegialle.it","type":"댓글", "report":true},
    {"id":7,"nickname":"Dwain","contents":"헝가리 날씨가 참 좋아요","email":"dledwitch4@paginegialle.it","type":"댓글", "report":false},
    {"id":8,"nickname":"Dwain","contents":"Ledwitch","email":"dledwitch4@paginegialle.it","type":"댓글", "report":true},
    {"id":9,"nickname":"Dwain","contents":"Ledwitch","email":"dledwitch4@paginegialle.it","type":"댓글", "report":false},
    {"id":10,"nickname":"Dwain","contents":"Ledwitch","email":"dledwitch4@paginegialle.it","type":"댓글", "report":false},
    {"id":11,"nickname":"Dwain","contents":"Ledwitch","email":"dledwitch4@paginegialle.it","type":"댓글"},
    {"id":12,"nickname":"Dwain","contents":"Ledwitch","email":"dledwitch4@paginegialle.it","type":"댓글"},
    {"id":13,"nickname":"Dwain","contents":"Ledwitch","email":"dledwitch4@paginegialle.it","type":"댓글"},
    {"id":14,"nickname":"Dwain","contents":"Ledwitch","email":"dledwitch4@paginegialle.it","type":"댓글"},
]




export const FeedTable = () => {

    const columns = useMemo(() => FEEDCOLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        state,
        prepareRow,
    } = useTable({
            // @ts-ignore
            columns,
            data,
        },
        usePagination,
    );

    const { pageIndex, pageSize } = state

    return (
        <div className="table">
            <div className="my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            {headerGroups.map((headerGroup) => (                   
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <th 
                                            className="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            {...column.getHeaderProps()}
                                        >
                                            <div className="flex items-center justify-between">
                                                {column.render('Header')}
                                                {/* Add a sort direction indicator */}
                                                <span>
                                                {column.isSorted
                                                    ? column.isSortedDesc
                                                    ? <FaSortDown />
                                                    : <FaSortUp />
                                                    : (<FaSort />)}
                                                </span>
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>

                        <tbody 
                            {...getTableBodyProps()}
                            className="bg-white divide-y divide-gray-200"
                        >
                            {page.map((row: any) => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map((cell: any) => {
                                            return (
                                                <td 
                                                    {...cell.getCellProps()}
                                                    className="px-6 py-4 whitespace-nowrap"
                                                >
                                                    {cell.render('Cell')}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>

            {/* Pagination */}
            <div className="py-3 flex justify-items-center items-center">
                <PageButton onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    <span className="sr-only">First</span>
                    <BsChevronDoubleLeft />
                </PageButton>
                <PageButton onClick={() => previousPage()} disabled={!canPreviousPage}>
                    <span className="sr-only">Previous</span>
                    <BsChevronLeft />
                </PageButton>
                <span>
                    <strong style={{display: 'block', width: '100px', textAlign: 'center'}}>
                        {pageIndex + 1} / {pageOptions.length} 
                    </strong>
                </span>
                <span>
                    Go to page: {' '}
                    <input type="number" defaultValue={pageIndex + 1}
                    onChange={(e) => {
                        const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0 
                        gotoPage(pageNumber)
                    }} 
                    style={{width: '50px'}} />
                </span>
                <PageButton
                    onClick={() => nextPage()}
                    disabled={!canNextPage
                    }>
                    <span className="sr-only">Next</span>
                    <BsChevronRight />
                </PageButton>
                <PageButton
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                >
                    <span className="sr-only">Last</span>
                    <BsChevronDoubleRight />
                </PageButton>
            </div>
            <div className="table-pagesize" style={{margin: '5px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
                    {
                        [10, 25, 50].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize}개 씩 보기
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>
    );
}

export default FeedTable;