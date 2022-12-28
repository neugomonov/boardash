import {
  GridColDef,
  GridColumnMenuContainer,
  GridFilterMenuItem,
  HideGridColMenuItem,
} from "@mui/x-data-grid";
import { SyntheticEvent } from "react";

const CustomColumnMenu = (props: {
  hideMenu: (event: SyntheticEvent<Element, Event>) => void;
  currentColumn: GridColDef<any, any, any>;
  open: boolean;
}) => {
  const { hideMenu, currentColumn, open } = props;
  return (
    <GridColumnMenuContainer
      hideMenu={hideMenu}
      currentColumn={currentColumn}
      open={open}
    >
      <GridFilterMenuItem onClick={hideMenu} column={currentColumn} />
      <HideGridColMenuItem onClick={hideMenu} column={currentColumn} />
    </GridColumnMenuContainer>
  );
};

export default CustomColumnMenu;
