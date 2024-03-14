import { AvatarType } from "../../../../types";

import clsx from "clsx";
import { Avatar } from "../../../../components/";
import { useGetAvatars } from "../../hooks/use-get-avatars";
import styles from "./index.module.css";

type Props = {
  onSelectAvatar: (avatar: AvatarType) => void;
  onClose: () => void;
};

export const AvatarPicker = ({ onSelectAvatar, onClose }: Props) => {
  const { data, isLoading } = useGetAvatars();
  
  if (isLoading) {
    return <div>Loading...</div>
  }

  const path = window.location.origin

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <button
          className={clsx("btn btn--primary", styles.close)}
          onClick={onClose}
        >
          Back
        </button>
        <div className="section">
          <h1 className="title">Choose an Avatar</h1>
        </div>
        <div className={styles.container}>
          <div className={styles.scroll}>
            {data?.map((avatar) => {
              return (
                <div className={styles.box} key={avatar.name}>
                  <h4 id={avatar.name}>{avatar.name}</h4>
                  <div className={styles.box__items}>
                    {avatar.items.map((item) => (
                      <span
                        onClick={() => onSelectAvatar(item)}
                        key={item.id}
                        className={styles.box__items__item}
                      >
                        <Avatar image={`${path}/public/images/${item.image}.webp`} size="large"/>
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};