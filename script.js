function toggleMenu() { const n = document.getElementById('navMenu'); if (n) n.style.display = n.style.display === 'flex' ? 'none' : 'flex' }

function askQuestion(q) {
    const input = document.getElementById('userInput');
    if (input) { input.value = q; sendMessage(); }
}
function sendMessage() {
    const input = document.getElementById('userInput');
    const box = document.getElementById('chatBox');
    if (!input || !box) return;
    const q = input.value.trim(); if (!q) return;
    box.innerHTML += `<div class="message user">${escapeHtml(q)}</div>`;
    let answer = "I can help you discover services, understand documents and track a request. For final eligibility, deadlines and rules, please verify the relevant official department information.";
    const x = q.toLowerCase();
    if (x.includes('scholar')) answer = "For scholarship guidance, check eligibility, required documents, application dates and the official application portal. In this prototype, the Scholarship page provides a basic checklist.";
    else if (x.includes('track')) answer = "Open Track Request and enter your reference ID, for example JS-2026-001. The current result is demo data.";
    else if (x.includes('scheme')) answer = "Tell me your need, such as student support, employment or social welfare. I can then guide you to the relevant service category.";
    box.innerHTML += `<div class="message bot"><b>Jansarthi AI</b><br>${answer}</div>`;
    input.value = ''; box.scrollTop = box.scrollHeight;
}
function escapeHtml(s) { return s.replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m])); }

function trackRequest() {
    const id = document.getElementById('trackId').value.trim();
    const result = document.getElementById('trackResult');
    if (!id) { result.innerHTML = '<p class="status">Please enter a reference ID.</p>'; return; }
    result.innerHTML = `<div class="status"><b>Reference:</b> ${escapeHtml(id)}<br><b>Status:</b> In Progress<br><b>Next step:</b> Request is under review.<br><small>This is demo data for the prototype.</small></div>`;
}
function submitContact(e) {
    e.preventDefault();
    document.getElementById('contactMsg').textContent = 'Thank you! Your demo feedback has been recorded.';
}