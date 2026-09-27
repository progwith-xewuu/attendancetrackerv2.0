//admin@fcpc.edu.ph | admin123
//teacher@fcpc.edu.ph | teacher123
//student06@fcpc.edu.ph | student123

//hizylkdev

const DATABASE_KEYS = {
  users: 'fcpc_users',
  students: 'fcpc_students',
  attendance: 'fcpc_attendance',
  session: 'fcpc_session',
  activity: 'fcpc_activity',
  activityReadAt: 'fcpc_activity_read_at',
  seeded: 'fcpc_seeded_v2',
  remember: 'fcpc_remember'
};

const SUBJECTS = ['Human-Computer Interaction', 'Data Structures & Algorithms', 'Object Oriented Programming', 'Contemporary World'];
const COURSES = ['BSIT Software Engineering', 'BSIT Network Engineering', 'BSIT Cyber Security', 'BS Computer Ingineering'];
const YEAR_LEVELS = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
const SECTIONS = ['A', 'B', 'C'];

const DEFAULT_USERS = [
  { id: 1, name: 'FCPC Administrator', email: 'admin@fcpc.edu.ph', password: 'admin123', role: 'admin', status: 'Active' },
  { id: 2, name: 'Paulene Galela', email: 'teacher@fcpc.edu.ph', password: 'teacher123', role: 'teacher', status: 'Active' },
];

const DEFAULT_STUDENTS = [
  { id: 1, studentId: '2026-0001', name: 'Zylk Mandolado', email: 'student01@fcpc.edu.ph', password: 'student123', course: 'BSIT Software Engineering', yearLevel: '2nd Year', section: 'A', status: 'Active', teacherId: 2 },
  { id: 2, studentId: '2026-0002', name: 'Cassandra Faye Llagas', email: 'student02@fcpc.edu.ph', password: 'student123', course: 'BSIT Software Engineering', yearLevel: '2nd Year', section: 'A', status: 'Active', teacherId: 2 },
  { id: 3, studentId: '2026-0003', name: 'Drin Cruz', email: 'student03@fcpc.edu.ph', password: 'student123', course: 'BSIT Cyber Security', yearLevel: '1st Year', section: 'B', status: 'Active', teacherId: 2 },
  { id: 4, studentId: '2026-0004', name: 'Bench Banting', email: 'student04@fcpc.edu.ph', password: 'student123', course: 'BS Computer Ingineering', yearLevel: '4th Year', section: 'A', status: 'Active', teacherId: 2 },
  { id: 5, studentId: '2026-0005', name: 'Merry Joy Arzaga', email: 'student05@fcpc.edu.ph', password: 'student123', course: 'BSIT Network Engineering', yearLevel: '2nd Year', section: 'B', status: 'Active', teacherId: 2 },
  { id: 6, studentId: '2026-0006', name: 'Juan Malungcoat', email: 'student06@fcpc.edu.ph', password: 'student123', course: 'BSIT Network Engineering', yearLevel: '1st Year', section: 'B', status: 'Active', teacherId: 2 }
];

