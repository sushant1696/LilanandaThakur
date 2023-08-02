export const commonService = {
    GetUserDetails,
    UserRegistration,
    UserLogin,
    GetUserList
}
async function GetUserDetails(UserName, jobProfile) {

    const requestOptions = {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({

            "name": UserName,
            "job": jobProfile,
        })
    };
    return await fetch('https://reqres.in/api/users', requestOptions)
        .then((res) => {

            return res;
        });

}
async function UserRegistration(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({

            "email": email,
            "password": password,
        })
    };
    return await fetch('https://reqres.in/api/register', requestOptions)
        .then((res) => {
            return res;
        });

}
async function UserLogin(email, password) {
    
    const requestOptions = {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({

            "email": email,
            "password": password,
        })
    };
    return await fetch('https://reqres.in/api/login', requestOptions)
        .then((res) => {
            return res;
        });

}
async function GetUserList() {
    const requestOptions = {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
       
    };
    return await fetch('https://reqres.in/api/unknown')
        .then((res) => {
            return res;
        });

}