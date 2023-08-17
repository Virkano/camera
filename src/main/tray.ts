import { Menu, shell, Tray } from 'electron'
import path from 'path'
const createTray = () => {
  const tray = new Tray(
    path.resolve(
      __dirname,
      process.platform == 'darwin'
        ? '../../resources/trayTemplate@2x.png'
        : '../../resources/windowTray.png'
    )
  )
  const contextMenu = Menu.buildFromTemplate([
    { label: '退出', role: 'quit' },
    { label: '前端杂货铺', click: () => shell.openExternal('http://docs.virkano.com') }
  ])
  tray.setToolTip(' ')
  tray.setContextMenu(contextMenu)
}

export default createTray
