const ROWS = 6;
const COLS = 7;

const PLAYERS = {
  defender: { name: "Defender", className: "defender", badgeClass: "defender-badge" },
  attacker: { name: "Attacker", className: "attacker", badgeClass: "attacker-badge" }
};

const HUMAN_PLAYER = "defender";
const AI_PLAYER = "attacker";

const categories = [
  "Phishing",
  "Malware",
  "Passwords",
  "Social Engineering",
  "Network Security",
  "Insider Threats",
  "Defence Tools"
];

const questionBank = {
  "Phishing": [
    { question: "Which sign most strongly suggests an email is phishing?", options: ["It includes a company logo", "It creates urgency and asks you to click a link", "It arrives in the morning", "It uses a greeting"], answer: 1, explanation: "Urgency plus a suspicious link is a common phishing tactic." },
    { question: "What should you do first if you suspect a phishing email?", options: ["Forward it to friends", "Click the link to check it", "Report it and avoid clicking anything", "Reply asking if it is real"], answer: 2, explanation: "Do not interact with the email. Report it through the correct process." },
    { question: "A fake sender address is often used in which type of attack?", options: ["Phishing", "Backup recovery", "Software patching", "Encryption"], answer: 0, explanation: "Phishing messages often impersonate trusted senders." },
    { question: "What is a common goal of a phishing email?", options: ["To improve your device speed", "To steal credentials or sensitive data", "To organise your files", "To update your wallpaper"], answer: 1, explanation: "Phishing aims to trick users into giving away information." },
    { question: "What should you check before clicking a link in an email?", options: ["The font size", "The sender's lunch break", "The actual destination URL", "The colour of the logo"], answer: 2, explanation: "Hovering or checking the link destination helps spot fake sites." },
    { question: "Which message is most suspicious?", options: ["Your library book is due next week", "Your parcel is delayed, click this unknown link now", "Your timetable has been updated in Teams", "Your teacher posted assignment feedback"], answer: 1, explanation: "Unexpected urgency and unknown links are a major warning sign." },
    { question: "What does 'smishing' refer to?", options: ["Phishing by text message", "Phishing in a video game", "Deleting spam", "A type of antivirus"], answer: 0, explanation: "Smishing is phishing delivered through SMS or texts." },
    { question: "What is 'vishing'?", options: ["Phishing through voice calls", "A visual password test", "Encrypted browsing", "A kind of firewall"], answer: 0, explanation: "Vishing uses phone calls or voice messages to trick victims." },
    { question: "Why do phishing pages copy real websites?", options: ["To improve design", "To make the scam appear trustworthy", "To increase internet speed", "To help users log out"], answer: 1, explanation: "Attackers mimic trusted brands to increase the chance of success." }
  ],

  "Malware": [
    { question: "What is ransomware?", options: ["Software that improves internet speed", "Malware that locks files and demands payment", "A type of firewall", "A secure backup system"], answer: 1, explanation: "Ransomware blocks access to files or systems and demands payment." },
    { question: "Which action is most likely to install malware?", options: ["Updating antivirus", "Opening an unknown attachment", "Changing your wallpaper", "Using strong passwords"], answer: 1, explanation: "Unknown attachments are a common malware delivery method." },
    { question: "What does antivirus software mainly do?", options: ["Creates phishing emails", "Detects and helps remove malicious software", "Builds websites", "Stores files in the cloud"], answer: 1, explanation: "Antivirus tools detect, quarantine and remove malicious software." },
    { question: "What is a Trojan horse in cyber security?", options: ["A physical hacking tool", "Malware disguised as legitimate software", "A safe browser extension", "An encrypted password"], answer: 1, explanation: "Trojans trick users by pretending to be something trustworthy." },
    { question: "Which malware secretly records keystrokes?", options: ["Spyware or keylogger", "Firewall", "Patch manager", "Backup agent"], answer: 0, explanation: "Keyloggers capture typed information such as passwords." },
    { question: "Why is regular patching important against malware?", options: ["It changes screen colours", "It closes known security weaknesses", "It removes all Wi-Fi networks", "It lowers file quality"], answer: 1, explanation: "Patching fixes vulnerabilities attackers may exploit." },
    { question: "What is spyware designed to do?", options: ["Speed up games", "Monitor and collect user information", "Improve battery life", "Create backups"], answer: 1, explanation: "Spyware silently gathers information from the user or device." },
    { question: "What is a worm?", options: ["A harmless coding error", "Malware that can spread itself across networks", "A type of router", "A secure email filter"], answer: 1, explanation: "Worms self-replicate and spread without needing much user action." },
    { question: "What is the safest response to a suspicious download?", options: ["Run it quickly before antivirus notices", "Delete it or scan it first", "Forward it to others", "Rename it and open it"], answer: 1, explanation: "Unknown files should be deleted or checked before use." }
  ],

  "Passwords": [
    { question: "Which password is strongest?", options: ["password123", "Summer2024", "Blue!Rocket#47Lake", "football1"], answer: 2, explanation: "A long, unpredictable password with variety is strongest." },
    { question: "What is password reuse?", options: ["Changing your password every day", "Using the same password on multiple accounts", "Saving passwords in a manager", "Using MFA"], answer: 1, explanation: "Password reuse is risky because one breach can expose many accounts." },
    { question: "What does MFA stand for?", options: ["Main Firewall Access", "Multi-Factor Authentication", "Managed File Allocation", "Monitored Fraud Alert"], answer: 1, explanation: "MFA adds extra verification beyond just a password." },
    { question: "What is a passphrase?", options: ["A short PIN", "A longer sequence of words used as a password", "A firewall rule", "A type of phishing email"], answer: 1, explanation: "Passphrases can be easier to remember and harder to crack if well chosen." },
    { question: "Which is best practice for storing passwords?", options: ["Write them on sticky notes", "Use a password manager", "Share them with friends", "Keep one password for everything"], answer: 1, explanation: "Password managers help generate and store strong unique passwords." },
    { question: "Why is '123456' weak?", options: ["It has too many symbols", "It is common and easy to guess", "It is too long", "It blocks MFA"], answer: 1, explanation: "Common predictable passwords are very easy to crack." },
    { question: "What attack tries huge numbers of possible passwords automatically?", options: ["Brute force attack", "Patch management", "Data backup", "Version control"], answer: 0, explanation: "Brute force attacks try many combinations until one works." },
    { question: "What does credential stuffing rely on?", options: ["Using stolen username-password pairs on many sites", "Improving Wi-Fi range", "Encrypting messages", "Blocking pop-ups"], answer: 0, explanation: "It uses reused passwords from previous breaches." },
    { question: "Which is safest?", options: ["One memorable password used everywhere", "A unique password for every account", "Sharing passwords with a colleague", "Saving passwords in a public document"], answer: 1, explanation: "Unique passwords limit the impact of any one breach." }
  ],

  "Social Engineering": [
    { question: "Social engineering attacks mainly target what?", options: ["Monitor cables", "Human behaviour", "Wi-Fi speed", "Printer drivers"], answer: 1, explanation: "Social engineering manipulates people rather than systems." },
    { question: "Which is an example of social engineering?", options: ["A software update", "A fake phone call pretending to be IT support", "A hardware upgrade", "A secure login"], answer: 1, explanation: "Pretending to be trusted support staff is a classic social engineering tactic." },
    { question: "Why do attackers use urgency in scams?", options: ["To improve Wi-Fi", "To stop people thinking carefully", "To compress files", "To increase battery life"], answer: 1, explanation: "Urgency pressures people into making mistakes." },
    { question: "What is pretexting?", options: ["Creating a false story to gain trust", "Testing a keyboard", "Encrypting a USB drive", "Backing up a device"], answer: 0, explanation: "Pretexting involves inventing a believable reason to request information." },
    { question: "What is tailgating in physical security?", options: ["Driving too fast near a data centre", "Following someone into a secure area without authorisation", "A cable management method", "Remote desktop access"], answer: 1, explanation: "Attackers may enter secure spaces by following authorised staff." },
    { question: "Why are social engineers often good at conversation?", options: ["They need to manipulate trust", "They are fixing computers", "They are always managers", "They are testing Wi-Fi"], answer: 0, explanation: "They rely on persuasion, confidence and trust-building." },
    { question: "What should you do if someone requests sensitive data unexpectedly?", options: ["Give it quickly", "Verify their identity first", "Post it online", "Ignore all security rules"], answer: 1, explanation: "Always verify identity through a trusted route." },
    { question: "What is baiting?", options: ["Offering something tempting to trick a victim", "Installing updates", "Creating a firewall", "Locking a device screen"], answer: 0, explanation: "Attackers may offer free files, USB sticks or rewards to lure users." },
    { question: "Which behaviour helps stop social engineering?", options: ["Blind trust", "Slow down and verify", "Share passwords", "Ignore training"], answer: 1, explanation: "Pausing and checking details prevents rushed mistakes." }
  ],

  "Network Security": [
    { question: "What does a firewall do?", options: ["Stores passwords", "Filters and blocks network traffic", "Creates email accounts", "Improves screen brightness"], answer: 1, explanation: "A firewall monitors and filters inbound and outbound traffic." },
    { question: "Which Wi-Fi security standard is more secure?", options: ["Open Wi-Fi", "WEP", "WPA3", "No password"], answer: 2, explanation: "WPA3 is far more secure than outdated standards like WEP." },
    { question: "Why should public Wi-Fi be treated carefully?", options: ["It always breaks devices", "It may be insecure or monitored", "It deletes your apps", "It disables your keyboard"], answer: 1, explanation: "Public Wi-Fi can expose users to interception and fake access points." },
    { question: "What does VPN stand for?", options: ["Verified Private Network", "Virtual Private Network", "Variable Protocol Node", "Visual Protection Net"], answer: 1, explanation: "A VPN encrypts traffic between your device and another point on the internet." },
    { question: "What is packet sniffing?", options: ["Analysing network traffic", "Cleaning laptops", "Testing speakers", "Formatting a hard drive"], answer: 0, explanation: "Packet sniffing involves capturing and inspecting data on a network." },
    { question: "Why is WEP considered weak?", options: ["It is too modern", "Its encryption can be broken", "It blocks too much traffic", "It prevents internet access"], answer: 1, explanation: "WEP is outdated and vulnerable to attack." },
    { question: "What is the purpose of network segmentation?", options: ["To split a network into smaller, controlled sections", "To delete data faster", "To improve screen resolution", "To stop all printing"], answer: 0, explanation: "Segmentation limits movement across a network if one part is compromised." },
    { question: "What is a DDoS attack?", options: ["An attempt to overwhelm a service with traffic", "A password manager", "A type of keyboard shortcut", "A Wi-Fi encryption standard"], answer: 0, explanation: "Distributed denial of service attacks flood targets with traffic." },
    { question: "Which practice helps secure a home router?", options: ["Leave default admin password unchanged", "Update firmware and change default credentials", "Turn off all encryption", "Publish the password publicly"], answer: 1, explanation: "Changing defaults and patching firmware improves router security." }
  ],

  "Insider Threats": [
    { question: "An insider threat usually comes from:", options: ["Only outside hackers", "Staff or users with legitimate access", "Only damaged routers", "Only antivirus tools"], answer: 1, explanation: "Insider threats involve people who already have access." },
    { question: "Which could be an accidental insider threat?", options: ["A staff member emailing sensitive data to the wrong person", "A firewall blocking traffic", "A software patch", "A new password policy"], answer: 0, explanation: "Accidental mistakes by authorised users can still cause security incidents." },
    { question: "What helps reduce insider threat risk?", options: ["No training", "Least privilege access and staff awareness", "Sharing passwords", "Ignoring suspicious behaviour"], answer: 1, explanation: "Limiting access and training staff reduces risk." },
    { question: "What does 'least privilege' mean?", options: ["Giving users the minimum access needed", "Giving everyone admin rights", "Removing all security training", "Blocking every website"], answer: 0, explanation: "Least privilege reduces damage if an account is misused." },
    { question: "Why should access rights be reviewed regularly?", options: ["To increase confusion", "To remove unnecessary or outdated permissions", "To slow the network", "To reduce backups"], answer: 1, explanation: "Staff role changes can leave risky unused permissions." },
    { question: "What is a malicious insider?", options: ["A user who intentionally abuses their access", "A secure account", "A type of Wi-Fi setting", "A backup file"], answer: 0, explanation: "Some insiders act deliberately for revenge, profit or espionage." },
    { question: "What can increase insider risk during staff departures?", options: ["Ignoring account deactivation", "Updating passwords", "Backing up data", "Using MFA"], answer: 0, explanation: "Accounts should be disabled promptly when staff leave." },
    { question: "Which is a warning sign of insider risk?", options: ["Repeated access to data unrelated to a person's job", "Using strong passwords", "Attending training", "Reporting phishing attempts"], answer: 0, explanation: "Unusual access patterns can suggest misuse or data theft." },
    { question: "What helps investigate insider incidents?", options: ["Audit logs", "Ignoring evidence", "Deleting records", "Turning off monitoring"], answer: 0, explanation: "Logs provide a record of activity for review and investigation." }
  ],

  "Defence Tools": [
    { question: "What is the purpose of regular software updates?", options: ["To make phishing harder to spot", "To patch vulnerabilities and improve security", "To remove usernames", "To disable backups"], answer: 1, explanation: "Updates fix known weaknesses that attackers could exploit." },
    { question: "What is a backup used for?", options: ["To increase scam emails", "To restore lost or damaged data", "To create malware", "To weaken security"], answer: 1, explanation: "Backups help recover systems and files after an incident." },
    { question: "Which tool helps detect suspicious network activity?", options: ["Intrusion detection system", "Text editor", "Projector", "Spreadsheet theme selector"], answer: 0, explanation: "An intrusion detection system monitors for unusual or malicious activity." },
    { question: "What does encryption do?", options: ["Makes data unreadable without the correct key", "Deletes all files", "Turns off Wi-Fi", "Creates admin accounts"], answer: 0, explanation: "Encryption protects data confidentiality." },
    { question: "What is endpoint protection?", options: ["Security software for devices like laptops and PCs", "A way to print documents", "A method of password sharing", "A backup schedule"], answer: 0, explanation: "Endpoint tools protect user devices against threats." },
    { question: "Why are backups often kept offline or separate?", options: ["To avoid ransomware encrypting them too", "To reduce storage space", "To speed up social media", "To weaken recovery"], answer: 0, explanation: "Separate backups protect recovery options if live systems are compromised." },
    { question: "What does SIEM stand for?", options: ["Security Information and Event Management", "System Internet Encryption Mode", "Secure Internal Email Method", "Software Integrity Evaluation Map"], answer: 0, explanation: "SIEM tools collect and analyse security events from multiple sources." },
    { question: "What is multi-layered security called?", options: ["Defence in depth", "Single point defence", "Flat security", "Direct access mode"], answer: 0, explanation: "Defence in depth uses multiple controls so one failure is not catastrophic." },
    { question: "Why is user awareness training important?", options: ["Because people are often targeted directly", "Because it removes all malware permanently", "Because it replaces every security tool", "Because it disables phishing"], answer: 0, explanation: "People are a major target, so training strengthens the human layer of defence." }
  ]
};

