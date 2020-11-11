import React from "react";
import MaterialTable from "material-table";
import ProfileDrawer from "./profile-drawer";
import { useHistory } from "react-router-dom";

const MaterialTableComponent = (props) => {
  const history = useHistory();
  const [drawerVisible, setDrawerVisible] = React.useState(false);
  let actions = [];
  let editableAction = {};
  if (props.editable === "delete") {
    editableAction = {
      onRowDelete: (oldData) =>
        new Promise((resolve, reject) => {
          setTimeout(async () => {
            //write delete code here
            await props.editableAction(oldData.id);
            resolve();
          }, 1000);
        }),
    };
  } else {
    editableAction = {
      onRowUpdate: (newData, oldData) =>
        new Promise((resolve, reject) => {
          setTimeout(async () => {
            // const dataUpdate = [...data];
            // const index = oldData.tableData.id;
            // dataUpdate[index] = newData;
            // setData([...dataUpdate]);
            await props.editableAction(oldData.id, newData);
            resolve();
          }, 1000);
        }),
    };
  }
  if (props.allowExtraAction === true) {
    actions = [
      {
        icon: "edit",
        tooltip: "Edit",
        onClick: async (event, rowData) => {
          await props.getByIdAction(rowData.id);
          history.push("/home/Edit" + props.title);
        },
      },
      {
        icon: "visibility",
        tooltip: "View Details",
        onClick: async (event, rowData) => {
          await props.getByIdAction(rowData.id);
          setDrawerVisible(true);
        },
      },
    ];
  }

  return (
    <>
      <MaterialTable
        title={props.title + " Record"}
        columns={props.columns}
        actions={actions}
        data={props.data}
        options={{ exportButton: true }}
        editable={editableAction}
      />
      <ProfileDrawer
        drawerVisible={drawerVisible}
        closeDrawer={() => setDrawerVisible(!drawerVisible)}
        data={props.profileData}
      />
    </>
  );
};

export default MaterialTableComponent;
