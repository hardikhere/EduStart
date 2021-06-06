import axiosSchoolAdminInstance from "../../../../utils/axiosSchoolAdminInstance"
import { APIS } from "../../../../utils/endpoints"

export const getSchoolAdminDetailsByToken = async () => {
    return axiosSchoolAdminInstance.get(APIS._getSchoolAdminDetails)
        .then(res => {
            if (res.data.success)
                return res.data.data;
            else return false
        })
        .catch(err => {
            return false;
        })
}