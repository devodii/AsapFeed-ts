import { NextPageWithLayout } from "@/pages/_app";
import Layout from "./layout";
import { ReactElement } from "react";
import { BoardForm } from "./components";

const CreateBoardPage: NextPageWithLayout = () => <BoardForm />;

CreateBoardPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <div>{page}</div>
    </Layout>
  );
};

export default CreateBoardPage;
