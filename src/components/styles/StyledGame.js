import styled from "styled-components";

import bgImage from '../../images/bg.png';

export const StyledGameWrapper = styled.div`
width: 70vw;
  height: 80vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
  margin: 100px;
`

export const StyledGame = styled.div`
    display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;
  
  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`