const ICONS = {
  mail: s => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M4 6l8 7 8-7"/></svg>`,
  lock: s => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>`,
  eye: s => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>`,
  eyeOff: s => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3l18 18"/><path d="M10.6 5.2A10.9 10.9 0 0 1 12 5c6.5 0 10 7 10 7a15.7 15.7 0 0 1-3.2 4.1M6.5 6.6A15.7 15.7 0 0 0 2 12s3.5 7 10 7c1.4 0 2.7-.2 3.9-.6"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>`,
  dashboard: s => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/></svg>`,
  students: s => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17.5" cy="9.2" r="2.4"/><path d="M15.7 14.3c2.4.6 4 2.7 4 5.2"/></svg>`,
  attendance: s => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9.5h18"/><path d="M8 3v4M16 3v4"/><path d="M8.5 14.7l2 2 4.5-4.6"/></svg>`,
  reports: s => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10"/><path d="M12 20V4"/><path d="M20 20v-7"/><path d="M2 20h20"/></svg>`,
  settings: s => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v3M12 18.5v3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M2 12h3M19 12h3M4.6 19.4l2.1-2.1M17.3 6.7l2.1-2.1"/></svg>`,
  logout: s => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>`,
  bell: s => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6"/><path d="M10 20a2 2 0 0 0 4 0"/></svg>`,
  search: s => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>`,
  plus: s => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>`,
  edit: s => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l.7-3.5L15.5 6.7a2 2 0 0 1 2.8 0l1 1a2 2 0 0 1 0 2.8L7.5 22.3 3 21z"/><path d="M14 7l3 3"/></svg>`,
  trash: s => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13"/><path d="M10 11v6M14 11v6"/></svg>`,
  close: s => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6L6 18"/></svg>`,
  menu: s => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`,
  chevronDown: s => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>`,
  check: s => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8.3 12.5l2.4 2.4L16 9.5"/></svg>`,
  clock: s => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7.5v5l3.3 2"/></svg>`,
  xCircle: s => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/></svg>`,
  download: s => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="M7 11l5 5 5-5"/><path d="M4 20h16"/></svg>`,
  filter: s => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16l-6.2 7.2v5.6l-3.6 1.8v-7.4z"/></svg>`,
  user: s => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.6"/><path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7"/></svg>`,
  teacher: s => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="7" width="16" height="13" rx="2"/><path d="M9 7V5.5A2.5 2.5 0 0 1 11.5 3h1A2.5 2.5 0 0 1 15 5.5V7"/><path d="M4 12.5h16"/></svg>`,
  calendar: s => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9.5h18"/><path d="M8 3v4M16 3v4"/></svg>`,
  info: s => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8h.01"/><path d="M11 11.5h1.3v5"/></svg>`,
  warning: s => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l10 18H2z"/><path d="M12 9.5v4.5"/><path d="M12 17h.01"/></svg>`,
  eyeInfo: s => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>`
};

function mountIcons(root){
  (root || document).querySelectorAll('[data-icon]').forEach(el => {
    const name = el.getAttribute('data-icon');
    const size = el.getAttribute('data-size') || 18;
    if (ICONS[name]) el.innerHTML = ICONS[name](Number(size));
  });
}
function setHTML(el, html){
  if (!el) return;
  el.innerHTML = html;
  mountIcons(el);
}

function uid(){ return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
function pad2(n){ return n < 10 ? '0' + n : '' + n; }
function todayISO(){
  const d = new Date();
  return `${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}`;
}
function escapeHtml(str){
  return String(str == null ? '' : str).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}
function formatDateDisplay(iso){
  if (!iso) return '—';
  const [y,m,d] = iso.split('-').map(Number);
  const dt = new Date(y, m-1, d);
  return dt.toLocaleDateString('en-US', { year:'numeric', month:'short', day:'numeric' });
}
function formatTime12(hhmm){
  if (!hhmm) return '—';
  let [h,m] = hhmm.split(':').map(Number);
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12; if (h === 0) h = 12;
  return `${h}:${pad2(m)} ${ampm}`;
}
function initials(name){
  return String(name || '').trim().split(/\s+/).map(w => w[0]).slice(0,2).join('').toUpperCase() || '?';
}
function timeAgo(ts){
  const diff = Math.floor((Date.now() - ts) / 1000);
  if (diff < 60) return 'Just now';
  if (diff < 3600) return Math.floor(diff/60) + ' min ago';
  if (diff < 86400) return Math.floor(diff/3600) + ' hr ago';
  return Math.floor(diff/86400) + ' day(s) ago';
}
function debounceRender(fn, ms){
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
}

//storagepart
function getData(key, fallback){
  try{
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : (fallback !== undefined ? fallback : null);
  }catch(e){
    console.error('Storage read error', key, e);
    return fallback !== undefined ? fallback : null;
  }
}
function setData(key, value){
  try{
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  }catch(e){
    console.error('Storage write error', key, e);
    return false;
  }
}

function generateSeedAttendance(students){
  const records = [];
  const active = students.filter(s => s.status === 'Active');
  const times = ['08:00', '09:30', '11:00', '13:00', '14:30'];
  for (let dayOffset = 9; dayOffset >= 0; dayOffset--){
    const d = new Date();
    d.setDate(d.getDate() - dayOffset);
    const iso = `${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}`;
    active.forEach((st, idx) => {
      const roll = Math.random();
      const status = roll < 0.72 ? 'Present' : (roll < 0.88 ? 'Late' : 'Absent');
      records.push({
        id: uid(),
        date: iso,
        studentId: st.studentId,
        studentName: st.name,
        subject: SUBJECTS[(idx + dayOffset) % SUBJECTS.length],
        time: times[(idx + dayOffset) % times.length],
        status
      });
    });
  }
  return records;
}

function initDatabase(){
  if (!getData(DATABASE_KEYS.seeded)){
    setData(DATABASE_KEYS.users, DEFAULT_USERS);
    setData(DATABASE_KEYS.students, DEFAULT_STUDENTS);
    setData(DATABASE_KEYS.attendance, generateSeedAttendance(DEFAULT_STUDENTS));
    setData(DATABASE_KEYS.activity, [{ id: uid(), message: 'System initialized with sample academic data.', time: Date.now() }]);
    setData(DATABASE_KEYS.seeded, true);
  }
  if (!getData(DATABASE_KEYS.users)) setData(DATABASE_KEYS.users, DEFAULT_USERS);
  if (!getData(DATABASE_KEYS.students)) setData(DATABASE_KEYS.students, DEFAULT_STUDENTS);
  if (!getData(DATABASE_KEYS.attendance)) setData(DATABASE_KEYS.attendance, []);
  if (!getData(DATABASE_KEYS.activity)) setData(DATABASE_KEYS.activity, []);
}

function resetSampleData(){
  setData(DATABASE_KEYS.users, DEFAULT_USERS);
  setData(DATABASE_KEYS.students, DEFAULT_STUDENTS);
  setData(DATABASE_KEYS.attendance, generateSeedAttendance(DEFAULT_STUDENTS));
  setData(DATABASE_KEYS.activity, [{ id: uid(), message: 'Sample data was reset by an administrator.', time: Date.now() }]);
}

//activitylogg  
function logActivity(message){
  const list = getData(DATABASE_KEYS.activity, []);
  list.unshift({ id: uid(), message, time: Date.now() });
  setData(DATABASE_KEYS.activity, list.slice(0, 40));
}
function readActivity(){ return getData(DATABASE_KEYS.activity, []); }
function getUnreadActivityCount(){
  const readAt = Number(localStorage.getItem(DATABASE_KEYS.activityReadAt) || 0);
  return readActivity().filter(a => a.time > readAt).length;
}
function markActivityRead(){ localStorage.setItem(DATABASE_KEYS.activityReadAt, String(Date.now())); }


//crudfunc
function readUsers(){ return getData(DATABASE_KEYS.users, []); }
function createUser(user){
  const users = readUsers();
  const newUser = { id: Date.now(), ...user };
  users.push(newUser);
  setData(DATABASE_KEYS.users, users);
  return newUser;
}
function updateUser(id, changes){
  const users = readUsers();
  const idx = users.findIndex(u => u.id === id);
  if (idx === -1) return null;
  users[idx] = { ...users[idx], ...changes };
  setData(DATABASE_KEYS.users, users);
  return users[idx];
}
function deleteUser(id){
  setData(DATABASE_KEYS.users, readUsers().filter(u => u.id !== id));
}

//crudteach
function readTeachers(){ return readUsers().filter(u => u.role === 'teacher'); }
function readAdmins(){ return readUsers().filter(u => u.role === 'admin'); }
function getTeacherById(id){ return readUsers().find(u => u.id === id && u.role === 'teacher'); }
function createTeacher(teacher){
  const newTeacher = createUser({ ...teacher, role: 'teacher' });
  logActivity(`Teacher account created for ${teacher.name}.`);
  return newTeacher;
}
function updateTeacher(id, changes){
  const updated = updateUser(id, changes);
  if (updated) logActivity(`Teacher record updated: ${updated.name}.`);
  return updated;
}
function deleteTeacher(id){
  const teacher = readUsers().find(u => u.id === id);
  deleteUser(id);
  if (teacher){
    const students = readStudents().map(s => s.teacherId === id ? { ...s, teacherId: null } : s);
    setData(DATABASE_KEYS.students, students);
    logActivity(`Teacher account removed: ${teacher.name}. Their students are now unassigned.`);
  }
}
function countStudentsForTeacher(teacherId){
  return readStudents().filter(s => s.teacherId === teacherId).length;
}

//crudstud

function readStudents(){ return getData(DATABASE_KEYS.students, []); }
function getVisibleStudents(session){
  const all = readStudents();
  return session.role === 'teacher' ? all.filter(s => s.teacherId === session.id) : all;
}
function createStudent(student){
  const students = readStudents();
  const newStudent = { id: Date.now(), ...student };
  students.push(newStudent);
  setData(DATABASE_KEYS.students, students);
  logActivity(`Student account created for ${student.name}.`);
  return newStudent;
}
function updateStudent(id, changes){
  const students = readStudents();
  const idx = students.findIndex(s => s.id === id);
  if (idx === -1) return null;
  const oldStudentId = students[idx].studentId;
  students[idx] = { ...students[idx], ...changes };
  setData(DATABASE_KEYS.students, students);
  if (changes.studentId && changes.studentId !== oldStudentId){
    const att = readAttendance().map(a => a.studentId === oldStudentId ? { ...a, studentId: changes.studentId } : a);
    setData(DATABASE_KEYS.attendance, att);
  }
  if (changes.name){
    const att = readAttendance().map(a => a.studentId === students[idx].studentId ? { ...a, studentName: changes.name } : a);
    setData(DATABASE_KEYS.attendance, att);
  }
  logActivity(`Student record updated: ${students[idx].name}.`);
  return students[idx];
}
function deleteStudent(id){
  const students = readStudents();
  const target = students.find(s => s.id === id);
  setData(DATABASE_KEYS.students, students.filter(s => s.id !== id));
  if (target){
    setData(DATABASE_KEYS.attendance, readAttendance().filter(a => a.studentId !== target.studentId));
    logActivity(`Student account removed: ${target.name}.`);
  }
}
function isStudentIdTaken(studentId, excludeId){
  return readStudents().some(s => s.studentId.toLowerCase() === studentId.toLowerCase() && s.id !== excludeId);
}
function isEmailTaken(email, excludeId){
  const lower = email.toLowerCase();
  const inStudents = readStudents().some(s => s.email.toLowerCase() === lower && s.id !== excludeId);
  const inUsers = readUsers().some(u => u.email.toLowerCase() === lower && u.id !== excludeId);
  return inStudents || inUsers;
}

//attendancecrud

function readAttendance(){ return getData(DATABASE_KEYS.attendance, []); }
function createAttendance(record){
  const list = readAttendance();
  const newRecord = { id: uid(), ...record };
  list.push(newRecord);
  setData(DATABASE_KEYS.attendance, list);
  logActivity(`Attendance recorded: ${record.studentName} — ${record.status} (${formatDateDisplay(record.date)}).`);
  return newRecord;
}
function updateAttendance(id, changes){
  const list = readAttendance();
  const idx = list.findIndex(a => a.id === id);
  if (idx === -1) return null;
  list[idx] = { ...list[idx], ...changes };
  setData(DATABASE_KEYS.attendance, list);
  logActivity(`Attendance record updated for ${list[idx].studentName}.`);
  return list[idx];
}
function deleteAttendance(id){
  const list = readAttendance();
  const target = list.find(a => a.id === id);
  setData(DATABASE_KEYS.attendance, list.filter(a => a.id !== id));
  if (target) logActivity(`Attendance record deleted for ${target.studentName}.`);
}

//status
function calcStats(records){
  const total = records.length;
  const present = records.filter(r => r.status === 'Present').length;
  const late = records.filter(r => r.status === 'Late').length;
  const absent = records.filter(r => r.status === 'Absent').length;
  const rate = total ? Math.round(((present + late) / total) * 1000) / 10 : 0;
  return { total, present, late, absent, rate };
}

//validation
function isValidEmailFormat(email){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function isFcpcEmail(email){
  return /@fcpc\.edu\.ph$/i.test(email);
}
function setFieldError(fieldEl, message){
  fieldEl.classList.toggle('has-error', !!message);
  const err = fieldEl.querySelector('.field-error');
  if (err) err.textContent = message || '';
}

function getSession(){ return getData(DATABASE_KEYS.session, null); }
function saveSession(session){ setData(DATABASE_KEYS.session, session); }
function clearSession(){ localStorage.removeItem(DATABASE_KEYS.session); }

function attemptLogin(email, password, selectedRole){
  if (!email && !password) return { ok:false, field:'both', message:'Please enter your email and password.' };
  if (!email) return { ok:false, field:'email', message:'Please enter your email address.' };
  if (!password) return { ok:false, field:'password', message:'Please enter your password.' };
  if (!isValidEmailFormat(email)) return { ok:false, field:'email', message:'Please enter a valid email address.' };
  if (!isFcpcEmail(email)) return { ok:false, field:'email', message:'Please use your official FCPC email address (@fcpc.edu.ph).' };

  const staff = readUsers().find(u => u.email.toLowerCase() === email.toLowerCase());
  const student = readStudents().find(s => s.email.toLowerCase() === email.toLowerCase());
  const account = staff || student;

  if (!account) return { ok:false, field:'form', message:"We couldn't find an FCPC account with that email address." };

  const accountRole = staff ? staff.role : 'student';
  if (accountRole !== selectedRole){
    const properLabel = accountRole === 'admin' ? 'Admin' : accountRole === 'teacher' ? 'Teacher' : 'Student';
    return { ok:false, field:'form', message:`This email is registered as ${properLabel}. Please switch the sign-in option above.` };
  }
  if (student && student.status === 'Inactive'){
    return { ok:false, field:'form', message:'This student account is inactive. Please contact the registrar.' };
  }
  if (staff && staff.status === 'Inactive'){
    return { ok:false, field:'form', message:'This account has been deactivated. Please contact the administrator.' };
  }
  if (account.password !== password) return { ok:false, field:'password', message:'The password you entered is incorrect.' };

  const session = accountRole === 'student'
    ? { role:'student', id: account.id, name: account.name, email: account.email, studentId: account.studentId, course: account.course, yearLevel: account.yearLevel, section: account.section }
    : { role: accountRole, id: account.id, name: account.name, email: account.email };

  saveSession(session);
  logActivity(`${account.name} signed in.`);
  return { ok:true, session };
}

function performLogout(){
  const s = getSession();
  if (s) logActivity(`${s.name} signed out.`);
  clearSession();
  state.currentPage = 'dashboard';
  document.getElementById('appShell').classList.add('hidden');
  document.getElementById('loginView').classList.remove('hidden');
  document.getElementById('loginForm').reset();
  ['loginEmail','loginPassword'].forEach(id => setFieldError(document.getElementById(id).closest('.field'), ''));
  document.getElementById('err-loginForm').classList.remove('show');
}

function showToast(type, title, message){
  const container = document.getElementById('toastContainer');
  const el = document.createElement('div');
  el.className = `toast toast--${type}`;
  const iconName = { success:'check', error:'xCircle', warning:'warning', info:'info' }[type] || 'info';
  el.innerHTML = `
    <span class="toast__icon" data-icon="${iconName}" data-size="18"></span>
    <div>
      <p class="toast__title">${escapeHtml(title)}</p>
      ${message ? `<p class="toast__msg">${escapeHtml(message)}</p>` : ''}
    </div>
    <button class="toast__close" type="button" aria-label="Dismiss notification" data-icon="close" data-size="14"></button>
  `;
  container.appendChild(el);
  mountIcons(el);
  const remove = () => { el.classList.add('is-out'); setTimeout(() => el.remove(), 200); };
  el.querySelector('.toast__close').addEventListener('click', remove);
  setTimeout(remove, 4200);
}

function openModal(title, bodyHtml, opts){
  opts = opts || {};
  const root = document.getElementById('modalRoot');
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalBox').classList.toggle('modal--sm', !!opts.small);
  setHTML(document.getElementById('modalBody'), bodyHtml);
  root.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  if (opts.onMount) opts.onMount(document.getElementById('modalBody'));
}
function closeModal(){
  document.getElementById('modalRoot').classList.add('hidden');
  document.body.style.overflow = '';
}
function openConfirm({ title, message, confirmText, danger, onConfirm }){
  const html = `
    <div class="confirm-icon ${danger ? '' : 'is-neutral'}" data-icon="${danger ? 'warning' : 'info'}" data-size="22"></div>
    <p class="confirm-text">${escapeHtml(message)}</p>
    <div class="form-actions">
      <button type="button" class="btn btn--secondary" data-action="modal-cancel">Cancel</button>
      <button type="button" class="btn ${danger ? 'btn--danger' : 'btn--primary'}" id="confirmActionBtn">${escapeHtml(confirmText || 'Confirm')}</button>
    </div>
  `;
  openModal(title, html, { small:true, onMount: body => {
    body.querySelector('#confirmActionBtn').addEventListener('click', () => { closeModal(); onConfirm(); });
  }});
}

const state = {
  currentPage: 'dashboard',
  studentQuery: '', studentCourseFilter: '', studentYearFilter: '', studentTeacherFilter: '', studentSort: { key:'name', dir:1 },
  attQuery: '', attStatusFilter: '', attDateFilter: '', attStudentFilter: '', attSort: { key:'date', dir:-1 },
  reportFrom: '', reportTo: '',
  teacherQuery: '', teacherSort: { key:'name', dir:1 }
};

const NAV_ADMIN = [
  { id:'dashboard', label:'Dashboard', icon:'dashboard' },
  { id:'teachers', label:'Teachers', icon:'teacher' },
  { id:'students', label:'Students', icon:'students' },
  { id:'attendance', label:'Attendance', icon:'attendance' },
  { id:'reports', label:'Reports', icon:'reports' },
  { id:'settings', label:'Settings', icon:'settings' }
];
const NAV_TEACHER = [
  { id:'dashboard', label:'Dashboard', icon:'dashboard' },
  { id:'students', label:'Students', icon:'students' },
  { id:'attendance', label:'Attendance', icon:'attendance' },
  { id:'reports', label:'Reports', icon:'reports' },
  { id:'settings', label:'Settings', icon:'settings' }
];
const NAV_STUDENT = [
  { id:'dashboard', label:'Dashboard', icon:'dashboard' },
  { id:'attendance', label:'My Attendance', icon:'attendance' },
  { id:'profile', label:'Profile', icon:'user' }
];
const NAV_BY_ROLE = { admin: NAV_ADMIN, teacher: NAV_TEACHER, student: NAV_STUDENT };

function buildSidebar(){
  const session = getSession();
  const items = NAV_BY_ROLE[session.role] || NAV_STUDENT;
  const navHtml = items.map(item => `
    <button type="button" class="nav-item ${state.currentPage === item.id ? 'is-active' : ''}" data-action="nav" data-page="${item.id}">
      <span class="icon" data-icon="${item.icon}" data-size="18"></span>
      <span>${item.label}</span>
    </button>
  `).join('') + `
    <button type="button" class="nav-item is-logout" data-action="request-logout">
      <span class="icon" data-icon="logout" data-size="18"></span>
      <span>Logout</span>
    </button>
  `;
  setHTML(document.getElementById('sidebarNav'), navHtml);
}

const ROLE_LABELS = { admin: 'Administrator', teacher: 'Teacher', student: 'Student' };
function updateTopbarIdentity(){
  const s = getSession();
  document.getElementById('avatarInitials').textContent = initials(s.name);
  document.getElementById('avatarName').textContent = s.name;
  document.getElementById('avatarRole').textContent = s.role === 'student' ? `Student — ${s.studentId}` : ROLE_LABELS[s.role];
}

function refreshNotifications(){
  const count = getUnreadActivityCount();
  const badge = document.getElementById('notifBadge');
  badge.textContent = count > 9 ? '9+' : String(count);
  badge.classList.toggle('hidden', count === 0);

  const items = readActivity().slice(0, 8);
  const listHtml = items.length ? items.map(a => `
    <div class="notif__item">
      <p>${escapeHtml(a.message)}</p>
      <p>${timeAgo(a.time)}</p>
    </div>
  `).join('') : `<div class="notif__empty">No recent notifications.</div>`;
  setHTML(document.getElementById('notifList'), listHtml);
}

const PAGE_META = {
  dashboard: { title:'Dashboard', sub:null },
  teachers: { title:'Teachers', sub:'Manage teacher accounts and their assigned students.' },
  students: { title:'Students', sub:'Manage student accounts and academic records.' },
  attendance: { title:'Attendance', sub:null },
  reports: { title:'Reports', sub:'Attendance analytics generated from stored records.' },
  settings: { title:'Settings', sub:'Manage your credentials and system data.' },
  profile: { title:'Profile', sub:'Your account information.' }
};

function navigateTo(page){
  state.currentPage = page;
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.getElementById('page-' + page).classList.remove('hidden');
  document.querySelectorAll('.nav-item[data-page]').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.page === page);
  });

  const session = getSession();
  const meta = PAGE_META[page];
  document.getElementById('pageTitle').textContent = page === 'attendance' && session.role === 'student' ? 'My Attendance' : meta.title;
  let sub = meta.sub;
  if (page === 'students' && session.role === 'teacher') sub = 'Manage your assigned students and their academic records.';
  if (page === 'dashboard'){
    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'Good morning' : (hour < 18 ? 'Good afternoon' : 'Good evening');
    const isStaff = session.role === 'admin' || session.role === 'teacher';
    document.getElementById('pageTitle').textContent = isStaff ? `${greeting}, ${session.name.split(' ')[0]}.` : `Welcome back, ${session.name}.`;
    if (session.role === 'admin') sub = "Here's a system-wide overview for today.";
    else if (session.role === 'teacher') sub = "Here's your attendance overview for today.";
    else sub = "Here's a summary of your attendance record.";
  }
  document.getElementById('pageSubtitle').textContent = sub || '';
  document.getElementById('pageSubtitle').classList.toggle('hidden', !sub);

  closeSidebarMobile();
  document.getElementById('avatarPanel').classList.add('hidden');
  document.getElementById('notifPanel').classList.add('hidden');

  const renderers = {
    dashboard: renderDashboard, teachers: renderTeachersPage, students: renderStudentsPage, attendance: renderAttendancePage,
    reports: renderReportsPage, settings: renderSettingsPage, profile: renderProfilePage
  };
  renderers[page]();
}

function closeSidebarMobile(){
  document.getElementById('sidebar').classList.remove('is-open');
  document.getElementById('sidebarOverlay').classList.remove('is-open');
}

function enterApp(){
  document.getElementById('loginView').classList.add('hidden');
  document.getElementById('appShell').classList.remove('hidden');
  buildSidebar();
  updateTopbarIdentity();
  refreshNotifications();
  navigateTo('dashboard');
}

//dashboard
function renderDashboard(){
  const session = getSession();
  if (session.role === 'admin') renderAdminOverviewDashboard();
  else if (session.role === 'teacher') renderTeacherDashboard(session);
  else renderStudentDashboard(session);
}

function renderAdminOverviewDashboard(){
  const teachers = readTeachers();
  const students = readStudents();
  const attendance = readAttendance();
  const today = todayISO();
  const todays = attendance.filter(a => a.date === today);
  const overall = calcStats(attendance);
  const unassigned = students.filter(s => !s.teacherId).length;

  const cards = [
    { label:'Total Teachers', value: teachers.length, desc:'Registered teacher accounts', icon:'teacher', cls:'' },
    { label:'Total Students', value: students.length, desc: unassigned ? `${unassigned} unassigned` : 'All assigned to a teacher', icon:'students', cls:'' },
    { label:'Present Today', value: todays.filter(a => a.status === 'Present').length, desc:'Attendance records today', icon:'check', cls:'stat-card--success' },
    { label:'Absent Today', value: todays.filter(a => a.status === 'Absent').length, desc:'Attendance records today', icon:'xCircle', cls:'stat-card--danger' },
    { label:'Attendance Rate', value: overall.rate + '%', desc:'Present + late, all records', icon:'reports', cls:'stat-card--accent' }
  ];

  const quickActions = [
    { action:'quick-add-teacher', icon:'plus', label:'Add Teacher', desc:'Register a new teacher account' },
    { action:'quick-add-student', icon:'plus', label:'Add Student', desc:'Register and assign a student' },
    { action:'quick-view-teachers', icon:'teacher', label:'View Teachers', desc:'Browse teacher accounts' },
    { action:'quick-view-students', icon:'students', label:'View Students', desc:'Browse all records' },
    { action:'quick-view-reports', icon:'download', label:'Generate Report', desc:'Export analytics' }
  ];

  const teacherRows = [...teachers].sort((a,b) => countStudentsForTeacher(b.id) - countStudentsForTeacher(a.id)).slice(0, 6);

  const html = `
    <div class="stat-grid">
      ${cards.map(c => `
        <div class="stat-card ${c.cls}">
          <div class="stat-card__top">
            <div class="stat-card__icon" data-icon="${c.icon}" data-size="18"></div>
          </div>
          <p class="stat-card__value">${c.value}</p>
          <p class="stat-card__label">${c.label}</p>
          <p class="stat-card__desc">${c.desc}</p>
        </div>
      `).join('')}
    </div>

    <div class="panel">
      <div class="panel__head"><div><h2>Quick actions</h2><p>Jump straight into common tasks.</p></div></div>
      <div class="panel__body">
        <div class="quick-actions">
          ${quickActions.map(q => `
            <button type="button" class="quick-action" data-action="${q.action}">
              <span class="quick-action__icon" data-icon="${q.icon}" data-size="17"></span>
              <span class="quick-action__label">${q.label}</span>
              <span class="quick-action__desc">${q.desc}</span>
            </button>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="panel">
      <div class="panel__head"><div><h2>Teacher roster</h2><p>Teachers ranked by number of assigned students.</p></div>
        <button type="button" class="btn btn--secondary btn--sm" data-action="quick-view-teachers">View all</button>
      </div>
      <div class="panel__body">
        ${teacherRows.length ? `<div class="activity-list">${teacherRows.map(t => `
          <div class="activity-row">
            <div class="activity-row__icon" data-icon="teacher" data-size="15"></div>
            <div class="activity-row__text">
              <p><strong>${escapeHtml(t.name)}</strong> — ${countStudentsForTeacher(t.id)} student${countStudentsForTeacher(t.id) === 1 ? '' : 's'} assigned</p>
              <p>${escapeHtml(t.email)}</p>
            </div>
          </div>
        `).join('')}</div>` : renderEmptyState('No teachers yet', 'Add a teacher account to start assigning students.', 'Add Teacher', 'data-action="quick-add-teacher"')}
      </div>
    </div>
  `;
  setHTML(document.getElementById('page-dashboard'), html);
}

function renderTeacherDashboard(session){
  const students = getVisibleStudents(session);
  const myIds = students.map(s => s.studentId);
  const attendance = readAttendance().filter(a => myIds.includes(a.studentId));
  const today = todayISO();
  const todays = attendance.filter(a => a.date === today);
  const overall = calcStats(attendance);

  const cards = [
    { label:'My Students', value: students.length, desc:'Active and inactive accounts', icon:'students', cls:'' },
    { label:'Present Today', value: todays.filter(a => a.status === 'Present').length, desc:'Attendance records today', icon:'check', cls:'stat-card--success' },
    { label:'Late Today', value: todays.filter(a => a.status === 'Late').length, desc:'Attendance records today', icon:'clock', cls:'stat-card--warn' },
    { label:'Absent Today', value: todays.filter(a => a.status === 'Absent').length, desc:'Attendance records today', icon:'xCircle', cls:'stat-card--danger' },
    { label:'Attendance Rate', value: overall.rate + '%', desc:'Present + late, all records', icon:'reports', cls:'stat-card--accent' }
  ];

  const quickActions = [
    { action:'quick-add-student', icon:'plus', label:'Add Student', desc:'Register a new account' },
    { action:'quick-add-attendance', icon:'attendance', label:'Record Attendance', desc:'Log a new entry' },
    { action:'quick-view-students', icon:'students', label:'View Students', desc:'Browse your records' },
    { action:'quick-view-attendance', icon:'reports', label:'View Attendance', desc:'Browse all entries' },
    { action:'quick-view-reports', icon:'download', label:'Generate Report', desc:'Export analytics' }
  ];

  const recent = [...attendance].sort((a,b) => (b.date+b.time).localeCompare(a.date+a.time)).slice(0, 6);

  const html = `
    <div class="stat-grid">
      ${cards.map(c => `
        <div class="stat-card ${c.cls}">
          <div class="stat-card__top">
            <div class="stat-card__icon" data-icon="${c.icon}" data-size="18"></div>
          </div>
          <p class="stat-card__value">${c.value}</p>
          <p class="stat-card__label">${c.label}</p>
          <p class="stat-card__desc">${c.desc}</p>
        </div>
      `).join('')}
    </div>

    <div class="panel">
      <div class="panel__head"><div><h2>Quick actions</h2><p>Jump straight into common tasks.</p></div></div>
      <div class="panel__body">
        <div class="quick-actions">
          ${quickActions.map(q => `
            <button type="button" class="quick-action" data-action="${q.action}">
              <span class="quick-action__icon" data-icon="${q.icon}" data-size="17"></span>
              <span class="quick-action__label">${q.label}</span>
              <span class="quick-action__desc">${q.desc}</span>
            </button>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="panel">
      <div class="panel__head"><div><h2>Recent attendance activity</h2><p>Latest entries recorded in the system.</p></div>
        <button type="button" class="btn btn--secondary btn--sm" data-action="quick-view-attendance">View all</button>
      </div>
      <div class="panel__body">
        ${recent.length ? `<div class="activity-list">${recent.map(r => `
          <div class="activity-row">
            <div class="activity-row__icon badge--${r.status.toLowerCase()}" data-icon="${r.status === 'Present' ? 'check' : r.status === 'Late' ? 'clock' : 'xCircle'}" data-size="15"></div>
            <div class="activity-row__text">
              <p><strong>${escapeHtml(r.studentName)}</strong> was marked <strong>${r.status}</strong> in ${escapeHtml(r.subject)}</p>
              <p>${formatDateDisplay(r.date)} at ${formatTime12(r.time)}</p>
            </div>
          </div>
        `).join('')}</div>` : renderEmptyState('No attendance records yet', 'Records you add will appear here as recent activity.', null, null)}
      </div>
    </div>
  `;
  setHTML(document.getElementById('page-dashboard'), html);
}

function renderStudentDashboard(session){
  const mine = readAttendance().filter(a => a.studentId === session.studentId);
  const stats = calcStats(mine);
  const cards = [
    { label:'Total Attendance', value: stats.total, desc:'Records on file', icon:'attendance', cls:'' },
    { label:'Present', value: stats.present, desc:'Times marked present', icon:'check', cls:'stat-card--success' },
    { label:'Late', value: stats.late, desc:'Times marked late', icon:'clock', cls:'stat-card--warn' },
    { label:'Absent', value: stats.absent, desc:'Times marked absent', icon:'xCircle', cls:'stat-card--danger' },
    { label:'Attendance Rate', value: stats.rate + '%', desc:'Present + late, all records', icon:'reports', cls:'stat-card--accent' }
  ];
  const recent = [...mine].sort((a,b) => (b.date+b.time).localeCompare(a.date+a.time)).slice(0, 6);

  const dist = [
    { label:'Present', count: stats.present, color:'var(--success)' },
    { label:'Late', count: stats.late, color:'var(--warn)' },
    { label:'Absent', count: stats.absent, color:'var(--danger)' }
  ];

  const html = `
    <div class="stat-grid">
      ${cards.map(c => `
        <div class="stat-card ${c.cls}">
          <div class="stat-card__top"><div class="stat-card__icon" data-icon="${c.icon}" data-size="18"></div></div>
          <p class="stat-card__value">${c.value}</p>
          <p class="stat-card__label">${c.label}</p>
          <p class="stat-card__desc">${c.desc}</p>
        </div>
      `).join('')}
    </div>

    <div class="panel">
      <div class="panel__head"><div><h2>Attendance overview</h2><p>Breakdown of your ${stats.total} recorded ${stats.total === 1 ? 'entry' : 'entries'}.</p></div></div>
      <div class="panel__body">
        ${stats.total ? dist.map(d => `
          <div class="dist-bar">
            <div class="dist-bar__label"><span>${d.label}</span><span>${d.count} (${stats.total ? Math.round(d.count/stats.total*100) : 0}%)</span></div>
            <div class="dist-bar__track"><div class="dist-bar__fill" style="width:${stats.total ? (d.count/stats.total*100) : 0}%;background:${d.color}"></div></div>
          </div>
        `).join('') : renderEmptyState('No attendance yet', 'Your attendance overview will appear once records are added.', null, null)}
      </div>
    </div>

    <div class="panel">
      <div class="panel__head"><div><h2>Recent attendance</h2><p>Your latest recorded sessions.</p></div>
        <button type="button" class="btn btn--secondary btn--sm" data-action="nav" data-page="attendance">View history</button>
      </div>
      <div class="panel__body">
        ${recent.length ? `<div class="activity-list">${recent.map(r => `
          <div class="activity-row">
            <div class="activity-row__icon badge--${r.status.toLowerCase()}" data-icon="${r.status === 'Present' ? 'check' : r.status === 'Late' ? 'clock' : 'xCircle'}" data-size="15"></div>
            <div class="activity-row__text">
              <p><strong>${escapeHtml(r.subject)}</strong> — marked <strong>${r.status}</strong></p>
              <p>${formatDateDisplay(r.date)} at ${formatTime12(r.time)}</p>
            </div>
          </div>
        `).join('')}</div>` : renderEmptyState('No attendance records', "You don't have any attendance records yet.", null, null)}
      </div>
    </div>
  `;
  setHTML(document.getElementById('page-dashboard'), html);
}

function renderEmptyState(title, message, actionLabel, actionAttr){
  return `
    <div class="empty-state">
      <div class="empty-state__icon" data-icon="search" data-size="24"></div>
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(message)}</p>
      ${actionLabel ? `<button type="button" class="btn btn--primary btn--sm" ${actionAttr}>${escapeHtml(actionLabel)}</button>` : ''}
    </div>
  `;
}

function statusBadge(status){
  const icon = status === 'Present' ? 'check' : status === 'Late' ? 'clock' : 'xCircle';
  return `<span class="badge badge--${status.toLowerCase()}"><span class="icon" data-icon="${icon}" data-size="12"></span>${status}</span>`;
}


//teacherdash
function getFilteredSortedTeachers(){
  let list = readTeachers();
  if (state.teacherQuery){
    const q = state.teacherQuery.toLowerCase();
    list = list.filter(t => t.name.toLowerCase().includes(q) || t.email.toLowerCase().includes(q));
  }
  const { key, dir } = state.teacherSort;
  list = [...list].sort((a,b) => String(a[key] || '').localeCompare(String(b[key] || '')) * dir);
  return list;
}

function renderTeachersPage(){
  const list = getFilteredSortedTeachers();
  const total = readTeachers().length;

  const rows = list.map(t => `
    <tr>
      <td data-label="Name" class="cell-primary">${escapeHtml(t.name)}</td>
      <td data-label="Email" class="cell-muted">${escapeHtml(t.email)}</td>
      <td data-label="Assigned Students">${countStudentsForTeacher(t.id)}</td>
      <td data-label="Status"><span class="badge badge--${(t.status || 'Active').toLowerCase()}">${t.status || 'Active'}</span></td>
      <td data-label="Actions">
        <div class="cell-actions">
          <button class="icon-btn" data-action="view-teacher" data-id="${t.id}" aria-label="View" data-icon="eyeInfo" data-size="16"></button>
          <button class="icon-btn" data-action="edit-teacher" data-id="${t.id}" aria-label="Edit" data-icon="edit" data-size="16"></button>
          <button class="icon-btn" data-action="delete-teacher" data-id="${t.id}" aria-label="Delete" data-icon="trash" data-size="16"></button>
        </div>
      </td>
    </tr>
  `).join('');

  const arrow = key => state.teacherSort.key === key ? `<span class="sort-arrow">${state.teacherSort.dir === 1 ? '▲' : '▼'}</span>` : '';

  const html = `
    <div class="panel">
      <div class="panel__head">
        <div><h2>Teacher accounts</h2><p>${list.length} of ${total} teacher${total === 1 ? '' : 's'} shown</p></div>
        <button type="button" class="btn btn--primary btn--sm" data-action="quick-add-teacher"><span class="icon" data-icon="plus" data-size="15"></span>Add Teacher</button>
      </div>
      <div class="toolbar">
        <div class="search-box"><span class="icon" data-icon="search" data-size="15"></span><input type="text" id="teacherSearchInput" placeholder="Search by name or email" value="${escapeHtml(state.teacherQuery)}"></div>
      </div>
      <div class="table-wrap">
        ${list.length ? `
        <table class="data-table">
          <thead><tr>
            <th data-sort="name">Name${arrow('name')}</th>
            <th>Email</th>
            <th>Assigned Students</th>
            <th data-sort="status">Status${arrow('status')}</th>
            <th>Actions</th>
          </tr></thead>
          <tbody>${rows}</tbody>
        </table>` : renderEmptyState('No teachers found', 'There are currently no teacher accounts matching your search.', 'Add Teacher', 'data-action="quick-add-teacher"')}
      </div>
    </div>
  `;
  setHTML(document.getElementById('page-teachers'), html);

  document.getElementById('teacherSearchInput').addEventListener('input', debounceRender(e => { state.teacherQuery = e.target.value; renderTeachersPage(); const el = document.getElementById('teacherSearchInput'); el.focus(); el.selectionStart = el.value.length; }, 150));
  document.querySelectorAll('#page-teachers th[data-sort]').forEach(th => th.addEventListener('click', () => {
    const key = th.dataset.sort;
    state.teacherSort = { key, dir: state.teacherSort.key === key ? -state.teacherSort.dir : 1 };
    renderTeachersPage();
  }));
}

function teacherFormFields(t){
  t = t || {};
  return `
    <form id="teacherForm" novalidate>
      <div class="form-grid">
        <div class="form-group field--full"><label for="t_name">Full Name</label>
          <input type="text" id="t_name" value="${escapeHtml(t.name || '')}" placeholder="Juan Dela Cruz">
          <p class="field-error"></p>
        </div>
        <div class="form-group field--full"><label for="t_email">Email</label>
          <input type="text" id="t_email" value="${escapeHtml(t.email || '')}" placeholder="teacherXX@fcpc.edu.ph">
          <p class="field-error"></p>
        </div>
        <div class="form-group field--full"><label for="t_password">Password</label>
          <div class="password-input-wrap">
            <input type="password" id="t_password" placeholder="${t.id ? 'Leave blank to keep current password' : 'Minimum 6 characters'}">
            <button type="button" data-icon="eye" data-size="16" data-toggle-for="t_password"></button>
          </div>
          <p class="hint">${t.id ? 'Only fill this in if you want to reset the teacher\u2019s password.' : 'Minimum 6 characters.'}</p>
          <p class="field-error"></p>
        </div>
        <div class="form-group field--full"><label for="t_status">Account Status</label>
          <select id="t_status">
            <option ${t.status === 'Active' || !t.status ? 'selected' : ''}>Active</option>
            <option ${t.status === 'Inactive' ? 'selected' : ''}>Inactive</option>
          </select>
        </div>
      </div>
      <div class="form-actions">
        <button type="button" class="btn btn--secondary" data-action="modal-cancel">Cancel</button>
        <button type="submit" class="btn btn--primary" id="teacherFormSubmit"><span class="btn__label">${t.id ? 'Save Changes' : 'Create Teacher'}</span><span class="btn__spinner"></span></button>
      </div>
    </form>
  `;
}

function openTeacherFormModal(existing){
  openModal(existing ? 'Edit Teacher' : 'Add Teacher', teacherFormFields(existing), { onMount: body => {
    const pwToggle = body.querySelector('[data-toggle-for="t_password"]');
    pwToggle.addEventListener('click', () => {
      const input = body.querySelector('#t_password');
      const showing = input.type === 'text';
      input.type = showing ? 'password' : 'text';
      pwToggle.setAttribute('data-icon', showing ? 'eye' : 'eyeOff');
      mountIcons(body);
    });

    const validators = {
      name: () => body.querySelector('#t_name').value.trim() ? '' : 'Full name is required.',
      email: () => { const v = body.querySelector('#t_email').value.trim(); if (!v) return 'Email is required.'; if (!isValidEmailFormat(v)) return 'Please enter a valid email address.'; if (!isFcpcEmail(v)) return 'Email must use the @fcpc.edu.ph domain.'; if (isEmailTaken(v, existing ? existing.id : null)) return 'This email is already registered.'; return ''; },
      password: () => { const v = body.querySelector('#t_password').value; if (!existing && !v) return 'Password is required.'; if (v && v.length < 6) return 'Password must be at least 6 characters.'; return ''; }
    };
    Object.keys(validators).forEach(key => wireInlineValidation(body.querySelector('#t_' + key), validators[key]));

    body.querySelector('#teacherForm').addEventListener('submit', e => {
      e.preventDefault();
      const results = Object.keys(validators).map(key => validators[key]());
      Object.keys(validators).forEach((key, i) => setFieldError(body.querySelector('#t_' + key).closest('.form-group'), results[i]));
      if (results.some(r => r)) { showToast('warning', 'Please complete all required fields.', 'Check the highlighted fields and try again.'); return; }

      const btn = body.querySelector('#teacherFormSubmit');
      btn.classList.add('is-loading'); btn.disabled = true;
      setTimeout(() => {
        const payload = {
          name: body.querySelector('#t_name').value.trim(),
          email: body.querySelector('#t_email').value.trim().toLowerCase(),
          status: body.querySelector('#t_status').value
        };
        const pw = body.querySelector('#t_password').value;
        if (pw) payload.password = pw;
        else if (!existing) payload.password = 'teacher123';

        if (existing) updateTeacher(existing.id, payload);
        else createTeacher(payload);

        closeModal();
        renderTeachersPage();
        if (state.currentPage === 'dashboard') renderDashboard();
        refreshNotifications();
        showToast('success', existing ? 'Teacher record updated.' : 'Teacher account created successfully.');
      }, 350);
    });
  }});
}

function openViewTeacherModal(t){
  const myStudents = readStudents().filter(s => s.teacherId === t.id);
  const html = `
    <div class="view-grid">
      <div class="view-item"><span class="view-label">Full Name</span><span class="view-value">${escapeHtml(t.name)}</span></div>
      <div class="view-item"><span class="view-label">Email</span><span class="view-value">${escapeHtml(t.email)}</span></div>
      <div class="view-item"><span class="view-label">Account Status</span><span class="view-value">${t.status || 'Active'}</span></div>
      <div class="view-item"><span class="view-label">Assigned Students</span><span class="view-value">${myStudents.length}</span></div>
    </div>
    ${myStudents.length ? `<div class="activity-list" style="margin-top:16px">${myStudents.map(s => `
      <div class="activity-row">
        <div class="activity-row__icon" data-icon="user" data-size="15"></div>
        <div class="activity-row__text"><p><strong>${escapeHtml(s.name)}</strong> — ${escapeHtml(s.studentId)}</p></div>
      </div>
    `).join('')}</div>` : ''}
    <div class="form-actions"><button type="button" class="btn btn--secondary" data-action="modal-cancel">Close</button></div>
  `;
  openModal('Teacher Details', html);
}

//studentdash
function getFilteredSortedStudents(session){
  let list = getVisibleStudents(session);
  if (state.studentQuery){
    const q = state.studentQuery.toLowerCase();
    list = list.filter(s => s.name.toLowerCase().includes(q) || s.studentId.toLowerCase().includes(q) || s.email.toLowerCase().includes(q));
  }
  if (state.studentCourseFilter) list = list.filter(s => s.course === state.studentCourseFilter);
  if (state.studentYearFilter) list = list.filter(s => s.yearLevel === state.studentYearFilter);
  if (session.role === 'admin' && state.studentTeacherFilter){
    if (state.studentTeacherFilter === '__unassigned__') list = list.filter(s => !s.teacherId);
    else list = list.filter(s => s.teacherId === Number(state.studentTeacherFilter));
  }
  const { key, dir } = state.studentSort;
  list = [...list].sort((a,b) => String(a[key]).localeCompare(String(b[key])) * dir);
  return list;
}

function teacherNameFor(teacherId){
  if (!teacherId) return 'Unassigned';
  const t = getTeacherById(teacherId);
  return t ? t.name : 'Unassigned';
}

function renderStudentsPage(){
  const session = getSession();
  const isAdmin = session.role === 'admin';
  const list = getFilteredSortedStudents(session);
  const total = getVisibleStudents(session).length;
  const courseOptions = COURSES.map(c => `<option value="${c}" ${state.studentCourseFilter === c ? 'selected' : ''}>${c}</option>`).join('');
  const yearOptions = YEAR_LEVELS.map(y => `<option value="${y}" ${state.studentYearFilter === y ? 'selected' : ''}>${y}</option>`).join('');
  const teacherOptions = readTeachers().map(t => `<option value="${t.id}" ${state.studentTeacherFilter === String(t.id) ? 'selected' : ''}>${escapeHtml(t.name)}</option>`).join('');

  const rows = list.map(s => `
    <tr>
      <td data-label="Student ID" class="cell-primary">${escapeHtml(s.studentId)}</td>
      <td data-label="Name">${escapeHtml(s.name)}</td>
      <td data-label="Email" class="cell-muted">${escapeHtml(s.email)}</td>
      <td data-label="Course">${escapeHtml(s.course)}</td>
      <td data-label="Year Level">${escapeHtml(s.yearLevel || '—')}</td>
      <td data-label="Section">${escapeHtml(s.section)}</td>
      ${isAdmin ? `<td data-label="Teacher">${escapeHtml(teacherNameFor(s.teacherId))}</td>` : ''}
      <td data-label="Status"><span class="badge badge--${s.status.toLowerCase()}">${s.status}</span></td>
      <td data-label="Actions">
        <div class="cell-actions">
          <button class="icon-btn" data-action="view-student" data-id="${s.id}" aria-label="View" data-icon="eyeInfo" data-size="16"></button>
          <button class="icon-btn" data-action="edit-student" data-id="${s.id}" aria-label="Edit" data-icon="edit" data-size="16"></button>
          <button class="icon-btn" data-action="delete-student" data-id="${s.id}" aria-label="Delete" data-icon="trash" data-size="16"></button>
        </div>
      </td>
    </tr>
  `).join('');

  const arrow = key => state.studentSort.key === key ? `<span class="sort-arrow">${state.studentSort.dir === 1 ? '▲' : '▼'}</span>` : '';

  const html = `
    <div class="panel">
      <div class="panel__head">
        <div><h2>Student records</h2><p>${list.length} of ${total} student${total === 1 ? '' : 's'} shown</p></div>
        <button type="button" class="btn btn--primary btn--sm" data-action="quick-add-student"><span class="icon" data-icon="plus" data-size="15"></span>Add Student</button>
      </div>
      <div class="toolbar">
        <div class="search-box"><span class="icon" data-icon="search" data-size="15"></span><input type="text" id="studentSearchInput" placeholder="Search by name, ID, or email" value="${escapeHtml(state.studentQuery)}"></div>
        <select class="select-filter" id="studentCourseFilter">
          <option value="">All courses</option>
          ${courseOptions}
        </select>
        <select class="select-filter" id="studentYearFilter">
          <option value="">All year levels</option>
          ${yearOptions}
        </select>
        ${isAdmin ? `<select class="select-filter" id="studentTeacherFilter">
          <option value="">All teachers</option>
          ${teacherOptions}
          <option value="__unassigned__" ${state.studentTeacherFilter === '__unassigned__' ? 'selected' : ''}>Unassigned</option>
        </select>` : ''}
      </div>
      <div class="table-wrap">
        ${list.length ? `
        <table class="data-table">
          <thead><tr>
            <th data-sort="studentId">Student ID${arrow('studentId')}</th>
            <th data-sort="name">Student Name${arrow('name')}</th>
            <th>Email</th>
            <th data-sort="course">Course${arrow('course')}</th>
            <th data-sort="yearLevel">Year Level${arrow('yearLevel')}</th>
            <th>Section</th>
            ${isAdmin ? '<th>Teacher</th>' : ''}
            <th data-sort="status">Account Status${arrow('status')}</th>
            <th>Actions</th>
          </tr></thead>
          <tbody>${rows}</tbody>
        </table>` : renderEmptyState('No students found', session.role === 'teacher' ? 'You have no assigned students matching your search.' : 'There are currently no student records matching your search.', 'Clear filters', 'data-action="clear-student-filters"')}
      </div>
    </div>
  `;
  setHTML(document.getElementById('page-students'), html);

  document.getElementById('studentSearchInput').addEventListener('input', debounceRender(e => { state.studentQuery = e.target.value; renderStudentsPage(); document.getElementById('studentSearchInput').focus(); document.getElementById('studentSearchInput').selectionStart = document.getElementById('studentSearchInput').value.length; }, 150));
  document.getElementById('studentCourseFilter').addEventListener('change', e => { state.studentCourseFilter = e.target.value; renderStudentsPage(); });
  document.getElementById('studentYearFilter').addEventListener('change', e => { state.studentYearFilter = e.target.value; renderStudentsPage(); });
  if (isAdmin) document.getElementById('studentTeacherFilter').addEventListener('change', e => { state.studentTeacherFilter = e.target.value; renderStudentsPage(); });
  document.querySelectorAll('#page-students th[data-sort]').forEach(th => th.addEventListener('click', () => {
    const key = th.dataset.sort;
    state.studentSort = { key, dir: state.studentSort.key === key ? -state.studentSort.dir : 1 };
    renderStudentsPage();
  }));
}

function studentFormFields(s, session){
  s = s || {};
  const isAdmin = session && session.role === 'admin';
  const teacherField = isAdmin ? `
        <div class="form-group field--full"><label for="f_teacher">Assigned Teacher</label>
          <select id="f_teacher">
            <option value="">— Select a teacher —</option>
            ${readTeachers().map(t => `<option value="${t.id}" ${s.teacherId === t.id ? 'selected' : ''}>${escapeHtml(t.name)} (${escapeHtml(t.email)})</option>`).join('')}
          </select>
          <p class="hint">The teacher who will manage this student's attendance.</p>
          <p class="field-error"></p>
        </div>` : '';
  return `
    <form id="studentForm" novalidate>
      <div class="form-grid">
        <div class="form-group"><label for="f_studentId">Student ID</label>
          <input type="text" id="f_studentId" value="${escapeHtml(s.studentId || '')}" placeholder="e.g. 2026-0007">
          <p class="field-error"></p>
        </div>
        <div class="form-group"><label for="f_name">Full Name</label>
          <input type="text" id="f_name" value="${escapeHtml(s.name || '')}" placeholder="Juan Dela Cruz">
          <p class="field-error"></p>
        </div>
        <div class="form-group field--full"><label for="f_email">Email</label>
          <input type="text" id="f_email" value="${escapeHtml(s.email || '')}" placeholder="studentXX@fcpc.edu.ph">
          <p class="field-error"></p>
        </div>
        ${teacherField}
        <div class="form-group field--full"><label for="f_password">Password</label>
          <div class="password-input-wrap">
            <input type="password" id="f_password" placeholder="${s.id ? 'Leave blank to keep current password' : 'Minimum 6 characters'}">
            <button type="button" data-icon="eye" data-size="16" data-toggle-for="f_password"></button>
          </div>
          <p class="hint">${s.id ? 'Only fill this in if you want to reset the student\u2019s password.' : 'Minimum 6 characters.'}</p>
          <p class="field-error"></p>
        </div>
        <div class="form-group"><label for="f_course">Course</label>
          <select id="f_course">${COURSES.map(c => `<option ${s.course === c ? 'selected' : ''}>${c}</option>`).join('')}</select>
        </div>
        <div class="form-group"><label for="f_yearLevel">Year Level</label>
          <select id="f_yearLevel">${YEAR_LEVELS.map(y => `<option ${s.yearLevel === y ? 'selected' : ''}>${y}</option>`).join('')}</select>
        </div>
        <div class="form-group"><label for="f_section">Section</label>
          <select id="f_section">${SECTIONS.map(sec => `<option value="${sec}" ${s.section === sec ? 'selected' : ''}>${sec}</option>`).join('')}<option value="__other__" ${s.section && !SECTIONS.includes(s.section) ? 'selected' : ''}>+ Add new section</option></select>
          <input type="text" id="f_section_other" class="${s.section && !SECTIONS.includes(s.section) ? '' : 'hidden'}" style="margin-top:8px" value="${escapeHtml(s.section && !SECTIONS.includes(s.section) ? s.section : '')}" placeholder="Letters only, e.g. D" maxlength="10">
          <p class="field-error"></p>
        </div>
        <div class="form-group field--full"><label for="f_status">Account Status</label>
          <select id="f_status">
            <option ${s.status === 'Active' || !s.status ? 'selected' : ''}>Active</option>
            <option ${s.status === 'Inactive' ? 'selected' : ''}>Inactive</option>
          </select>
        </div>
      </div>
      <div class="form-actions">
        <button type="button" class="btn btn--secondary" data-action="modal-cancel">Cancel</button>
        <button type="submit" class="btn btn--primary" id="studentFormSubmit"><span class="btn__label">${s.id ? 'Save Changes' : 'Create Student'}</span><span class="btn__spinner"></span></button>
      </div>
    </form>
  `;
}

function wireInlineValidation(inputEl, validateFn){
  const run = () => { const msg = validateFn(inputEl.value); setFieldError(inputEl.closest('.form-group') || inputEl.closest('.field'), msg); return !msg; };
  inputEl.addEventListener('blur', run);
  inputEl.addEventListener('input', () => { if ((inputEl.closest('.form-group') || inputEl.closest('.field')).classList.contains('has-error')) run(); });
  return run;
}

function openStudentFormModal(existing){
  const session = getSession();
  const isAdmin = session.role === 'admin';
  if (isAdmin && !readTeachers().length){
    showToast('warning', 'No teachers available.', 'Add a teacher account before creating a student.');
    return;
  }
  openModal(existing ? 'Edit Student' : 'Add Student', studentFormFields(existing, session), { onMount: body => {
    const pwToggle = body.querySelector('[data-toggle-for="f_password"]');
    pwToggle.addEventListener('click', () => {
      const input = body.querySelector('#f_password');
      const showing = input.type === 'text';
      input.type = showing ? 'password' : 'text';
      pwToggle.setAttribute('data-icon', showing ? 'eye' : 'eyeOff');
      mountIcons(body);
    });

    const sectionSelect = body.querySelector('#f_section');
    const sectionOther = body.querySelector('#f_section_other');
    const syncSectionOtherVisibility = () => {
      sectionOther.classList.toggle('hidden', sectionSelect.value !== '__other__');
      if (sectionSelect.value === '__other__') sectionOther.focus();
    };
    sectionSelect.addEventListener('change', syncSectionOtherVisibility);
    sectionOther.addEventListener('input', () => {
      const cleaned = sectionOther.value.replace(/[^A-Za-z]/g, '').toUpperCase();
      if (cleaned !== sectionOther.value) sectionOther.value = cleaned;
    });
    const getSectionValue = () => sectionSelect.value === '__other__' ? sectionOther.value.trim() : sectionSelect.value;

    const validators = {
      studentId: () => { const v = body.querySelector('#f_studentId').value.trim(); if (!v) return 'Student ID is required.'; if (isStudentIdTaken(v, existing ? existing.id : null)) return 'This Student ID is already in use.'; return ''; },
      name: () => body.querySelector('#f_name').value.trim() ? '' : 'Full name is required.',
      email: () => { const v = body.querySelector('#f_email').value.trim(); if (!v) return 'Email is required.'; if (!isValidEmailFormat(v)) return 'Please enter a valid email address.'; if (!isFcpcEmail(v)) return 'Email must use the @fcpc.edu.ph domain.'; if (isEmailTaken(v, existing ? existing.id : null)) return 'This email is already registered.'; return ''; },
      password: () => { const v = body.querySelector('#f_password').value; if (!existing && !v) return 'Password is required.'; if (v && v.length < 6) return 'Password must be at least 6 characters.'; return ''; },
      section: () => { const v = getSectionValue(); if (!v) return 'Section is required.'; if (!/^[A-Za-z]+$/.test(v)) return 'Section must contain letters only.'; return ''; }
    };
    if (isAdmin) validators.teacher = () => body.querySelector('#f_teacher').value ? '' : 'Please assign a teacher for this student.';
    Object.keys(validators).forEach(key => {
      if (key === 'section'){
        wireInlineValidation(sectionOther, validators.section);
        sectionSelect.addEventListener('change', () => setFieldError(sectionSelect.closest('.form-group'), validators.section()));
        return;
      }
      if (key === 'teacher'){
        wireInlineValidation(body.querySelector('#f_teacher'), validators.teacher);
        return;
      }
      wireInlineValidation(body.querySelector('#f_' + key), validators[key]);
    });

    body.querySelector('#studentForm').addEventListener('submit', e => {
      e.preventDefault();
      const results = Object.keys(validators).map(key => validators[key]());
      Object.keys(validators).forEach((key, i) => setFieldError(body.querySelector('#f_' + key).closest('.form-group'), results[i]));
      if (results.some(r => r)) { showToast('warning', 'Please complete all required fields.', 'Check the highlighted fields and try again.'); return; }

      const btn = body.querySelector('#studentFormSubmit');
      btn.classList.add('is-loading'); btn.disabled = true;
      setTimeout(() => {
        const payload = {
          studentId: body.querySelector('#f_studentId').value.trim(),
          name: body.querySelector('#f_name').value.trim(),
          email: body.querySelector('#f_email').value.trim().toLowerCase(),
          course: body.querySelector('#f_course').value,
          yearLevel: body.querySelector('#f_yearLevel').value,
          section: getSectionValue().toUpperCase(),
          status: body.querySelector('#f_status').value,
          teacherId: isAdmin ? Number(body.querySelector('#f_teacher').value) : session.id
        };
        const pw = body.querySelector('#f_password').value;
        if (pw) payload.password = pw;
        else if (!existing) payload.password = 'student123';

        if (existing) updateStudent(existing.id, payload);
        else createStudent(payload);

        closeModal();
        renderStudentsPage();
        if (state.currentPage === 'dashboard') renderDashboard();
        refreshNotifications();
        showToast('success', existing ? 'Student record updated.' : 'Student account created successfully.');
      }, 350);
    });
  }});
}

function openViewStudentModal(s){
  const session = getSession();
  const html = `
    <div class="view-grid">
      <div class="view-item"><span class="view-label">Student ID</span><span class="view-value">${escapeHtml(s.studentId)}</span></div>
      <div class="view-item"><span class="view-label">Full Name</span><span class="view-value">${escapeHtml(s.name)}</span></div>
      <div class="view-item"><span class="view-label">Email</span><span class="view-value">${escapeHtml(s.email)}</span></div>
      <div class="view-item"><span class="view-label">Course</span><span class="view-value">${escapeHtml(s.course)}</span></div>
      <div class="view-item"><span class="view-label">Year Level</span><span class="view-value">${escapeHtml(s.yearLevel || '—')}</span></div>
      <div class="view-item"><span class="view-label">Section</span><span class="view-value">${escapeHtml(s.section)}</span></div>
      ${session.role === 'admin' ? `<div class="view-item"><span class="view-label">Assigned Teacher</span><span class="view-value">${escapeHtml(teacherNameFor(s.teacherId))}</span></div>` : ''}
      <div class="view-item"><span class="view-label">Account Status</span><span class="view-value">${s.status}</span></div>
    </div>
    <div class="form-actions"><button type="button" class="btn btn--secondary" data-action="modal-cancel">Close</button></div>
  `;
  openModal('Student Details', html);
}

function getScopedAttendance(session){
  if (session.role === 'student') return readAttendance().filter(a => a.studentId === session.studentId);
  if (session.role === 'teacher'){
    const ids = getVisibleStudents(session).map(s => s.studentId);
    return readAttendance().filter(a => ids.includes(a.studentId));
  }
  return readAttendance();
}
function getFilteredSortedAttendance(session){
  let list = getScopedAttendance(session);
  if (state.attQuery){
    const q = state.attQuery.toLowerCase();
    list = list.filter(a => a.studentName.toLowerCase().includes(q) || a.studentId.toLowerCase().includes(q) || a.subject.toLowerCase().includes(q));
  }
  if (state.attStatusFilter) list = list.filter(a => a.status === state.attStatusFilter);
  if (state.attDateFilter) list = list.filter(a => a.date === state.attDateFilter);
  if (state.attStudentFilter) list = list.filter(a => a.studentId === state.attStudentFilter);
  const { key, dir } = state.attSort;
  list = [...list].sort((a,b) => String(a[key]).localeCompare(String(b[key])) * dir);
  return list;
}

function renderAttendancePage(){
  const session = getSession();
  const isStaff = session.role === 'admin' || session.role === 'teacher';
  const list = getFilteredSortedAttendance(session);
  const totalCount = getScopedAttendance(session).length;

  const studentOptions = getVisibleStudents(session).map(s => `<option value="${s.studentId}" ${state.attStudentFilter === s.studentId ? 'selected' : ''}>${escapeHtml(s.name)}</option>`).join('');

  const rows = list.map(a => `
    <tr>
      <td data-label="Date" class="cell-primary">${formatDateDisplay(a.date)}</td>
      ${isStaff ? `<td data-label="Student">${escapeHtml(a.studentName)}</td><td data-label="Student ID" class="cell-muted">${escapeHtml(a.studentId)}</td>` : ''}
      <td data-label="Subject">${escapeHtml(a.subject)}</td>
      <td data-label="Time" class="cell-muted">${formatTime12(a.time)}</td>
      <td data-label="Status">${statusBadge(a.status)}</td>
      ${isStaff ? `<td data-label="Actions"><div class="cell-actions">
          <button class="icon-btn" data-action="view-attendance" data-id="${a.id}" aria-label="View" data-icon="eyeInfo" data-size="16"></button>
          <button class="icon-btn" data-action="edit-attendance" data-id="${a.id}" aria-label="Edit" data-icon="edit" data-size="16"></button>
          <button class="icon-btn" data-action="delete-attendance" data-id="${a.id}" aria-label="Delete" data-icon="trash" data-size="16"></button>
        </div></td>` : ''}
    </tr>
  `).join('');

  const arrow = key => state.attSort.key === key ? `<span class="sort-arrow">${state.attSort.dir === 1 ? '▲' : '▼'}</span>` : '';

  const html = `
    <div class="panel">
      <div class="panel__head">
        <div><h2>${isStaff ? 'Attendance records' : 'Attendance history'}</h2><p>${list.length} of ${totalCount} record${totalCount === 1 ? '' : 's'} shown</p></div>
        ${isStaff ? `<button type="button" class="btn btn--primary btn--sm" data-action="quick-add-attendance"><span class="icon" data-icon="plus" data-size="15"></span>Add Attendance</button>` : ''}
      </div>
      <div class="toolbar">
        <div class="search-box"><span class="icon" data-icon="search" data-size="15"></span><input type="text" id="attSearchInput" placeholder="${isStaff ? 'Search by student or subject' : 'Search by subject'}" value="${escapeHtml(state.attQuery)}"></div>
        <select class="select-filter" id="attStatusFilter">
          <option value="">All statuses</option>
          <option ${state.attStatusFilter === 'Present' ? 'selected' : ''}>Present</option>
          <option ${state.attStatusFilter === 'Late' ? 'selected' : ''}>Late</option>
          <option ${state.attStatusFilter === 'Absent' ? 'selected' : ''}>Absent</option>
        </select>
        <input type="date" class="select-filter" id="attDateFilter" value="${state.attDateFilter}">
        ${isStaff ? `<select class="select-filter" id="attStudentFilter"><option value="">All students</option>${studentOptions}</select>` : ''}
        ${(state.attQuery || state.attStatusFilter || state.attDateFilter || state.attStudentFilter) ? `<button type="button" class="btn btn--ghost btn--sm" data-action="clear-att-filters">Clear filters</button>` : ''}
      </div>
      <div class="table-wrap">
        ${list.length ? `
        <table class="data-table">
          <thead><tr>
            <th data-sort="date">Date${arrow('date')}</th>
            ${isStaff ? `<th data-sort="studentName">Student${arrow('studentName')}</th><th>Student ID</th>` : ''}
            <th data-sort="subject">Subject${arrow('subject')}</th>
            <th>Time</th>
            <th data-sort="status">Status${arrow('status')}</th>
            ${isStaff ? '<th>Actions</th>' : ''}
          </tr></thead>
          <tbody>${rows}</tbody>
        </table>` : renderEmptyState('No attendance records found', 'No attendance records are available for this selection.', 'Clear filters', 'data-action="clear-att-filters"')}
      </div>
    </div>
  `;
  setHTML(document.getElementById('page-attendance'), html);

  document.getElementById('attSearchInput').addEventListener('input', debounceRender(e => { state.attQuery = e.target.value; renderAttendancePage(); const el = document.getElementById('attSearchInput'); el.focus(); el.selectionStart = el.value.length; }, 150));
  document.getElementById('attStatusFilter').addEventListener('change', e => { state.attStatusFilter = e.target.value; renderAttendancePage(); });
  document.getElementById('attDateFilter').addEventListener('change', e => { state.attDateFilter = e.target.value; renderAttendancePage(); });
  if (isStaff) document.getElementById('attStudentFilter').addEventListener('change', e => { state.attStudentFilter = e.target.value; renderAttendancePage(); });
  document.querySelectorAll('#page-attendance th[data-sort]').forEach(th => th.addEventListener('click', () => {
    const key = th.dataset.sort;
    state.attSort = { key, dir: state.attSort.key === key ? -state.attSort.dir : 1 };
    renderAttendancePage();
  }));
}

function attendanceFormFields(a, session){
  a = a || {};
  const students = getVisibleStudents(session);
  return `
    <form id="attForm" novalidate>
      <div class="form-grid">
        <div class="form-group"><label for="a_date">Date</label><input type="date" id="a_date" value="${a.date || todayISO()}"><p class="field-error"></p></div>
        <div class="form-group"><label for="a_time">Time</label><input type="time" id="a_time" value="${a.time || ''}"><p class="field-error"></p></div>
        <div class="form-group field--full"><label for="a_student">Student</label>
          <select id="a_student">${students.map(s => `<option value="${s.studentId}" ${a.studentId === s.studentId ? 'selected' : ''}>${escapeHtml(s.name)} — ${s.studentId}</option>`).join('')}</select>
        </div>
        <div class="form-group field--full"><label for="a_subject">Subject</label>
          <select id="a_subject">${SUBJECTS.map(sub => `<option ${a.subject === sub ? 'selected' : ''}>${sub}</option>`).join('')}</select>
        </div>
        <div class="form-group field--full"><label for="a_status">Status</label>
          <select id="a_status">
            <option ${a.status === 'Present' || !a.status ? 'selected' : ''}>Present</option>
            <option ${a.status === 'Late' ? 'selected' : ''}>Late</option>
            <option ${a.status === 'Absent' ? 'selected' : ''}>Absent</option>
          </select>
        </div>
      </div>
      <div class="form-actions">
        <button type="button" class="btn btn--secondary" data-action="modal-cancel">Cancel</button>
        <button type="submit" class="btn btn--primary" id="attFormSubmit"><span class="btn__label">${a.id ? 'Save Changes' : 'Save Attendance'}</span><span class="btn__spinner"></span></button>
      </div>
    </form>
  `;
}

function openAttendanceFormModal(existing){
  const session = getSession();
  if (!getVisibleStudents(session).length){
    showToast('warning', 'Please complete all required fields.', session.role === 'teacher' ? 'You have no assigned students yet.' : 'Add a student before recording attendance.');
    return;
  }
  openModal(existing ? 'Edit Attendance Record' : 'Record Attendance', attendanceFormFields(existing, session), { onMount: body => {
    const dateField = body.querySelector('#a_date').closest('.form-group');
    const timeField = body.querySelector('#a_time').closest('.form-group');
    body.querySelector('#attForm').addEventListener('submit', e => {
      e.preventDefault();
      const date = body.querySelector('#a_date').value;
      const time = body.querySelector('#a_time').value;
      let ok = true;
      if (!date){ setFieldError(dateField, 'Date is required.'); ok = false; } else setFieldError(dateField, '');
      if (!time){ setFieldError(timeField, 'Time is required.'); ok = false; } else setFieldError(timeField, '');
      if (!ok){ showToast('warning', 'Please complete all required fields.'); return; }

      const studentId = body.querySelector('#a_student').value;
      const student = readStudents().find(s => s.studentId === studentId);
      const btn = body.querySelector('#attFormSubmit');
      btn.classList.add('is-loading'); btn.disabled = true;
      setTimeout(() => {
        const payload = { date, time, studentId, studentName: student ? student.name : '', subject: body.querySelector('#a_subject').value, status: body.querySelector('#a_status').value };
        if (existing) updateAttendance(existing.id, payload); else createAttendance(payload);
        closeModal();
        renderAttendancePage();
        if (state.currentPage === 'dashboard') renderDashboard();
        refreshNotifications();
        showToast('success', existing ? 'Attendance record updated.' : 'Attendance record saved.');
      }, 350);
    });
  }});
}

function openViewAttendanceModal(a){
  const html = `
    <div class="view-grid">
      <div class="view-item"><span class="view-label">Date</span><span class="view-value">${formatDateDisplay(a.date)}</span></div>
      <div class="view-item"><span class="view-label">Time</span><span class="view-value">${formatTime12(a.time)}</span></div>
      <div class="view-item"><span class="view-label">Student</span><span class="view-value">${escapeHtml(a.studentName)}</span></div>
      <div class="view-item"><span class="view-label">Student ID</span><span class="view-value">${escapeHtml(a.studentId)}</span></div>
      <div class="view-item"><span class="view-label">Subject</span><span class="view-value">${escapeHtml(a.subject)}</span></div>
      <div class="view-item"><span class="view-label">Status</span><span class="view-value">${statusBadge(a.status)}</span></div>
    </div>
    <div class="form-actions"><button type="button" class="btn btn--secondary" data-action="modal-cancel">Close</button></div>
  `;
  openModal('Attendance Details', html);
}

function renderReportsPage(){
  const session = getSession();
  const isAdmin = session.role === 'admin';
  const students = getVisibleStudents(session);
  let records = getScopedAttendance(session);
  if (state.reportFrom) records = records.filter(r => r.date >= state.reportFrom);
  if (state.reportTo) records = records.filter(r => r.date <= state.reportTo);

  const summary = students.map(s => {
    const mine = records.filter(r => r.studentId === s.studentId);
    return { ...s, stats: calcStats(mine) };
  }).sort((a,b) => b.stats.total - a.stats.total);

  const overall = calcStats(records);
  const dist = [
    { label:'Present', count: overall.present, color:'var(--success)' },
    { label:'Late', count: overall.late, color:'var(--warn)' },
    { label:'Absent', count: overall.absent, color:'var(--danger)' }
  ];

  const rows = summary.map(s => `
    <tr>
      <td data-label="Student" class="cell-primary">${escapeHtml(s.name)}</td>
      <td data-label="Student ID" class="cell-muted">${escapeHtml(s.studentId)}</td>
      ${isAdmin ? `<td data-label="Teacher">${escapeHtml(teacherNameFor(s.teacherId))}</td>` : ''}
      <td data-label="Present">${s.stats.present}</td>
      <td data-label="Late">${s.stats.late}</td>
      <td data-label="Absent">${s.stats.absent}</td>
      <td data-label="Total">${s.stats.total}</td>
      <td data-label="Rate">${s.stats.rate}%</td>
    </tr>
  `).join('');

  const html = `
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-card__top"><div class="stat-card__icon" data-icon="attendance" data-size="18"></div></div><p class="stat-card__value">${overall.total}</p><p class="stat-card__label">Total Records</p><p class="stat-card__desc">In selected range</p></div>
      <div class="stat-card stat-card--accent"><div class="stat-card__top"><div class="stat-card__icon" data-icon="reports" data-size="18"></div></div><p class="stat-card__value">${overall.rate}%</p><p class="stat-card__label">Overall Rate</p><p class="stat-card__desc">Present + late</p></div>
    </div>

    <div class="panel">
      <div class="panel__head"><div><h2>Attendance distribution</h2><p>Across all filtered records.</p></div></div>
      <div class="panel__body">
        ${overall.total ? dist.map(d => `
          <div class="dist-bar">
            <div class="dist-bar__label"><span>${d.label}</span><span>${d.count} (${overall.total ? Math.round(d.count/overall.total*100) : 0}%)</span></div>
            <div class="dist-bar__track"><div class="dist-bar__fill" style="width:${overall.total ? (d.count/overall.total*100) : 0}%;background:${d.color}"></div></div>
          </div>
        `).join('') : renderEmptyState('No data for this range', 'Choose a different date range or add attendance records.', null, null)}
      </div>
    </div>

    <div class="panel">
      <div class="report-toolbar">
        <div><h2 style="font-size:16px">Per-student summary</h2><p class="section-sub" style="margin-bottom:0">Generated from stored attendance records.</p></div>
        <div class="report-toolbar__filters">
          <input type="date" class="select-filter" id="reportFrom" value="${state.reportFrom}" aria-label="From date">
          <input type="date" class="select-filter" id="reportTo" value="${state.reportTo}" aria-label="To date">
          <button type="button" class="btn btn--secondary btn--sm" id="exportCsvBtn"><span class="icon" data-icon="download" data-size="14"></span>Export CSV</button>
        </div>
      </div>
      <div class="table-wrap">
        ${summary.length ? `
        <table class="data-table">
          <thead><tr><th>Student</th><th>Student ID</th>${isAdmin ? '<th>Teacher</th>' : ''}<th>Present</th><th>Late</th><th>Absent</th><th>Total</th><th>Rate</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>` : renderEmptyState('No students to report on', 'Add student records to generate an attendance report.', null, null)}
      </div>
    </div>
  `;
  setHTML(document.getElementById('page-reports'), html);

  document.getElementById('reportFrom').addEventListener('change', e => { state.reportFrom = e.target.value; renderReportsPage(); });
  document.getElementById('reportTo').addEventListener('change', e => { state.reportTo = e.target.value; renderReportsPage(); });
  document.getElementById('exportCsvBtn').addEventListener('click', () => exportReportCsv(summary));
}

function exportReportCsv(summary){
  const isAdmin = getSession().role === 'admin';
  const header = ['Student Name','Student ID', ...(isAdmin ? ['Teacher'] : []), 'Present','Late','Absent','Total','Attendance Rate (%)'];
  const rows = summary.map(s => [s.name, s.studentId, ...(isAdmin ? [teacherNameFor(s.teacherId)] : []), s.stats.present, s.stats.late, s.stats.absent, s.stats.total, s.stats.rate]);
  const csv = [header, ...rows].map(r => r.map(cell => `"${String(cell).replace(/"/g,'""')}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type:'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `fcpc-attendance-report-${todayISO()}.csv`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('success', 'Report exported.', 'The CSV file has started downloading.');
}

