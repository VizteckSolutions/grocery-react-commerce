/**
 * @description      :
 * @author           :
 * @group            :
 * @created          : 11/02/2022 - 11:13:24
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 11/02/2022
 * - Author          :
 * - Modification    :
 **/
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
const Index = () => {
  return (
    <>
      <Stack
        sx={{
          color: "grey.500",
          justifyContent: "center",
          alignItems: "center",
          mt: 4
        }}
        spacing={2}
        direction="row"
      >
        <CircularProgress color="inherit" />
      </Stack>
    </>
  );
};

export default Index;
