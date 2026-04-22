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
let currentView = 'workout'; // 'workout' or 'history'
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

// ─── History View ───────────────────────────────────────────

function getWeeksWithData() {
    // Collect all weeks that have any data (sets or weights)
    const weeks = new Set();

    // From set completion state
    Object.keys(state).forEach(k => {
        if (k.match(/^\d{4}-W\d{2}$/)) weeks.add(k);
    });

    // From weights — keys are like "2026-W17_0_2"
    const weights = loadWeights();
    Object.keys(weights).forEach(k => {
        const match = k.match(/^(\d{4}-W\d{2})_/);
        if (match) weeks.add(match[1]);
    });

    // Always include current week
    weeks.add(getWeekKey(0));

    // Filter: only keep weeks with actual data (completed sets or weights logged)
    const filtered = Array.from(weeks).filter(weekKey => {
        // Check if any sets completed
        const ws = state[weekKey];
        if (ws) {
            for (const dayIdx of Object.keys(ws)) {
                for (const exIdx of Object.keys(ws[dayIdx])) {
                    for (const setIdx of Object.keys(ws[dayIdx][exIdx])) {
                        if (ws[dayIdx][exIdx][setIdx]) return true;
                    }
                }
            }
        }
        // Check if any weights logged for this week
        for (const wk of Object.keys(weights)) {
            if (wk.startsWith(weekKey + '_') && weights[wk] !== '' && weights[wk] !== null && !isNaN(weights[wk]) && parseFloat(weights[wk]) > 0) return true;
        }
        // Always show current week
        if (weekKey === getWeekKey(0)) return true;
        return false;
    });

    // Sort descending (newest first)
    return filtered.sort().reverse();
}

function getWeekDatesForKey(weekKey) {
    // Parse "2026-W17" -> find the Monday of that week
    const match = weekKey.match(/(\d{4})-W(\d{2})/);
    if (!match) return null;
    const year = parseInt(match[1]);
    const week = parseInt(match[2]);

    // Jan 4 is always in week 1
    const jan4 = new Date(year, 0, 4);
    const dayOfWeek = jan4.getDay() || 7; // 1=Mon, 7=Sun
    const monday = new Date(jan4);
    monday.setDate(jan4.getDate() - dayOfWeek + 1 + (week - 1) * 7);

    const dates = [];
    for (let i = 0; i < 7; i++) {
        const d = new Date(monday);
        d.setDate(monday.getDate() + i);
        dates.push(d);
    }
    return dates;
}

function getWeekProgressForKey(weekKey) {
    let done = 0, total = 0, daysComplete = 0;
    for (let i = 0; i < 6; i++) {
        const workout = WORKOUT_PLAN[i];
        if (workout.type === 'REST') continue;
        let dayDone = 0, dayTotal = 0;
        workout.exercises.forEach((ex, exIdx) => {
            if (ex.optional && ex.sets.length === 0) return;
            ex.sets.forEach((_, setIdx) => {
                dayTotal++;
                total++;
                const ws = state[weekKey];
                if (ws?.[i]?.[exIdx]?.[setIdx]) {
                    dayDone++;
                    done++;
                }
            });
        });
        if (dayTotal > 0 && dayDone === dayTotal) daysComplete++;
    }
    return { done, total, percent: total > 0 ? Math.round((done / total) * 100) : 0, daysComplete };
}

function getDayProgressForKey(weekKey, dayIdx) {
    const workout = WORKOUT_PLAN[dayIdx];
    if (workout.type === 'REST') return { done: 0, total: 0, percent: 100 };
    let done = 0, total = 0;
    workout.exercises.forEach((ex, exIdx) => {
        if (ex.optional && ex.sets.length === 0) return;
        ex.sets.forEach((_, setIdx) => {
            total++;
            const ws = state[weekKey];
            if (ws?.[dayIdx]?.[exIdx]?.[setIdx]) done++;
        });
    });
    return { done, total, percent: total > 0 ? Math.round((done / total) * 100) : 0 };
}

