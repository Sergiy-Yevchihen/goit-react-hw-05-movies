import { Circles } from 'react-loader-spinner';
import { LoadDiv } from './Loader.styled';
export const Loader = () => (
  <LoadDiv>
    <Circles
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </LoadDiv>
);
