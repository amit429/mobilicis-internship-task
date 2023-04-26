import React from 'react'
import { forwardRef } from "react";
import { useToast } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
  Heading,
  TableContainer,
} from "@chakra-ui/react";
import Pagination from "@choc-ui/paginator";

export default function TableTwo() {
    const toast = useToast();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [current, setCurrent] = React.useState(1);
  const pageSize = 10;
  const offset = (current - 1) * pageSize;
  const posts = data.slice(offset, offset + pageSize);

  React.useEffect(() => {
    fetch("https://mobilicis.tushar725mittal.repl.co/users/lastname")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, [current]);

  const Prev = forwardRef((props, ref) => (
    // <Button ref={ref} {...props}>
    //   Prev
    // </Button>
    <Button ref={ref} {...props}>
      Prev
    </Button>
  ));
  const Next = forwardRef((props, ref) => (
    <Button colorScheme="teal" ref={ref} {...props}>
      Next
    </Button>
  ));

  const itemRender = (_, type) => {
    if (type === "prev") {
      return Prev;
    }
    if (type === "next") {
      return Next;
    }
  };
  return (
    <>
    <Heading 
        size={"lg"}
        textAlign={"center"}
        margin={"auto"}
        marginTop={"100px"}
        marginBottom={"20px"}
      >
        Users with last name starting with "M" and Quote length greater than 15
      </Heading>
      <TableContainer
        style={{
          marginBottom: "20px",
        }}
      >
        <Table
          variant='striped' colorScheme='teal'
          style={{
            margin: "auto",
            width: "60%",
          }}
        >
          <TableCaption
            style={{
              marginBottom: "20px",
            }}
          >
            <Pagination
              current={current}
              onChange={(page) => {
                setCurrent(page);
              }}
              pageSize={pageSize}
              total={data.length}
              itemRender={itemRender}
              paginationProps={{
                display: "flex",
                pos: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
              }}
              colorScheme="red"
              focusRing="green"
            />
          </TableCaption>
          <Thead>
            <Tr
              style={{
                padding: "10px",
              }}
            >
              <Th>Id</Th>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Email</Th>
              <Th>Income</Th>
              <Th>Car</Th>
            </Tr>
          </Thead>
          <Tbody>
            {posts.map((item) => (
              <Tr key={item.id}>
                <Td>{item.id}</Td>
                <Td>{item.first_name}</Td>
                <Td>{item.last_name}</Td>
                <Td>{item.email}</Td>
                <Td>{item.income}</Td>
                <Td>{item.car}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    
    
    </>
  )
}
