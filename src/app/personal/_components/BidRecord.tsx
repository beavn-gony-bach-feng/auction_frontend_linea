import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Table, ScrollArea } from "@radix-ui/themes";
import React from "react";

const BidRecord = () => (
  <div className="p-5 hover:shadow-lg shadow-md flex flex-col h-full">
    <div className="">
      <div className="flex justify-between font-bold text-lg">
        <div>My Bid Record</div>
      </div>
    </div>
    <ScrollArea
      type="always"
      scrollbars="vertical"
      style={{ height: "35vh" }}
    >
      <Table.Root variant="surface" size="2">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Index</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Bid Amount</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Bid Revenue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Auction Type</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {[...Array(20)].map((_, i) => (
            <Table.Row key={i}>
              <Table.RowHeaderCell>{i + 1}</Table.RowHeaderCell>
              <Table.Cell>
                {3 + i * 0.1}
                {" "}
                ETH
              </Table.Cell>
              <Table.Cell>
                +
                {0.5 + i * 0.05}
                {" "}
                ETH
              </Table.Cell>
              <Table.Cell>
                {i % 2 === 0 ? "Dutch Auction" : "English Auction"}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </ScrollArea>
  </div>
);

export default BidRecord;
