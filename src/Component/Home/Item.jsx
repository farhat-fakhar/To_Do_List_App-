import React from "react";
import styled from "styled-components";
import { UserContext } from "../Context/Context";
import { AiFillDelete } from "react-icons/ai";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
const Item = () => {
  const { state, deleteItem, completedTask } = UserContext();
  const { itemList = [] } = state; // Access itemList from state

  return (
    <Wrapper>
      <div className="border">
        {itemList.length > 0 ? (
          itemList.map((item, index) => (
            <div
              key={index}
              className="item d-flex justify-content-between align-items-center"
            >
              <div className="left">
                <div className="title">
                  <h3>{item.title}</h3>
                </div>
                <div className="description">
                  <p>{item.description}</p>
                </div>
              </div>
              <div className="right">
                <div className="icons d-flex">
                  <p onClick={() => deleteItem(index)}>
                 
                    <AiFillDelete />
                  </p>
                  <p onClick={() => completedTask(index)}>
                    <DownloadDoneIcon />
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No items added yet</p>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 30px 140px;

  .border {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 10px;
  }

  .item {
    margin-bottom: 20px;
    padding: 15px;
    border-bottom: 1px solid #ddd;
  }

  .title {
    h3 {
      font-size: 22px;
      font-weight: 700;
      color: ${({ theme }) => theme.colors.headingColor};
    }
  }

  .description {
    p {
      font-size: 16px;
      color: #666;
    }
  }
  .icons {
    p {
      font-size: 30px;
      margin: 0 10px;
      cursor: pointer;
    }
  }
`;

export default Item;
