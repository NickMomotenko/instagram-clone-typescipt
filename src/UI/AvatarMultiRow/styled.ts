import styled from "styled-components";

import Avatar from "../Avatar";

export const SingleAvatar = styled(Avatar)`
  margin-left: -5px;
  background-color: #fff;

  &:first-child {
    margin-left: 0;
  }
`;

export const AvatarMultiRowWrapp = styled.div`
  display: flex;
  align-items: center;
`;
