import React, { useEffect, useState } from "react";
import ProfileTopBanner from "./ProfileTopBanner";
import ProfileMainDetails from "@/components/School/Profile/ProfileMainDetails";
import ProfileImageGallery from "@/components/School/Profile/ProfileImageGallery";
import RequestCallbackModal from "@/components/School/RequestCallbackModal";
import SaveSchoolButton from "@/components/School/SaveSchoolButton";
import ProfileAllDetailsSection from "@/components/School/Profile/ProfileAllDetailsSection";
import ProfileReviews from "@/components/School/Profile/ProfileReviews";
import { MailIcon } from "@heroicons/react/solid";

const Profile: React.FC<ISchoolProfile> = ({
  imageUrls,
  schoolId,
  about,
  fees,
  teachers,
  email = null,
  reviews = [],
  ...rest
}) => {
  const [shouldShowSaved, setShouldShowSaved] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setShouldShowSaved(true);
    }
  }, []);
  return (
    <div className="">
      {/* background cover */}
      <ProfileTopBanner imageUrls={imageUrls} />
      <div className="flex mt-2 gap-8 ml-4 mr-4 justify-between">
        <div className="w-1/3">
          <ProfileImageGallery imageUrls={imageUrls} />
          <ProfileReviews reviews={reviews} />
        </div>
        <div className="flex flex-col  w-2/3  z-2">
          <div className="flex gap-2">
            <div className="-mt-28">
              <ProfileMainDetails {...rest} />
            </div>
            <div className=" flex gap-2 h-20">
              <RequestCallbackModal id={schoolId} />
              {email && (
                <a
                  href="mailto:hardik@gmail.com"
                  className="bg-blue-500 text-sm hover:bg-blue-700
              flex items-center justify-center gap-1 h-8 text-white font-bold py-1 px-4 rounded"
                >
                  <MailIcon className="h-4" /> Send Email
                </a>
              )}
              {shouldShowSaved && <SaveSchoolButton schoolId={schoolId} />}
            </div>
          </div>
          <ProfileAllDetailsSection
            about={about}
            fees={fees}
            teachers={teachers}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
