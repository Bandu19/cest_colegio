import styled from "styled-components";

export const MobileIcon = styled.div`
   display: none;
   width: 100px;
   padding: 0 0 0 0;

   @media screen and (max-width: 768px) {
      display: flex;
      justify-content-center;
      cursor: pointer;

      svg {
         fill: #fff;
      }
   }
`;

export const Menu = styled.ul`
   height: 100%;
   display: flex;
   list-style: none;

   @media screen and (max-width: 768px) {
      background-color: #23394d;
      position: absolute;
  
      right 0;
      top: 80px;
      width: 52%;
      height: 90vh;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      transition: 0.5s all ease;
   }
`;