let board = [];
let currentPlayer = "defender";
let gameOver = false;
let pendingColumn = null;
let currentQuestion = null;
let usedQuestions = {};
let gameMode = "twoPlayer";
let aiDepth = 5;
let isAiThinking = false;
let questionTimerLength = 15;
let timerRemaining = 15;
let timerInterval = null;

const boardEl = document.getElementById("board");
const categoryRowEl = document.getElementById("categoryRow");
const messageBox = document.getElementById("messageBox");
const turnText = document.getElementById("turnText");
const turnBadge = document.getElementById("turnBadge");
const modeText = document.getElementById("modeText");
const timerText = document.getElementById("timerText");

const questionModal = document.getElementById("questionModal");
const modalCategory = document.getElementById("modalCategory");
const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answersContainer");
const feedbackBox = document.getElementById("feedbackBox");
const closeModalBtn = document.getElementById("closeModalBtn");
const questionTimerEl = document.getElementById("questionTimer");

const modeSelect = document.getElementById("modeSelect");
const difficultySelect = document.getElementById("difficultySelect");
const timerSelect = document.getElementById("timerSelect");

document.getElementById("restartBtn").addEventListener("click", restartGame);
document.getElementById("newQuestionsBtn").addEventListener("click", resetQuestionsOnly);
closeModalBtn.addEventListener("click", closeModal);
modeSelect.addEventListener("change", () => {
  gameMode = modeSelect.value;
  updateModeUI();
  restartGame();
});
difficultySelect.addEventListener("change", () => {
  aiDepth = parseInt(difficultySelect.value, 10);
});
timerSelect.addEventListener("change", () => {
  questionTimerLength = parseInt(timerSelect.value, 10);
  timerText.textContent = `Question timer: ${questionTimerLength}s`;
});

