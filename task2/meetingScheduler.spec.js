import { scheduleMeeting } from "./meetingScheduler";

export const schedules = [
  [
    ["09:00", "11:30"],
    ["13:30", "15:00"],
    ["16:00", "17:30"],
    ["17:45", "18:00"],
  ],
  [
    ["09:15", "12:00"],
    ["14:00", "14:30"],
    ["17:00", "17:30"],
  ],
  [
    ["11:30", "12:15"],
    ["15:45", "18:00"],
  ],
  [
    ["10:00", "14:00"],
    ["14:30", "15:00"],
    ["16:00", "16:15"],
  ],
];

describe("Schedule 30 minute meeting", () => {
  const meetingTime = scheduleMeeting(schedules, 30);
  test("should have start time 15:00", () => {
    expect(meetingTime).toBe("15:00");
  });
});

describe("Schedule 60 minute meeting", () => {
  const meetingTime = scheduleMeeting(schedules, 60);
  test("should have start time 18:00", () => {
    expect(meetingTime).toBe("18:00");
  });
});

describe("Schedule 90 minute meeting", () => {
  const meetingTime = scheduleMeeting(schedules, 90);
  test("should have start time null", () => {
    expect(meetingTime).toBeNull();
  });
});
