import API from "@/constants/api";
import fetch from "@/utils/request";

export const fetchClubTypes = () => {
  // return fetch({
  //   url: API.getClubType
  // });

  return Promise.resolve({
    data: [
      { id: 1, name: "运动" },
      { id: 2, name: "电竞" },
      { id: 3, name: "棋牌" },
      { id: 4, name: "学习" },
      { id: 0, name: "其它" }
    ]
  });
};

export const fetchClubs = () => {
  // return fetch({
  //   url: API.getClubs
  // });

  return Promise.resolve({
    data: [
      {
        id: 123,
        photo: "avatar",
        name: "篮球俱乐部",
        type: "运动",
        isManager: false,
        isJoin: true,
        introduction:
          "篮球是中国青少年最喜爱的体育运动之一 中国有着不错的的篮球迷数量，他们关注篮球，并投身到火热的篮球场上去"
      },
      {
        id: 124,
        photo: "avatar_java",
        name: "Java俱乐部",
        type: "研发",
        isManager: true,
        isJoin: true,
        introduction:
          "Java是一门面向对象编程语言,不仅吸收了C++语言的各种优点,还摒弃了C++里难以理解的多继承、指针等概念"
      },
      {
        id: 125,
        photo: "avatar_football",
        name: "足球俱乐部",
        type: "运动",
        isManager: false,
        isJoin: false,
        introduction:
          "足球俱乐部是足球职业化、专业化的一个标志，是足球运动员以足球谋生时，所被聘用的机构。"
      }
    ]
  });
};

export const fetchClubDetail = id => {
  // return fetch({
  //   url: API.getClubDetail
  // });

  return Promise.resolve({
    data: {
      id: 124,
      picture: "clubBackground",
      photo: "avatar_java",
      name: "Java俱乐部",
      type: "研发",
      isManager: true,
      isJoin: true,
      introduction:
        "Java是一门面向对象编程语言,不仅吸收了C++语言的各种优点,还摒弃了C++里难以理解的多继承、指针等概念",
      createDate: "2020-03-08",
      users: [
        {
          id: 1,
          photo: "jun_li",
          displayName: "Jun Li"
        },
        {
          id: 1,
          photo: "hao_lin",
          displayName: "Hao Lin"
        },
        {
          id: 1,
          photo: "jiaxin_li",
          displayName: "Jiaxin Li"
        },
        {
          id: 1,
          photo: "jiawei_chen",
          displayName: "Jiawei Chen"
        }
      ]
    }
  });
};
