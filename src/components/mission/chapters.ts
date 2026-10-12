export interface Chapter {
  id: string;
  num: string; // "Start", "01", "02", "03", "04", "05"
  index: number;
  story: string;
  question: string;
  kicker?: string;
}

export const TOTAL_QUESTIONS = 5;

export const CHAPTERS: Chapter[] = [
  {
    id: 'c0',
    num: 'Start',
    index: 0,
    story: 'Meet Maya. She works at a company in a big city, and she likes her job.',
    question: 'WHAT IS THE PROBLEM WE ARE BETTING ON FOR THE NEXT 20 YEARS?',
    kicker: 'The 20-Year Horizon',
  },
  {
    id: 'c1',
    num: '01',
    index: 1,
    story: 'One day, smart tools start doing the repetitive work on Maya’s desk. Her manager stops counting hours and only asks what got done.',
    question: 'IN THE FUTURE, DO YOU THINK PEOPLE WILL BE JUDGED BY THE HOURS THEY SIT AT A DESK — OR BY WHAT THEY ACTUALLY GET DONE?',
    kicker: 'Question 01 · How work is measured',
  },
  {
    id: 'c2',
    num: '02',
    index: 2,
    story: 'Soon, five people can do the work that used to take fifty. Maya watches her friend Raj lose his seat at the company.',
    question: 'IF COMPANIES NEED FEWER AND FEWER PEOPLE TO RUN, CAN WE STILL RELY ON TRADITIONAL JOBS TO TAKE CARE OF EVERYONE?',
    kicker: 'Question 02 · The shrinking office',
  },
  {
    id: 'c3',
    num: '03',
    index: 3,
    story: 'That night, Raj goes home. He doesn’t send out resumes. Using simple AI tools, he builds and launches a working idea by himself in a weekend.',
    question: 'WHEN ANYONE CAN BUILD AND LAUNCH AN IDEA FROM THEIR BEDROOM FOR FREE, WON’T MORE PEOPLE CHOOSE TO CREATE THEIR OWN WORK INSTEAD OF WAITING TO BE HIRED?',
    kicker: 'Question 03 · Making your own way',
  },
  {
    id: 'c4',
    num: '04',
    index: 4,
    story: 'Maya watches what Raj is doing. She realizes that just following instructions is no longer enough to stay safe.',
    question: 'IF COMPUTERS CAN DO THE BUSYWORK FOR FREE, WON’T THE MOST VALUABLE PEOPLE BE THE ONES WHO HAVE GOOD TASTE, CARE DEEPLY, AND TAKE REAL RESPONSIBILITY?',
    kicker: 'Question 04 · What makes humans special',
  },
  {
    id: 'c5',
    num: '05',
    index: 5,
    story: 'Maya and Raj realize the old promise is broken. Spending forty years building someone else’s dream is no longer safe.',
    question: 'IF FEWER PEOPLE WILL HAVE TRADITIONAL JOBS, AND BUILDING SOMETHING HAS NEVER BEEN EASIER — ISN’T THE FUTURE ABOUT OWNING WHAT YOU BUILD?',
    kicker: 'Question 05 · The big question',
  },
];
