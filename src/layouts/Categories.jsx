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
          <GridColumn width={12}>
            <JobSeekerList />
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn width={12}>
            <EmployerList />
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn width={12}>
            <JobAdvertisementList />
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn width={12}>
            <JobTitleList />
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn width={12}>
            <EmployeeList/>
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn width={12}>
            <JobPositionList/>
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  );
}