const app = getApp();
const dayArrStr = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
let dateNow = new Date();
const btnImg = {
    preNotSet: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTA5LTIzVDE1OjA3OjM3KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0wOS0yM1QxNTo1OTozOSswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOC0wOS0yM1QxNTo1OTozOSswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1MjgxZDhjOC0wMzlhLTQwZTctOWRlNy0zZWFmZWIyYTA1MjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ZTBjZmUzYjMtODQ3My00YTA4LThiMzgtNDhiZjM2YWEyMjAxIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZTBjZmUzYjMtODQ3My00YTA4LThiMzgtNDhiZjM2YWEyMjAxIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplMGNmZTNiMy04NDczLTRhMDgtOGIzOC00OGJmMzZhYTIyMDEiIHN0RXZ0OndoZW49IjIwMTgtMDktMjNUMTU6MDc6MzcrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MTIxZWIxYmMtOTNmOS00ODE2LThiOGUtMGE0Y2QxZTY3MGFiIiBzdEV2dDp3aGVuPSIyMDE4LTA5LTIzVDE1OjQ5OjAyKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjUyODFkOGM4LTAzOWEtNDBlNy05ZGU3LTNlYWZlYjJhMDUyNSIgc3RFdnQ6d2hlbj0iMjAxOC0wOS0yM1QxNTo1OTozOSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuutdK0AAAE9SURBVEgNY5gNBkw8ELqvEULffguhX6RC6GfiUJqTRFoQ1Zy7fyH0NF8IzT6PAcKY2A2h//+nL728E+qAt3PRFPwlkf5Pon6ouq9XoQ54dZtMBxDyKQF9bxdCHfDUkjwfwOgT9yH03JdQ8ePE6X+5HeYAfdJcDqMf1f8HAwaoObxdUPlwAubBHLCRTAc8XQihGbggNA8LVPwnaeYQ7wCo+EldCC2hBKHlQqDZzJy8KCTsALQgj9uHGuSL0ynLBSSHwMftENp5BqpD9tuSlwvITgMw2mwTqkNWHIXK3yXVAcaUZUO5HRBaWAcqPpvIXLAZVhCpU1YQ/ZSE0E+0SSyIxKEOeM84MEXxN3OoA+bMHZjKaFMh1AEcNRB60X4I/TgSGjX10LiCVqsveUmk+aHmlEKjaDKEXrkYQvNHAQARsVclYdAPHQAAAABJRU5ErkJggg==',
    pre: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTA5LTIzVDE1OjA3OjM3KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0wOS0yM1QxNjowMDowNiswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOC0wOS0yM1QxNjowMDowNiswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozZDJmYjIzNi1hMWI5LTRjZDAtYWU1My04NTU5MzIyY2NhOTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ZTBjZmUzYjMtODQ3My00YTA4LThiMzgtNDhiZjM2YWEyMjAxIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZTBjZmUzYjMtODQ3My00YTA4LThiMzgtNDhiZjM2YWEyMjAxIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplMGNmZTNiMy04NDczLTRhMDgtOGIzOC00OGJmMzZhYTIyMDEiIHN0RXZ0OndoZW49IjIwMTgtMDktMjNUMTU6MDc6MzcrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MTIxZWIxYmMtOTNmOS00ODE2LThiOGUtMGE0Y2QxZTY3MGFiIiBzdEV2dDp3aGVuPSIyMDE4LTA5LTIzVDE1OjQ5OjAyKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjNkMmZiMjM2LWExYjktNGNkMC1hZTUzLTg1NTkzMjJjY2E5NiIgc3RFdnQ6d2hlbj0iMjAxOC0wOS0yM1QxNjowMDowNiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiGo+bUAAAQGSURBVEiJpZR/TNRlHMe/ao00TJ0tk9otGUuEC+i47/PhAIFI0a7DLvg+X44DL+ZCm2Om27lZy0nNfkiM1WVGCySkBCPIE+6e74F5gPbLKDe1uUWacWBweWPUYKKjp899w63cKYf+9dr3+X6e53l/3s/n8xGosfXa08dmR9Ioz+96UvWqdJGNkZq+AC1mP8C8oVKawU7BI5eWTHHuDLmIPsxccB+e84liIP7zk6b+49tW3b8vt6y1etnSyoj9Ar3iXpG2+923aYySKEZxTh2sER5FmpFmZAky+7b4qUo7CjAhY9l2yOI8r6djjqGM86IK50OJVxv3CPS0J16MC9TSSJYIDgyUWBsGTiJdQMImv4Gh41L4pGx1/SXKKMR29Im0/rGfBJrN6kDr76M21g2p0xzwX27EDLUYH4NPZeVcOqsshib8LmaHQIe0YJwuxL5i5lXvyWH1kBSoF+hmXDAPGnDhC9X6cDPWsTPqQV3sdYj69le50j1K1tYOUyM7B0n8G2pCJzNC7Dcxpyp8A+uEtcPsuoDEaQWUoOIY/J/OAvAWWtjUeXeqpn9Xoblt9eOfCcJzPc1vxlXMr5Dsii9FzwtoFMa9FuK8/wtw3lyAjBnokTbckIBMwe91aHW5kgmtg/XyQdcoKRfmySVuHzkYeZdsdK8WrYMTWGzHoUwt4u4wHLiFgHUYEDzAoayBVZhxFxsxbP3usaKOljPxAw9GbzQ2/BGdrpHyX/Y4Uy8NgbRX2QmH1epvgVg1AaeawG0LSA2uc55vds+BC5zbhr7s1vXajq3PYSPiDkHIq3FCsr1hk3TRA+Sy2m4tUKnuZ7esobAFSP9mICW4V4KR88L93lk60ygrsLl8RuOT1c9qm9tyFwpCQayyU+fwrqRapYgErdfjE9iQd+zAdbYrK3B9Mv9P95hoR0dIe75hnHOrzlmaqyFHLJc9RVkb0JGflUwxsukr+gsTyTg/jxd5Z1IDyWG04SYYQkdOKpl6nHAFD3TOTe5FZrRfW7NZo0hVLpp2YbGW/qjcK2r4RzhfuoO1M42ANoFWsT4y7l+OfV0HxWHMgTfY97AbhXzOBsUt2BU97mega2IpHWDrU64OxONTRJAT6iByhhxEJvahOqieZz5IDywRJL9SasgYmUXfYe8TeWoUh9p4I2X2AZQHu0VZRmLVyTZMHOrb18HWm++TepV4sHAun3Qz8vU4CNLHrkZ4oaaWbmGjJNhG+9CRv5FZU6PZiNTeAbPR6miV5yAPL3YwF7mCtVSiRMDpI9sE2XL4VEL1Pa/Qsx0TBvsBr3SCvQg9vkK6AzNJ8u9Cq+ohZ3jRFOfPkAuwPZvB4t9OD7CXQBh4z2Jx/SZWHmp4avbRPelxC6z/AAuLRz85tzkaAAAAAElFTkSuQmCC',
    nextNotSet: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTA5LTIzVDE1OjA3OjM3KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0wOS0yM1QxNjowMDo0NiswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOC0wOS0yM1QxNjowMDo0NiswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMzI5MTAyNy03NDdhLTRlYzYtOWIyYS1lM2UwMDYyNWQ5MTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ZTBjZmUzYjMtODQ3My00YTA4LThiMzgtNDhiZjM2YWEyMjAxIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZTBjZmUzYjMtODQ3My00YTA4LThiMzgtNDhiZjM2YWEyMjAxIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplMGNmZTNiMy04NDczLTRhMDgtOGIzOC00OGJmMzZhYTIyMDEiIHN0RXZ0OndoZW49IjIwMTgtMDktMjNUMTU6MDc6MzcrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MTIxZWIxYmMtOTNmOS00ODE2LThiOGUtMGE0Y2QxZTY3MGFiIiBzdEV2dDp3aGVuPSIyMDE4LTA5LTIzVDE1OjQ5OjAyKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjAzMjkxMDI3LTc0N2EtNGVjNi05YjJhLWUzZTAwNjI1ZDkxMSIgc3RFdnQ6d2hlbj0iMjAxOC0wOS0yM1QxNjowMDo0NiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po/vNcEAAAE9SURBVEgNY5gNBvxREHrlYgj9ZDKEflUKoV/yQ2leEmlBqDn1EPpxJIRetB9Cc9QwQBibCiH0///0pefMhTrgmzmagr8E6P8kqseh/z0j1AFvxYk0ECr/RBtC/5Qk0yFQ9a/UoQ54uZmAQTBxCDVbWAdCy+0gM0Sg6p4awxywkUgD7kLoFUf/gwEDVL/ZJhIdAnOAPqkOQLNgvy2qQ5xnQOiP24kLUdIdgMMhi9NRHRK3j0CIUMsBL6C5Ry4EQksoQeiTurQKAZjGnxCahwVCM3BBxRfSKg3AxMMhNG8XapA/qqc0EW4nUuNxCD33JYQ+cZ/CbGgJK4gWkpcLyC4RYQXRbagDvl4dmKL4LawuWN45MJXRxG6oA9jnQehpvhD6LtSlL1Ih9DNotfqMk0RaHNWc228hdF8jhGbiAQAp3lcl6KFEJgAAAABJRU5ErkJggg==',
    next: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGsGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTA5LTIzVDE1OjA3OjM3KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0wOS0yM1QxNjowMDozMCswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOC0wOS0yM1QxNjowMDozMCswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4NDE4NWQ2Ny1mN2NlLTQwNTQtOWNiYy02NmY2YzFiMTFlZDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ZTBjZmUzYjMtODQ3My00YTA4LThiMzgtNDhiZjM2YWEyMjAxIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZTBjZmUzYjMtODQ3My00YTA4LThiMzgtNDhiZjM2YWEyMjAxIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplMGNmZTNiMy04NDczLTRhMDgtOGIzOC00OGJmMzZhYTIyMDEiIHN0RXZ0OndoZW49IjIwMTgtMDktMjNUMTU6MDc6MzcrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MTIxZWIxYmMtOTNmOS00ODE2LThiOGUtMGE0Y2QxZTY3MGFiIiBzdEV2dDp3aGVuPSIyMDE4LTA5LTIzVDE1OjQ5OjAyKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjg0MTg1ZDY3LWY3Y2UtNDA1NC05Y2JjLTY2ZjZjMWIxMWVkNSIgc3RFdnQ6d2hlbj0iMjAxOC0wOS0yM1QxNjowMDozMCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuyrAx4AAAQKSURBVEgNncFvaNR1HMDx9/dzv12788d5jnONoXIc1xpzLJHQMVcsGTTF9mDYGsPGELFhZhKXiEn0wAfLRGxY6RAL7YGIjJhiR8w/SIwxKMaycQwZMuZaV6zr1+223X73/YaMiLLrstdLbZOB9+urVravbF1sW9zduy23Xc5IbEuKUTbS5p0kRYZZ08syzeOxCKFJqgNmByP0LI6roOe49N/aq45lxuaie29Y/g733aVLF5/UG6VaVby0i8/oYJCHphgGiinFz3H+r3tAANQ66k09kMgt5GZfRTcVJXzx7IRqHb7+5abBzGYtElM9viHVbY4zgebvhCR1QIrtJoJQrGr5GCg2h1QbGs06rvNvNC5Qz6SJIqZdjXhmUmKZXlWtDs3fVzPmABkfFAMWf7JwcYG7qsvsRIibVtn0oNpM6BpTs3qWpGrWfd5pNc60NKP5liT9/BPBAi7gV15Q2hzKxZcqBE0C2z0HlJHlUUmClCBcwDLtnDOX9YJn6hnlOaqvBC8/9alnnxXVHWAaVSx3EwH66Se/EEGGgXtMqfYlW1imycePJosmYKpUgq16hyeZrfnorOor6lxcmGzyrMnsKm/ZfNXsd0NF10CfNyf1CYROFSNFIa5QiB+HDNDGSdVFxNPCGtX5Sp2pNxFnw63n5rPZZpzhZqtSnVq1s/Gs94rPziWcuDmiQ0QRwEWTl1CIxkKAMGkSaJpMiwpDLq6+stob7qiD3mPTey6+5p0R+6eaG11F2/Vt3nvjCRNhkNPANAHWIORhUYjgogE/LmkwYTVCFEwvR6zsj7WhEafu56F31s7F/FO+S2WR+QQ1gROvv+nZKo36LqMMGJcsmjwsCskSxA+MItQiktRD+vJ0llL2mszT36R2lXhDjenv9KBnvxp+8IknbmJ6oryDCrOPJJpiFvACGkF4hFDIMNU0ImaHCqsh2nyH57bObaj80JPK7V6y0q4r3pB1fvJtNWD6GC/voJJZxoAMFsWARhDysljmJZ+NDDKAVmMmalwOzpet2GffPBUxB5VWo+tf9rzlnsyF14aJMEQfkCZECZr/xi9MMc2MlSRIgACPshHSQAmjCLW6SSKqc3cpe2iiYXOYZxnF4Q+aQsooIQQkuM+9oguqpWPghS2Tc99b7mJ/NuavMlm5I5NoHtLkI/yVpjCNH4hzlBaEQXH1mdnz4queG0+X9V9zu4qCVilwl9sUI4SBUgSbFDaCjYONYONgAzYONmDjYCPYONgINg42go2DjeDiUI7wPGmmEcoUuhuoyGlv++ez1qroD95kT+fqX8PrD6y/9Euz7+jc187Yi19w2DSo6IouIlRRoq+wbIHHE2AdmqQ0m2YqTc9v3apbNZjeq6dpWQgF62If/A6braWHCUSSxAAAAABJRU5ErkJggg=='
};
Page({
    data: {
        title: [
            {"week": "周一", "date": "17日"}
            , {"week": "周二", "date": "18日"}
            , {"week": "周三", "date": "19日"}
            , {"week": "周四", "date": "20日"}
            , {"week": "周五", "date": "21日"}
            , {"week": "周六", "date": "22日"}
            , {"week": "周日", "date": "23日"}
        ],
        dateTitle: 0,
        weekArr: [],
        month: 0,
        colWidth: 60,
        palette: ['#1abc9c', '#3498db', '#9b59b6', '#f1c40f', '#e67e22', '#e74c3c'],
        courses: [],
        prebtn: btnImg.pre,
        nextbtn: btnImg.next,
        bg: ''
    }

    // 监听页面加载
    , onLoad() {

        const course = wx.getStorageSync('course');
        app.globalData.course = course ? course : [];

        const startDate = new Date(dateNow.getFullYear() - 1, 8, 1).getTime();
        const endDate = new Date(dateNow.getFullYear() + 1, 7, 1).getTime();
        let weekArr = [];
        for (let i = startDate; i <= endDate; i += 7 * 24 * 60 * 60 * 1000) {
            weekArr.push(this.calTimeInterval(new Date(i)));
        }

        dateNow = new Date();
        const dateTitle = weekArr.indexOf(this.calTimeInterval(dateNow));

        this.setData({
            weekArr: weekArr,
            dateTitle: dateTitle
        });
    }

    // 监听页面显示
    , onShow() {
        const updateManager = wx.getUpdateManager();
        updateManager.onUpdateReady(function () {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate();
        });
        const version = app.globalData.version;
        const updateNoticeLook = wx.getStorageSync('updateNoticeLook-' + version);
        if (!updateNoticeLook) {
            wx.reLaunch({
                url: '/pages/other/updateNotice'
            })
        } else {
            const bg = wx.getStorageSync('bg');
            this.setData({
                bg: bg
            });
            this.renderData(this, dateNow);
        }
    }

    // 上一周
    , preWeek() {
        dateNow = new Date(dateNow.getTime() - 7 * 24 * 60 * 60 * 1000);
        this.renderData(this, dateNow);
    }

    // 下一周
    , nextWeek() {
        dateNow = new Date(dateNow.getTime() + 7 * 24 * 60 * 60 * 1000);
        this.renderData(this, dateNow);
    }

    // 渲染数据
    , renderData(that, date) {
        const colWidth = (wx.getSystemInfoSync().windowWidth - 20) / 7 - 6;
        const ts = date.getTime();
        const month = date.getMonth() + 1;
        let day = date.getDay();
        if (day === 0)
            day = 7;
        const tsStart = ts - (day - 1) * 24 * 60 * 60 * 1000;
        const tsEnd = ts + (7 - day) * 24 * 60 * 60 * 1000;
        const dateS = new Date(tsStart);
        const dateE = new Date(tsEnd);
        const dateStart = dateS.getDate();
        const dateEnd = dateE.getDate();
        let dateTitle = [];
        if (dateEnd > 6) {
            for (let i = 0, l = 7; i < l; i++) {
                dateTitle.push((dateStart + i) + '日');
            }
        } else {
            for (let i = 0, l = 7 - dateEnd; i < l; i++) {
                dateTitle.push((dateStart + i) + '日');
            }
            for (let i = 0, l = dateEnd; i < l; i++) {
                dateTitle.push((i + 1) + '日');
            }
        }
        let title = [];
        for (let i = 0; i < 7; i++) {
            title.push({
                week: dayArrStr[i],
                date: dateTitle[i]
            })
        }

        that.setData({
            dateTitle: that.data.weekArr.indexOf(that.calTimeInterval(date)),
            colWidth: colWidth,
            month: month,
            title: title
        });
        if (app.globalData.course.length > 0) {
            // 有数据，加载课表
            that.renderCourses(app.globalData.course, date);
        } else {
            // 没有数据，提示登录
            wx.showModal({
                title: '提示',
                content: '无课程数据，从教学系统获取？',
                confirmText: '是',
                cancelText: '否',
                success: (res) => {
                    if (res.confirm) {
                        wx.navigateTo({
                            url: '/pages/index/loginSchool'
                        });
                    }
                }
            });
        }
    }

    // 计算周区间
    , calTimeInterval(date) {
        const ts = date.getTime();
        const month = date.getMonth() + 1;
        let day = date.getDay();
        if (day === 0)
            day = 7;
        const tsStart = ts - (day - 1) * 24 * 60 * 60 * 1000;
        const tsEnd = ts + (7 - day) * 24 * 60 * 60 * 1000;
        const dateS = new Date(tsStart);
        const dateE = new Date(tsEnd);
        const dateStartStr = dateS.getFullYear() + '年' + (dateS.getMonth() + 1) + '月' + dateS.getDate() + '日';
        const dateEndStr = dateE.getFullYear() + '年' + (dateE.getMonth() + 1) + '月' + dateE.getDate() + '日';
        return dateStartStr + ' ~ ' + dateEndStr;
    }

    // 获取是一年中的第几周
    , getWeekOfYear: (date) => {
        var firstDay = new Date(date.getFullYear(), 0, 1);
        var dayOfWeek = firstDay.getDay();
        var spendDay = 1;
        if (dayOfWeek !== 0) {
            spendDay = 7 - dayOfWeek + 1;
        }
        firstDay = new Date(date.getFullYear(), 0, 1 + spendDay);
        var d = Math.ceil((date.valueOf() - firstDay.valueOf()) / 86400000);
        var result = Math.ceil(d / 7);
        return result + 1;
    }

    // 渲染课表
    , renderCourses: function (res, date) {
        const weekNumNow = this.getWeekOfYear(date);
        let courses = [[], [], [], [], [], [], []];
        for (let i = 0, l = res.length; i < l; i++) {
            const r = res[i];
            const week = r.week;
            if (week.substr(weekNumNow - 1, 1) === '1') {
                courses[r.index].push({
                    name: r.name,
                    teacher: r.teacher,
                    address: r.address,
                    time: r.time,
                    bg: this.data.palette[(parseInt(r.time.split(',')[0]) + parseInt(r.index)) % 6]
                })
            }
        }
        // 上下位置参数
        for (let i = 0, l = courses.length; i < l; i++) {
            const dayCourses = courses[i];
            let timeSet = [];
            let dataSet = [[], [], [], [], [], [], [], [], [], [], [], [], [], []];
            for (let m = 0, n = dayCourses.length; m < n; m++) {
                const course = dayCourses[m];
                const time = course.time.split(',');
                for (let j = 0, k = time.length; j < k; j++) {
                    timeSet.push(parseInt(time[j]));
                    dataSet[parseInt(time[j])] = course;
                }
            }
            let newCourses = [];
            for (let m = 0, n = 14; m < n; m++) {
                if (this.isInArray(timeSet, m)) {
                    newCourses.push(dataSet[m]);
                } else {
                    newCourses.push({});
                }
            }
            // 得到包含14个元素的数组（newCourses），没课则空，有课则有数据
            // 判断是否要合并，并提供相关CSS参数
            let lastCourse = newCourses[0];
            let lastTime = [];
            let sameNum = 0;
            let newDayCourses = [];
            let ifFirst = 1;
            for (let m = 0, n = 14; m < n; m++) {
                const course = newCourses[m];
                if (course.name === lastCourse.name && m !== 13) {
                    sameNum++;
                    if (course.hasOwnProperty('time'))
                        lastTime = lastTime.concat(course.time.split(','));
                } else {
                    if (m === 13)
                        sameNum++;
                    const height = 60 * (1 + sameNum) - 6 - 60 * ifFirst;
                    // 结算上一段一样的课
                    if (lastCourse.hasOwnProperty('name')) {
                        const time = this.distinctArr(lastTime);
                        const timeStart = this.index2Time(time[0], lastCourse.address, true);
                        const timeEnd = this.index2Time(time[time.length - 1], lastCourse.address, false);
                        let name = lastCourse.name;
                        if (name.length > 12) {
                            name = name.substr(0, 11) + '…'
                        }
                        // 有课
                        newDayCourses.push({
                            week: dayArrStr[i],
                            name: name,
                            teacher: lastCourse.teacher,
                            address: lastCourse.address.replace('(中外教室）', ''),
                            time: timeStart + ' ~ ' + timeEnd,
                            timeorg: time,
                            bg: lastCourse.bg,
                            height: height
                        })
                    } else {
                        // 没课
                        newDayCourses.push({
                            name: '',
                            teacher: '',
                            address: '',
                            time: '',
                            bg: '#ffffff00',
                            height: height
                        })
                    }
                    lastCourse = course;
                    lastTime = [];
                    sameNum = 0;
                    ifFirst = 0;
                }
            }
            courses[i] = newDayCourses;
        }
        this.setData({
            courses: courses
        });
    }

    // 原始数据解析成上课时间
    , index2Time(index, address, start = true) {
        switch (parseInt(index)) {
            case 0:
                return start ? '08:15' : '09:00';
            case 1:
                return start ? '09:00' : '09:45';
            case 2:
                const a = address.substr(0, 1);
                if (a === 'D' || a === 'E' || a === 'F')
                    return start ? '10:25' : '11:10';
                else
                    return start ? '10:05' : '10:50';
            case 3:
                const b = address.substr(0, 1);
                if (b === 'D' || b === 'E' || b === 'F')
                    return start ? '11:10' : '11:55';
                else
                    return start ? '10:50' : '11:35';
            case 4:
                return start ? '13:00' : '13:45';
            case 5:
                return start ? '13:45' : '14:30';
            case 6:
                return start ? '14:50' : '15:35';
            case 7:
                return start ? '15:35' : '16:20';
            case 8:
                return start ? '18:00' : '18:45';
            case 9:
                return start ? '18:45' : '19:30';
            case 10:
                return start ? '19:30' : '20:15';
            case 11:
                return start ? '20:15' : '21:00';
            case 12:
                return start ? '16:30' : '17:15';
            case 13:
                return start ? '17:15' : '18:00';
        }
    }

    // 查看详情
    , showDetail: e => {
        const course = e.currentTarget.dataset;
        if (course.name !== '') {
            wx.showModal({
                title: course.name,
                content: course.time + ' ' + course.address + ' ' + course.teacher,
                confirmText: '好',
                showCancel: false
            });
        }
    }

    // 随机数
    , rnd: (n, m) => {
        return Math.floor(Math.random() * (m - n + 1) + n);
    }

    // 数组内是否含
    , isInArray: (arr, value) => {
        for (let i = 0; i < arr.length; i++) {
            if (value === arr[i]) {
                return true;
            }
        }
        return false;
    }

    // 数组去重
    , distinctArr: (arr) => {
        let len = arr.length;
        arr.sort(function (a, b) {  //对数组进行排序才能方便比较
            return a - b;
        });

        function loop(index) {
            if (index >= 1) {
                if (arr[index] === arr[index - 1]) {
                    arr.splice(index, 1);
                }
                loop(index - 1); //递归loop函数进行去重
            }
        }

        loop(len - 1);
        return arr;
    }

    , bindWeekChange(e) {
        const dateTitle = e.detail.value;
        this.setData({
            dateTitle: dateTitle
        });
        const a = this.data.weekArr[dateTitle].split('年');
        const year = parseInt(a[0]);
        const b = a[1].split('月');
        const month = parseInt(b[0]) - 1;
        const c = b[1].split('日');
        const date = parseInt(c[0]);
        dateNow = new Date(year, month, date);
        this.renderData(this, dateNow);
    }
});