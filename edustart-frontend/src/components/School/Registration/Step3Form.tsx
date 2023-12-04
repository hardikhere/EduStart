import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { _updateSchoolRegForm } from "../../../redux/schoolRegister/actions";
import Adder from "./Adder";

const Step3Form = (props) => {
  const dispatch = useDispatch();
  const schoolRegister = useSelector((state) => state.schoolRegister);
  const handleChange = (name, value) => (event) => {
    if (value === undefined) {
      if (event.target.type === "number")
        schoolRegister.otherInfo[name] = parseInt(event.target.value);
      else schoolRegister.otherInfo[name] = event.target.value;
    } else schoolRegister.otherInfo[name] = value;
    dispatch(_updateSchoolRegForm(schoolRegister));
  };
  return (
    <Form>
      <Form.Group>
        <Row>
          <Col>
            <Form.Label>Number of Students</Form.Label>
          </Col>
          <Col>
            <Form.Control
              type="number"
              min={1}
              value={schoolRegister.otherInfo?.numberOfStudents}
              onChange={handleChange("numberOfStudents")}
            />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group>
        <Row>
          <Col>
            <Form.Label>Number of Teachers</Form.Label>
          </Col>
          <Col>
            <Form.Control
              type="number"
              min={1}
              value={schoolRegister.otherInfo?.numberOfTeachers}
              onChange={handleChange("numberOfTeachers")}
            />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group>
        <Row>
          <Col>
            <Form.Label>Language Medium</Form.Label>
          </Col>
          <Col>
            <Form.Control
              as="select"
              onChange={handleChange("medium")}
              value={schoolRegister.otherInfo?.medium}
              aria-label="Language Medium"
            >
              <option value="English" selected>
                English
              </option>
              <option value="Hindi">Hindi</option>
              <option value="Other">Other</option>
            </Form.Control>
          </Col>
        </Row>
      </Form.Group>

      <Form.Group>
        <Form.Label>Activities</Form.Label>
        <Adder
          array={schoolRegister.otherInfo?.activities || []}
          appender={(item) => {
            schoolRegister.otherInfo.activities =
              schoolRegister.otherInfo?.activities?.concat(item) || [item];
            dispatch(_updateSchoolRegForm(schoolRegister));
          }}
          deleter={(item) => {
            schoolRegister.otherInfo.activities =
              schoolRegister.otherInfo.activities.filter((i) => {
                if (i === item) return false;
                else return true;
              });
            dispatch(_updateSchoolRegForm(schoolRegister));
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Do you have playground?</Form.Label>
        <Row>
          <Col>
            <div class="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="playground"
                id="playgroundyes"
                onClick={handleChange("hasPlayground", true)}
                defaultChecked={schoolRegister.otherInfo?.hasPlayground}
              />
              <label className="form-check-label" for="playgroundyes">
                Yes
              </label>
            </div>
          </Col>
          <Col>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="playground"
                id="playgroundno"
                onClick={handleChange("hasPlayground", false)}
                defaultChecked={!schoolRegister.otherInfo?.hasPlayground}
              />
              <label className="form-check-label" for="playgroundno">
                No
              </label>
            </div>
          </Col>
        </Row>
      </Form.Group>

      <Form.Group>
        <Form.Label>Outdoor sports</Form.Label>
        <Adder
          array={schoolRegister.otherInfo?.outdoorSports || []}
          appender={(item) => {
            schoolRegister.otherInfo.outdoorSports = [
              item,
              ...(schoolRegister.otherInfo?.outdoorSports || []),
            ];
            dispatch(_updateSchoolRegForm(schoolRegister));
          }}
          deleter={(item) => {
            schoolRegister.otherInfo.outdoorSports =
              schoolRegister.otherInfo.outdoorSports.filter((i) => {
                if (i === item) return false;
                else return true;
              });
            dispatch(_updateSchoolRegForm(schoolRegister));
          }}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Indoor sports</Form.Label>
        <Adder
          array={schoolRegister.otherInfo?.indoorSports || []}
          appender={(item) => {
            schoolRegister.otherInfo.indoorSports = [
              item,
              ...(schoolRegister.otherInfo?.indoorSports || []),
            ];
            dispatch(_updateSchoolRegForm(schoolRegister));
          }}
          deleter={(item) => {
            schoolRegister.otherInfo.indoorSports =
              schoolRegister.otherInfo?.indoorSports.filter((i) => {
                if (i === item) return false;
                else return true;
              });
            dispatch(_updateSchoolRegForm(schoolRegister));
          }}
        />
      </Form.Group>
      <Row className="p-jc-around">
        <Button className="" onClick={() => props.setStep(props.step - 1)}>
          Back
        </Button>
        <Button className="" onClick={() => props.setStep(props.step + 1)}>
          Next
        </Button>
      </Row>
    </Form>
  );
};

export default Step3Form;