function renderSettingsPage(){
  const session = getSession();
  const admin = readUsers().find(u => u.id === session.id);
  const html = `
    <div class="panel">
      <div class="panel__head"><div><h2>Profile information</h2><p>Update your display name and sign-in email.</p></div></div>
      <div class="panel__body">
        <form id="profileForm" novalidate>
          <div class="form-grid">
            <div class="form-group"><label for="s_name">Full Name</label><input type="text" id="s_name" value="${escapeHtml(admin.name)}"><p class="field-error"></p></div>
            <div class="form-group"><label for="s_email">Email</label><input type="text" id="s_email" value="${escapeHtml(admin.email)}"><p class="hint">Changing this updates your sign-in email. Must be an @fcpc.edu.ph address.</p><p class="field-error"></p></div>
            <div class="form-group field--full" id="s_emailPasswordGroup" style="display:none">
              <label for="s_currentForEmail">Confirm Current Password</label>
              <input type="password" id="s_currentForEmail" autocomplete="current-password">
              <p class="hint">Enter your password to confirm this email change.</p>
              <p class="field-error"></p>
            </div>
          </div>
          <div class="form-actions"><button type="submit" class="btn btn--primary btn--sm" id="profileFormSubmit"><span class="btn__label">Save Changes</span><span class="btn__spinner"></span></button></div>
        </form>
      </div>
    </div>

    <div class="panel">
      <div class="panel__head"><div><h2>Change password</h2><p>Manage your account credentials.</p></div></div>
      <div class="panel__body">
        <form id="passwordForm" novalidate>
          <div class="form-grid">
            <div class="form-group field--full"><label for="s_current">Current Password</label><input type="password" id="s_current"><p class="field-error"></p></div>
            <div class="form-group"><label for="s_new">New Password</label><input type="password" id="s_new"><p class="field-error"></p></div>
            <div class="form-group"><label for="s_confirm">Confirm New Password</label><input type="password" id="s_confirm"><p class="field-error"></p></div>
          </div>
          <div class="form-actions"><button type="submit" class="btn btn--primary btn--sm" id="passwordFormSubmit"><span class="btn__label">Update Password</span><span class="btn__spinner"></span></button></div>
        </form>
      </div>
    </div>

    ${session.role === 'admin' ? `
    <div class="panel">
      <div class="panel__head"><div><h2>Data management</h2><p>This system uses a client-side academic database.</p></div></div>
      <div class="panel__body">
        <div class="info-callout" style="margin-bottom:16px">
          <span class="icon" data-icon="info" data-size="16"></span>
          <span>All student, attendance, and account data is stored locally in this browser using <strong>localStorage</strong>. This is a client-side academic database built for demonstration purposes — it is not connected to a production server or external database.</span>
        </div>
        <div class="settings-danger">
          <h3>Reset sample data</h3>
          <p>This restores the default demo accounts and attendance records, permanently removing anything you've added or changed.</p>
          <button type="button" class="btn btn--danger btn--sm" style="margin-top:12px" id="resetDataBtn">Reset Sample Data</button>
        </div>
      </div>
    </div>` : ''}
  `;
  setHTML(document.getElementById('page-settings'), html);

  const emailField = document.getElementById('s_email').closest('.form-group');
  const emailPassGroup = document.getElementById('s_emailPasswordGroup');
  const emailPassField = document.getElementById('s_currentForEmail').closest('.form-group');

  document.getElementById('s_email').addEventListener('input', () => {
    const changed = document.getElementById('s_email').value.trim().toLowerCase() !== admin.email.toLowerCase();
    emailPassGroup.style.display = changed ? '' : 'none';
    if (!changed){ setFieldError(emailPassField, ''); document.getElementById('s_currentForEmail').value = ''; }
  });

  document.getElementById('profileForm').addEventListener('submit', e => {
    e.preventDefault();
    const nameField = document.getElementById('s_name').closest('.form-group');
    const name = document.getElementById('s_name').value.trim();
    const newEmail = document.getElementById('s_email').value.trim();
    const emailChanged = newEmail.toLowerCase() !== admin.email.toLowerCase();

    let ok = true;
    if (!name){ setFieldError(nameField, 'Name is required.'); ok = false; } else setFieldError(nameField, '');

    if (!newEmail){ setFieldError(emailField, 'Email is required.'); ok = false; }
    else if (!isValidEmailFormat(newEmail)){ setFieldError(emailField, 'Please enter a valid email address.'); ok = false; }
    else if (!isFcpcEmail(newEmail)){ setFieldError(emailField, 'Email must end in @fcpc.edu.ph.'); ok = false; }
    else if (emailChanged && isEmailTaken(newEmail, admin.id)){ setFieldError(emailField, 'This email is already in use by another account.'); ok = false; }
    else setFieldError(emailField, '');

    if (emailChanged){
      if (document.getElementById('s_currentForEmail').value !== admin.password){
        setFieldError(emailPassField, 'Please enter your current password to confirm.'); ok = false;
      } else setFieldError(emailPassField, '');
    }
    if (!ok) return;

    const btn = document.getElementById('profileFormSubmit');
    btn.classList.add('is-loading'); btn.disabled = true;
    setTimeout(() => {
      const changes = { name };
      if (emailChanged) changes.email = newEmail;
      updateUser(admin.id, changes);
      const s = getSession(); s.name = name; if (emailChanged) s.email = newEmail; saveSession(s);
      updateTopbarIdentity();
      if (emailChanged){
        logActivity(`${session.role === 'admin' ? 'Administrator' : 'Teacher'} email changed to ${newEmail}.`);
        const remembered = getData(DATABASE_KEYS.remember, null);
        if (remembered && remembered.email && remembered.email.toLowerCase() === admin.email.toLowerCase()){
          setData(DATABASE_KEYS.remember, { email: newEmail, role: remembered.role });
        }
      }
      showToast('success', emailChanged ? 'Profile and email updated successfully.' : 'Profile updated successfully.');
      btn.classList.remove('is-loading'); btn.disabled = false;
      renderSettingsPage();
      refreshNotifications();
    }, 300);
  });

  document.getElementById('passwordForm').addEventListener('submit', e => {
    e.preventDefault();
    const curEl = document.getElementById('s_current'), newEl = document.getElementById('s_new'), confEl = document.getElementById('s_confirm');
    let ok = true;
    if (curEl.value !== admin.password){ setFieldError(curEl.closest('.form-group'), 'Current password is incorrect.'); ok = false; } else setFieldError(curEl.closest('.form-group'), '');
    if (newEl.value.length < 6){ setFieldError(newEl.closest('.form-group'), 'Password must be at least 6 characters.'); ok = false; } else setFieldError(newEl.closest('.form-group'), '');
    if (confEl.value !== newEl.value){ setFieldError(confEl.closest('.form-group'), 'Passwords do not match.'); ok = false; } else setFieldError(confEl.closest('.form-group'), '');
    if (!ok) return;
    const btn = document.getElementById('passwordFormSubmit');
    btn.classList.add('is-loading'); btn.disabled = true;
    setTimeout(() => {
      updateUser(admin.id, { password: newEl.value });
      logActivity(`${session.role === 'admin' ? 'Administrator' : 'Teacher'} password was changed.`);
      showToast('success', 'Password updated successfully.');
      document.getElementById('passwordForm').reset();
      btn.classList.remove('is-loading'); btn.disabled = false;
      refreshNotifications();
    }, 300);
  });

  const resetBtn = document.getElementById('resetDataBtn');
  if (resetBtn) resetBtn.addEventListener('click', () => {
    openConfirm({
      title:'Reset sample data?', danger:true, confirmText:'Reset Data',
      message:'This will erase all current students and attendance records and restore the original demo dataset. This cannot be undone.',
      onConfirm: () => {
        resetSampleData();
        showToast('success', 'Sample data has been reset.');
        refreshNotifications();
        navigateTo('dashboard');
      }
    });
  });
}

