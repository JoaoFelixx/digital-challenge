import { memo } from "react";

interface Action {
  name: string;
  icon: string;
  click(): void
}

interface ActionItemProps {
  action: Action
}


const ActionItem = ({ action }: ActionItemProps) => {
  return (
    <li key={action.name} onClick={action.click}>
      <img
        src={action.icon}
        alt={action.name}

      />
      <span>{action.name}</span>
    </li>
  )
}

export default memo(ActionItem);