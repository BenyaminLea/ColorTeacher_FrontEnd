import React from 'react';


export const UserContext = React.createContext({
    user: {
        username: "hi",
        email: "",
        fName: "im",
        lName: "a mock",
        about: "abouttttttttt",
        rank: "7",
        lastPlayed: "1h ago",
        totalPoints: "1563",
        gold: "48963"
    },
    setUserInfo: function (info) { this.user = info }
});

// export const CurrentUserContext = React.createContext({
//     username: "",
//         email: "",
//         fName: "",
//         lName: "",
//         about: "",
//         rank: "",
//         lastPlayed: "",
//         totalPoints: "",
//         gold: "",
// })