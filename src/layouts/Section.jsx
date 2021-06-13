import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import JobAdvertisementList from "../pages/JobAdvertisement/JobAdvertisementList";
import JobTitleList from "../pages/JobAdvertisement/JobTitle/JobTitleList";
import EmployerList from "../pages/User/Employer/EmployerList";
import JobSeekerList from "../pages/User/JobSeeker/JobSeekerList";
import EmployeeList from "../pages/User/Employee/EmployeeList";
import JobPositionList from "../pages/JobAdvertisement/JobPosition/JobPositionList";

export default function Section() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <GridColumn size={14}>
            <JobSeekerList />
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={14}>
            <EmployerList />
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={14}>
            <JobAdvertisementList />
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={14}>
            <JobTitleList />
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={14}>
            <EmployeeList/>
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={14}>
            <JobPositionList/>
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  );
}