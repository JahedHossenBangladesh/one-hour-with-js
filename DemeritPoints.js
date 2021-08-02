// speed limit = 70;
// 5 -> 1 point;
// 10 -> 2 points;
// 15 -> 3 points;
// Math.floor(1.3);
// 12 points -> suspended;

let check =checkSpeed(140);
console.log(check);
function checkSpeed(speed) {
    let point = speed <= 70  ? 1 : (speed > 70 && speed <= 130) ? ( speed - 70)/5 : 15;
    let speedTrack = point <= 12 ? "Ok" : "suspend";
   return speedTrack;
}
