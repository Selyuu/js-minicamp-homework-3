'use strict';

//Do not change any of the function names

function makeCat(name, age) {
  var cat = {};
  cat['name'] = name;
  cat['age'] = age;
  var meow = function() {
    return 'Meow!';
  };
  cat['meow'] = meow;
  return cat;
}

function addProperty(object, property) {
  object[property] = null;  
  return object;
}

function invokeMethod(object, method) {
  object[method]();
}

function multiplyMysteryNumberByFive(mysteryNumberObject) {
  return mysteryNumberObject.mysteryNumber * 5;
}

function deleteProperty(object, property) {
  delete(object[property]);
  return object;
}

function newUser(name, email, password) {
  var obj = {};
  obj['name'] = name;
  obj['email'] = email;
  obj['password'] = password;
  return obj;
}

function hasEmail(user) {
  for (var key in user) {
    if (key === 'email' && (user[key])) {
      return true;
    }
  }
  return false;
}

function hasProperty(object, property) {
  for (var key in object) {
    if (key === property) {
      return true;
    }
  }
  return false;
}

function verifyPassword(user, password) {
  for (var key in user) {
    if (key === 'password') {
      if (user[key] === password) {
        return true;
      }
    }
  }
  return false;
}

function updatePassword(user, newPassword) {
  user.password = newPassword;
  return user;
}

function addFriend(user, newFriend) {
  for (var key in user) {
    if (key === 'friends') {
      user[key].push(newFriend);
    }
  }
  return user;
}

function setUsersToPremium(users) {
  for (var i = 0; i < users.length; i++) {
    for (var key in users[i]) {
      if (key === 'isPremium') {
        users[i][key] = true;
      }
    }
  }
  return users;
}

function sumUserPostLikes(user) {
  var result = 0;
  for (var key in user) {
    if (key === 'posts') {
      for (var i = 0; i < user[key].length; i++) {
        for (var x in user[key][i]) {
          if (x === 'likes') {
            result += user[key][i][x];
          }
        }
      }
    }
  }
  return result;
}

function addCalculateDiscountPriceMethod(storeItem) {
  storeItem.calculateDiscountPrice = function() {
    storeItem.discountPrice = storeItem.price - (storeItem.price * storeItem.discountPercentage);
    return storeItem.discountPrice;
  };
  return storeItem;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  makeCat: makeCat,
  addProperty: addProperty,
  invokeMethod: invokeMethod,
  multiplyMysteryNumberByFive: multiplyMysteryNumberByFive,
  deleteProperty: deleteProperty,
  newUser: newUser,
  hasEmail: hasEmail,
  hasProperty: hasProperty,
  verifyPassword: verifyPassword,
  updatePassword: updatePassword,
  addFriend: addFriend,
  setUsersToPremium: setUsersToPremium,
  sumUserPostLikes: sumUserPostLikes,
  addCalculateDiscountPriceMethod: addCalculateDiscountPriceMethod
};