function createEmptyBoard() {
  return Array.from({ length: ROWS }, () => Array(COLS).fill(null));
}

function resetUsedQuestions() {
  usedQuestions = {};
  categories.forEach(cat => usedQuestions[cat] = []);
}

function updateModeUI() {
  modeText.textContent = gameMode === "singlePlayer" ? "Mode: Single Player vs AI" : "Mode: Two Player";
  timerText.textContent = `Question timer: ${questionTimerLength}s`;
}

function init() {
  board = createEmptyBoard();
  currentPlayer = "defender";
  gameOver = false;
  pendingColumn = null;
  currentQuestion = null;
  isAiThinking = false;
  resetUsedQuestions();
  renderCategories();
  renderBoard();
  updateTurnUI();
  updateModeUI();
  setMessage("Defender starts. Choose a column and answer correctly to secure your move.");
}

function restartGame() {
  stopQuestionTimer();
  closeModal();
  board = createEmptyBoard();
  currentPlayer = "defender";
  gameOver = false;
  pendingColumn = null;
  currentQuestion = null;
  isAiThinking = false;
  renderBoard();
  updateTurnUI();
  setMessage(gameMode === "singlePlayer"
    ? "Game restarted. You are the Defender. Answer correctly to place your move."
    : "Game restarted. Defender starts again.");
}

