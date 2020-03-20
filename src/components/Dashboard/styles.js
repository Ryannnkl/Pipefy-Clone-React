import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  max-width: 100px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #fff;
`;

export const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .icon {
    margin: 10px;
    cursor: pointer;
    &hover {
      color: #7159c1;
    }
  }

  #help-text {
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    color: #9aaabe;
  }
`;
