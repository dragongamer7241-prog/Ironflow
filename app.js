/* ============================================
   IronFlow — Workout Tracker Application Logic
   ============================================ */

// ─── Workout Data ───────────────────────────────────────────
const WORKOUT_PLAN = [
    {
        day: 'Monday',
        type: 'PUSH',
        accent: 'push',
        exercises: [
            {
                muscle: 'Chest',
                name: 'Inclined Bench Press',
                note: 'Up, back, down, Chest Up',
                sets: [8, 8, 8, 8],
                optional: false
            },
            {
                muscle: 'Chest',
                name: 'Chest Press (Machine)',
                note: '',
                sets: [8, 8, 8, 8],
                optional: false
            },
            {
                muscle: 'Chest',
                name: 'Chest Fly',
                note: '',
                sets: [],
                optional: true
            },
            {
                muscle: 'Triceps',
                name: 'Overhead Triceps Extension',
                note: "Don't go heavy",
                sets: [10, 10, 10],
                optional: false
            },
            {
                muscle: 'Shoulders',
                name: 'Lateral Raises',
                note: 'Thumbless grip · Light weight',
                sets: [10, 10, 10, 10, 10],
                optional: false
            },
            {
                muscle: 'Triceps',
                name: 'Triceps Push Down (Bar)',
                note: '',
                sets: [10, 10, 10],
                optional: false
            }
        ]
    },
    {
        day: 'Tuesday',
        type: 'LEGS',
        accent: 'legs',
        exercises: [
            {
                muscle: 'Hamstrings',
                name: 'Hamstring Curls',
                note: '',
                sets: ['10-15', '10-15', '10-15', '10-15', '10-15'],
                optional: false
            },
            {
                muscle: 'Quads',
                name: 'Hack Squat / Leg Press',
                note: '',
                sets: ['8-12', '8-12', '8-12', '8-12', '8-12'],
                optional: false
            },
            {
                muscle: 'Calves',
                name: 'Calf Raises',
                note: '',
                sets: ['10-20', '10-20', '10-20', '10-20', '10-20'],
                optional: false
            },
            {
                muscle: 'Shoulders',
                name: 'Seated Dumbbell Overhead Press',
                note: '',
                sets: ['8-12', '8-12', '8-12'],
                optional: false
            }
        ]
    },
    {
        day: 'Wednesday',
        type: 'PULL',
        accent: 'pull',
        exercises: [
            {
                muscle: 'Back',
                name: 'Lat Pulldown',
                note: '',
                sets: ['8-12', '8-12', '8-12'],
                optional: false
            },
            {
                muscle: 'Back',
                name: 'Machine Row',
                note: '',
                sets: ['8-12', '8-12', '8-12', '8-12'],
                optional: false
            },
            {
                muscle: 'Back',
                name: 'Lat Pullover',
                note: '',
                sets: ['8-12', '8-12', '8-12'],
                optional: false
            },
            {
                muscle: 'Rear Delts',
                name: 'Reverse Pec Deck',
                note: '',
                sets: ['10-15', '10-15', '10-15'],
                optional: false
            },
            {
                muscle: 'Biceps',
                name: 'Bicep Curl',
                note: '',
                sets: ['10-15', '10-15', '10-15', '10-15'],
                optional: false
            }
        ]
    },
    {
        day: 'Thursday',
        type: 'PUSH',
        accent: 'push',
        exercises: [
            {
                muscle: 'Chest',
                name: 'Inclined Bench Press',
                note: 'Up, back, down, Chest Up',
                sets: [8, 8, 8, 8],
                optional: false
            },
            {
                muscle: 'Chest',
                name: 'Chest Press (Machine)',
                note: '',
                sets: [8, 8, 8, 8],
                optional: false
            },
            {
                muscle: 'Chest',
                name: 'Chest Fly',
                note: '',
                sets: [],
                optional: true
            },
            {
                muscle: 'Triceps',
                name: 'Overhead Triceps Extension',
                note: "Don't go heavy",
                sets: [10, 10, 10],
                optional: false
            },
            {
                muscle: 'Shoulders',
                name: 'Lateral Raises',
                note: 'Thumbless grip · Light weight',
                sets: [10, 10, 10, 10, 10],
                optional: false
            },
            {
                muscle: 'Triceps',
                name: 'Triceps Push Down (Bar)',
                note: '',
                sets: [10, 10, 10],
                optional: false
            }
        ]
    },
    {
        day: 'Friday',
        type: 'LEGS',
        accent: 'legs',
        exercises: [
            {
                muscle: 'Hamstrings',
                name: 'Hamstring Curls',
                note: '',
                sets: ['10-15', '10-15', '10-15', '10-15', '10-15'],
                optional: false
            },
            {
                muscle: 'Quads',
                name: 'Hack Squat / Leg Press',
                note: '',
                sets: ['8-12', '8-12', '8-12', '8-12', '8-12'],
                optional: false
            },
            {
                muscle: 'Calves',
                name: 'Calf Raises',
                note: '',
                sets: ['10-20', '10-20', '10-20', '10-20', '10-20'],
                optional: false
            },
            {
                muscle: 'Shoulders',
                name: 'Seated Dumbbell Overhead Press',
                note: '',
                sets: ['8-12', '8-12', '8-12'],
                optional: false
            }
        ]
    },
    {
        day: 'Saturday',
        type: 'PULL',
        accent: 'pull',
        exercises: [
            {
                muscle: 'Back',
                name: 'Lat Pulldown',
                note: '',
                sets: ['8-12', '8-12', '8-12'],
                optional: false
            },
            {
                muscle: 'Back',
                name: 'Machine Row',
                note: '',
                sets: ['8-12', '8-12', '8-12', '8-12'],
                optional: false
            },
            {
                muscle: 'Back',
                name: 'Lat Pullover',
                note: '',
                sets: ['8-12', '8-12', '8-12'],
                optional: false
            },
            {
                muscle: 'Rear Delts',
                name: 'Reverse Pec Deck',
                note: '',
                sets: ['10-15', '10-15', '10-15'],
                optional: false
            },
            {
                muscle: 'Biceps',
                name: 'Bicep Curl',
                note: '',
                sets: ['10-15', '10-15', '10-15', '10-15'],
                optional: false
            }
        ]
    },
    {
        day: 'Sunday',
        type: 'REST',
        accent: 'rest',
        exercises: []
    }
];

