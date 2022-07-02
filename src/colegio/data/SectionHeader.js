import styled from "styled-components";

export const MenuItem = styled.div`
   /* height: 100%; */
   display: none;

   padding: 2px 5px;
   margin: 15px 0;
   @media screen and (max-width: 768px) {
      width: 100px;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Cabin", sans-serif;
      font-size: 110%;

      &:hover {
         color: #fff;
         background-color: #e0792a;
         transition: 0.5s all ease;
      }
   }
`;

export const MobileIcon = styled.div`
   display: none;
   width: 100px;
   padding: 0 0 0 0;

   @media screen and (max-width: 768px) {
      display: flex;
      /* justify-content-center; */
      cursor: pointer;

      svg {
         fill: #fff;
      }
   }
`;
