import styled from "styled-components";

export const MobileIcon = styled.div`
   /* display: none;
   width: 100px;
   padding: 0 0 0 0; */
`;

export const Menu = styled.ul`
   /* margin-left: auto;*/
   padding: 0;
   display: grid;
   grid-auto-flow: column;
   grid-auto-columns: max-content;
   gap: 2em;

   @media screen and (max-width: 800px) {
      background-color: #23394d;
      position: absolute;
      max-width: 400px;
      width: 100%;
      height: 86vh;
      top: 80px;
      bottom: 0;
      right: ${({ open }) => (open ? "0" : "-100%")};
      overflow-y: auto; /*MUY IMPORTANTE*/
      opacity: 1;
      display: grid;
      gap: 20px;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(5, 1fr);
      transition: 0.5s all ease;
   }
`;

export const MenuItem = styled.li`
   /* height: 100%; */
   list-style: none;
   @media screen and (max-width: 800px) {
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
