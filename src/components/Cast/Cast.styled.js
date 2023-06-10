import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// import styled from 'styled-components';

// export const CastLink = styled(Link)`
//   text-decoration: none;
//   padding: 2px 8px;

//   &:hover {
//     border-radius: 5px;
//     box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.5);
//   }
// `;

export const CastList = styled.ul`
  text-decoration: none;
  list-style: none;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px 10px;
  justify-content: center;
 
`;
export const CastItem = styled.li`
  flex-basis: calc((100% - 60px) / 5);
  margin: 10px 0 16px;
  padding: 2px 8px;
  width: 250px;
  // box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.5);
`;

export const Img = styled.img`
  display: block;
  margin-bottom: 5px;
  border-radius: 4px;
  width: auto;
`;

export const Name = styled.h3`
  margin: 8px 0;
`;
export const Character = styled.p`
  margin: 0;
`;
