import Profile from "@/components/School/Profile";
import { APIS } from "@/utils/endpoints";
import React from "react";

export const getServerSideProps = async (context) => {
  const { query } = context;
  console.log(query.schoolId);
  try {
    const data = await fetch(APIS._getSchoolById(query.schoolId));
    const parsedData = await data.json();
    return {
      props: {
        id: query.schoolId,
        data: parsedData.data,
      },
    };
  } catch (exp) {
    return {
      props: {
        error: exp,
      },
    };
  }
};

const SchoolProfilePage = ({ id, data }) => {
  console.log("🚀 ~ file: [schoolId].tsx:26 ~ SchoolProfilePage ~ data:", data);
  return (
    <>
      <Profile {...data} />
    </>
  );
};

export default SchoolProfilePage;
