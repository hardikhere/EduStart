// const BASE = "https://edustart-backend.onrender.com/api/v1";
const BASE = "http://localhost:8080/api/v1";
export const APIS = {
  _createSchool: BASE + "/create-school",
  _uploadImage: BASE + "/upload-image",
  _signupUser: BASE + "/user/register",
  _loginUser: BASE + "/user/login",
  _addFeed: BASE + "/new-feed",
  _deleteFeed: (id) => BASE + `/delete-feed/${id}`,
  _updateFeed: BASE + "/update-feed",
  _getFeeds: (sid) => BASE + `/feeds/school/${sid}`,
  _getSchoolById: (sid) => BASE + `/school/${sid}`,
  _addQuery: (sid) => BASE + `/query/${sid}`,
  _search: BASE + `/search`,
  _getUserByToken: BASE + `/user`,
  _getQueries: (schoolId) => BASE + `/school/queries/${schoolId}`,
  _schoolAdminLogin: BASE + `/schoolAdmin/login`,
  _schoolAdminRegister: BASE + `/schoolAdmin/register`,
  _getSchoolAdminDetails: BASE + `/schoolAdmin`,
  _unlockInquiry: (sid, qid) => BASE + `/school/${sid}/query/${qid}/unlock`,
  _lastQueryViewTimeUpdate: (id, time) =>
    BASE + `/lastquery-view/${id}/${time}`,
  _markContacted: (qid) => BASE + `/query/${qid}/contacted`,
  _markQueryReaded: (qid) => BASE + `/query/${qid}/readed`,
  _updateSchool: (sid) => BASE + `/update-school/${sid}`,
  _latestFeeds: BASE + "/feeds",
  _addReview: (uid, sid) => BASE + `/review/${sid}/${uid}`,
  _getSchoolsInBulk: (array) => BASE + `/schools?sids=${array.join(",")}`,
};
