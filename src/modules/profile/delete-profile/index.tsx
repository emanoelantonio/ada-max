import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteProfile, getProfile } from "../../../services";

import { AxiosError, isAxiosError } from "axios";
import { Alert, Avatar, Loader } from "../../../components";

import { ProfileType } from "../../../types";
import styles from "./index.module.css";

export const DeleteProfile = () => {
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const params = useParams<{ id: string }>();
  const id = Number(params.id);
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    async function getData() {
      try {
        const { data } = await getProfile(id);
        setProfile(data);
      } catch (err) {
        if (isAxiosError<{ message: string }>(err)) {
          const message = err.response?.status === 404
            ? "I didn't find this Profile!"
            : "Try again!"
            setError(message);
        }
      }
      setIsLoading(false);
    }
    getData();
  }, [id]);

  const handleDelete = async () => {
    if (!profile) {
      return;
    }
    setIsLoading(true);
    try {
      const { data } = await deleteProfile(id);
      console.log("data", data);
      navigate("/profile");
      return;
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      setError(error.response?.data?.message || "Something went wrong");
    }
    setIsLoading(false);
  };
  // colocar algum modal para isso.
  if (error) {
    return (
      <Alert>
        {error}clique aqui para voltar{" "}
        <button onClick={()=>navigate("/profile")}>Voltar ao perfil</button>
      </Alert>
    )
  }

  return (
    <>
      <div className="container">
        <div className={styles.header}>
          <Avatar image={profile?.avatar.image} disabled />
          <h4>{profile?.name}</h4>
        </div>
        <h1 className="title">Delete Profile ?</h1>
        <p className={styles.p}>
          This will permanently delete all settings and preferences for this
          profile, including My List and Continue Watching.
        </p>

        <div className={styles.actions}>
          <button
            className="btn btn--full btn--white"
            onClick={handleDelete}
            disabled={isLoading}
          >
            Delete Profile
          </button>
          <button
            className="btn btn--full btn--primary"
            onClick={() => navigate("/profile")}
          >
            Cancel
          </button>
        </div>
      </div>
      {isLoading && <Loader />}
    </>
  );
};