import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { UserContext } from "../Context/Context";
import Item from "./Item";
import Completed from "./Completed";

const ToDoList = () => {
  const { state, inputValue, addItem } = UserContext(); // Access the entire state
  const [item, setItem] = useState(true);
  const setItems = () => {
    setItem((prev) => !prev);
  };
  return (
    <Wrapper>
      <Container>
        <Row className=" border d-flex justify-content-center align-items-center">
          <Col lg={4} className=" title">
            <form onSubmit={(e) => e.preventDefault()}>
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={state.title}
                onChange={inputValue}
                placeholder="Enter your Title"
              />
            </form>
          </Col>
          <Col lg={4} className="description">
            <label>Description:</label>
            <input
              type="text"
              name="description"
              value={state.description}
              onChange={inputValue}
              placeholder="Enter your Description"
            />
          </Col>
          <Col
            lg={1}
            className="d-flex justify-content-center align-items-center pt-5"
          >
            <button onClick={addItem}>Add</button>
          </Col>

          <Col lg={9} className="d-flex pt-4">
            <button onClick={setItems} style={{backgroundColor: item ? "black" : ""}}>To Do</button>
            <button onClick={setItems} style={{backgroundColor : !item ? "black" : ""}}>Completed</button>
          </Col>
             {item ? <Item/> : <Completed/>}
        </Row>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 100px 0;
  button {
    padding: 5px 30px;
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.colors.headingColor};
    color: ${({ theme }) => theme.colors.borderColor};
    font-size: 20px;
    font-weight: 700;
    margin-left: 10px;
    &:hover {
      background-color: black;
    }
  }
  .title,
  .description {
    label {
      font-size: 18px;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.headingColor};
      padding: 10px 0;
    }
    input {
      width: 100%;
      border: 1px solid ${({ theme }) => theme.colors.borderColor};
      font-size: 18px;
      outline: none;
      padding: 5px 15px;
    }
  }
`;

export default ToDoList;
