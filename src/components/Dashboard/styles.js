import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  max-width: 100px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 0 5px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin: 5px;
  &hover {
    background-color: rgba(59, 91, 253, 0.3);
  }
`;

export const View = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;

  .icon {
    cursor: pointer;
  }

  #help-text {
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    color: #9aaabe;
  }
`;
