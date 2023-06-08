import { CreateChannelForm } from "@/Components/channel/createChannelForm";
import { FormLayout } from "@/Components/form/formLayout";
import { getAllUsers } from "@/api/API";
import requireAuth from "@/security/ProtectedRoute";
import { UserListData } from "@/utils/types";
import { GetServerSideProps } from "next";

const Create = ({ users }: { users: UserListData }) => {
  return (
    <FormLayout
      title="Create Channel"
      component={<CreateChannelForm users={users} />}
    />
  );
};
export const getServerSideProps: GetServerSideProps = getAllUsers;
export default requireAuth(Create);
