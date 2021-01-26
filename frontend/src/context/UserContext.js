import React from 'react';


export const UserContext = React.createContext({
    user: {
        UserName: "hi",
        email: "",
        FirstsName: "im",
        LastName: "a mock",
        password: '',
        password2: '',
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