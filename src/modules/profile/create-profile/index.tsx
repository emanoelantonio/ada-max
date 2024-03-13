import { Alert, Avatar, Button, Input, Loader } from "../../../components";
import { AvatarPicker } from "../components/avatar-picker";
import { useCreateProfile } from "./hooks/use-create-profile";
import styles from "./index.module.css";

export const CreateProfile = () => {
  const {
    register,
    handleSubmit,
    handleClose,
    errors,
    isPending,
    isError,
    avatar,
    selectAvatar,
    isDisabled,
    open,
    close,
    isOpen,
   } = useCreateProfile();

  return (
    <>
      <div className="container">
        <div className={styles.limiter}>
          <div className={styles.container}>
            <h1 className="title">Create Profile</h1>
            <div className="flex-center" onClick={open}>
              <Avatar image={ avatar?.image} isEdit />
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <Input
                  type="hidden"
                  error={errors?.avatarId?.message}
                  {...register("avatarId")}
                />
                <Input
                  label="Profile Name"
                  disabled={isPending}
                  error={errors.name?.message}
                  {...register("name")}
                />
              </div>
              <div className={styles.actions}>
                <Button
                  type="submit"
                  fullWidth
                  isLoading={isPending}
                  disabled={isDisabled}
                >
                  Save
                </Button>
                <Button
                  variant="filled"
                  type="button"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </div>
            </form>
            {isError && <Alert>Deu errado!</Alert>}
          </div>
        </div>
      </div>
      {isOpen ? (
        <AvatarPicker onSelectAvatar={selectAvatar} onClose={close}/>
      ) : null}

      {isPending && <Loader />}
    </>
  );
};