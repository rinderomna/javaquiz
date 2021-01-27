import styled from 'styled-components';
import db from '../../../db.json';

const Widget = styled.div `
  text-shadow: 1px 1px #111111;
  margin-top: 24px;
  margin-bottom: 24px;
  border: 2px solid #4d0000;
  background-color: #424242;
  border-radius: 10px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400px;
    line-height: 1;
  }
`;

Widget.Content = styled.div `
  font-size: 22px;
  font-weight: 600;
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *::last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Topic = styled.a `
  outline: 0;
  text-decoration: none;
  color: white;
  background-color: orange;
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: 5px;
  transition: .3s;
  display: block;

  & :hover,
  & :focus {
    opacity: .5;
  }
`;

Widget.Header = styled.header `
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${
    ({theme}) => theme.colors.primary
  };
  
  * {
    margin: 0;
  }
`;

export default Widget;
