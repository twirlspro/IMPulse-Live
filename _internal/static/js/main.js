let currentLang = 'en';
const translations = {
    en: {
        steam_id: 'Steam ID', api_key: 'Stratz API Key', range: 'Data Period', mode: 'Analysis',
        pick_rate: 'Pick Rate', patch_relevance: 'Patch Relevance', experience: 'Experience',
        hero_stats: 'Hero Stats', eval_method: 'Method', rank: 'Rank',
        radiant: 'Radiant', dire: 'Dire',
        meta: 'Meta', matchup: 'Matchup', hybrid: 'Hybrid', personal: 'Personal',
        any_pr: 'Any', average_pr: 'Average', high_pr: 'High',
        enabled: 'Enabled', disabled: 'Disabled',
        relaxed: 'All', familiar: 'Familiar', mains: 'Mains',
        overall: 'Overall', by_role: 'By Role',
        method_bayes: 'Balance', method_signature: 'Mastery', method_logit: 'Odds',
        hero: 'Hero', th_meta: 'Meta', th_syn: 'Syn', th_cnt: 'Cnt',
        th_matches: 'M', th_player: 'Player', th_adv: 'Adv',
        opt_1w: '1 Week', opt_2w: '2 Weeks', opt_1m: '1 Month',
        no_data: 'No data available',
        rank_all: 'All', rank_herald: 'Herald-Guardian', rank_archon: 'Crusader-Archon', rank_ancient: 'Legend-Ancient', rank_divine: 'Divine-Immortal',
        live_draft: 'LIVE DRAFT', ready: 'READY', updating: 'UPDATING', error: 'ERROR',
        get_key: '(Get key)',
        range_title: 'Time period for meta statistics aggregation',
        rank_title: 'Filter meta stats by player rank bracket',
        mode_title: 'Scoring algorithm for hero recommendations',
        pick_rate_title: 'Filter heroes by popularity in current meta',
        patch_relevance_title: 'Hide heroes not played in the last 3 months',
        experience_title: 'Minimum games required to recommend a hero',
        hero_stats_title: 'Use overall or role-specific player statistics',
        eval_method_title: 'Calculation method: Balance (Bayesian), Mastery (Signatures), or Odds (Log-Odds probability)',
        method_bayes_title: 'Balance: optimal blend between draft strength and personal experience',
        method_signature_title: 'Mastery: prioritizes your proven signature heroes',
        method_logit_title: 'Odds: mathematically rigorous win probability model (Log-Odds)',
        hero_title: 'Hero name',
        th_meta_title: 'Meta Winrate',
        th_syn_title: 'Synergy with allies',
        th_cnt_title: 'Counter vs enemies',
        th_matches_title: 'Player matches',
        th_player_title: 'Player winrate',
        th_adv_title: 'Final advantage score',
        settings_title: 'Settings',
        lang_title: 'Language: English',
        sync_title: 'Sync with Stratz',
        tab_scoring: 'Scoring',
        tab_app: 'App',
        hotkey_label: 'Overlay Hotkey',
        hotkey_title: 'Global hotkey to show/hide the overlay in-game',
        tray_info_title: 'System Tray Active',
        tray_info_desc: 'IMPulse runs in the system tray near the Windows clock. Click the icon to minimize or restore.',
        open_browser: 'Open in Browser (Second Monitor)',
        opacity_label: 'Window Opacity',
        opacity_title: 'Overlay window opacity over Dota 2',
        perf_label: 'Performance',
        perf_title: 'Balance between detection speed and CPU usage',
        perf_eco: 'Eco (1.5s)',
        perf_balanced: 'Normal (0.3s)',
        perf_high: 'Max (Instant)'
    },
    ru: {
        steam_id: 'Steam ID', api_key: 'Ключ Stratz API', range: 'Период', mode: 'Анализ',
        pick_rate: 'Пикрейт', patch_relevance: 'Актуальность', experience: 'Опыт',
        hero_stats: 'Статистика', eval_method: 'Метод', rank: 'Ранг',
        radiant: 'Свет', dire: 'Тьма',
        meta: 'Мета', matchup: 'Матчапы', hybrid: 'Гибрид', personal: 'Личный',
        any_pr: 'Все', average_pr: 'Средний', high_pr: 'Высокий',
        enabled: 'Вкл', disabled: 'Выкл',
        relaxed: 'Все', familiar: 'Знакомые', mains: 'Основные',
        overall: 'Общая', by_role: 'По роли',
        method_bayes: 'Баланс', method_signature: 'Сигнатурки', method_logit: 'Шансы',
        hero: 'Герой', th_meta: 'Мета', th_syn: 'Син', th_cnt: 'Кнтр',
        th_matches: 'М', th_player: 'Игрок', th_adv: 'Адв',
        opt_1w: '1 Неделя', opt_2w: '2 Недели', opt_1m: '1 Месяц',
        no_data: 'Нет данных',
        rank_all: 'Все', rank_herald: 'Рекрут-Страж', rank_archon: 'Рыцарь-Герой', rank_ancient: 'Легенда-Властелин', rank_divine: 'Божество-Титан',
        live_draft: 'ДРАФТ', ready: 'ГОТОВ', updating: 'ОБНОВЛЕНИЕ', error: 'ОШИБКА',
        get_key: '(Получить)',
        range_title: 'Период сбора мета-статистики',
        rank_title: 'Фильтр мета-статистики по рангам игроков',
        mode_title: 'Алгоритм оценки рекомендаций героев',
        pick_rate_title: 'Фильтр героев по популярности в текущей мете',
        patch_relevance_title: 'Скрыть героев, на которых вы не играли последние 3 месяца',
        experience_title: 'Минимальное количество сыгранных матчей на герое',
        hero_stats_title: 'Использовать общую статистику или статистику по конкретной роли',
        eval_method_title: 'Метод расчета: Баланс (драфт+опыт), Сигнатурки (приоритет пула), Шансы (вероятностный Logit)',
        method_bayes_title: 'Баланс: компромисс между силой героя в драфте и вашим наигрышем',
        method_signature_title: 'Сигнатурки: приоритет вашего пула лучших героев, драфт лишь корректирует выбор',
        method_logit_title: 'Шансы: строгое вероятностное сложение шансов на победу (Log-Odds)',
        hero_title: 'Имя героя',
        th_meta_title: 'Винрейт героя в мете',
        th_syn_title: 'Синергия с союзниками',
        th_cnt_title: 'Контрпик против врагов',
        th_matches_title: 'Количество матчей игрока на герое',
        th_player_title: 'Винрейт игрока на герое',
        th_adv_title: 'Итоговый показатель преимущества',
        settings_title: 'Настройки',
        lang_title: 'Язык: Русский',
        sync_title: 'Синхронизировать со Stratz',
        tab_scoring: 'Выдача',
        tab_app: 'Приложение',
        hotkey_label: 'Горячая клавиша',
        hotkey_title: 'Глобальная клавиша для показа/скрытия оверлея в игре',
        tray_info_title: 'Работа в системном трее',
        tray_info_desc: 'IMPulse сворачивается в трей рядом с часами Windows. Кликните по иконке, чтобы скрыть или открыть окно.',
        open_browser: 'Открыть в браузере (Второй монитор)',
        opacity_label: 'Прозрачность',
        opacity_title: 'Прозрачность окна оверлея поверх Dota 2',
        perf_label: 'Производительность',
        perf_title: 'Баланс между скоростью детекта и нагрузкой на процессор',
        perf_eco: 'Эко (1.5с)',
        perf_balanced: 'Норма (0.3с)',
        perf_high: 'Макс (Без пауз)'
    }
};