// ─── State ──────────────────────────────────────────────────
let currentDay = 0;
let weekOffset = 0; // 0 = current week
let state = {}; // { "2026-W17": { 0: { 0: [true, false, ...], 1: [...] }, ... } }

// ─── Utility Functions ──────────────────────────────────────

function getWeekKey(offset = 0) {
    const now = new Date();
    const d = new Date(now);
    d.setDate(d.getDate() + offset * 7);
    // ISO week number
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
    return `${d.getUTCFullYear()}-W${String(weekNo).padStart(2, '0')}`;
}

function getWeekDates(offset = 0) {
    const now = new Date();
    const d = new Date(now);
    d.setDate(d.getDate() + offset * 7);
    // Find Monday of this week
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(d.setDate(diff));
    const dates = [];
    for (let i = 0; i < 7; i++) {
        const dd = new Date(monday);
        dd.setDate(monday.getDate() + i);
        dates.push(dd);
    }
    return dates;
}

function formatDate(date) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

function formatWeekLabel(offset) {
    if (offset === 0) return 'This Week';
    if (offset === -1) return 'Last Week';
    if (offset === 1) return 'Next Week';
    const dates = getWeekDates(offset);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[dates[0].getMonth()]} ${dates[0].getDate()} — ${months[dates[6].getMonth()]} ${dates[6].getDate()}`;
}

// ─── Persistence ────────────────────────────────────────────

function loadState() {
    try {
        const raw = localStorage.getItem('ironflow_state');
        if (raw) state = JSON.parse(raw);
    } catch (e) {
        state = {};
    }
}

function saveState() {
    try {
        localStorage.setItem('ironflow_state', JSON.stringify(state));
    } catch (e) {
        console.warn('Could not save state', e);
    }
}

function getWeekState(weekKey) {
    if (!state[weekKey]) state[weekKey] = {};
    return state[weekKey];
}

function getSetState(weekKey, dayIdx, exIdx, setIdx) {
    const ws = getWeekState(weekKey);
    return ws?.[dayIdx]?.[exIdx]?.[setIdx] || false;
}

function toggleSet(weekKey, dayIdx, exIdx, setIdx) {
    const ws = getWeekState(weekKey);
    if (!ws[dayIdx]) ws[dayIdx] = {};
    if (!ws[dayIdx][exIdx]) ws[dayIdx][exIdx] = {};
    ws[dayIdx][exIdx][setIdx] = !ws[dayIdx][exIdx][setIdx];
    saveState();
}

function loadWeights() {
    try {
        const raw = localStorage.getItem('ironflow_weights');
        return raw ? JSON.parse(raw) : {};
    } catch(e) { return {}; }
}

function saveWeights(weights) {
    try {
        localStorage.setItem('ironflow_weights', JSON.stringify(weights));
    } catch(e) { console.warn('Could not save weights', e); }
}

function getWeight(weekKey, dayIdx, exIdx) {
    const weights = loadWeights();
    return weights[`${weekKey}_${dayIdx}_${exIdx}`] || '';
}

function setWeight(weekKey, dayIdx, exIdx, value) {
    const weights = loadWeights();
    const key = `${weekKey}_${dayIdx}_${exIdx}`;
    if (value === '' || value === null) {
        delete weights[key];
    } else {
        weights[key] = parseFloat(value);
    }
    saveWeights(weights);
}

function getPrevWeekWeight(weekKey, dayIdx, exIdx) {
    // Walk backwards to find the most recent logged weight before this week
    for (let w = 1; w <= 12; w++) {
        const prevKey = getWeekKey(weekOffset - w);
        const val = getWeight(prevKey, dayIdx, exIdx);
        if (val !== '' && val !== null && !isNaN(val)) return { weight: val, weeksAgo: w };
    }
    return null;
}

function getWeightDelta(currentWeight, prevWeight) {
    if (prevWeight === null || currentWeight === '' || currentWeight === null || isNaN(currentWeight)) return null;
    const diff = currentWeight - prevWeight.weight;
    if (diff > 0) return { direction: 'up', value: diff };
    if (diff < 0) return { direction: 'down', value: Math.abs(diff) };
    return { direction: 'same', value: 0 };
}

// ─── Calculate Progress ─────────────────────────────────────

function getDayProgress(weekKey, dayIdx) {
    const workout = WORKOUT_PLAN[dayIdx];
    if (workout.type === 'REST') return { done: 0, total: 0, percent: 100 };

    let done = 0, total = 0;
    workout.exercises.forEach((ex, exIdx) => {
        if (ex.optional && ex.sets.length === 0) return; // skip optional with no sets
        ex.sets.forEach((_, setIdx) => {
            total++;
            if (getSetState(weekKey, dayIdx, exIdx, setIdx)) done++;
        });
    });

    return { done, total, percent: total > 0 ? Math.round((done / total) * 100) : 0 };
}

function getWeekProgress(weekKey) {
    let done = 0, total = 0, daysComplete = 0;
    for (let i = 0; i < 6; i++) { // Mon-Sat
        const p = getDayProgress(weekKey, i);
        done += p.done;
        total += p.total;
        if (p.percent === 100 && p.total > 0) daysComplete++;
    }
    return { done, total, percent: total > 0 ? Math.round((done / total) * 100) : 0, daysComplete };
}

function calcStreak() {
    let streak = 0;
    // Check backwards from today
    const now = new Date();
    const todayDay = (now.getDay() + 6) % 7; // 0=Mon, 6=Sun

    for (let w = 0; w <= 52; w++) {
        const weekKey = getWeekKey(-w);
        const endDay = w === 0 ? todayDay : 6;

        let broke = false;
        for (let d = endDay; d >= 0; d--) {
            if (d === 6) continue; // skip Sunday
            const p = getDayProgress(weekKey, d);
            if (p.percent === 100 && p.total > 0) {
                streak++;
            } else {
                broke = true;
                break;
            }
        }
        if (broke) break;
    }
    return streak;
}

// ─── Rendering ──────────────────────────────────────────────

function renderTabs() {
    const weekKey = getWeekKey(weekOffset);
    const tabs = document.querySelectorAll('.day-tab');

    tabs.forEach((tab, i) => {
        tab.classList.toggle('active', i === currentDay);
        const p = getDayProgress(weekKey, i);
        const progEl = document.getElementById(`prog-${i}`);
        if (i < 6) {
            progEl.textContent = `${p.percent}%`;
            tab.classList.toggle('completed', p.percent === 100 && p.total > 0);
        }
    });
}

function renderWorkout() {
    const main = document.getElementById('main-content');
    const weekKey = getWeekKey(weekOffset);
    const workout = WORKOUT_PLAN[currentDay];
    const dates = getWeekDates(weekOffset);

    if (workout.type === 'REST') {
        main.innerHTML = `
            <div class="rest-day">
                <div class="rest-emoji">😴</div>
                <h2 class="rest-title">Rest Day</h2>
                <p class="rest-subtitle">Recovery is when your muscles grow. Take it easy, hydrate, stretch, and get quality sleep.</p>
            </div>
        `;
        return;
    }

    const progress = getDayProgress(weekKey, currentDay);

    let html = `
        <div class="workout-header">
            <div>
                <span class="workout-type-badge ${workout.accent}">${workout.type} Day</span>
                <div class="workout-date">${workout.day} · ${formatDate(dates[currentDay])}</div>
            </div>
            <div class="workout-progress-bar">
                <div class="workout-progress-fill ${workout.accent}" style="width: ${progress.percent}%"></div>
            </div>
            <div class="workout-progress-text">${progress.percent}%</div>
        </div>
    `;

    workout.exercises.forEach((ex, exIdx) => {
        const isOptionalEmpty = ex.optional && ex.sets.length === 0;
        const allDone = !isOptionalEmpty && ex.sets.length > 0 && ex.sets.every((_, si) => getSetState(weekKey, currentDay, exIdx, si));

        // Weight tracking
        const currentWeight = getWeight(weekKey, currentDay, exIdx);
        const prevWeight = getPrevWeekWeight(weekKey, currentDay, exIdx);
        const delta = getWeightDelta(currentWeight, prevWeight);

        // Build delta indicator HTML
        let deltaHtml = '';
        if (delta) {
            if (delta.direction === 'up') {
                deltaHtml = `<span class="weight-delta up" title="+${delta.value} kg vs previous">▲ +${delta.value} kg</span>`;
            } else if (delta.direction === 'down') {
                deltaHtml = `<span class="weight-delta down" title="-${delta.value} kg vs previous">▼ -${delta.value} kg</span>`;
            } else {
                deltaHtml = `<span class="weight-delta same" title="Same as previous">= same</span>`;
            }
        }

        let prevHtml = '';
        if (prevWeight) {
            prevHtml = `<span class="weight-prev" title="${prevWeight.weeksAgo === 1 ? 'Last week' : prevWeight.weeksAgo + ' weeks ago'}">Prev: ${prevWeight.weight} kg</span>`;
        }

        html += `
            <div class="exercise-card ${allDone ? 'completed' : ''}" style="animation-delay: ${exIdx * 0.05}s" id="exercise-${exIdx}">
                <div class="exercise-top">
                    <div class="exercise-info">
                        <div class="exercise-muscle ${workout.accent}">${ex.muscle}</div>
                        <div class="exercise-name">${ex.name}</div>
                        ${ex.note ? `<div class="exercise-note">${ex.note}</div>` : ''}
                    </div>
                    ${ex.optional ? '<span class="exercise-optional">Optional</span>' : ''}
                    ${!isOptionalEmpty ? `
                        <button class="exercise-check ${allDone ? 'checked' : ''}"
                                onclick="toggleAllSets(${currentDay}, ${exIdx})"
                                title="${allDone ? 'Uncheck all sets' : 'Complete all sets'}"
                                id="check-${exIdx}">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="20 6 9 17 4 12"/>
                            </svg>
                        </button>
                    ` : ''}
                </div>
                ${!isOptionalEmpty ? `
                    <div class="weight-row" id="weight-row-${exIdx}">
                        <div class="weight-icon">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <rect x="1" y="10" width="22" height="4" rx="2" fill="currentColor" opacity="0.5"/>
                                <rect x="4" y="7" width="4" height="10" rx="1.5" fill="currentColor"/>
                                <rect x="16" y="7" width="4" height="10" rx="1.5" fill="currentColor"/>
                            </svg>
                        </div>
                        <div class="weight-input-group">
                            <input type="number" class="weight-inline-input"
                                   id="weight-input-${exIdx}"
                                   value="${currentWeight}"
                                   placeholder="—"
                                   step="0.5" min="0"
                                   onchange="handleWeightChange(${currentDay}, ${exIdx}, this.value)"
                                   onfocus="this.select()" />
                            <span class="weight-kg-label">kg</span>
                        </div>
                        ${prevHtml}
                        ${deltaHtml}
                    </div>
                    <div class="sets-container">
                        ${ex.sets.map((reps, si) => {
                            const done = getSetState(weekKey, currentDay, exIdx, si);
                            return `
                                <button class="set-btn ${workout.accent} ${done ? 'completed' : ''}"
                                        onclick="handleSetClick(${currentDay}, ${exIdx}, ${si})"
                                        id="set-${exIdx}-${si}">
                                    <span class="set-label">Set ${si + 1}</span>
                                    <span class="set-reps">${reps}</span>
                                </button>
                            `;
                        }).join('')}
                    </div>
                ` : ''}
            </div>
        `;
    });

    main.innerHTML = html;
}

function renderStats() {
    const weekKey = getWeekKey(weekOffset);
    const wp = getWeekProgress(weekKey);

    document.getElementById('stat-completed').textContent = wp.done;
    document.getElementById('stat-total').textContent = wp.total;
    document.getElementById('stat-percent').textContent = `${wp.percent}%`;
    document.getElementById('stat-days').textContent = `${wp.daysComplete}/6`;

    // Streak
    const streak = calcStreak();
    document.getElementById('streak-count').textContent = streak;
}

function renderWeekLabel() {
    document.getElementById('week-label').textContent = formatWeekLabel(weekOffset);
}

function renderAll() {
    renderTabs();
    renderWorkout();
    renderStats();
    renderWeekLabel();
}

// ─── Event Handlers ─────────────────────────────────────────

function handleWeightChange(dayIdx, exIdx, value) {
    const weekKey = getWeekKey(weekOffset);
    setWeight(weekKey, dayIdx, exIdx, value);

    // Re-render just the weight row to update delta indicators
    const workout = WORKOUT_PLAN[dayIdx];
    const currentWeight = getWeight(weekKey, dayIdx, exIdx);
    const prevWeight = getPrevWeekWeight(weekKey, dayIdx, exIdx);
    const delta = getWeightDelta(currentWeight, prevWeight);

    const row = document.getElementById(`weight-row-${exIdx}`);
    if (!row) return;

    // Update delta indicator
    const existingDelta = row.querySelector('.weight-delta');
    if (existingDelta) existingDelta.remove();
    const existingPrev = row.querySelector('.weight-prev');

    if (delta) {
        let deltaEl = document.createElement('span');
        if (delta.direction === 'up') {
            deltaEl.className = 'weight-delta up';
            deltaEl.title = `+${delta.value} kg vs previous`;
            deltaEl.textContent = `▲ +${delta.value} kg`;
        } else if (delta.direction === 'down') {
            deltaEl.className = 'weight-delta down';
            deltaEl.title = `-${delta.value} kg vs previous`;
            deltaEl.textContent = `▼ -${delta.value} kg`;
        } else {
            deltaEl.className = 'weight-delta same';
            deltaEl.title = 'Same as previous';
            deltaEl.textContent = '= same';
        }
        row.appendChild(deltaEl);
    }

    if (value && !isNaN(value) && parseFloat(value) > 0) {
        showToast(`💪 ${workout.exercises[exIdx].name}: ${value} kg`);
    }
}

function handleSetClick(dayIdx, exIdx, setIdx) {
    const weekKey = getWeekKey(weekOffset);
    toggleSet(weekKey, dayIdx, exIdx, setIdx);

    const btn = document.getElementById(`set-${exIdx}-${setIdx}`);
    if (btn) {
        btn.classList.toggle('completed', getSetState(weekKey, dayIdx, exIdx, setIdx));
    }

    // Check if exercise is complete
    const ex = WORKOUT_PLAN[dayIdx].exercises[exIdx];
    const allDone = ex.sets.every((_, si) => getSetState(weekKey, dayIdx, exIdx, si));
    const card = document.getElementById(`exercise-${exIdx}`);
    if (card) card.classList.toggle('completed', allDone);
    const check = document.getElementById(`check-${exIdx}`);
    if (check) check.classList.toggle('checked', allDone);

    // Update progress
    updateDayProgressUI(dayIdx);
    renderStats();

    // Check day completion
    const dayP = getDayProgress(weekKey, dayIdx);
    if (dayP.percent === 100) {
        showToast(`🎉 ${WORKOUT_PLAN[dayIdx].type} Day complete!`);
        spawnConfetti();
    }
}

function toggleAllSets(dayIdx, exIdx) {
    const weekKey = getWeekKey(weekOffset);
    const ex = WORKOUT_PLAN[dayIdx].exercises[exIdx];
    const allDone = ex.sets.every((_, si) => getSetState(weekKey, dayIdx, exIdx, si));

    const ws = getWeekState(weekKey);
    if (!ws[dayIdx]) ws[dayIdx] = {};
    if (!ws[dayIdx][exIdx]) ws[dayIdx][exIdx] = {};

    ex.sets.forEach((_, si) => {
        ws[dayIdx][exIdx][si] = !allDone;
    });
    saveState();

    // Re-render just the sets and card state
    renderWorkout();
    updateDayProgressUI(dayIdx);
    renderStats();

    if (!allDone) {
        const dayP = getDayProgress(weekKey, dayIdx);
        if (dayP.percent === 100) {
            showToast(`🎉 ${WORKOUT_PLAN[dayIdx].type} Day complete!`);
            spawnConfetti();
        }
    }
}

function updateDayProgressUI(dayIdx) {
    const weekKey = getWeekKey(weekOffset);
    const p = getDayProgress(weekKey, dayIdx);

    // Tab progress
    const progEl = document.getElementById(`prog-${dayIdx}`);
    if (progEl && dayIdx < 6) progEl.textContent = `${p.percent}%`;

    // Tab completed class
    const tabs = document.querySelectorAll('.day-tab');
    if (tabs[dayIdx] && dayIdx < 6) {
        tabs[dayIdx].classList.toggle('completed', p.percent === 100 && p.total > 0);
    }

    // Header progress bar
    const fill = document.querySelector('.workout-progress-fill');
    if (fill) fill.style.width = `${p.percent}%`;
    const text = document.querySelector('.workout-progress-text');
    if (text) text.textContent = `${p.percent}%`;
}

// ─── Toast ──────────────────────────────────────────────────

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

// ─── Confetti ───────────────────────────────────────────────

function spawnConfetti() {
    const colors = ['#a78bfa', '#34d399', '#fb923c', '#f472b6', '#60a5fa', '#facc15'];
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'confetti-particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${50 + Math.random() * 40}%`;
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.animationDelay = `${Math.random() * 0.5}s`;
        particle.style.animationDuration = `${0.8 + Math.random() * 0.8}s`;
        particle.style.width = `${4 + Math.random() * 6}px`;
        particle.style.height = `${4 + Math.random() * 6}px`;
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 2000);
    }
}

