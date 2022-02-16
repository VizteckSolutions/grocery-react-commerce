/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 26/01/2022 - 14:44:39
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 26/01/2022
    * - Author          : 
    * - Modification    : 
**/
import { useContext } from "react";
import { DataContext } from "./DataContext";

const useGlobal = () => {
  const context = useContext(DataContext);

  if (context === undefined) {
    throw new Error("useGlobal can only be used inside GlobalProvider");
  }
  return context;
};

export default useGlobal;
