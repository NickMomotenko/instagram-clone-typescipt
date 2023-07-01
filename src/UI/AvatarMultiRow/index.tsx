import React from "react";

import { SingleAvatar, AvatarMultiRowWrapp } from "./styled";

type AvatarMultiRowProps = {
  data: any[];
};

const AvatarMultiRow: React.FC<AvatarMultiRowProps> = ({ data = [] }) => {
  const isMoreThanThreeAvatars = data?.length >= 3;
  const changedData = isMoreThanThreeAvatars ? data?.slice(0, 3) : data;

  return (
    <AvatarMultiRowWrapp>
      {changedData.map((userData, index) => {
        const {
          id,
          user: { avatar, fullname },
        } = userData;
        return (
          <SingleAvatar
            key={id}
            url={avatar}
            fullname={fullname}
            size={20}
            $textSize={9}
            $noGradient
            index={index}
          />
        );
      })}
    </AvatarMultiRowWrapp>
  );
};

export default AvatarMultiRow;
