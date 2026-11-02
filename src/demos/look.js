// The portfolio's own look, mapped onto the Stageshow kit's tokens.
// Black ground, paper ink, mono labels: the same visual system as the page.
export const stageTokens = {
  '--ss-font': "'Instrument Sans', 'Helvetica Neue', sans-serif",
  '--ss-mono': "'DM Mono', 'SFMono-Regular', Consolas, monospace",
  '--ss-canvas': '#0a0a0a',
  '--ss-surface': '#101010',
  '--ss-raised': '#181818',
  '--ss-chrome': '#0a0a0a',
  '--ss-well': '#0d0d0d',
  '--ss-line': 'rgba(244, 244, 240, 0.16)',
  '--ss-line-faint': 'rgba(244, 244, 240, 0.09)',
  '--ss-text-strong': '#f4f4f0',
  '--ss-text': '#b4b4ac',
  '--ss-text-faint': '#7c7c76',
  '--ss-icon': '#d6d6ce',
  '--ss-radius-sm': '2px',
  '--ss-radius-md': '3px',
  '--ss-radius-lg': '4px',
  '--ss-radius-window': '8px',
  '--ss-control': '34px',
  '--ss-row': '28px',
}

export const stageLook = {
  theme: 'dark',
  palette: 'mono',
  fidelity: 'standard',
  tokens: stageTokens,
}
