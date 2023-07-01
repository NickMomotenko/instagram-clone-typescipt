import {
  PostShareToWrapp,
  PostShareToList,
  PostShareToItem,
} from "./PostStyles";

import { ShareItem } from "./types";

import tgIcon from "../../assets/icons/tg.svg";
import instaIcon from "../../assets/icons/insta.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import Button from "../Button";

const shareList: ShareItem[] = [
  {
    title: "Telegram",
    icon: tgIcon,
    link: "",
  },
  {
    title: "Instagram",
    icon: instaIcon,
    link: "",
  },
  {
    title: "Twitter",
    icon: twitterIcon,
    link: "",
  },
];

export const PostShareTo: React.FC = () => {
  return (
    <PostShareToWrapp>
      <PostShareToList>
        {shareList?.map(({ icon }: ShareItem, index: number) => {
          return (
            <PostShareToItem key={index}>
              <Button view="ghost" icon={icon} />
            </PostShareToItem>
          );
        })}
      </PostShareToList>
    </PostShareToWrapp>
  );
};
