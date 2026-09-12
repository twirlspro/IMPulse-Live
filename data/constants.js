/**
 * src/utils/constants.js
 * Хранит статические данные.
 * HERO_DATA теперь содержит cdnName для URL изображений.
 */

export const HERO_DATA = {
    1: { id: 1, name: "Anti-Mage", cdnName: "antimage" },
    2: { id: 2, name: "Axe", cdnName: "axe" },
    3: { id: 3, name: "Bane", cdnName: "bane" },
    4: { id: 4, name: "Bloodseeker", cdnName: "bloodseeker" },
    5: { id: 5, name: "Crystal Maiden", cdnName: "crystal_maiden" },
    6: { id: 6, name: "Drow Ranger", cdnName: "drow_ranger" },
    7: { id: 7, name: "Earthshaker", cdnName: "earthshaker" },
    8: { id: 8, name: "Juggernaut", cdnName: "juggernaut" },
    9: { id: 9, name: "Mirana", cdnName: "mirana" },
    10: { id: 10, name: "Morphling", cdnName: "morphling" },
    11: { id: 11, name: "Shadow Fiend", cdnName: "nevermore" },
    12: { id: 12, name: "Phantom Lancer", cdnName: "phantom_lancer" },
    13: { id: 13, name: "Puck", cdnName: "puck" },
    14: { id: 14, name: "Pudge", cdnName: "pudge" },
    15: { id: 15, name: "Razor", cdnName: "razor" },
    16: { id: 16, name: "Sand King", cdnName: "sand_king" },
    17: { id: 17, name: "Storm Spirit", cdnName: "storm_spirit" },
    18: { id: 18, name: "Sven", cdnName: "sven" },
    19: { id: 19, name: "Tiny", cdnName: "tiny" },
    20: { id: 20, name: "Vengeful Spirit", cdnName: "vengefulspirit" },
    21: { id: 21, name: "Windranger", cdnName: "windrunner" },
    22: { id: 22, name: "Zeus", cdnName: "zuus" },
    23: { id: 23, name: "Kunkka", cdnName: "kunkka" },
    25: { id: 25, name: "Lina", cdnName: "lina" },
    26: { id: 26, name: "Lion", cdnName: "lion" },
    27: { id: 27, name: "Shadow Shaman", cdnName: "shadow_shaman" },
    28: { id: 28, name: "Slardar", cdnName: "slardar" },
    29: { id: 29, name: "Tidehunter", cdnName: "tidehunter" },
    30: { id: 30, name: "Witch Doctor", cdnName: "witch_doctor" },
    31: { id: 31, name: "Lich", cdnName: "lich" },
    32: { id: 32, name: "Riki", cdnName: "riki" },
    33: { id: 33, name: "Enigma", cdnName: "enigma" },
    34: { id: 34, name: "Tinker", cdnName: "tinker" },
    35: { id: 35, name: "Sniper", cdnName: "sniper" },
    36: { id: 36, name: "Necrophos", cdnName: "necrolyte" },
    37: { id: 37, name: "Warlock", cdnName: "warlock" },
    38: { id: 38, name: "Beastmaster", cdnName: "beastmaster" },
    39: { id: 39, name: "Queen of Pain", cdnName: "queenofpain" },
    40: { id: 40, name: "Venomancer", cdnName: "venomancer" },
    41: { id: 41, name: "Faceless Void", cdnName: "faceless_void" },
    42: { id: 42, name: "Wraith King", cdnName: "skeleton_king" },
    43: { id: 43, name: "Death Prophet", cdnName: "death_prophet" },
    44: { id: 44, name: "Phantom Assassin", cdnName: "phantom_assassin" },
    45: { id: 45, name: "Pugna", cdnName: "pugna" },
    46: { id: 46, name: "Templar Assassin", cdnName: "templar_assassin" },
    47: { id: 47, name: "Viper", cdnName: "viper" },
    48: { id: 48, name: "Luna", cdnName: "luna" },
    49: { id: 49, name: "Dragon Knight", cdnName: "dragon_knight" },
    50: { id: 50, name: "Dazzle", cdnName: "dazzle" },
    51: { id: 51, name: "Clockwerk", cdnName: "rattletrap" },
    52: { id: 52, name: "Leshrac", cdnName: "leshrac" },
    53: { id: 53, name: "Nature's Prophet", cdnName: "furion" },
    54: { id: 54, name: "Lifestealer", cdnName: "life_stealer" },
    55: { id: 55, name: "Dark Seer", cdnName: "dark_seer" },
    56: { id: 56, name: "Clinkz", cdnName: "clinkz" },
    57: { id: 57, name: "Omniknight", cdnName: "omniknight" },
    58: { id: 58, name: "Enchantress", cdnName: "enchantress" },
    59: { id: 59, name: "Huskar", cdnName: "huskar" },
    60: { id: 60, name: "Night Stalker", cdnName: "night_stalker" },
    61: { id: 61, name: "Broodmother", cdnName: "broodmother" },
    62: { id: 62, name: "Bounty Hunter", cdnName: "bounty_hunter" },
    63: { id: 63, name: "Weaver", cdnName: "weaver" },
    64: { id: 64, name: "Jakiro", cdnName: "jakiro" },
    65: { id: 65, name: "Batrider", cdnName: "batrider" },
    66: { id: 66, name: "Chen", cdnName: "chen" },
    67: { id: 67, name: "Spectre", cdnName: "spectre" },
    68: { id: 68, name: "Ancient Apparition", cdnName: "ancient_apparition" },
    69: { id: 69, name: "Doom", cdnName: "doom_bringer" },
    70: { id: 70, name: "Ursa", cdnName: "ursa" },
    71: { id: 71, name: "Spirit Breaker", cdnName: "spirit_breaker" },
    72: { id: 72, name: "Gyrocopter", cdnName: "gyrocopter" },
    73: { id: 73, name: "Alchemist", cdnName: "alchemist" },
    74: { id: 74, name: "Invoker", cdnName: "invoker" },
    75: { id: 75, name: "Silencer", cdnName: "silencer" },
    76: { id: 76, name: "Outworld Destroyer", cdnName: "obsidian_destroyer" },
    77: { id: 77, name: "Lycan", cdnName: "lycan" },
    78: { id: 78, name: "Brewmaster", cdnName: "brewmaster" },
    79: { id: 79, name: "Shadow Demon", cdnName: "shadow_demon" },
    80: { id: 80, name: "Lone Druid", cdnName: "lone_druid" },
    81: { id: 81, name: "Chaos Knight", cdnName: "chaos_knight" },
    82: { id: 82, name: "Meepo", cdnName: "meepo" },
    83: { id: 83, name: "Treant Protector", cdnName: "treant" },
    84: { id: 84, name: "Ogre Magi", cdnName: "ogre_magi" },
    85: { id: 85, name: "Undying", cdnName: "undying" },
    86: { id: 86, name: "Rubick", cdnName: "rubick" },
    87: { id: 87, name: "Disruptor", cdnName: "disruptor" },
    88: { id: 88, name: "Nyx Assassin", cdnName: "nyx_assassin" },
    89: { id: 89, name: "Naga Siren", cdnName: "naga_siren" },
    90: { id: 90, name: "Keeper of the Light", cdnName: "keeper_of_the_light" },
    91: { id: 91, name: "Io", cdnName: "wisp" },
    92: { id: 92, name: "Visage", cdnName: "visage" },
    93: { id: 93, name: "Slark", cdnName: "slark" },
    94: { id: 94, name: "Medusa", cdnName: "medusa" },
    95: { id: 95, name: "Troll Warlord", cdnName: "troll_warlord" },
    96: { id: 96, name: "Centaur Warrunner", cdnName: "centaur" },
    97: { id: 97, name: "Magnus", cdnName: "magnataur" },
    98: { id: 98, name: "Timbersaw", cdnName: "shredder" },
    99: { id: 99, name: "Bristleback", cdnName: "bristleback" },
    100: { id: 100, name: "Tusk", cdnName: "tusk" },
    101: { id: 101, name: "Skywrath Mage", cdnName: "skywrath_mage" },
    102: { id: 102, name: "Abaddon", cdnName: "abaddon" },
    103: { id: 103, name: "Elder Titan", cdnName: "elder_titan" },
    104: { id: 104, name: "Legion Commander", cdnName: "legion_commander" },
    105: { id: 105, name: "Techies", cdnName: "techies" },
    106: { id: 106, name: "Ember Spirit", cdnName: "ember_spirit" },
    107: { id: 107, name: "Earth Spirit", cdnName: "earth_spirit" },
    108: { id: 108, name: "Underlord", cdnName: "abyssal_underlord" },
    109: { id: 109, name: "Terrorblade", cdnName: "terrorblade" },
    110: { id: 110, name: "Phoenix", cdnName: "phoenix" },
    111: { id: 111, name: "Oracle", cdnName: "oracle" },
    112: { id: 112, name: "Winter Wyvern", cdnName: "winter_wyvern" },
    113: { id: 113, name: "Arc Warden", cdnName: "arc_warden" },
    114: { id: 114, name: "Monkey King", cdnName: "monkey_king" },
    119: { id: 119, name: "Dark Willow", cdnName: "dark_willow" },
    120: { id: 120, name: "Pangolier", cdnName: "pangolier" },
    121: { id: 121, name: "Grimstroke", cdnName: "grimstroke" },
    123: { id: 123, name: "Hoodwink", cdnName: "hoodwink" },
    126: { id: 126, name: "Void Spirit", cdnName: "void_spirit" },
    128: { id: 128, name: "Snapfire", cdnName: "snapfire" },
    129: { id: 129, name: "Mars", cdnName: "mars" },
    135: { id: 135, name: "Dawnbreaker", cdnName: "dawnbreaker" },
    136: { id: 136, name: "Marci", cdnName: "marci" },
    137: { id: 137, name: "Primal Beast", cdnName: "primal_beast" },
    138: { id: 138, name: "Muerta", cdnName: "muerta" },
    131: { id: 131, name: "Ringmaster", cdnName: "ringmaster" },
    145: { id: 145, name: "Kez", cdnName: "kez" },
};

