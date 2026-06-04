// Exercise 10: Student averages
//
// Calculate each active student's overall average.
// Overall average should include all course scores and project scores.
// Return students with an overall average of 85 or higher.
// Each item should include: id, name, campus, cohort, average rounded to 1 decimal place.
// Sort by average descending.
//
// Requirement:
// Provide a Lodash solution.

const _ = require('lodash');
const students = require('../data/students.json');

const lodashSolution = null;

console.log(lodashSolution);

/*
Expected output:
[
  { id: 'S003', name: 'Mia Santos', campus: 'Toronto', cohort: 'Web-0526', average: 96.6 },
  { id: 'S017', name: 'Evelyn Harris', campus: 'Montreal', cohort: 'UX-0526', average: 95.2 },
  { id: 'S027', name: 'Zoey Nelson', campus: 'Toronto', cohort: 'Data-0526', average: 94 },
  { id: 'S034', name: 'Sebastian Campbell', campus: 'Vancouver', cohort: 'Web-0526', average: 92.4 },
  { id: 'S009', name: 'Isabella Martin', campus: 'Toronto', cohort: 'UX-0526', average: 91.6 },
  { id: 'S001', name: 'Ava Chen', campus: 'Vancouver', cohort: 'Web-0526', average: 91.2 },
  { id: 'S019', name: 'Abigail Lewis', campus: 'Vancouver', cohort: 'Data-0526', average: 90.8 },
  { id: 'S011', name: 'Harper Rodriguez', campus: 'Montreal', cohort: 'Web-0526', average: 89.8 },
  { id: 'S015', name: 'Charlotte Moore', campus: 'Toronto', cohort: 'Web-0526', average: 89.8 },
  { id: 'S006', name: 'Ethan Lee', campus: 'Toronto', cohort: 'Data-0526', average: 89.2 },
  { id: 'S032', name: 'Wyatt Turner', campus: 'Montreal', cohort: 'Web-0526', average: 88.2 },
  { id: 'S025', name: 'Lily Baker', campus: 'Vancouver', cohort: 'UX-0526', average: 88 },
  { id: 'S005', name: 'Emma Johnson', campus: 'Montreal', cohort: 'Web-0526', average: 87.8 },
  { id: 'S022', name: 'Daniel Wright', campus: 'Vancouver', cohort: 'Web-0526', average: 87.2 },
  { id: 'S004', name: 'Noah Wilson', campus: 'Vancouver', cohort: 'UX-0526', average: 86 },
  { id: 'S029', name: 'Nora Mitchell', campus: 'Montreal', cohort: 'UX-0526', average: 86 },
  { id: 'S023', name: 'Grace Scott', campus: 'Montreal', cohort: 'Data-0526', average: 85.8 },
  { id: 'S030', name: 'Owen Perez', campus: 'Toronto', cohort: 'Web-0526', average: 85.4 }
]
*/
