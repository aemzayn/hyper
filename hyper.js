"use strict";
module.exports = {
  config: {
    updateChannel: "stable",
    fontSize: 16,
    fontFamily:
      'Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
    fontWeight: "normal",
    fontWeightBold: "bold",
    lineHeight: 1,
    letterSpacing: 0,
    cursorColor: "#5392ff",
    cursorAccentColor: "#000",
    cursorShape: "BLOCK",
    cursorBlink: false,
    backgroundColor: "rgba(27, 40, 52)",
    foregroundColor: "#c8daf4",
    selectionColor: "rgba(248,28,229,0.3)",
    borderColor: "#1d3458",
    termCSS: "",
    workingDirectory: "",
    showHamburgerMenu: "",
    showWindowControls: "",
    padding: "0px 14px",
    colors: {
      black: "#000000",
      lightBlack: "#352969",

      red: "#C51E14",
      lightRed: "#ff806c",

      green: "#34bc6e",
      lightGreen: "#95d13c",

      yellow: "#ffb000",
      lightYellow: "#fed500",

      blue: "#2d74da",
      lightBlue: "#71cddd",

      magenta: "#ff509e",
      lightMagenta: "#f87eac",

      cyan: "#00a78f",
      lightCyan: "#40d5bb",

      white: "#fff",
      lightWhite: "#d8d8d8",

      limeGreen: "#32CD32",
      lightCoral: "#F08080",
    },
    css: `
        .tabs_nav .tabs_list .tab_text {
            color: #009bef;
        }
        .tabs_nav .tabs_title {
            color: #009bef;
        }
    `,
    shell: "C:\\Program Files\\Git\\git-cmd.exe",
    shellArgs: ["--command=usr/bin/bash.exe", "-l", "-i"],
    env: {},
    bell: "SOUND",
    copyOnSelect: false,
    defaultSSHApp: true,
    quickEdit: false,
    macOptionSelectionMode: "vertical",
    webGLRenderer: true,
    webLinksActivationKey: "",
    disableLigatures: true,
    disableAutoUpdates: false,
    screenReaderMode: false,
    preserveCWD: true,
  },
  plugins: ["hyperborder"],
  localPlugins: [],
  keymaps: {},
  hyperBorder: {
    borderColors: ["#fc1da7", "#fba506"],
    borderWidth: "8px",
    animate: true,
    duration: "1000",
  },
};
//# sourceMappingURL=config-default.js.map