// Ваш старый HEROES, оставлен для обратной совместимости, если он где-то нужен.
// НО лучше использовать HERO_DATA[id].name
export const HEROES = {
    1: "Anti-Mage", 2: "Axe", 3: "Bane", 4: "Bloodseeker", 5: "Crystal Maiden",
    6: "Drow Ranger", 7: "Earthshaker", 8: "Juggernaut", 9: "Mirana", 10: "Morphling",
    11: "Shadow Fiend", 12: "Phantom Lancer", 13: "Puck", 14: "Pudge", 15: "Razor",
    16: "Sand King", 17: "Storm Spirit", 18: "Sven", 19: "Tiny", 20: "Vengeful Spirit",
    21: "Windranger", 22: "Zeus", 23: "Kunkka", 25: "Lina", 26: "Lion",
    27: "Shadow Shaman", 28: "Slardar", 29: "Tidehunter", 30: "Witch Doctor", 31: "Lich",
    32: "Riki", 33: "Enigma", 34: "Tinker", 35: "Sniper", 36: "Necrophos",
    37: "Warlock", 38: "Beastmaster", 39: "Queen of Pain", 40: "Venomancer", 41: "Faceless Void",
    42: "Wraith King", 43: "Death Prophet", 44: "Phantom Assassin", 45: "Pugna", 46: "Templar Assassin",
    47: "Viper", 48: "Luna", 49: "Dragon Knight", 50: "Dazzle", 51: "Clockwerk",
    52: "Leshrac", 53: "Nature's Prophet", 54: "Lifestealer", 55: "Dark Seer", 56: "Clinkz",
    57: "Omniknight", 58: "Enchantress", 59: "Huskar", 60: "Night Stalker", 61: "Broodmother",
    62: "Bounty Hunter", 63: "Weaver", 64: "Jakiro", 65: "Batrider", 66: "Chen",
    67: "Spectre", 68: "Ancient Apparition", 69: "Doom", 70: "Ursa", 71: "Spirit Breaker",
    72: "Gyrocopter", 73: "Alchemist", 74: "Invoker", 75: "Silencer", 76: "Outworld Destroyer",
    77: "Lycan", 78: "Brewmaster", 79: "Shadow Demon", 80: "Lone Druid", 81: "Chaos Knight",
    82: "Meepo", 83: "Treant Protector", 84: "Ogre Magi", 85: "Undying", 86: "Rubick",
    87: "Disruptor", 88: "Nyx Assassin", 89: "Naga Siren", 90: "Keeper of the Light", 91: "Io",
    92: "Visage", 93: "Slark", 94: "Medusa", 95: "Troll Warlord", 96: "Centaur Warrunner",
    97: "Magnus", 98: "Timbersaw", 99: "Bristleback", 100: "Tusk", 101: "Skywrath Mage",
    102: "Abaddon", 103: "Elder Titan", 104: "Legion Commander", 105: "Techies", 106: "Ember Spirit",
    107: "Earth Spirit", 108: "Underlord", 109: "Terrorblade", 110: "Phoenix", 111: "Oracle",
    112: "Winter Wyvern", 113: "Arc Warden", 114: "Monkey King", 119: "Dark Willow", 120: "Pangolier",
    121: "Grimstroke", 123: "Hoodwink", 126: "Void Spirit", 128: "Snapfire", 129: "Mars",
    135: "Dawnbreaker", 136: "Marci", 137: "Primal Beast", 138: "Muerta",
    131: "Ringmaster", 145: "Kez"
};

