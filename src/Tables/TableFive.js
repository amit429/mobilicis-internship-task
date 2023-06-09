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

export default function TableFive() {

    const toast = useToast();
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [current, setCurrent] = React.useState(1);
    const pageSize = 10;
    const offset = (current - 1) * pageSize;
    const posts = data.slice(offset, offset + pageSize);

    React.useEffect(() => {
        fetch("https://mobilicis.tushar725mittal.repl.co/users/city")
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
        Top 10 cities with Avg Income
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
              <Th>City</Th>
              <Th>Count</Th>
              <Th>Average Income</Th>
            </Tr>
          </Thead>
          <Tbody>
            {posts.map((item) => (
              <Tr>
                <Td>{item._id}</Td>
                <Td>{item.count}</Td>
                <Td>{item.totalIncome}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    
    </>
  )
}
