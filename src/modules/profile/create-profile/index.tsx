import { Alert, Avatar, Button, Input, Loader } from "../../../components";
import { AvatarPicker } from "../components/avatar-picker";
import { useCreateProfile } from "./hooks/use-create-profile";
import { Actions, Container, Limiter } from "./styles";

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
      <Container>
        <Limiter>
          <div>
            <h1 className="title">Create Profile</h1>
            <div className="flex-center" onClick={open}>
              <Avatar image={avatar?.image} isEdit />
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
              <Actions>
                <Button
                  type="submit"
                  fullWidth
                  isLoading={isPending}
                  disabled={isDisabled}
                >
                  Save
                </Button>
                <Button variant="filled" type="button" onClick={handleClose}>
                  Cancel
                </Button>
              </Actions>
            </form>
            {isError && <Alert>Deu errado!</Alert>}
          </div>
        </Limiter>
      </Container>
      {isOpen ? (
        <AvatarPicker onSelectAvatar={selectAvatar} onClose={close} />
      ) : null}

      {isPending && <Loader />}
    </>
  );
};
