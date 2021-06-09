import React from "react";
import { useState, useEffect } from "react";
import { Table, Header, Icon } from "semantic-ui-react";
import JobTitleService from "../../../services/jobTitleService";

export default function JobTitleList() {
  const [positions, setTitles] = useState([]);
  useEffect(() => {
    let jobTitleService = new JobTitleService();
    jobTitleService
      .getJobTitles()
      .then((result) => setTitles(result.data.data));
  }, []);

  return (
    <div>
      <Header as="h2">
        <Icon name="list alternate outline" />
        <Header.Content>Job Title List</Header.Content>
      </Header>
      <Table color="blue" key="blue">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Job Title</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {positions.map((position) => (
            <Table.Row key={position.id}>
              <Table.Cell>{position.jobTitle}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}