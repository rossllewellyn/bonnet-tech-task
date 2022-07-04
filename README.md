# Bonnet Technical Task

## Pre-requisites

Node.js and NPM.

## Task 1

### Instructions

Write a function defaultArguments. It takes a function as an argument, along with an
object containing default values for that function's arguments, and returns another
function which defaults to the right values.

### Requirements

- You cannot assume that the function's arguments have any particular names.
- You should be able to call defaultArguments repeatedly to change the defaults.

## Task 2

### Instructions

Carla “Big Mon£y” Bordania has no time to waste. She thinks, breaths and lives money.
This can be seen through her motto in life: “Money is mine, and mine is money”. To
maintain her highly lucrative lifestyle, Carla needs to set up lots of meetings but recently,
she realised that the “set up” part of meetings often is the most time consuming and she
knows very well that this time could, of course, be used to make more cash.

Therefore, Carla decided to hire you, a smart cookie, to create an algorithm that, when fed
2 or more schedules and a meeting duration, will automatically determine the earliest
possible time for a meeting. Carla knows that with this new tool of hers, she will be
spending less time on useless chit-chat and more time or valuable cash-chat.

### Requirements

- All times in the calendars will be given in 24h format hh:mm, the result must also be in
that format
- A meeting is represented by its start time (inclusively) and end time (exclusively) -> if a
meeting takes place from 09:00 - 11:00, the next possible start time would be 11:00
- Carla works from 09:00 (inclusively) - 19:00 (exclusively), the appointment must start and
end within that range
- If the meeting does not fit into the schedules, return null
- The duration of the meeting will be provided as an integer in minutes

## Setup Guide

Clone this repository:

```
git clone https://github.com/rossllewellyn/bonnet-tech-task
```

Navigate to the repository and install dependencies:

```
cd bonnet-tech-task
npm i
```

## Testing

```
npm run test
```
