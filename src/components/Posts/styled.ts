import styled, {css} from "styled-components";

export const PostsWrapp = styled.div`
  width: 100%;
`;

export const PostList = styled.ul<{$baseColumnCounter?: number | string}>`
  width: 100%;
  
  display:grid;
  grid-template-columns: repeat(4 , 1fr);
  grid-column-gap: 20px;
  
  ${({$baseColumnCounter}) => $baseColumnCounter && css`
    grid-template-columns: repeat(${$baseColumnCounter}, 1fr);
  `}
  
`;
