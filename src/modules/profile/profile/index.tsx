import { Link } from "react-router-dom";
import { Avatar, Button, Loader } from "../../../components";
import { useGetProfiles } from "../hooks/use-get-profiles";
import { useProfile } from "./hooks/use-profile";

export const Profile = () => {

  const { data, isLoading } = useGetProfiles();
  const { goToPage, isEditing, toggleEditing } = useProfile();

  return (
    <>
      <div className="container">
        <div className="section">
          <h1 className="title">Who’s Watching?</h1>
          <div className="avatars">
            {data?.map((profile) => (
              <button
                className="avatar__item"
                key={profile.id}
                onClick={() => goToPage(profile.id)}
              >
                <Avatar image={profile.avatar.image} isEdit={isEditing}/>
                <div className="avatar__name">{profile.name}</div>
              </button>
            ))}
            <Link
              to="/create-profile"
              className="avatar__item avatar__item--new"
            >
              <div className="avatar__image">+</div>
              <div className="avatar__name">New Profile</div>
            </Link>
          </div>
          <div className="avatar__actions">
            <Button variant="filled" onClick={toggleEditing}>
              {isEditing ? "Done" : "Edit"}
            </Button>
          </div>
        </div>
      </div>
      {isLoading && <Loader />}
    </>
  );
};