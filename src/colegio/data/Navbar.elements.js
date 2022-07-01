import styled from "styled-components";

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

export const Menu = styled.ul`
   height: 100%;
   display: flex;
   list-style: none;
   margin-bottom: 0;

   @media screen and (max-width: 768px) {
      background-color: #23394d;
      position: absolute;
      opacity: 1;
      right: ${({ open }) => (open ? "0" : "-100%")};
      top: 80px;
      width: 52%;
      height: 90vh;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      transition: 0.5s all ease;
      padding-left: 0;
   }

   @media screen and (max-width: 425px) {
      background-color: #23394d;
      position: absolute;
      opacity: 1;
      right: ${({ open }) => (open ? "0" : "-100%")};
      top: 78px;
      width: 52%;
      height: 100vh;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      transition: 0.5s all ease;
      padding-left: 0;
   }
`;

export const MenuItem = styled.div`
   /* height: 100%; */
   padding: 2px 5px;
   margin: 15px 0;
   @media screen and (max-width: 768px) {
      width: 100%;
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
