export const UPDATE_SCHOOL_REGISTER_FORM = "UPDATE_SCHOOL_REGISTER_FORM";
export const ERROR = "ERROR"

export const _updateSchoolRegForm = (pl) => {
    return {
        type: UPDATE_SCHOOL_REGISTER_FORM,
        payload: pl
    };
};

export const _updateErrorStatus = (pl) => {
    return {
        type: ERROR,
        payload: pl
    }
}