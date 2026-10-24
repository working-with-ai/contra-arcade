const statusLabel = document.querySelector('#status');
const shareButton = document.querySelector('#share');

shareButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(location.href);
    shareButton.textContent = '链接已复制 ✓';
    setTimeout(() => { shareButton.innerHTML = '复制游戏链接 <span aria-hidden="true">↗</span>'; }, 2200);
  } catch {
    window.prompt('复制这个链接，分享给朋友：', location.href);
  }
});

window.EJS_player = '#game';
window.EJS_core = 'fceumm';
window.EJS_gameName = '魂斗罗';
window.EJS_gameID = 452377455;
window.EJS_gameUrl = 'roms/contra.nes';
window.EJS_pathtodata = 'emulator/';
window.EJS_language = 'zh-CN';
window.EJS_color = '#c6c681';
window.EJS_backgroundColor = '#080c08';
window.EJS_startButtonName = '开始游戏';
window.EJS_startOnLoaded = false;
window.EJS_threads = false;
window.EJS_volume = 0.5;
window.EJS_controlScheme = 'nes';
window.EJS_disableDatabases = true;
window.EJS_defaultControls = {
  0: {
    0: { value: 'z', value2: 'BUTTON_2' },
    1: { value: '', value2: '' },
    2: { value: 'shift', value2: 'SELECT' },
    3: { value: 'enter', value2: 'START' },
    4: { value: 'up arrow', value2: 'DPAD_UP' },
    5: { value: 'down arrow', value2: 'DPAD_DOWN' },
    6: { value: 'left arrow', value2: 'DPAD_LEFT' },
    7: { value: 'right arrow', value2: 'DPAD_RIGHT' },
    8: { value: 'x', value2: 'BUTTON_1' },
    9: { value: '', value2: '' },
    10: { value: '', value2: '' },
    11: { value: '', value2: '' },
    12: { value: '', value2: '' },
    13: { value: '', value2: '' }
  },
  1: {
    0: { value: 'j', value2: 'BUTTON_2' },
    1: { value: '', value2: '' },
    2: { value: 'u', value2: 'SELECT' },
    3: { value: 'i', value2: 'START' },
    4: { value: 'w', value2: 'DPAD_UP' },
    5: { value: 's', value2: 'DPAD_DOWN' },
    6: { value: 'a', value2: 'DPAD_LEFT' },
    7: { value: 'd', value2: 'DPAD_RIGHT' },
    8: { value: 'k', value2: 'BUTTON_1' },
    9: { value: '', value2: '' },
    10: { value: '', value2: '' },
    11: { value: '', value2: '' },
    12: { value: '', value2: '' },
    13: { value: '', value2: '' }
  },
  2: {},
  3: {}
};
window.EJS_Buttons = {
  screenRecord: false, cheat: false, saveSavFiles: false, loadSavFiles: false,
  quickSave: false, quickLoad: false, cacheManager: false, exitEmulation: false
};
window.EJS_ready = () => { statusLabel.textContent = '准备就绪 · 点击开始'; };
window.EJS_onGameStart = () => {
  statusLabel.textContent = '游戏运行中';
  document.body.dataset.game = 'running';
};

const loader = document.createElement('script');
loader.src = 'emulator/loader.js';
loader.onerror = () => { statusLabel.textContent = '加载失败，请刷新重试'; };
document.body.appendChild(loader);