function resetQuestionsOnly() {
  resetUsedQuestions();
  setMessage("Question bank reset. Previously used questions can now appear again.");
}

function renderCategories() {
  categoryRowEl.innerHTML = "";
  categories.forEach(category => {
    const div = document.createElement("div");
    div.className = "category";
    div.textContent = category;
    categoryRowEl.appendChild(div);
  });
}

function renderBoard() {
  boardEl.innerHTML = "";

  for (let col = 0; col < COLS; col++) {
    const columnEl = document.createElement("div");
    columnEl.className = "column";
    if (gameOver || pendingColumn !== null || isAiTurn() || isAiThinking) {
      columnEl.classList.add("disabled");
    }

    columnEl.dataset.col = col;
    columnEl.addEventListener("click", () => handleColumnClick(col));

    for (let row = 0; row < ROWS; row++) {
      const cellEl = document.createElement("div");
      const cellValue = board[row][col];
      cellEl.className = "cell";
      if (cellValue) cellEl.classList.add(cellValue);
      columnEl.appendChild(cellEl);
    }

    boardEl.appendChild(columnEl);
  }
}

function updateTurnUI() {
  const player = PLAYERS[currentPlayer];
  turnText.textContent = "Current turn:";
  turnBadge.textContent = player.name;
  turnBadge.className = `turn-badge ${player.badgeClass}`;
  renderBoard();
}

