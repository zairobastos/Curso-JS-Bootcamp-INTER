const users = new Map();

users.set('Zairo','Admin');
users.set('Emanuelle','User');
users.set('Lyandra','Admin');

function getAdmins(Map) {
    let admins = [];
    for (const [key,value] of Map) {
        if (value=='Admin'){
            admins.push(key);
        }
    }
    return admins;
}

console.log(getAdmins(users));