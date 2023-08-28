import styled from '@emotion/styled';

export const Wrapper = styled.button`
  border: 1px solid #3eb18c;
  position: relative;
  width: fit-content;
  display: grid;
  flex-direction: column;
  font-weight: 500;
  color: red;
  font-size: 1.25rem;
  padding: 0;
  cursor: pointer;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Description = styled.div`
  background-color: black;
  filter: opacity(0.5);
  position: absolute;
  left: 0;
  width: 100%;
  padding: 0.313rem;
  display: grid;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
`;

export const Title = styled.div``;

export const FinishTime = styled.div``;

export const BidWrapper = styled.div`
  background-color: black;
  filter: opacity(0.5);
  bottom: 0;
  right: 0;
  position: absolute;
`;

export const BidText = styled.div`
  padding: 0.313rem;
`;

export const MileAge = styled.div`
  padding: 0.313rem;
`;