function renderProfilePage(){
  const session = getSession();
  const isStudent = session.role === 'student';
  const html = `
    <div class="panel">
      <div class="panel__head"><div><h2>Account profile</h2><p>Your account information on file.</p></div></div>
      <div class="panel__body">
        <div class="view-grid">
          <div class="view-item"><span class="view-label">Full Name</span><span class="view-value">${escapeHtml(session.name)}</span></div>
          <div class="view-item"><span class="view-label">Email</span><span class="view-value">${escapeHtml(session.email)}</span></div>
          <div class="view-item"><span class="view-label">Role</span><span class="view-value">${ROLE_LABELS[session.role]}</span></div>
          ${isStudent ? `
            <div class="view-item"><span class="view-label">Student ID</span><span class="view-value">${escapeHtml(session.studentId)}</span></div>
            <div class="view-item"><span class="view-label">Course</span><span class="view-value">${escapeHtml(session.course)}</span></div>
            <div class="view-item"><span class="view-label">Year Level</span><span class="view-value">${escapeHtml(session.yearLevel || '—')}</span></div>
            <div class="view-item"><span class="view-label">Section</span><span class="view-value">${escapeHtml(session.section)}</span></div>
          ` : `<div class="view-item"><span class="view-label">Assigned Students</span><span class="view-value">${session.role === 'teacher' ? countStudentsForTeacher(session.id) : readStudents().length}</span></div>`}
        </div>
        <div class="info-callout" style="margin-top:20px">
          <span class="icon" data-icon="info" data-size="16"></span>
          <span>${isStudent ? 'To update your account details, please contact your administrator or teacher.' : 'You can update your name and password from the Settings page.'}</span>
        </div>
      </div>
    </div>
  `;
  setHTML(document.getElementById('page-profile'), html);
}

