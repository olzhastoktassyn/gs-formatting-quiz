# GS Formatting Quiz

A one-page test on the W3Schools **Google Sheets Formatting** chapter for groups 3D-1 and 3D-2 (JIHC).

- `index.html` is the test: 20 questions (10 easy, 5 medium, 5 hard), shuffled, 20-minute timer, one attempt per student and device.
- `results.html` is the live results table with filter, sort and CSV export.
- `answers.html` shows the correct answers, but only after the teacher ticks **Settings!B1** in the results sheet.

Results are saved to a Google Sheet through a Google Apps Script web app. Its URL goes in `config.js`. The answer key lives only in the Apps Script, never in this public repo.

To run the test again for another group or year, change `QUIZ_ID` in `config.js`. To let one student retake it, delete his or her row in the **Results** sheet.