function renderHistory() {
    const container = document.getElementById('history-view');
    const weeks = getWeeksWithData();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dayShort = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const currentWeekKey = getWeekKey(0);

    // Check if there's any real data
    const hasData = weeks.some(wk => {
        const wp = getWeekProgressForKey(wk);
        return wp.done > 0;
    });

    if (!hasData) {
        container.innerHTML = `
            <div class="history-empty">
                <div class="history-empty-emoji">📊</div>
                <div class="history-empty-text">
                    No workout history yet.<br>
                    Complete your first workout and it will appear here!
                </div>
            </div>
        `;
        return;
    }

    let html = `
        <h2 class="history-section-title">Workout History</h2>
        <p class="history-section-sub">Your progress across weeks — tap a week to see details</p>
    `;

    weeks.forEach((weekKey, wi) => {
        const wp = getWeekProgressForKey(weekKey);
        const dates = getWeekDatesForKey(weekKey);
        if (!dates) return;

        const isCurrentWeek = weekKey === currentWeekKey;
        const percentClass = wp.percent >= 80 ? 'high' : wp.percent >= 40 ? 'mid' : 'low';
        const weekLabel = isCurrentWeek ? 'This Week' : `Week ${weekKey.split('-W')[1]}`;
        const dateRange = `${months[dates[0].getMonth()]} ${dates[0].getDate()} — ${months[dates[6].getMonth()]} ${dates[6].getDate()}, ${dates[0].getFullYear()}`;

        // Build day rows
        let dayRowsHtml = '';
        for (let d = 0; d < 6; d++) {
            const dp = getDayProgressForKey(weekKey, d);
            const workout = WORKOUT_PLAN[d];
            dayRowsHtml += `
                <div class="history-day-row">
                    <span class="history-day-name">${dayShort[d]}</span>
                    <span class="history-day-type ${workout.accent}">${workout.type}</span>
                    <div class="history-day-bar">
                        <div class="history-day-fill ${workout.accent}" style="width: ${dp.percent}%"></div>
                    </div>
                    <span class="history-day-percent">${dp.percent}%</span>
                </div>
            `;
        }

        // Build exercise weight history
        let exerciseHtml = '';
        const weights = loadWeights();
        const allExercises = new Set();

        // Gather all exercises with weights for this week
        for (let d = 0; d < 6; d++) {
            const workout = WORKOUT_PLAN[d];
            workout.exercises.forEach((ex, exIdx) => {
                if (ex.optional && ex.sets.length === 0) return;
                const wKey = `${weekKey}_${d}_${exIdx}`;
                const w = weights[wKey];
                if (w !== undefined && w !== '' && w !== null) {
                    const exKey = `${d}_${exIdx}`;
                    if (!allExercises.has(ex.name + '_' + d)) {
                        allExercises.add(ex.name + '_' + d);

                        // Find previous weight for delta
                        let prevW = null;
                        for (let pw = 1; pw <= 12; pw++) {
                            // Find previous week key
                            const allWeeksSorted = weeks.filter(k => k < weekKey).sort().reverse();
                            if (allWeeksSorted[pw - 1]) {
                                const prevKey = `${allWeeksSorted[pw - 1]}_${d}_${exIdx}`;
                                if (weights[prevKey] !== undefined && weights[prevKey] !== '') {
                                    prevW = weights[prevKey];
                                    break;
                                }
                            }
                        }

                        let deltaHtml = '';
                        if (prevW !== null) {
                            const diff = w - prevW;
                            if (diff > 0) deltaHtml = `<span class="history-ex-delta up">▲ +${diff}</span>`;
                            else if (diff < 0) deltaHtml = `<span class="history-ex-delta down">▼ ${diff}</span>`;
                            else deltaHtml = `<span class="history-ex-delta same">=</span>`;
                        }

                        // Count completed sets
                        const dp = getDayProgressForKey(weekKey, d);
                        const setsDone = ex.sets.filter((_, si) => state[weekKey]?.[d]?.[exIdx]?.[si]).length;

                        exerciseHtml += `
                            <div class="history-ex-row">
                                <span class="history-ex-name">${ex.name}</span>
                                <span class="history-ex-weight">${w} kg</span>
                                ${deltaHtml}
                                <span class="history-ex-sets">${setsDone}/${ex.sets.length}</span>
                            </div>
                        `;
                    }
                }
            });
        }

        html += `
            <div class="history-week-card" id="history-week-${wi}" style="animation-delay: ${wi * 0.05}s">
                <div class="history-week-header" onclick="toggleHistoryWeek(${wi})">
                    <div class="history-week-left">
                        <div class="history-week-label">${weekLabel}</div>
                        <div class="history-week-dates">${dateRange}</div>
                    </div>
                    <div class="history-week-right">
                        <span class="history-week-percent ${percentClass}">${wp.percent}%</span>
                        <svg class="history-expand-icon" width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" fill="currentColor"/>
                        </svg>
                    </div>
                </div>
                <div class="history-mini-bar">
                    <div class="history-mini-fill ${percentClass}" style="width: ${wp.percent}%"></div>
                </div>
                <div class="history-week-details">
                    ${dayRowsHtml}
                    ${exerciseHtml ? `<div class="history-exercises">${exerciseHtml}</div>` : ''}
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function toggleHistoryWeek(idx) {
    const card = document.getElementById(`history-week-${idx}`);
    if (card) card.classList.toggle('expanded');
}

function switchView(view) {
    currentView = view;

    const workoutEls = ['main-content', 'day-tabs', 'week-nav'];
    const historyEl = document.getElementById('history-view');
    const statsBar = document.getElementById('stats-bar');
    const resetBtn = document.getElementById('btn-reset-week');

    // Update nav buttons
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === view);
    });

    if (view === 'workout') {
        workoutEls.forEach(id => document.getElementById(id).classList.remove('hidden'));
        historyEl.classList.add('hidden');
        statsBar.classList.remove('hidden');
        resetBtn.style.display = '';
        renderAll();
    } else {
        workoutEls.forEach(id => document.getElementById(id).classList.add('hidden'));
        historyEl.classList.remove('hidden');
        statsBar.classList.add('hidden');
        resetBtn.style.display = 'none';
        renderHistory();
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

    // Bottom nav handlers
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', () => {
            switchView(btn.dataset.view);
        });
    });
}

document.addEventListener('DOMContentLoaded', init);
