import React, { FC, useMemo } from 'react'
import { useTable } from "react-table";

import Container from '../../components/container/container'

const ForumPage: FC = () => {
    const columns = useMemo(
        () => [
            {
                accessor: "name",
                Header: "Name"
            },
            {
                accessor: "email",
                Header: "Email"
            },
            {
                accessor: "phone",
                Header: "Phone"
            }
        ],
        []
    );

    const data = useMemo(
        () =>
            Array(53)
                .map(() => ({
                    name: 'name',
                    email: 'email',
                    phone: 'phone'
                })),
        []
    );
    const {
        getTableProps, // table props from react-table
        getTableBodyProps, // table body props from react-table
        headerGroups, // headerGroups, if your table has groupings
        rows, // rows for the table based on the data passed
        prepareRow // Prepare the row (this function needs to be called for each row before getting the row props)
    } = useTable({
        columns,
        data
    });

    return <Container />
}

export default ForumPage