function setMessage(text) {
  messageBox.innerHTML = text;
}

function isAiTurn() {
  return gameMode === "singlePlayer" && currentPlayer === AI_PLAYER;
}

function handleColumnClick(col) {
  if (gameOver || pendingColumn !== null || isAiThinking || isAiTurn()) return;

  if (getAvailableRow(board, col) === -1) {
    setMessage("That column is full. Choose another column.");
    return;
  }

  pendingColumn = col;
  const category = categories[col];
  const question = getQuestionForCategory(category);
  currentQuestion = question;
  openQuestionModal(category, question);
}

function getQuestionForCategory(category) {
  const allQuestions = questionBank[category];
  if (usedQuestions[category].length === allQuestions.length) usedQuestions[category] = [];

  const availableIndexes = allQuestions
    .map((_, index) => index)
    .filter(index => !usedQuestions[category].includes(index));

  const randomIndex = availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
  usedQuestions[category].push(randomIndex);
  return allQuestions[randomIndex];
}

function openQuestionModal(category, question) {
  modalCategory.textContent = category;
  questionText.textContent = question.question;
  answersContainer.innerHTML = "";
  feedbackBox.className = "feedback";
  feedbackBox.style.display = "none";
  feedbackBox.textContent = "";
  closeModalBtn.style.display = "none";

  question.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = option;
    btn.addEventListener("click", () => handleAnswer(index));
    answersContainer.appendChild(btn);
  });

  questionModal.classList.add("show");
  startQuestionTimer();
}