export const POSITION_NAMES = {
    'POSITION_1': 'Safe Lane',
    'POSITION_2': 'Mid Lane',
    'POSITION_3': 'Offlane',
    'POSITION_4': 'Soft Support',
    'POSITION_5': 'Hard Support',
    'UNKNOWN': 'Unknown'
};

export const POSITION_COLORS = {
    'POSITION_1': '#ff2a2a', // Carry - Neon Red
    'POSITION_2': '#b300ff', // Mid - Neon Purple
    'POSITION_3': '#ffaa00', // Offlane - Neon Orange
    'POSITION_4': '#00ff66', // Soft Support - Neon Green
    'POSITION_5': '#00e5ff', // Hard Support - Neon Cyan
};

export const GAME_MODES_CONFIG = {
    ranked: {
        id: 'ranked',
        label: 'Ranked',
        color: '#00e5ff',
        icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 12 5 4 12"/><polyline points="20 19 12 12 4 19"/></svg>`
    },
    unranked: {
        id: 'unranked',
        label: 'Casual',
        color: '#2ecc71',
        icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
    },
    turbo: {
        id: 'turbo',
        label: 'Turbo',
        color: '#ffaa00',
        icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`
    },
    tournament: {
        id: 'tournament',
        label: 'Tournament',
        color: '#b300ff',
        icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`
    },
    other: {
        id: 'other',
        label: 'Other',
        color: '#9ca2c7',
        icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/></svg>`
    }
};

export function classifyMatchMode(match) {
    if (!match) return GAME_MODES_CONFIG.other;
    const gameMode = String(match.gameMode || '').toUpperCase();
    const lobbyType = String(match.lobbyType || '').toUpperCase();

    if (gameMode === 'TURBO' || gameMode === '23') return GAME_MODES_CONFIG.turbo;
    if (lobbyType === 'RANKED' || lobbyType === 'RANKED_SOLO_MM' || lobbyType === 'RANKED_TEAM_MM' || lobbyType === '7') return GAME_MODES_CONFIG.ranked;
    if (lobbyType === 'TOURNAMENT' || lobbyType === 'BATTLE_CUP' || lobbyType === '1' || lobbyType === '9') return GAME_MODES_CONFIG.tournament;
    if (lobbyType === 'UNRANKED' || lobbyType === 'CASUAL' || lobbyType === '0' || !lobbyType) return GAME_MODES_CONFIG.unranked;
    return GAME_MODES_CONFIG.other;
}