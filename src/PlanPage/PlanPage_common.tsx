import styled from "styled-components";
import { CommonNavigation } from "../common/commonNavigation";
import { CommonFooter } from "../common/commonFooter";
import { PlanPage_622_Timeline } from "./PlanPage_622_Timeline";
import { Landing_Divider } from "../Landing/Divider";
import { PlanPage_622_Schedule } from "./PlanPage_622_Schedule";
import { PlanPage_622_Highlights } from "./PlanPage_622_Highlights";
import { PlanPage_623_Timeline } from "./PlanPage_623_Timeline";
import { PlanPage_623_Schedule } from "./PlanPage_623_Schedule";
import { PlanPage_623_Highlights } from "./PlanPage_623_Highlights";
import { PlanPage_624_Timeline } from "./PlanPage_624_Timeline";
import { PlanPage_624_Schedule } from "./PlanPage_624_Schedule";

export type VisitDate = "622" | "623" | "624";

const PlanPage_commonStyle = styled.div`
  max-width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

interface PlanPage_commonProps {
  visitDate: VisitDate;
}

export const PlanPage_common: React.FC<PlanPage_commonProps> = ({
  visitDate,
}) => {
  return (
    <PlanPage_commonStyle>
      <CommonNavigation></CommonNavigation>
      {visitDate === "622" ? (
        <PlanPage_common_622 />
      ) : visitDate === "623" ? (
        <PlanPage_common_623 />
      ) : visitDate === "624" ? (
        <PlanPage_common_624 />
      ) : null}

      <CommonFooter></CommonFooter>
    </PlanPage_commonStyle>
  );
};

const PlanPage_common_622 = () => {
  return (
    <>
      <Landing_Divider />
      <h1>旅程</h1>
      <PlanPage_622_Timeline></PlanPage_622_Timeline>
      <h2>各種リンク</h2>
      <PlanPage_622_Schedule></PlanPage_622_Schedule>
      <Landing_Divider />
      <h1>見どころ</h1>
      <PlanPage_622_Highlights></PlanPage_622_Highlights>
    </>
  );
};

const PlanPage_common_623 = () => {
  return (
    <>
      <Landing_Divider />
      <h1>旅程</h1>
      <PlanPage_623_Timeline></PlanPage_623_Timeline>
      <h2>各種リンク</h2>
      <PlanPage_623_Schedule></PlanPage_623_Schedule>
      <Landing_Divider />
      <h1>見どころ</h1>
      <PlanPage_623_Highlights></PlanPage_623_Highlights>
    </>
  );
};

const PlanPage_common_624 = () => {
  return (
    <>
      <Landing_Divider />
      <h1>旅程</h1>
      <PlanPage_624_Timeline></PlanPage_624_Timeline>
      <h2>各種リンク</h2>
      <PlanPage_624_Schedule></PlanPage_624_Schedule>
      <Landing_Divider />
      <h1>見どころ</h1>
      <span>--作成中--</span>
    </>
  );
};
