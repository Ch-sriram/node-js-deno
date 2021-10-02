function greet() {
  var userNameElement = document.getElementById('user-name');
  var timeNow = new Date().getHours();
  var greeting, late = false;

  if (timeNow >= 4 && timeNow <= 12) {
    greeting = 'Morning';
  } else if (timeNow > 12 && timeNow <= 15) {
    greeting = 'Afternoon';
  } else if (timeNow > 15 && timeNow <= 21) {
    greeting = 'Evening';
  } else {
    late = true;
  }

  var userName = userNameElement.value;
  alert(
    !late
      ? `Good ${greeting}, ${userName}!`
      : `Hey ${userName}, the time seems awful late to be awake! Please sleep on time.`
  );
}
