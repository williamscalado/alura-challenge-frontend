import { Header } from "../../components/Header";
import { DashboardUpload } from "../../components/Upload";
import { UploadSummary } from "../../components/UploadSummary";

export const Upload = () => {
  return (
    <>
      <Header />
      <DashboardUpload />
      <UploadSummary />
    </>
  );
};
