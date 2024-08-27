import React from "react";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
  IconButton,
} from "@mui/material";
import { Card, CardBody, Col, Container, Progress, Row } from "reactstrap";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import Widgetstaps from "./Widgetstaps";
import { BasicLineCharts } from "./LineCharts";
import { StackedColumn } from "./ColumnCharts";
import { SimpleDonut } from "./PieCharts";
import { SearchTable } from "./ReactTable";
import ChartTable from "./ChartComponent";
import DownloadIcon from "@mui/icons-material/Download";

function FeedbackReport() {
  return (
    <div className="page-content">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            width: "50%",
          }}
        >
          <BreadCrumb
            filter={false}
            title="Feedbacks Summary Report"
            pageTitle=""
          />
          <Container>
            <Typography
              variant="subtitle2"
              color={"#818991"}
              style={{ marginTop: "-20px" }}
            >
              this reporting service generates reports on feedback metrics.
            </Typography>
          </Container>
        </div>
        <div style={{ display: "flex", gap: "11px" }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<PictureAsPdfOutlinedIcon />}
          >
            <Typography variant="button">Download PDF</Typography>
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<PictureAsPdfOutlinedIcon />}
          >
            <Typography variant="button">Download XLSX</Typography>
          </Button>
        </div>
      </div>
      <Row style={{ marginTop: "30px", marginBottom: "30px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              maxWidth: "80%",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            <div style={{ display: "flex", gap: "20px" }}>
              <Typography>
                Building:{" "}
                <span style={{ color: "#4444ff" }}>King ABDULLAH</span>
              </Typography>
              <Typography>
                Created by : <span style={{ color: "#4444ff" }}>Kareem</span>
              </Typography>
              <Typography>
                Created on :{" "}
                <span style={{ color: "#4444ff" }}>26/8/2024 13:22:54</span>
              </Typography>
              <Typography>
                Date Range :{" "}
                <span style={{ color: "#4444ff" }}>01 Aug 24-26 Aug 24</span>
              </Typography>
            </div>
            <Button variant="contained" color="primary">
              <Typography variant="button">KPI Calculation</Typography>
            </Button>
          </div>
          <div style={{ display: "flex", width: "80%", gap: "30px" }}>
            <Widgetstaps />
          </div>
        </div>
      </Row>
      <Row style={{ marginTop: "30px", marginBottom: "30px" }}>
        <Paper sx={{ pt: 4, width: "99%" }}>
          <BreadCrumb
            filter={false}
            title="Avg. Customer Feedback"
            pageTitle=""
          />
          <BasicLineCharts />
        </Paper>
      </Row>
      <Row style={{ marginTop: "30px", marginBottom: "30px" }}>
        <Paper sx={{ pt: 4, width: "99%" }}>
          <BreadCrumb filter={false} title="Ratings Breakdown" pageTitle="" />
          <StackedColumn dataColors='["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger"]' />
        </Paper>
      </Row>
      <Row style={{ marginTop: "30px", marginBottom: "30px" }}>
        <Paper sx={{ pt: 4, width: "99%" }}>
          <BreadCrumb filter={false} title="Ratings Breakdown" pageTitle="" />
          <SimpleDonut dataColors='["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]' />
        </Paper>
      </Row>
      <Row style={{ paddingTop: "30px", marginBottom: "30px" }}>
        <BreadCrumb filter={false} title="Top performing Zones" pageTitle="" />

        <Paper sx={{ pt: 4, width: "99%" }}>
          <Card
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Row style={{ width: "100%" }}>
              <Col xl="4">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                  }}
                >
                  <h5>Female Public Washroom</h5>
                  <Typography variant="subtitle2">
                    Avg. Rating: 2.7/3
                  </Typography>
                  <Typography variant="subtitle2">
                    No. of Positive Feedback: 191/200
                  </Typography>
                </div>
              </Col>
              <Col xl="8">
                <Progress
                  value={30}
                  color="info"
                  className="bg-info-subtle rounded-0"
                />
              </Col>
            </Row>
          </Card>

          <Card
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Row style={{ width: "100%" }}>
              <Col xl="4">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                  }}
                >
                  <h5>Male Public Washroom</h5>
                  <Typography variant="subtitle2">
                    Avg. Rating: 2.7/3
                  </Typography>
                  <Typography variant="subtitle2">
                    No. of Positive Feedback: 191/200
                  </Typography>
                </div>
              </Col>
              <Col xl="8">
                <Progress
                  value={80}
                  color="success"
                  className="bg-info-subtle rounded-0"
                />
              </Col>
            </Row>
          </Card>
        </Paper>
      </Row>
      <Row style={{ marginTop: "30px", marginBottom: "30px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              minWidth: "50%",
            }}
          >
            <BreadCrumb
              filter={false}
              title="Lowest Performing Zones"
              pageTitle=""
            />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center", // Align items center vertically
              gap: "10px", // Add some spacing between the select and button
            }}
          >
            <FormControl variant="outlined" style={{ minWidth: "200px" }}>
              <InputLabel id="negative-reason-label">
                Negative Reason
              </InputLabel>
              <Select labelId="negative-reason-label" label="Negative Reason">
                <MenuItem value="No Toilet paper/paper Towel">
                  No Toilet paper/paper Towel
                </MenuItem>
                <MenuItem value="Dirty Washroom">Dirty Washroom</MenuItem>
                <MenuItem value="Broken Fixtures">Broken Fixtures</MenuItem>
              </Select>
            </FormControl>
            <IconButton color="primary">
              <DownloadIcon />
            </IconButton>
          </div>
        </div>

        <SearchTable />
      </Row>
      <Row style={{ marginTop: "30px", marginBottom: "30px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              maxWidth: "60%",
            }}
          >
            <BreadCrumb filter={false} title="Feedback Reasons" pageTitle="" />

            <Typography
              variant="subtitle2"
              color={"#818991"}
              style={{
                marginTop: "-20px",
                textAlign: "start",
                padding: "0px 12px",
              }}
            >
              This chart displays the distribution of feedback reasons reported
              in the selected time range.
            </Typography>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <Select
              value="All Reasons"
              sx={{ marginBottom: 2, marginTop: 2, marginLeft: "auto" }}
            >
              <MenuItem value="All Reasons">All Reasons</MenuItem>
              {/* Add more options if needed */}
            </Select>
          </div>
        </div>
        <ChartTable />
      </Row>
    </div>
  );
}

export default FeedbackReport;
