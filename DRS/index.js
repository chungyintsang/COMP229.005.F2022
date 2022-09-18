function add(x, y = 0) {
    return x + y;
}
add(1);
add(1,2);

function userFriends(user, ...friends) {
    console.log(user + ' has ' + friends.length + 'friends');
}
userFriends('User', 'Bob', 'Alice');
        
function userTopFriends(firstFriend, secondFriend,
    thirdFriends) {
    console.log(firstFriend);
    console.log(secondFriend);
    console.log(thirdFriends);
}
userTopFriends(...['Alice', 'Bob', 'Michelle']);