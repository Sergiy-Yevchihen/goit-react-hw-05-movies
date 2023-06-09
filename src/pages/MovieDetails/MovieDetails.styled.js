import styled from 'styled-components';
  import { Link } from 'react-router-dom';

export const Title = styled.h2`
  margin: 0;
`;
export const MovieBox = styled.div`
  display: flex;
  padding: 20px;
  border-bottom: solid 1px grey;
  background-color: #63c5da;
`;
export const MovieInfo = styled.div`
  padding: 20px 40px;
`;
export const GenresList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  gap: 16px;
`;
export const Button = styled.button`
  margin-top: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  margin-bottom: 10px;
  font-weight: 500;
  background-color: rgb(63, 77, 217);
  
  text-decoration: none;
  &:hover,
  &:focus {
   background-color: #63c5da;
    
  }
`;

export const LinkBack = styled(Link)`
  text-decoration: none;
  list-style: none;
  display: flex;
  font-size: 14px;
  align-items: center;
  column-gap: 10px;
  color: white;
`;
export const InfoBox = styled.div`
  
  padding: 20px;
  border-bottom: solid 1px grey;
`;



export const LinkCast = styled(Link)`
  text-decoration: none;
  display: blok;
  font-size: 14px;
  align-items: center;
  column-gap: 10px;
  color: white;
   &:hover,
  &:focus {
   color: #0b0c0c;
`;

export const LinkReviews = styled(Link)`
  text-decoration: none;
  display: blok;
  font-size: 14px;
  align-items: center;
  column-gap: 10px;
  color: white;
   &:hover,
  &:focus {
   color: #0b0c0c;
`;