import { app } from 'nitron'

app.init({
  name: "黑白屏蔽词转换器",
  packageId: "com.mpturn.app",
  icon: "./icon.png",
  version: "1.0.0",
  entry: "index.html",
  orientation: "portrait",
  statusBar: true,
  permissions: ["INTERNET"]
})
