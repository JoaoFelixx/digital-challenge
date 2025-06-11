import styled from 'styled-components';


export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 1em;
  
  padding: 2rem;
  
  background-color: #f6f8fa;

  text-align: center;


`;

export const Title = styled.h1`
  font-size: 2.5rem;
    
  line-height: normal;

  color: #333;
`;

export const Subtitle = styled.p`
  color: #666;
  font-size: 1.2rem;
  line-height: normal;

  max-width: 600px;
`;