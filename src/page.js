/* Page widgets for online-course-design, moved from inline script blocks by the Learning Resource Kit converter.
   Runs as an ES module after the document is parsed; the kit mounts the shell and quiz separately. */

// ---- Backward-Design Module Builder (signature alignment widget) ----
var LEVELS = {
  remember: {
    name: 'Remember',
    verbs: ['define','list','identify','recall','label'],
    assessment: 'Objective quizzes, matching, labeling, flashcard self-checks',
    activity: 'Readings, worked examples, retrieval practice, annotated glossaries',
    note: 'Lower-order recall — necessary foundation, but do not stop here.'
  },
  understand: {
    name: 'Understand',
    verbs: ['explain','summarize','classify','interpret','paraphrase'],
    assessment: 'Short-answer explanations, concept maps, "explain in your own words" posts',
    activity: 'Guided readings, worked examples with reflection, peer teaching',
    note: 'Comprehension — learners restate meaning, not just recognize it.'
  },
  apply: {
    name: 'Apply',
    verbs: ['implement','solve','demonstrate','use','calculate'],
    assessment: 'Problem sets, applied cases, simulations, skill demonstrations',
    activity: 'Practice problems, guided labs, scenario walkthroughs, simulations',
    note: 'Learners use knowledge in a new situation — moving into higher order.'
  },
  analyze: {
    name: 'Analyze',
    verbs: ['differentiate','compare','examine','deconstruct','organize'],
    assessment: 'Case analyses, compare/contrast essays, data interpretation tasks',
    activity: 'Case studies, structured discussions, data sets, Venn/matrix work',
    note: 'Learners break wholes into parts and see relationships.'
  },
  evaluate: {
    name: 'Evaluate',
    verbs: ['critique','appraise','defend','judge','justify'],
    assessment: 'Critiques, peer reviews, position papers, evidence-based debates',
    activity: 'Debates, peer review, rubric-based critique, journal-club discussion',
    note: 'Learners make and justify judgments against criteria.'
  },
  create: {
    name: 'Create',
    verbs: ['design','construct','formulate','compose','develop'],
    assessment: 'Projects, portfolios, original designs, research proposals, capstones',
    activity: 'Design studios, project scaffolds, iterative drafts, peer critique',
    note: 'Highest order — learners produce something new. A quiz cannot assess this.'
  }
};

var state = { level: null, verb: null };
var levelOpts = document.getElementById('levelOpts');
var verbOpts = document.getElementById('verbOpts');

levelOpts.querySelectorAll('.opt').forEach(function(o){
  o.onclick = function(){
    levelOpts.querySelectorAll('.opt').forEach(function(x){ x.classList.remove('sel'); });
    o.classList.add('sel');
    state.level = o.dataset.v;
    state.verb = null;
    renderVerbs();
    document.getElementById('alignResult').classList.remove('show');
  };
});

function renderVerbs(){
  var L = LEVELS[state.level];
  verbOpts.innerHTML = '';
  L.verbs.forEach(function(v){
    var b = document.createElement('button');
    b.className = 'opt';
    b.textContent = v;
    b.onclick = function(){
      verbOpts.querySelectorAll('.opt').forEach(function(x){ x.classList.remove('sel'); });
      b.classList.add('sel');
      state.verb = v;
      renderAlign();
    };
    verbOpts.appendChild(b);
  });
}

function renderAlign(){
  var L = LEVELS[state.level];
  document.getElementById('alignObjective').textContent =
    'The learner will ' + state.verb + ' … (' + L.name + ')';
  document.getElementById('alignLine').textContent =
    'A "' + L.name + '" objective built on the verb "' + state.verb +
    '" aligns to the assessment and activity families below.';
  document.getElementById('alignA').textContent = L.name + ' · verb: ' + state.verb;
  document.getElementById('alignB').textContent = L.assessment;
  document.getElementById('alignC').textContent = L.activity;
  document.getElementById('alignD').textContent = '✓ Objective ↔ Assessment ↔ Activity aligned';
  document.getElementById('alignNote').textContent = L.note;
  document.getElementById('alignResult').classList.add('show');
}

