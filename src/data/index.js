import { faker } from "@faker-js/faker";
import {
  ChatCircleDots,
  ChatText,
  Gear,
  GearSix,
  ListChecks,
  Phone,
  PhoneCall,
  SignOut,
  Timer,
  User,
  UserList,
  Users,
} from "phosphor-react";

const Profile_Menu = [
  {
    title: "Profile",
    icon: <User />,
  },
  {
    title: "Settings",
    icon: <Gear />,
  },
  {
    title: "Signout",
    icon: <SignOut />,
  },
];

const Nav_Buttons = [
  {
    index: 0,
    icon: <ChatText />,
    title: "Chat",
  },
  {
    index: 1,
    icon: <UserList />,
    title: "Groups",
  },
  {
    index: 2,
    icon: <PhoneCall />,
    title: "Call",
  },
  {
    index: 3,
    icon: <ListChecks />,
    title: "To Do",
  },
  {
    index: 4,
    icon: <Timer />,
    title: "Pomodoro",
  },
  {
    index: 5,
    icon: <GearSix />,
    title: "Settings",
  },
];

// const Nav_Setting = [
//   {
//     index: 5,
//     icon: <GearSix />,
//   },
// ];

const ChatList = [
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "9:36",
    unread: 0,
    pinned: true,
    online: true,
    // level:0,
  },
  {
    id: 1,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "12:02",
    unread: 2,
    pinned: true,
    online: false,
    // level:0,
  },
  {
    id: 2,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "10:35",
    unread: 3,
    pinned: false,
    online: true,
    // level:0,
  },
  {
    id: 3,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "04:00",
    unread: 0,
    pinned: false,
    online: true,
    // level:0,
  },
  {
    id: 4,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
    // level:0,
  },
  {
    id: 5,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
    // level:0,
  },
  {
    id: 6,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
    // level:0,
  },
  {
    id: 7,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
    // level:0,
  },
];

const Chat_History = [
  {
    type: "msg",
    message: "Hi 👋🏻, How are ya ?",
    incoming: true,
    outgoing: false,
  },
  {
    type: "divider",
    text: "Today",
  },
  {
    type: "msg",
    message: "Hi 👋 Panda, not bad, u ?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Can you send me an abstarct image?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Ya sure, sending you a pic",
    incoming: true,
    outgoing: false,
  },

  {
    type: "msg",
    subtype: "img",
    message: "Here You Go",
    img: faker.image.abstract(),
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    message: "Can you please send this in file format?",
    incoming: false,
    outgoing: true,
  },

  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "reply",
    reply: "This is a reply",
    message: "Yep, I can also do that",
    incoming: false,
    outgoing: true,
  },
];

const Message_options = [
  {
    title: "Reply",
  },
  {
    title: "React to message",
  },
  {
    title: "Forward message",
  },
  {
    title: "Star message",
  },
  {
    title: "Report",
  },
  {
    title: "Delete Message",
  },
];
// shared link messages.
const Shared_Links = [
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: faker.image.cats(),
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
];
// shared documents messages/
const Shared_Documents = [
  {
    type: "doc",
    subtype: "reply",
    reply: "This is a reply",
    message: "Yep, I can also do that",
    incoming: false,
    outgoing: true,
  },
  {
    type: "doc",
    subtype: "reply",
    reply: "This is a reply",
    message: "Yep, I can also do that",
    incoming: false,
    outgoing: true,
  },
  {
    type: "doc",
    subtype: "reply",
    reply: "This is a reply",
    message: "Yep, I can also do that",
    incoming: false,
    outgoing: true,
  },
  {
    type: "doc",
    subtype: "reply",
    reply: "This is a reply",
    message: "Yep, I can also do that",
    incoming: false,
    outgoing: true,
  },
  {
    type: "doc",
    subtype: "reply",
    reply: "This is a reply",
    message: "Yep, I can also do that",
    incoming: false,
    outgoing: true,
  },
  {
    type: "doc",
    subtype: "reply",
    reply: "This is a reply",
    message: "Yep, I can also do that",
    incoming: false,
    outgoing: true,
  },
];
const Call_History = [
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    incoming: true,
    missed: false,
    // level:0,
  },
  {
    id: 1,
    incoming: true,
    missed: false,
    img: faker.image.avatar(),
    name: faker.name.firstName(),

    // level:0,
  },
  {
    id: 2,
    incoming: true,
    missed: false,
    img: faker.image.avatar(),
    name: faker.name.firstName(),

    // level:0,
  },
  {
    id: 3,
    incoming: true,
    missed: false,
    img: faker.image.avatar(),
    name: faker.name.firstName(),

    // level:0,
  },
  {
    id: 4,
    incoming: true,
    missed: false,
    img: faker.image.avatar(),
    name: faker.name.firstName(),

    // level:0,
  },
  {
    id: 5,
    incoming: true,
    missed: false,
    img: faker.image.avatar(),
    name: faker.name.firstName(),

    // level:0,
  },
  {
    id: 6,
    incoming: true,
    missed: false,
    img: faker.image.avatar(),
    name: faker.name.firstName(),

    // level:0,
  },
  {
    id: 7,
    incoming: true,
    missed: false,
    img: faker.image.avatar(),
    name: faker.name.firstName(),

    // level:0,
  },
];
// Members_List
const Members_List = [
  {
    id: 0,

    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online:true,
    // level:0,
  },
  {
    id: 1,

    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online:true,
    // level:0,
  },
  {
    id: 2,

    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online:true,
    // level:0,
  },
  {
    id: 3,

    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online:false,
    // level:0,
  },
  {
    id: 4,

    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online:false,
    // level:0,
  },
  {
    id: 5,

    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online:false,
    // level:0,
  },
];
const Components_Desc = [
  {
    title: "Messages",
    link: "/app",
    image: "../../../public/images/image-1.jpg",
    id: 0,
  },
  {
    title: "Voice and Video Call",
    link: "/app/call",
    image: "../../../public/images/image-2.jpg",

    id: 1,
  },
  {
    title: "Pomodoro",
    link: "/app/call",

    image: "",
    id:2
  },
  {
    title: "To Do List",
    link: "/app/todo",
    image: "",
    id:3
  },
  {
    title: "Pomodoro",
    link: "/app/pomodoro",
    image: "",
    id:4
  },
];


export {
  Profile_Menu,
  // Nav_Setting,
  Nav_Buttons,
  ChatList,
  Chat_History,
  Message_options,
  Shared_Documents,
  Shared_Links,
  Call_History, 
  Members_List, 
  Components_Desc
};
