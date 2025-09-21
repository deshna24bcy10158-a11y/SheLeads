// Mock data later api
const events = [
  {title: "AI for Social Good – Women Innovators Summit", date: "Nov 12, 2025"},
  {title: "Global Women in Cybersecurity Conference", date: "Dec 5, 2025"},
  {title: "Blockchain for Equality Hackathon", date: "Jan 10, 2026"},
];

const scholarships = [
  {title: "Google Women Techmakers Scholarship", deadline: "Nov 30, 2025"},
  {title: "AnitaB.org Tech Scholarship", deadline: "Dec 15, 2025"},
  {title: "NCWIT Aspirations in Computing Award", deadline: "Jan 2026"},
];


const eventListContainer = document.getElementById("eventsList");
events.forEach(ev => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${ev.title}</strong> — ${ev.date}`;
  eventListContainer.appendChild(li);
});
const scholarshipSection = document.getElementById("scholarshipsList");
scholarships.forEach(sch => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${sch.title}</strong> (Deadline: ${sch.deadline})`;
  scholarshipSection.appendChild(li);
});


function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

document.getElementById("mentorForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;

  console.log("Mentorship signup:", {name, role});

  showToast(`Thanks ${name}! You signed up as ${role}.`);
  e.target.reset();
});

// pre-written
const chatInput = document.getElementById("chatInput");
const chatlog = document.getElementById("chatlog");

chatInput.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    addChat("You", userMessage);
    chatInput.value = "";

    let reply = " Not sure I got that—try 'events' or 'scholarship'.";
    if (userMessage.toLowerCase().includes("event")) {
      reply = "We’ve got some exciting events lined up—check the events section!";
    } else if (userMessage.toLowerCase().includes("scholarship")) {
      reply = "Scholarship opportunities are listed in the Scholarships section.";
    } else if (userMessage.toLowerCase().includes("mentor")) {
      reply = "Fill out the mentorship form to get started!";
    }
    addChat("Bot", reply);
  }
});

function addChat(sender, text) {
  const p = document.createElement("p");
  p.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatlog.appendChild(p);
  chatlog.scrollTop = chatlog.scrollHeight;
}

// Dark mode 
document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

gsap.from(".hero h2", {opacity: 0, y: -40, duration: 1});
gsap.from(".hero p", {opacity: 0, y: 20, delay: 0.5, duration: 1});
gsap.from(".card", {opacity: 0, y: 40, duration: 1, stagger: 0.3});