document.addEventListener('DOMContentLoaded', () => {

    // ===== 3D ROTATING PARTICLES CONSTELLATION LOADER =====
    let loaderAnimId = null;
    const loaderStartTime = Date.now();
    function init3DLoader() {
        const loader = document.getElementById('app-loader');
        const canvas = document.getElementById('loader-canvas');
        if (!canvas || !loader) return;

        const ctx = canvas.getContext('2d');
        let width = canvas.width = loader.offsetWidth || 464;
        let height = canvas.height = loader.offsetHeight || 650;

        // Airy, spacious constellation (not a dense mesh)
        const numPoints = 26;
        const radius = 130;
        const points = [];

        for (let i = 0; i < numPoints; i++) {
            const theta = Math.acos(2 * Math.random() - 1);
            const phi = 2 * Math.PI * Math.random();
            const r = radius * (0.65 + 0.35 * Math.random());
            points.push({
                x: r * Math.sin(theta) * Math.cos(phi),
                y: r * Math.sin(theta) * Math.sin(phi),
                z: r * Math.cos(theta),
                baseRadius: Math.random() * 1.6 + 1.4
            });
        }

        let angleX = 0;
        let angleY = 0;

        function render3D() {
            ctx.clearRect(0, 0, width, height);

            angleX += 0.007;
            angleY += 0.011;

            const cosX = Math.cos(angleX), sinX = Math.sin(angleX);
            const cosY = Math.cos(angleY), sinY = Math.sin(angleY);

            const cx = width / 2;
            const cy = height / 2;
            const fov = 350;

            const projected = [];
            for (let i = 0; i < points.length; i++) {
                const p = points[i];

                const x1 = p.x * cosY + p.z * sinY;
                const z1 = -p.x * sinY + p.z * cosY;

                const y2 = p.y * cosX - z1 * sinX;
                const z2 = p.y * sinX + z1 * cosX;

                const scale = fov / (fov + z2 + 200);
                const x2d = cx + x1 * scale;
                const y2d = cy + y2 * scale;

                projected.push({
                    x: x2d,
                    y: y2d,
                    z: z2,
                    scale: scale,
                    p: p
                });
            }

            // Draw clean connecting lines (only nearest neighbors)
            for (let i = 0; i < projected.length; i++) {
                const p1 = projected[i];
                for (let j = i + 1; j < projected.length; j++) {
                    const p2 = projected[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dist2d = Math.hypot(dx, dy);

                    if (dist2d < 88) {
                        const alpha = (1 - dist2d / 88) * 0.75 * Math.min(1.0, Math.min(p1.scale, p2.scale) * 1.3);
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
                        ctx.lineWidth = 1.5;
                        ctx.stroke();
                    }
                }
            }

            // Draw glowing points - purely floating, clean
            for (let i = 0; i < projected.length; i++) {
                const pt = projected[i];
                const r = pt.p.baseRadius * pt.scale;
                const alpha = 0.55 + 0.45 * Math.max(0, (pt.z + radius) / (2 * radius));

                ctx.beginPath();
                ctx.arc(pt.x, pt.y, Math.max(1.2, r), 0, Math.PI * 2);
                ctx.fillStyle = `rgba(56, 189, 248, ${alpha})`;
                ctx.shadowColor = '#38bdf8';
                ctx.shadowBlur = 10;
                ctx.fill();
                ctx.shadowBlur = 0;

                // Bright center core
                ctx.beginPath();
                ctx.arc(pt.x, pt.y, Math.max(0.6, r * 0.45), 0, Math.PI * 2);
                ctx.fillStyle = `rgba(224, 242, 254, ${Math.min(1.0, alpha * 1.1)})`;
                ctx.fill();
            }

            loaderAnimId = requestAnimationFrame(render3D);
        }

        render3D();
    }

    init3DLoader();

    function hideLoader() {
        const loader = document.getElementById('app-loader');
        if (loader && !loader.classList.contains('hidden')) {
            const elapsed = Date.now() - loaderStartTime;
            const delay = Math.max(0, 900 - elapsed);
            setTimeout(() => {
                loader.classList.add('hidden');
                setTimeout(() => {
                    if (loaderAnimId) cancelAnimationFrame(loaderAnimId);
                }, 650);
            }, delay);
        }
    }

function updateLiveIndicator(data) {
    const liveIndicator = document.getElementById('live-indicator');
    if (!liveIndicator || !data || !data.state) return;
    
    const dsStatus = data.state.dataset_status || "";
    const t = translations[currentLang] || translations.en;
    
    if (dsStatus.startsWith("Error")) {
        liveIndicator.className = 'live-indicator error';
        liveIndicator.title = dsStatus.replace("Error: ", "");
        liveIndicator.innerHTML = `<span class="live-dot"></span>${t.error || 'ERROR'}`;
    } else if (dsStatus && dsStatus !== "Idle" && dsStatus !== "Updated") {
        liveIndicator.className = 'live-indicator updating';
        liveIndicator.title = dsStatus;
        liveIndicator.innerHTML = `<span class="live-dot"></span>${t.updating || 'UPDATING'}`;
    } else if (data.state.draft_active) {
        liveIndicator.className = 'live-indicator active';
        liveIndicator.title = '';
        liveIndicator.innerHTML = `<span class="live-dot"></span>${t.live_draft || 'LIVE DRAFT'}`;
    } else {
        liveIndicator.className = 'live-indicator ready';
        liveIndicator.title = '';
        liveIndicator.innerHTML = `<span class="live-dot"></span>${t.ready || 'READY'}`;
    }
}

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang] || translations.en;
    
    // 1. Immediately update the language toggle button label and title
    const btnLang = document.getElementById('btn-lang');
    if (btnLang) {
        btnLang.textContent = (lang === 'ru') ? 'RU' : 'EN';
        btnLang.title = t.lang_title || ((lang === 'ru') ? 'Язык: Русский' : 'Language: English');
    }
    
    // 2. Translate all static data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (el.tagName === 'OPTION') {
                el.textContent = t[key];
            } else {
                el.innerHTML = t[key];
            }
        }
    });

    // 3. Translate all tooltip data-i18n-title attributes
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (t[key]) {
            el.title = t[key];
        }
    });
    
    // 4. Immediately re-render live indicator without waiting for next poll
    if (currentState) {
        updateLiveIndicator(currentState);
    }
}

    // UI Elements
    
    // Language Toggle
    const btnLang = document.getElementById('btn-lang');
    if (btnLang) {
        btnLang.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'ru' : 'en';
            setLanguage(newLang);
            
            fetch('/api/settings', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({lang: newLang})
            });
        });
    }

    const syncBtn = document.getElementById('btn-sync');
    const steamInput = document.getElementById('steam-id');
    const syncStatus = document.getElementById('sync-status');
    const tableBody = document.getElementById('recs-body');
    
    const radSlots = document.getElementById('radiant-slots').children;
    const direSlots = document.getElementById('dire-slots').children;

    let currentState = null;

    // Toggle Settings Panel
    const btnToggleSettings = document.getElementById('btn-toggle-settings');
    const settingsPanel = document.getElementById('settings-panel');
    
    btnToggleSettings.addEventListener('click', () => {
        settingsPanel.classList.toggle('hidden');
    });

    // Segmented Controls Logic
    document.querySelectorAll('.segmented-control').forEach(ctrl => {
        ctrl.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                // Update UI
                Array.from(ctrl.children).forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                
                if (ctrl.id === 'ctrl-calc') {
                    const calcMode = e.target.dataset.val;
                    document.querySelectorAll('.personal-only').forEach(el => {
                        el.style.display = (calcMode === 'smart') ? 'block' : 'none';
                    });
                }
                
                // Send Settings
                updateSettings();
            }
        });
    });

    function getSegmentedValue(id) {
        return document.querySelector(`#${id} .active`).dataset.val;
    }
    
    function setSegmentedValue(id, val) {
        const ctrl = document.getElementById(id);
        Array.from(ctrl.children).forEach(b => {
            if(b.dataset.val === val) b.classList.add('active');
            else b.classList.remove('active');
        });
    }

    // Sync Button
    syncBtn.addEventListener('click', () => {
        const steamId = steamInput.value.trim();
        if (!steamId) return;
        
        syncBtn.classList.add('spinning');
        const syncText = currentLang === 'ru' ? "Синхронизация..." : "Syncing...";
        syncStatus.textContent = syncText;
        syncStatus.title = syncText;
        syncStatus.className = "status-badge";
        syncStatus.style.display = "inline-flex";
        if (typeof lastSyncStatus !== 'undefined') lastSyncStatus = "Syncing...";
        
        fetch('/api/sync', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({steam_id: steamId, timeframe: 'all'})
        })
        .then(res => res.json())
        .then(data => {
            syncBtn.classList.remove('spinning');
            if (data.status === 'ok') {
                updateSettings(); // Save steam id to config
            } else {
                let msg = data.msg || (currentLang === 'ru' ? "Ошибка Stratz" : "Stratz Error");
                if (msg.startsWith("Wait")) {
                    const secs = msg.replace(/\D/g, '');
                    msg = currentLang === 'ru' ? `Подождите ${secs}с` : `Wait ${secs}s`;
                    syncStatus.className = "status-badge warning";
                } else {
                    syncStatus.className = "status-badge error";
                }
                syncStatus.textContent = msg;
                syncStatus.title = data.msg || msg;
                syncStatus.style.display = "inline-flex";
                clearTimeout(syncHideTimeout);
                syncHideTimeout = setTimeout(() => {
                    syncStatus.style.display = "none";
                }, 4000);
            }
        })
        .catch(err => {
            syncBtn.classList.remove('spinning');
            syncStatus.textContent = currentLang === 'ru' ? "Сетевая ошибка" : "Network Error";
            syncStatus.className = "status-badge error";
            syncStatus.style.display = "inline-flex";
        });
    });

    // Load Patches
    fetch('/api/patches')
        .then(r => r.json())
        .then(patches => {
            const select = document.getElementById('ctrl-mode-select');
            if(select && patches.length > 0) {
                patches.forEach(p => {
                    const opt = document.createElement('option');
                    opt.value = `Patch ${p.name}`;
                    opt.textContent = `Patch ${p.name}`;
                    select.appendChild(opt);
                });
            }
        }).catch(console.error);

    // Mode Select Event
    const modeSelect = document.getElementById('ctrl-mode-select');
    if (modeSelect) {
        modeSelect.addEventListener('change', () => {
            updateSettings();
        });
    }

    // Rank Select Event
    const rankSelect = document.getElementById('ctrl-rank-select');
    if (rankSelect) {
        rankSelect.addEventListener('change', () => {
            updateSettings();
        });
    }

    // Hotkey Select Event
    const hotkeySelect = document.getElementById('ctrl-hotkey');
    if (hotkeySelect) {
        hotkeySelect.addEventListener('change', () => {
            updateSettings();
        });
    }

    // Settings Tabs Switching Logic
    document.querySelectorAll('.settings-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            document.querySelectorAll('.settings-tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            document.querySelectorAll('.settings-tab-content').forEach(content => {
                if (content.id === targetTab) {
                    content.style.display = 'block';
                    content.classList.add('active');
                } else {
                    content.style.display = 'none';
                    content.classList.remove('active');
                }
            });
        });
    });

    function updateSettings() {
        const payload = {
            steam_id: steamInput.value.trim(),
            timeframe: 'all',
            team: getSegmentedValue('ctrl-team'),
            role: getSegmentedValue('ctrl-role'),
            rank: rankSelect ? rankSelect.value : "all",
            mode: modeSelect ? modeSelect.value : "1m",
            calc: getSegmentedValue('ctrl-calc'),
            strictness: getSegmentedValue('ctrl-strictness'),
            popularity: getSegmentedValue('ctrl-popularity'),
            decay: getSegmentedValue('ctrl-decay') === "true",
            role_transfer_enabled: getSegmentedValue('ctrl-role-transfer') === "true",
            eval_method: getSegmentedValue('ctrl-eval-method'),
            hotkey: hotkeySelect ? hotkeySelect.value : "INSERT",
            opacity: parseInt(getSegmentedValue('ctrl-opacity')) || 90,
            perf_mode: getSegmentedValue('ctrl-perf') || 'balanced'
        };
        
        fetch('/api/settings', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        })
        .then(r => r.json())
        .then(data => {
            if (data && data.status === 'ok') {
                fetch('/api/state').then(r => r.json()).then(updateUI).catch(console.error);
            }
        }).catch(console.error);
    }
    
    function formatDelta(val) {
        if (val === undefined || val === null) return `<span class="val-neu">-</span>`;
        if (Math.abs(val) <= 0.5) return `<span class="val-neu">${val > 0 ? '+' : ''}${val.toFixed(1)}%</span>`;
        if (val > 0.5) return `<span class="val-pos">+${val.toFixed(1)}%</span>`;
        return `<span class="val-neg">${val.toFixed(1)}%</span>`;
    }

    function formatWinrate(val) {
        if (!val) return `<span class="val-neu">-</span>`;
        if (val > 51.0) return `<span class="val-pos">${val.toFixed(1)}%</span>`;
        if (val < 49.0) return `<span class="val-neg">${val.toFixed(1)}%</span>`;
        return `<span class="val-neu">${val.toFixed(1)}%</span>`;
    }

    function renderSlots(slots, heroes) {
        for (let i = 0; i < 5; i++) {
            if (i < heroes.length && heroes[i]) {
                slots[i].style.backgroundImage = `url('/assets/panorama/images/heroes/icons/npc_dota_hero_${heroes[i]}_png.png')`;
                slots[i].classList.remove('empty');
                slots[i].classList.add('filled');
            } else {
                slots[i].style.backgroundImage = 'none';
                slots[i].classList.add('empty');
                slots[i].classList.remove('filled');
            }
        }
    }

    let lastSyncStatus = "";
    let syncHideTimeout = null;

    function updateUI(data) {
        currentState = data;
        hideLoader();
        
        // Restore language setting on first load
        if (!window.langInitialized && data.settings && data.settings.lang) {
            setLanguage(data.settings.lang);
            window.langInitialized = true;
        }

        // Sync Status (Only update UI when status changes to avoid overriding the timeout)
        if (data.state.sync_status !== lastSyncStatus) {
            lastSyncStatus = data.state.sync_status;
            
            if (data.state.sync_status === "OK") {
                const count = data.state.player_count || 0;
                const txt = currentLang === 'ru' ? `Stratz: ${count} матчей` : `Stratz: ${count} matches`;
                syncStatus.textContent = txt;
                syncStatus.title = txt;
                syncStatus.className = "status-badge ok";
                syncStatus.style.display = "inline-flex";
                
                clearTimeout(syncHideTimeout);
                syncHideTimeout = setTimeout(() => {
                    syncStatus.style.display = "none";
                }, 3500);
            } else if (data.state.sync_status === "Syncing...") {
                const txt = currentLang === 'ru' ? "Синхронизация..." : "Syncing...";
                syncStatus.textContent = txt;
                syncStatus.title = txt;
                syncStatus.className = "status-badge";
                syncStatus.style.display = "inline-flex";
                clearTimeout(syncHideTimeout);
            } else if (data.state.sync_status === "Error" || data.state.sync_status === "Server error") {
                const txt = currentLang === 'ru' ? "Ошибка Stratz" : "Stratz Error";
                syncStatus.textContent = txt;
                syncStatus.title = currentLang === 'ru' ? "Не удалось загрузить данные со Stratz API (проверьте ID или ключ)" : "Failed to load stats from Stratz API (check ID or API key)";
                syncStatus.className = "status-badge error";
                syncStatus.style.display = "inline-flex";
                clearTimeout(syncHideTimeout);
                syncHideTimeout = setTimeout(() => {
                    syncStatus.style.display = "none";
                }, 4000);
            } else if (data.state.sync_status && data.state.sync_status.startsWith("Wait")) {
                const secs = data.state.sync_status.replace(/\D/g, '');
                const txt = currentLang === 'ru' ? `Подождите ${secs}с` : `Wait ${secs}s`;
                syncStatus.textContent = txt;
                syncStatus.title = currentLang === 'ru' ? `Подождите ${secs} сек перед повторной синхронизацией` : `Please wait ${secs}s before syncing again`;
                syncStatus.className = "status-badge warning";
                syncStatus.style.display = "inline-flex";
                clearTimeout(syncHideTimeout);
            } else {
                syncStatus.style.display = "none";
                clearTimeout(syncHideTimeout);
            }
        }

        // Dataset Status
        const datasetStatus = document.getElementById('dataset-status');
        if (data.state.dataset_status && data.state.dataset_status !== "Idle" && data.state.dataset_status !== "Updated") {
            datasetStatus.textContent = data.state.dataset_status;
            datasetStatus.style.display = "inline-flex";
        } else {
            datasetStatus.style.display = "none";
        }
        
        // Draft Evaluation
        const evalBadge = document.getElementById('draft-evaluation');
        const evalTeam = document.getElementById('eval-team');
        const evalValue = document.getElementById('eval-value');
        const evalPanel = document.getElementById('draft-eval-panel');
        
        if (data.state.draft_active && data.state.evaluation) {
            const ev = data.state.evaluation;
            
            // 1. Update Badge
            evalBadge.classList.remove('hidden');
            evalTeam.textContent = ev.team;
            evalValue.textContent = ev.team !== 'Even' ? `+${ev.advantage.toFixed(1)}%` : `~${ev.advantage.toFixed(1)}%`;
            
            evalValue.className = 'eval-value';
            evalTeam.className = 'eval-team';
            
            if (ev.team === "Radiant") {
                evalTeam.textContent = "RAD";
                evalValue.classList.add('eval-rad');
                evalTeam.classList.add('eval-rad');
            } else if (ev.team === "Dire") {
                evalTeam.textContent = "DIRE";
                evalValue.classList.add('eval-dire');
                evalTeam.classList.add('eval-dire');
            } else {
                evalTeam.textContent = "EVEN";
                evalValue.classList.add('eval-even');
                evalTeam.classList.add('eval-even');
            }
            
            // 2. Update Panel
            evalPanel.classList.remove('hidden');
            const radScoresHtml = data.state.radiant.map(hero => {
                const s = ev.rad_heroes[hero] || 0;
                return `<div class="eval-hero-score">${formatDelta(s)}</div>`;
            }).join('');
            document.getElementById('rad-hero-scores').innerHTML = radScoresHtml;
            
            const direScoresHtml = data.state.dire.map(hero => {
                const s = ev.dire_heroes[hero] || 0;
                return `<div class="eval-hero-score">${formatDelta(s)}</div>`;
            }).join('');
            document.getElementById('dire-hero-scores').innerHTML = direScoresHtml;
            
        } else {
            evalBadge.classList.add('hidden');
            evalPanel.classList.add('hidden');
        }

        // Automatically update team segment if changed by backend (auto-detect)
        if (data.settings && data.settings.team) {
            const currentTeam = getSegmentedValue('ctrl-team');
            if (currentTeam !== data.settings.team) {
                setSegmentedValue('ctrl-team', data.settings.team);
            }
        }
        
        // Settings (Initialize only once on load)
        if (!window.settingsLoaded && data.settings) {
            steamInput.value = data.settings.steam_id || "";
            setSegmentedValue('ctrl-team', data.settings.team || "radiant");
            setSegmentedValue('ctrl-role', data.settings.role || "all");
            
            if (modeSelect) {
                modeSelect.value = data.settings.mode || "1m";
            }
            if (rankSelect && data.settings.rank) {
                rankSelect.value = data.settings.rank;
            }
            if (hotkeySelect && data.settings.hotkey) {
                hotkeySelect.value = data.settings.hotkey;
            }
            if (data.settings.opacity) {
                setSegmentedValue('ctrl-opacity', String(data.settings.opacity));
            }
            if (data.settings.perf_mode) {
                setSegmentedValue('ctrl-perf', data.settings.perf_mode);
            }
            
            setSegmentedValue('ctrl-calc', data.settings.calc || "meta");
            if (data.settings.strictness) setSegmentedValue('ctrl-strictness', data.settings.strictness);
            if (data.settings.popularity) setSegmentedValue('ctrl-popularity', data.settings.popularity);
            if (data.settings.decay !== undefined) setSegmentedValue('ctrl-decay', data.settings.decay ? "true" : "false");
            if (data.settings.role_transfer_enabled !== undefined) setSegmentedValue('ctrl-role-transfer', data.settings.role_transfer_enabled ? "true" : "false");
            if (data.settings.eval_method) setSegmentedValue('ctrl-eval-method', data.settings.eval_method);
            
            const calcMode = data.settings.calc || "meta";
            document.querySelectorAll('.personal-only').forEach(el => {
                el.style.display = (calcMode === 'smart') ? 'block' : 'none';
            });
            
            window.settingsLoaded = true;
        }
        
        const smartBtn = document.querySelector('button[data-val="smart"]');
        if (!data.settings.steam_id || data.settings.steam_id.trim() === "") {
            smartBtn.disabled = true;
            smartBtn.style.opacity = '0.3';
            smartBtn.style.cursor = 'not-allowed';
            if (getSegmentedValue('ctrl-calc') === 'smart') {
                setSegmentedValue('ctrl-calc', 'hybrid');
                updateSettings(); // fallback trigger
            }
        } else {
            smartBtn.disabled = false;
            smartBtn.style.opacity = '1';
            smartBtn.style.cursor = 'pointer';
        }
        
        // Draft UI
        renderSlots(radSlots, data.state.radiant);
        renderSlots(direSlots, data.state.dire);
        
        // LIVE Indicator
        updateLiveIndicator(data);

        // Table
        tableBody.innerHTML = '';
        
        const calcMode = getSegmentedValue('ctrl-calc');
        const table = document.querySelector('.recs-table');
        if (calcMode === 'smart') {
            table.classList.add('mode-smart');
        } else {
            table.classList.remove('mode-smart');
        }
        if (calcMode === 'delta') {
            table.classList.add('mode-delta');
        } else {
            table.classList.remove('mode-delta');
        }
        
        if (data.state.recs && data.state.recs.length > 0) {
            data.state.recs.forEach(r => {
                const tr = document.createElement('tr');
                tr.style.userSelect = 'none';
                
                const advHTML = calcMode === 'delta' ? formatDelta(r.adv) : formatWinrate(r.adv);
                
                let matchCountCol = `<span style="color:#64748b">-</span>`;
                let playerWrCol = `<span style="color:#64748b">-</span>`;
                
                
                if (r.p_matches > 0) {
                    matchCountCol = `<span style="color:#64748b; font-size:11px;">${r.p_matches}</span>`;
                    playerWrCol = formatWinrate(r.p_winrate);
                    
                    
                }

                tr.innerHTML = `
                    <td class="col-hero">
                        <div class="hero-cell">
                            <img src="/assets/panorama/images/heroes/icons/npc_dota_hero_${r.cdnName}_png.png" class="hero-icon" onerror="this.src=''">
                            <span>${r.name}</span>
                        </div>
                    </td>
                    <td class="col-meta">${formatWinrate(r.base_wr)}</td>
                    <td>${formatDelta(r.synergy)}</td>
                    <td>${formatDelta(r.counter)}</td>
                    <td class="smart-col">${matchCountCol}</td>
                    <td class="smart-col">${playerWrCol}</td>
                    <td><strong>${advHTML}</strong></td>
                `;
                tableBody.appendChild(tr);
            });
        } else {
            const colspan = calcMode === 'smart' ? 7 : (calcMode === 'delta' ? 4 : 5);
            const noDataText = (translations[currentLang] && translations[currentLang].no_data) || 'No data available';
            tableBody.innerHTML = `<tr><td colspan="${colspan}" style="padding: 35px 20px; text-align: center; color: #94a3b8; font-size: 11px;">${noDataText}</td></tr>`;
        }
    }

    // Adaptive Polling Loop based on performance mode
    function schedulePoll() {
        let delay = 600;
        if (currentState && currentState.settings) {
            const perf = currentState.settings.perf_mode;
            if (perf === 'eco') delay = 2000;
            else if (perf === 'high') delay = 100; // 10 updates per second for instant reaction!
        }
        setTimeout(() => {
            fetch('/api/state')
                .then(r => r.json())
                .then(data => {
                    updateUI(data);
                    schedulePoll();
                })
                .catch(err => {
                    console.error(err);
                    schedulePoll();
                });
        }, delay);
    }
    schedulePoll();
});
