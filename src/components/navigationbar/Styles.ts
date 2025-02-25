import styled from 'styled-components';

export const Layout = styled.div`
  width: 90%;
  height: 9%;
  gap: 4rem;
  background:
    linear-gradient(#c9d9ea, #c9d9ea) padding-box,
    linear-gradient(-45deg, #fff, transparent, #fff, transparent);
  border: 1px solid transparent;
  border-radius: 2.8rem;
  display: inline-block;
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const IconLayout = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 30%;
`;