function handleGlobalClick(e){
  const actionEl = e.target.closest('[data-action]');

  if (!e.target.closest('#notifWrap')) document.getElementById('notifPanel').classList.add('hidden');
  if (!e.target.closest('#avatarWrap')) document.getElementById('avatarPanel').classList.add('hidden');

  if (!actionEl) return;
  const action = actionEl.dataset.action;
  const id = actionEl.dataset.id;

  switch(action){
    case 'nav': navigateTo(actionEl.dataset.page); break;
    case 'modal-cancel': closeModal(); break;
    case 'request-logout':
      openConfirm({
        title:'Log out?', danger:false, confirmText:'Log Out',
        message:'You will be returned to the sign-in screen. Your data will not be affected.',
        onConfirm: performLogout
      });
      break;
    case 'go-profile': navigateTo('profile'); break;

    case 'quick-add-teacher': openTeacherFormModal(null); break;
    case 'quick-add-student': openStudentFormModal(null); break;
    case 'quick-add-attendance': openAttendanceFormModal(null); break;
    case 'quick-view-teachers': navigateTo('teachers'); break;
    case 'quick-view-students': navigateTo('students'); break;
    case 'quick-view-attendance': navigateTo('attendance'); break;
    case 'quick-view-reports': navigateTo('reports'); break;

    case 'view-teacher': openViewTeacherModal(getTeacherById(Number(id))); break;
    case 'edit-teacher': openTeacherFormModal(getTeacherById(Number(id))); break;
    case 'delete-teacher': {
      const t = getTeacherById(Number(id));
      const count = countStudentsForTeacher(t.id);
      openConfirm({
        title:'Delete Teacher?', danger:true, confirmText:'Delete Teacher',
        message: count
          ? `This action will permanently remove ${t.name}'s account. Their ${count} assigned student${count === 1 ? '' : 's'} will become unassigned.`
          : `This action will permanently remove ${t.name}'s account.`,
        onConfirm: () => { deleteTeacher(t.id); renderTeachersPage(); if (state.currentPage === 'dashboard') renderDashboard(); refreshNotifications(); showToast('success', 'Teacher account deleted.'); }
      });
      break;
    }

    case 'view-student': openViewStudentModal(readStudents().find(s => s.id === Number(id))); break;
    case 'edit-student': openStudentFormModal(readStudents().find(s => s.id === Number(id))); break;
    case 'delete-student': {
      const s = readStudents().find(st => st.id === Number(id));
      openConfirm({
        title:'Delete Student?', danger:true, confirmText:'Delete Student',
        message:`This action will permanently remove ${s.name}'s account and all associated attendance records.`,
        onConfirm: () => { deleteStudent(s.id); renderStudentsPage(); if (state.currentPage === 'dashboard') renderDashboard(); refreshNotifications(); showToast('success', 'Student account deleted.'); }
      });
      break;
    }
    case 'clear-student-filters':
      state.studentQuery = ''; state.studentCourseFilter = ''; state.studentYearFilter = ''; state.studentTeacherFilter = ''; renderStudentsPage();
      break;

    case 'view-attendance': openViewAttendanceModal(readAttendance().find(a => a.id === id)); break;
    case 'edit-attendance': openAttendanceFormModal(readAttendance().find(a => a.id === id)); break;
    case 'delete-attendance': {
      const a = readAttendance().find(r => r.id === id);
      openConfirm({
        title:'Delete Attendance Record?', danger:true, confirmText:'Delete Record',
        message:`This will permanently remove the ${a.status.toLowerCase()} record for ${a.studentName} on ${formatDateDisplay(a.date)}.`,
        onConfirm: () => { deleteAttendance(a.id); renderAttendancePage(); if (state.currentPage==='dashboard') renderDashboard(); refreshNotifications(); showToast('success', 'Attendance record deleted.'); }
      });
      break;
    }
    case 'clear-att-filters':
      state.attQuery=''; state.attStatusFilter=''; state.attDateFilter=''; state.attStudentFilter=''; renderAttendancePage();
      break;
  }
}

