import styled from 'styled-components'

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightOrange);
  border-color:${props => props.cart ? "#304DA2" :"var(--lightOrange)"};
  color:${prop => prop.cart ? "#07A4F9" :" var(--lightOrange)"};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${prop => prop.cart ? "#304DA2" : " var(--lightOrange)"};
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
`;