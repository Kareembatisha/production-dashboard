import React from "react";
import BestSellingProducts from "./BestSellingProducts";
import { Col, Row } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import StoreVisits from "./StoreVisits";
import Revenue from "../UserDashboard/Revenue";

function AttendanceList() {
  return (
    <div className="page-content">
      <Row style={{ marginBottom: "50px" }}>
        <BreadCrumb filter={true} title="Attendance" pageTitle="" />
      </Row>
      <Row style={{ marginBottom: "60px" }}>
        <Col xl={"6"} md={"12"}>
          <Revenue name={"Attendance Trends"} />
        </Col>
        <Col xl={"6"} md={"12"}>
          <StoreVisits name={"Attendance status"} />
        </Col>
      </Row>
      <Row>
        <BestSellingProducts />
      </Row>
    </div>
  );
}

export default AttendanceList;
