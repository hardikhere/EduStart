import { isSchoolSaved, saveSavedSchoolsInLS } from "@/components/School/utils";
import Button from "@/components/common/Button";
import { CheckIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";

const SaveSchoolButton = ({ schoolId }) => {
  const [saved, setIsSaved] = useState(() => {
    return isSchoolSaved(schoolId);
  });

  useEffect(() => {
    setIsSaved(isSchoolSaved(schoolId));
  }, [schoolId]);

  return (
    <Button
      onClick={
        saved
          ? () => {}
          : () => {
              saveSavedSchoolsInLS(schoolId);
              setIsSaved(true);
            }
      }
      className="h-6 pt-4 pb-4 bg-slate-100
        text-slate-500 text-sm"
    >
      {saved && <CheckIcon className="h-4" />}
      {saved ? "Saved" : "Save"}
    </Button>
  );
};

export default SaveSchoolButton;