// ─── Init ───────────────────────────────────────────────────

function init() {
    loadState();

    // Auto-select today's day
    const now = new Date();
    const todayDay = (now.getDay() + 6) % 7; // 0=Mon, 6=Sun
    currentDay = todayDay;

    // Tab click handlers
    document.querySelectorAll('.day-tab').forEach((tab) => {
        tab.addEventListener('click', () => {
            currentDay = parseInt(tab.dataset.day);
            renderAll();
        });
    });

    // Week nav
    document.getElementById('btn-prev-week').addEventListener('click', () => {
        weekOffset--;
        renderAll();
    });
    document.getElementById('btn-next-week').addEventListener('click', () => {
        weekOffset++;
        renderAll();
    });

    // Reset week
    document.getElementById('btn-reset-week').addEventListener('click', () => {
        if (confirm('Reset all progress for this week? This cannot be undone. (Weights will be kept.)')) {
            const weekKey = getWeekKey(weekOffset);
            delete state[weekKey];
            saveState();
            renderAll();
            showToast('Week progress reset (weights kept)');
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            currentDay = Math.max(0, currentDay - 1);
            renderAll();
        } else if (e.key === 'ArrowRight') {
            currentDay = Math.min(6, currentDay + 1);
            renderAll();
        }
    });

    renderAll();
}

document.addEventListener('DOMContentLoaded', init);
