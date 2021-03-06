export default {
  ping: "/api/ping",
  getClubs: "/api/club",
  createClub: "/api/club",
  updateClub: "/api/club",
  getClubType: "/api/club/type",
  deleteClubMember: "/api/club/<clubId>/member/<userId>",
  getClubDetailInfo: "/api/club/<clubId>",
  getInvolvedClubs: "/api/club/user",
  getInvolvedActivities: "/api/activity/user/<userId>",
  getUserInfo: "/api/user/<userId>",
  createActivity: "/api/activity",
  editActivity: "/api/activity",
  getActivities: "/api/activity/list/visible",
  getActivityDetail: "/api/activity/<activityId>",
  getClubActivity: "/api/activity/club/<clubId>",
  quitClub: "/api/club/<clubId>/member",
  // 我的申请
  getClubApply: "/api/club/application",
  getJoinClubApply: "/api/club/join/application",
  deleteClub: "/api/club/<clubId>",
  cancelJoinClub: "/api/club/join/<clubId>",
  // 我的审批
  getClubApprove: "/api/club/application/admin",
  getJoinClubApprove: "/api/club/application/manager",
  approveClub: "/api/club/process",
  approveJoinClub: "/api/club/member",

  joinClub: "/api/club/join",
  joinActivity: "/api/activity/<activityId>/join",
  cancelJoinActivity: "/api/activity/<activityId>/cancelJoining"
};
