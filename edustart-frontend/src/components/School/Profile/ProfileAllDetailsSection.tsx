import TeachersCard from "@/components/School/Profile/TeachersCard";
import Chip from "@/components/common/Chip";
import DashedDivider from "@/components/common/DashedDivider";
import React from "react";

const ProfileAllDetailsSection = ({ about, fees, teachers }) => {
  return (
    <div
      className="bg-white rounded-lg p-2 px-4 shadow"
      style={{ height: "-webkit-fill-available" }}
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-slate-400">About: </h2>
        <p className="text-slate-500 font-light">{about}</p>
      </div>
      <DashedDivider />
      <div className="flex flex-col gap-2">
        <h2 className="text-slate-400">Fees: </h2>
        <div className="flex gap-2">
          <Chip className="bg-sky-100 text-sky-500 border border-sky-400">
            Annual Fee: {fees.admissionFee}
          </Chip>
          <Chip className="bg-sky-100 text-sky-500 border border-sky-400">
            Application Fee: {fees.applicationFee}
          </Chip>
          <Chip className="bg-sky-100 text-sky-500 border border-sky-400">
            Security Fee: {fees.securityFee}
          </Chip>
        </div>
      </div>

      <DashedDivider />

      <div className="flex flex-col gap-2">
        <h2 className="text-slate-400">Teachers: </h2>
        <div className="flex flex-wrap gap-2">
          {teachers?.map((teacher) => (
            <TeachersCard key={teacher.name} {...teacher} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileAllDetailsSection;