function startQuestionTimer() {
  stopQuestionTimer();
  timerRemaining = questionTimerLength;
  questionTimerEl.textContent = timerRemaining;

  timerInterval = setInterval(() => {
    timerRemaining--;
    questionTimerEl.textContent = timerRemaining;
    if (timerRemaining <= 0) {
      stopQuestionTimer();
      handleTimeOut();
    }
  }, 1000);
}

function stopQuestionTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function handleTimeOut() {
  const buttons = answersContainer.querySelectorAll(".answer-btn");
  buttons.forEach(btn => btn.disabled = true);

  feedbackBox.className = "feedback incorrect";
  feedbackBox.style.display = "block";
  feedbackBox.innerHTML = `<strong>Time is up.</strong> ${PLAYERS[currentPlayer].name} lost their turn.`;
  setMessage(`${PLAYERS[currentPlayer].name} ran out of time and lost their turn.`);
  swapPlayer();
  closeModalBtn.style.display = "inline-block";
}

function handleAnswer(selectedIndex) {
  if (!currentQuestion) return;

  stopQuestionTimer();

  const buttons = answersContainer.querySelectorAll(".answer-btn");
  buttons.forEach(btn => btn.disabled = true);

  const correct = selectedIndex === currentQuestion.answer;

  if (correct) {
    feedbackBox.className = "feedback correct";
    feedbackBox.style.display = "block";
    feedbackBox.innerHTML = `<strong>Correct.</strong> ${currentQuestion.explanation}`;
    placeMove(pendingColumn);
  } else {
    const correctAnswerText = currentQuestion.options[currentQuestion.answer];
    feedbackBox.className = "feedback incorrect";
    feedbackBox.style.display = "block";
    feedbackBox.innerHTML = `<strong>Incorrect.</strong> ${currentQuestion.explanation}<br><br><strong>Correct answer:</strong> ${correctAnswerText}`;
    setMessage(`${PLAYERS[currentPlayer].name} failed the security check and lost their turn.`);
    swapPlayer();
  }

  closeModalBtn.style.display = "inline-block";
}

function closeModal() {
  stopQuestionTimer();
  questionModal.classList.remove("show");
  pendingColumn = null;
  currentQuestion = null;

  if (!gameOver && isAiTurn() && !isAiThinking) {
    setTimeout(() => performAiTurn(), 450);
  }
}

