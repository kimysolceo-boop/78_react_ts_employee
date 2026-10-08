import type { EmployeeCardProps } from "./types";
import {
  CardWrapper,
  InfoBlock,
  Label,
  Value,
} from "./styles";

function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <CardWrapper>
      <InfoBlock>
        <Label>Name</Label>
        <Value>{employee.name}</Value>
      </InfoBlock>

      <InfoBlock>
        <Label>Surname</Label>
        <Value>{employee.surname}</Value>
      </InfoBlock>

      <InfoBlock>
        <Label>Age</Label>
        <Value>{employee.age}</Value>
      </InfoBlock>

            {employee.jobPosition && (
        <InfoBlock>
          <Label>Job Position</Label>
          <Value>{employee.jobPosition}</Value>
        </InfoBlock>
      )}
    </CardWrapper>
  );
}

export default EmployeeCard;
