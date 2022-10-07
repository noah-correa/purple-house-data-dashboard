// import Header from './Header';
// import Footer from './Footer';
import styled from 'styled-components';

// import { useAuth } from '../Auth';

const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${ props => props.theme.background };
    color: ${ props => props.theme.text };
    min-height: 100vh;
`;

const SiteWrapper = ({ children }) => {
  // const auth = useAuth();
  return (
    <>
      {/* <Header auth={auth}/> */}
      <BodyWrapper>
        { children }
      </BodyWrapper>
      {/* <Footer/> */}
    </>
  );
};

export default SiteWrapper;