function wireStaticEvents(){
  document.body.addEventListener('click', handleGlobalClick);

  document.getElementById('modalBackdrop').addEventListener('click', closeModal);
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !document.getElementById('modalRoot').classList.contains('hidden')) closeModal(); });

  document.getElementById('hamburgerBtn').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('is-open');
    document.getElementById('sidebarOverlay').classList.toggle('is-open');
  });
  document.getElementById('sidebarOverlay').addEventListener('click', closeSidebarMobile);

  document.getElementById('notifBtn').addEventListener('click', e => {
    e.stopPropagation();
    const panel = document.getElementById('notifPanel');
    const willOpen = panel.classList.contains('hidden');
    panel.classList.toggle('hidden');
    document.getElementById('avatarPanel').classList.add('hidden');
    if (willOpen){ markActivityRead(); refreshNotifications(); }
  });
  document.getElementById('avatarBtn').addEventListener('click', e => {
    e.stopPropagation();
    document.getElementById('avatarPanel').classList.toggle('hidden');
    document.getElementById('notifPanel').classList.add('hidden');
  });

  let selectedRole = 'student';

  function setActiveRole(role){
    selectedRole = role;
    document.querySelectorAll('.role-toggle__btn').forEach(b => {
      const isMatch = b.dataset.role === role;
      b.classList.toggle('is-active', isMatch);
      b.setAttribute('aria-selected', String(isMatch));
    });
  }

  document.querySelectorAll('.role-toggle__btn').forEach(btn => {
    btn.addEventListener('click', () => setActiveRole(btn.dataset.role));
  });

  (function applyRememberedLogin(){
    const remembered = getData(DATABASE_KEYS.remember, null);
    if (remembered && remembered.email){
      document.getElementById('loginEmail').value = remembered.email;
      document.getElementById('rememberMe').checked = true;
      if (remembered.role) setActiveRole(remembered.role);
    }
  })();

  document.getElementById('togglePassword').addEventListener('click', () => {
    const input = document.getElementById('loginPassword');
    const showing = input.type === 'text';
    input.type = showing ? 'password' : 'text';
    const btn = document.getElementById('togglePassword');
    btn.setAttribute('data-icon', showing ? 'eye' : 'eyeOff');
    btn.setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
    mountIcons(document.getElementById('loginForm'));
  });

  document.getElementById('demoToggle').addEventListener('click', () => {
    const panel = document.getElementById('demoPanel');
    const isHidden = panel.hasAttribute('hidden');
    if (isHidden) panel.removeAttribute('hidden'); else panel.setAttribute('hidden', '');
    document.getElementById('demoToggle').setAttribute('aria-expanded', String(isHidden));
  });

  document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    const emailField = document.getElementById('loginEmail').closest('.field');
    const passField = document.getElementById('loginPassword').closest('.field');
    const formErr = document.getElementById('err-loginForm');
    setFieldError(emailField, ''); setFieldError(passField, ''); formErr.classList.remove('show');

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const btn = document.getElementById('loginSubmitBtn');

    btn.classList.add('is-loading'); btn.disabled = true;
    setTimeout(() => {
      const result = attemptLogin(email, password, selectedRole);
      btn.classList.remove('is-loading'); btn.disabled = false;
      if (!result.ok){
        if (result.field === 'email') setFieldError(emailField, result.message);
        else if (result.field === 'password') setFieldError(passField, result.message);
        else if (result.field === 'both') { setFieldError(emailField, 'Required.'); setFieldError(passField, 'Required.'); }
        else { formErr.textContent = result.message; formErr.classList.add('show'); }
        return;
      }

      if (document.getElementById('rememberMe').checked){
        setData(DATABASE_KEYS.remember, { email, role: selectedRole });
      } else {
        localStorage.removeItem(DATABASE_KEYS.remember);
      }

      showToast('success', `Welcome, ${result.session.name.split(' ')[0]}.`, 'You have signed in successfully.');
      enterApp();
    }, 400);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initDatabase();
  mountIcons(document);
  wireStaticEvents();

  const session = getSession();
  if (session) enterApp();
});