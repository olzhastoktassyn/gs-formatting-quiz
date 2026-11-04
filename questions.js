// 20 questions on the W3Schools Google Sheets Formatting chapter.
// The answer key is NOT here; it lives only in the Google Apps Script.
window.QUIZ_QUESTIONS = [
  {
    "id": "q1",
    "level": "easy",
    "topic": "Fonts",
    "q": "What is the default font in Google Sheets?",
    "options": [
      "Arial",
      "Times New Roman",
      "Roboto",
      "Calibri"
    ]
  },
  {
    "id": "q2",
    "level": "easy",
    "topic": "Font Color",
    "q": "What is the default font (text) color in Google Sheets?",
    "options": [
      "Dark blue",
      "Black",
      "Dark gray",
      "Red"
    ]
  },
  {
    "id": "q3",
    "level": "easy",
    "topic": "Formatting",
    "q": "Which menu in the menu bar holds the formatting commands?",
    "options": [
      "Data",
      "Format",
      "Tools",
      "Insert"
    ]
  },
  {
    "id": "q4",
    "level": "easy",
    "topic": "Font Characteristics",
    "q": "Which keyboard shortcut makes text bold on Windows?",
    "options": [
      "Ctrl + D",
      "Ctrl + U",
      "Ctrl + I",
      "Ctrl + B"
    ]
  },
  {
    "id": "q5",
    "level": "easy",
    "topic": "Font Characteristics",
    "q": "What does Ctrl + I do to the selected text?",
    "options": [
      "Underlines it",
      "Increases the indent",
      "Inserts a new row",
      "Makes it italic"
    ]
  },
  {
    "id": "q6",
    "level": "easy",
    "topic": "Format Painter",
    "q": "Which tool copies the formatting of one cell to other cells?",
    "options": [
      "Fill color",
      "Format Painter",
      "Paste values only",
      "Clear formatting"
    ]
  },
  {
    "id": "q7",
    "level": "easy",
    "topic": "Colors",
    "q": "Which command changes the background color of a cell?",
    "options": [
      "Text wrapping",
      "Border color",
      "Font color",
      "Fill color"
    ]
  },
  {
    "id": "q8",
    "level": "easy",
    "topic": "Numbers",
    "q": "What is the default number format of a cell?",
    "options": [
      "Plain text",
      "Currency",
      "Automatic",
      "Number"
    ]
  },
  {
    "id": "q9",
    "level": "easy",
    "topic": "Grids",
    "q": "Are gridlines visible in a new Google Sheets file?",
    "options": [
      "Yes, they are shown by default",
      "No, they are hidden by default",
      "Only after you add borders",
      "Only when you print the sheet"
    ]
  },
  {
    "id": "q10",
    "level": "easy",
    "topic": "Clear",
    "q": "Where is the Clear formatting command?",
    "options": [
      "Format > Clear formatting",
      "Edit > Delete values",
      "View > Clear",
      "Data > Data cleanup"
    ]
  },
  {
    "id": "q11",
    "level": "medium",
    "topic": "Grids",
    "q": "How do you hide the gridlines of a sheet?",
    "options": [
      "Set the fill color to white for row 1",
      "Format > Borders > No borders",
      "View menu > uncheck Gridlines",
      "Format > Clear formatting"
    ]
  },
  {
    "id": "q12",
    "level": "medium",
    "topic": "Borders",
    "q": "Which of these is NOT one of the border styles in Google Sheets?",
    "options": [
      "Double",
      "Dotted",
      "Wavy",
      "Dashed"
    ]
  },
  {
    "id": "q13",
    "level": "medium",
    "topic": "Borders",
    "q": "A cell already has a black border. You choose red in Border color. What must you do to make the border red?",
    "options": [
      "Change the fill color to red",
      "Nothing, it turns red automatically",
      "Clear formatting first, then choose red",
      "Apply the border again"
    ]
  },
  {
    "id": "q14",
    "level": "medium",
    "topic": "Format Painter",
    "q": "You select A1 and click Format Painter. What shows that the format is copied and ready to paste?",
    "options": [
      "A1 turns yellow",
      "A dotted border appears around A1",
      "A message \"Copied\" appears in A1",
      "The column A header turns blue"
    ]
  },
  {
    "id": "q15",
    "level": "medium",
    "topic": "Font Characteristics",
    "q": "Which shortcut applies strikethrough on Windows?",
    "options": [
      "Alt + Shift + 5",
      "Ctrl + 5 + U",
      "Ctrl + S",
      "Ctrl + Shift + X"
    ]
  },
  {
    "id": "q16",
    "level": "hard",
    "topic": "Colors",
    "q": "You type the custom HEX color #0000FF. Which color do you get?",
    "options": [
      "Red",
      "Green",
      "Blue",
      "Black"
    ]
  },
  {
    "id": "q17",
    "level": "hard",
    "topic": "Colors",
    "q": "In the HEX color #1A2B3C, which part sets the intensity of GREEN?",
    "options": [
      "The whole code #1A2B3C",
      "1A",
      "3C",
      "2B"
    ]
  },
  {
    "id": "q18",
    "level": "hard",
    "topic": "Numbers",
    "q": "A cell holds 7110.456 and shows 3 decimals. You click Decrease Decimal two times. What happens?",
    "options": [
      "It shows 7110.5, but the stored value is still 7110.456",
      "It shows 7110, because each click removes one digit before the point too",
      "It shows 7110.4, because extra digits are cut off",
      "It shows 7110.5, and the stored value becomes 7110.5"
    ]
  },
  {
    "id": "q19",
    "level": "hard",
    "topic": "Clear",
    "q": "You want to clear formatting only from A1, C3 and E5 in one action. What do you do?",
    "options": [
      "Select A1:E5, then Format > Clear formatting",
      "Hold Ctrl (Cmd on Mac), click A1, C3, E5, then Format > Clear formatting",
      "Hold Shift, click A1 and E5, then Format > Clear formatting",
      "It is not possible; clear each cell separately"
    ]
  },
  {
    "id": "q20",
    "level": "hard",
    "topic": "Format Painter",
    "q": "A4 is bold, A5 is italic, A6 is underlined. You select A4:A6, click Format Painter, then drag over B4:B6. What is the result?",
    "options": [
      "B4, B5 and B6 are all bold",
      "Only B4 gets formatting",
      "B4, B5 and B6 each get bold, italic and underline",
      "B4 is bold, B5 is italic, B6 is underlined"
    ]
  }
];
