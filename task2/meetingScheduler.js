/**
 * Find Available Meeting Time
 * @param {Array[Array]} schedules
 * @param {number} duration
 * @returns {string}
 */
export const scheduleMeeting = (schedules, duration) => {
  const parseTime = (stringTime) =>
    stringTime.split(":").reduce((hours, minutes) => parseInt(hours, 10) * 60 + parseInt(minutes, 10));
  return schedules
    .reduce(
      (previous, current) => previous.concat(current),
      [
        ["00:00", "09:00"],
        ["19:00", "24:00"],
      ]
    )
    .sort()
    .reduce(
      (previous, current) => {
        if (!previous.start && parseTime(previous.last) + duration <= parseTime(current[0]))
          previous.start = previous.last;
        if (previous.last < current[1]) previous.last = current[1];
        return previous;
      },
      { last: "00:00", start: null }
    ).start;
};
