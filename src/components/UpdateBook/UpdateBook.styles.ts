import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-right: 12.84%;
  margin-bottom: 102px;
`;

export const Image = styled.div`
  background-image: url(https://images.pexels.com/photos/2952871/pexels-photo-2952871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 221px;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 43px;
    line-height: 40px;
    color: ${({ theme }) => theme.white};
    background: rgba(68, 68, 68, 0.7);
  }
`;

export const EditTitle = styled.div`
  font-weight: 700;
  font-size: 22px;
  line-height: 20px;
  color: ${({ theme }) => theme.navy};
  margin: 52px 0 41px;
`;

export const EditForm = styled.div`
  flex-direction: column;
  width: 47.74%;
`;

export const Label = styled.label`
  height: 52px;
  width: 23.19%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.teal};
  margin-bottom: 41px;
`;

export const Input = styled.input`
  width: calc(100% - 23.19%);
  border: none;
  padding: 16px 0 16px 25px;
  color: ${({ theme }) => theme.navy};
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  height: 52px;
  outline: none;
  box-sizing: border-box;
  background: ${({ theme }) => theme.white};
`;

export const Div = styled.div`
  width: calc(100% - 23.19%);
  padding: 16px 0 16px 25px;
  height: 52px;
  background: ${({ theme }) => theme.white};
`;

export const Button = styled.button`
  width: 43.96%;
  height: 52px;
  background: linear-gradient(180deg, #679cf6 0%, #4072ee 100%);
  border-radius: 41px;
  border: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.white};
  margin-bottom: 75px;
  cursor: pointer;
`;

export const ReturnButton = styled.button`
  width: 220px;
  display: flex;
  border: none;
  background: none;
  justify-content: flex-start;
  align-items: center;
  height: 26px;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  cursor: pointer;
  font-family: "Rajdhani", sans-serif;

  div {
    margin-left: 10px;
  }

  span {
    font-weight: 700;
    text-decoration-line: underline;
    color: ${({ theme }) => theme.teal};
    margin-left: 4px;
  }
`;