function getAvailableRow(boardState, col) {
  for (let row = ROWS - 1; row >= 0; row--) {
    if (!boardState[row][col]) return row;
  }
  return -1;
}

function placeMove(col) {
  const row = getAvailableRow(board, col);
  if (row === -1) return;

  board[row][col] = currentPlayer;
  renderBoard();

  const winner = checkWinner(board);
  if (winner) {
    gameOver = true;
    setMessage(`<span class="winner-text">${PLAYERS[winner].name} wins.</span> System control secured.`);
    updateTurnUI();
    return;
  }

  if (isBoardFull(board)) {
    gameOver = true;
    setMessage(`<span class="winner-text">Draw.</span> The grid is full and neither side connected four.`);
    return;
  }

  setMessage(`${PLAYERS[currentPlayer].name} passed the security check and placed a counter.`);
  swapPlayer();
}

function swapPlayer() {
  currentPlayer = currentPlayer === "defender" ? "attacker" : "defender";
  updateTurnUI();
}

function isBoardFull(boardState) {
  return boardState.every(row => row.every(cell => cell !== null));
}

function checkWinner(boardState) {
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const player = boardState[row][col];
      if (!player) continue;

      if (
        checkDirection(boardState, row, col, 0, 1, player) ||
        checkDirection(boardState, row, col, 1, 0, player) ||
        checkDirection(boardState, row, col, 1, 1, player) ||
        checkDirection(boardState, row, col, 1, -1, player)
      ) {
        return player;
      }
    }
  }
  return null;
}

function checkDirection(boardState, row, col, rowStep, colStep, player) {
  for (let i = 0; i < 4; i++) {
    const newRow = row + rowStep * i;
    const newCol = col + colStep * i;
    if (
      newRow < 0 || newRow >= ROWS ||
      newCol < 0 || newCol >= COLS ||
      boardState[newRow][newCol] !== player
    ) {
      return false;
    }
  }
  return true;
}

function getValidLocations(boardState) {
  const valid = [];
  for (let col = 0; col < COLS; col++) {
    if (getAvailableRow(boardState, col) !== -1) valid.push(col);
  }
  return valid;
}

function copyBoard(boardState) {
  return boardState.map(row => [...row]);
}

function dropPiece(boardState, col, piece) {
  const row = getAvailableRow(boardState, col);
  if (row !== -1) boardState[row][col] = piece;
}

function evaluateWindow(window, piece) {
  const opponent = piece === AI_PLAYER ? HUMAN_PLAYER : AI_PLAYER;
  let score = 0;

  const pieceCount = window.filter(cell => cell === piece).length;
  const emptyCount = window.filter(cell => cell === null).length;
  const oppCount = window.filter(cell => cell === opponent).length;

  if (pieceCount === 4) score += 100000;
  else if (pieceCount === 3 && emptyCount === 1) score += 120;
  else if (pieceCount === 2 && emptyCount === 2) score += 15;

  if (oppCount === 3 && emptyCount === 1) score -= 100;
  if (oppCount === 4) score -= 100000;

  return score;
}

function scorePosition(boardState, piece) {
  let score = 0;

  const centreCol = Math.floor(COLS / 2);
  const centreArray = [];
  for (let r = 0; r < ROWS; r++) centreArray.push(boardState[r][centreCol]);
  const centreCount = centreArray.filter(cell => cell === piece).length;
  score += centreCount * 8;

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS - 3; col++) {
      const window = [boardState[row][col], boardState[row][col + 1], boardState[row][col + 2], boardState[row][col + 3]];
      score += evaluateWindow(window, piece);
    }
  }

  for (let col = 0; col < COLS; col++) {
    for (let row = 0; row < ROWS - 3; row++) {
      const window = [boardState[row][col], boardState[row + 1][col], boardState[row + 2][col], boardState[row + 3][col]];
      score += evaluateWindow(window, piece);
    }
  }

  for (let row = 0; row < ROWS - 3; row++) {
    for (let col = 0; col < COLS - 3; col++) {
      const window = [boardState[row][col], boardState[row + 1][col + 1], boardState[row + 2][col + 2], boardState[row + 3][col + 3]];
      score += evaluateWindow(window, piece);
    }
  }

  for (let row = 3; row < ROWS; row++) {
    for (let col = 0; col < COLS - 3; col++) {
      const window = [boardState[row][col], boardState[row - 1][col + 1], boardState[row - 2][col + 2], boardState[row - 3][col + 3]];
      score += evaluateWindow(window, piece);
    }
  }

  return score;
}

