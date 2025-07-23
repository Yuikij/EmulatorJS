import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 8080;

// 解决 __dirname 在 ES 模块中不可用
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 设置 headers：允许 SharedArrayBuffer
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  next();
});

// 静态文件服务
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`✅ EmulatorJS server running at http://localhost:${PORT}`);
});