// ---- ABCD objective assembler ----
var ABCD_PARTS = {
  a: 'the online graduate student',
  b: 'will construct a project charter',
  c: 'given a case scenario and a template',
  d: 'meeting all six rubric criteria'
};
var abcdOrder = ['c','a','b','d']; // Condition, Audience, Behavior, Degree reads naturally
var abcdCks = document.querySelectorAll('#abcd .ck');
function renderABCD(){
  var active = {};
  abcdCks.forEach(function(c){ if(c.classList.contains('on')) active[c.dataset.part] = true; });
  var pieces = [];
  abcdOrder.forEach(function(p){ if(active[p]) pieces.push(ABCD_PARTS[p]); });
  var out = document.getElementById('abcdOut');
  if(pieces.length === 0){
    out.textContent = 'Toggle at least one component to build the objective…';
    return;
  }
  var s = pieces.join(', ');
  out.textContent = s.charAt(0).toUpperCase() + s.slice(1) + '.';
}
abcdCks.forEach(function(c){
  c.onclick = function(){ c.classList.toggle('on'); renderABCD(); };
});
renderABCD();

// ---- Mini rubric builder ----
var critInput = document.getElementById('critInput');
var rubricTable = document.getElementById('rubricTable');
var rubricHint = document.getElementById('rubricHint');
var critCount = 0;
function addCriterion(){
  var name = (critInput.value || '').trim();
  if(!name){ return; }
  critCount++;
  var row = document.createElement('tr');
  var c1 = document.createElement('td'); c1.innerHTML = '<b>' + escapeHtml(name) + '</b>';
  var c2 = document.createElement('td'); c2.textContent = 'Fully meets the standard with clear, sophisticated evidence';
  var c3 = document.createElement('td'); c3.textContent = 'Meets the standard with adequate evidence';
  var c4 = document.createElement('td'); c4.textContent = 'Partially meets; evidence is limited or unclear';
  row.appendChild(c1); row.appendChild(c2); row.appendChild(c3); row.appendChild(c4);
  rubricTable.appendChild(row);
  critInput.value = '';
  rubricHint.textContent = critCount + ' criterion' + (critCount === 1 ? '' : 'a') +
    ' added · an analytic rubric scores each row independently.';
}
function escapeHtml(str){
  return str.replace(/[&<>"']/g, function(ch){
    return { '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[ch];
  });
}
document.getElementById('critAdd').onclick = addCriterion;
critInput.addEventListener('keydown', function(e){ if(e.key === 'Enter'){ addCriterion(); } });

// ---- Course-quality self-check scorer ----
var qmCks = document.querySelectorAll('#qmcheck .ck');
function scoreQM(){
  var s = 0;
  qmCks.forEach(function(c){ if(c.classList.contains('on')){ s += parseInt(c.dataset.w, 10); } });
  s = Math.min(100, s);
  document.getElementById('qmFill').style.width = s + '%';
  var v = document.getElementById('qmVerdict');
  if(s === 0){ v.textContent = 'Select the elements your course has in place'; v.style.color = 'var(--lr-muted)'; }
  else if(s < 40){ v.textContent = s + '% — Emerging: secure objectives and assessment alignment first'; v.style.color = 'var(--lr-bad)'; }
  else if(s < 75){ v.textContent = s + '% — Solid: strengthen interaction, accessibility, and feedback'; v.style.color = 'var(--lr-warn)'; }
  else { v.textContent = s + '% — Strong, coherent, well-aligned course design'; v.style.color = 'var(--lr-good)'; }
}
qmCks.forEach(function(c){ c.onclick = function(){ c.classList.toggle('on'); scoreQM(); }; });
scoreQM();

// ---- Quality Matters-style 8-standard review scorer ----
var qmrCks = document.querySelectorAll('#qmrCheck .ck');
function scoreQMR(){
  var s = 0, met = 0;
  qmrCks.forEach(function(c){ if(c.classList.contains('on')){ s += parseInt(c.dataset.w, 10); met++; } });
  s = Math.min(100, s);
  document.getElementById('qmrFill').style.width = s + '%';
  var v = document.getElementById('qmrVerdict');
  if(met === 0){ v.textContent = 'Mark the standards your course clearly meets'; v.style.color = 'var(--lr-muted)'; }
  else if(met < 4){ v.textContent = met + ' of 8 standards met (' + s + '%) — Not yet review-ready: secure the alignment standards first'; v.style.color = 'var(--lr-bad)'; }
  else if(met < 8){ v.textContent = met + ' of 8 standards met (' + s + '%) — Nearly there: close the remaining gaps'; v.style.color = 'var(--lr-warn)'; }
  else { v.textContent = 'All 8 standards met (' + s + '%) — Review-ready, well-aligned course'; v.style.color = 'var(--lr-good)'; }
}
qmrCks.forEach(function(c){ c.onclick = function(){ c.classList.toggle('on'); scoreQMR(); }; });
scoreQMR();

