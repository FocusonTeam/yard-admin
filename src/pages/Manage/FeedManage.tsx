
import React, { useMemo } from 'react'
import styled from 'styled-components'
import FeedTable from 'components/FeedTable';
import { FEEDCOLUMNS } from 'utils/tableColumn';

const getData = () => [
  {
    name: "Jane Cooper",
    email: "jane.cooper@example.com",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    status: "Active",
    role: "Admin",
    imgUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Cody Fisher",
    email: "cody.fisher@example.com",
    title: "Product Directives Officer",
    department: "Intranet",
    status: "Active",
    role: "Owner",
    imgUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Esther Howard",
    email: "esther.howard@example.com",
    title: "Forward Response Developer",
    department: "Directives",
    status: "Active",
    role: "Member",
    imgUrl:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jenny Wilson",
    email: "jenny.wilson@example.com",
    title: "Central Security Manager",
    department: "Program",
    status: "Active",
    role: "Member",
    imgUrl:
      "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Kristin Watson",
    email: "kristin.watson@example.com",
    title: "Lean Implementation Liaison",
    department: "Mobility",
    status: "Active",
    role: "Admin",
    imgUrl:
      "https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Cameron Williamson",
    email: "cameron.williamson@example.com",
    title: "Internal Applications Engineer",
    department: "Security",
    status: "Active",
    role: "Member",
    imgUrl:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },  {
    name: "Cameron Williamson",
    email: "cameron.williamson@example.com",
    title: "Internal Applications Engineer",
    department: "Security",
    status: "Active",
    role: "Member",
    imgUrl:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },  {
    name: "Cameron Williamson",
    email: "cameron.williamson@example.com",
    title: "Internal Applications Engineer",
    department: "Security",
    status: "Active",
    role: "Member",
    imgUrl:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },  {
    name: "Cameron Williamson",
    email: "cameron.williamson@example.com",
    title: "Internal Applications Engineer",
    department: "Security",
    status: "Active",
    role: "Member",
    imgUrl:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },  {
    name: "Cameron Williamson",
    email: "cameron.williamson@example.com",
    title: "Internal Applications Engineer",
    department: "Security",
    status: "Active",
    role: "Member",
    imgUrl:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

const MOCK_DATA = [
  {"id":1,"first_name":"Dallis","last_name":"Balchen","email":"dbalchen0@craigslist.org","gender":"Female"},
  {"id":2,"first_name":"Jarred","last_name":"Lias","email":"jlias1@statcounter.com","gender":"Male"},
  {"id":3,"first_name":"Doralynne","last_name":"McGarrahan","email":"dmcgarrahan2@fema.gov","gender":"Female"},
  {"id":4,"first_name":"Thatch","last_name":"Belk","email":"tbelk3@ycombinator.com","gender":"Male"},
  {"id":5,"first_name":"Dwain","last_name":"Ledwitch","email":"dledwitch4@paginegialle.it","gender":"Male"},
  {"id":6,"first_name":"Dwain","last_name":"Ledwitch","email":"dledwitch4@paginegialle.it","gender":"Male"},
  {"id":7,"first_name":"Dwain","last_name":"Ledwitch","email":"dledwitch4@paginegialle.it","gender":"Male"},
  {"id":8,"first_name":"Dwain","last_name":"Ledwitch","email":"dledwitch4@paginegialle.it","gender":"Male"},
  {"id":9,"first_name":"Dwain","last_name":"Ledwitch","email":"dledwitch4@paginegialle.it","gender":"Male"},
  {"id":10,"first_name":"Dwain","last_name":"Ledwitch","email":"dledwitch4@paginegialle.it","gender":"Male"},
  {"id":11,"first_name":"Dwain","last_name":"Ledwitch","email":"dledwitch4@paginegialle.it","gender":"Male"},
  {"id":12,"first_name":"Dwain","last_name":"Ledwitch","email":"dledwitch4@paginegialle.it","gender":"Male"},
  {"id":13,"first_name":"Dwain","last_name":"Ledwitch","email":"dledwitch4@paginegialle.it","gender":"Male"},
  {"id":14,"first_name":"Dwain","last_name":"Ledwitch","email":"dledwitch4@paginegialle.it","gender":"Male"},
]

export default function FeedManage() {

  // const columns = useMemo(
  //   () => [
  //     {
  //       Header: "Name",
  //       accessor: "name",
  //     },
  //     {
  //       Header: "Title",
  //       accessor: "title",
  //     },
  //     {
  //       Header: "Status",
  //       accessor: "status",
  //     },
  //     {
  //       Header: "Role",
  //       accessor: "role",
  //     },
  //   ],
  //   []
  // );

  //const data = useMemo(() => getData(), []);

  const columns = useMemo(() => FEEDCOLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  return (
    <Container>
      <>
      <div>
        <FeedTable />
      </div>
      </>
    </Container>
  )
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 1000px;
  margin: 3rem;
  padding: 3rem;
  padding-bottom: 5rem;
  background-color: white;
`