function isTerminalNode(boardState) {
  return !!checkWinner(boardState) || getValidLocations(boardState).length === 0;
}

function minimax(boardState, depth, alpha, beta, maximisingPlayer) {
  const validLocations = getValidLocations(boardState);
  const terminal = isTerminalNode(boardState);

  if (depth === 0 || terminal) {
    if (terminal) {
      const winner = checkWinner(boardState);
      if (winner === AI_PLAYER) return { col: null, score: 100000000 };
      if (winner === HUMAN_PLAYER) return { col: null, score: -100000000 };
      return { col: null, score: 0 };
    }
    return { col: null, score: scorePosition(boardState, AI_PLAYER) };
  }

  const orderedLocations = validLocations.sort((a, b) => Math.abs(3 - a) - Math.abs(3 - b));

  if (maximisingPlayer) {
    let value = -Infinity;
    let bestCol = orderedLocations[Math.floor(Math.random() * orderedLocations.length)];

    for (const col of orderedLocations) {
      const tempBoard = copyBoard(boardState);
      dropPiece(tempBoard, col, AI_PLAYER);
      const newScore = minimax(tempBoard, depth - 1, alpha, beta, false).score;

      if (newScore > value) {
        value = newScore;
        bestCol = col;
      }

      alpha = Math.max(alpha, value);
      if (alpha >= beta) break;
    }
    return { col: bestCol, score: value };
  }

  let value = Infinity;
  let bestCol = orderedLocations[Math.floor(Math.random() * orderedLocations.length)];

  for (const col of orderedLocations) {
    const tempBoard = copyBoard(boardState);
    dropPiece(tempBoard, col, HUMAN_PLAYER);
    const newScore = minimax(tempBoard, depth - 1, alpha, beta, true).score;

    if (newScore < value) {
      value = newScore;
      bestCol = col;
    }

    beta = Math.min(beta, value);
    if (alpha >= beta) break;
  }
  return { col: bestCol, score: value };
}

function getAiBestMove() {
  const valid = getValidLocations(board);

  for (const col of valid) {
    const temp = copyBoard(board);
    dropPiece(temp, col, AI_PLAYER);
    if (checkWinner(temp) === AI_PLAYER) return col;
  }

  for (const col of valid) {
    const temp = copyBoard(board);
    dropPiece(temp, col, HUMAN_PLAYER);
    if (checkWinner(temp) === HUMAN_PLAYER) return col;
  }

  return minimax(copyBoard(board), aiDepth, -Infinity, Infinity, true).col;
}

function performAiTurn() {
  if (gameOver || !isAiTurn()) return;

  isAiThinking = true;
  renderBoard();
  setMessage("Attacker AI is analysing the grid...");

  setTimeout(() => {
    const col = getAiBestMove();
    isAiThinking = false;

    if (col === null || col === undefined) {
      renderBoard();
      return;
    }

    const category = categories[col];
    const question = getQuestionForCategory(category);
    const aiAnswersCorrectly = Math.random() < 0.82;

    if (aiAnswersCorrectly) {
      currentQuestion = question;
      pendingColumn = null;
      setMessage(`Attacker AI answered a ${category} question correctly and is making a move.`);
      placeMove(col);
    } else {
      setMessage(`Attacker AI failed the ${category} security check and lost its turn.`);
      swapPlayer();
    }

    pendingColumn = null;
    renderBoard();
  }, 800);
}

init();
