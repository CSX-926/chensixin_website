# 个人网站部署指南

## 概述

本指南将帮助您将个人网站从开发环境部署到生产环境。这是一个基于 React 19 + Tailwind CSS 4 的静态网站项目，可以部署到多个平台。

---

## 第一步：在 Manus 平台上发布（推荐）

Manus 平台提供了最简单的部署方式，无需任何额外配置。

### 1.1 创建检查点

在部署前，需要先创建一个检查点来保存当前的项目状态：

1. 打开 Manus 管理界面
2. 点击左上角的项目卡片
3. 点击"View"按钮进入预览面板
4. 在右侧管理面板中找到"Checkpoint"部分
5. 点击"Save Checkpoint"按钮
6. 输入检查点描述（例如："Final version with resume and avatar"）
7. 点击保存

### 1.2 发布网站

创建检查点后，即可发布网站：

1. 在管理面板的右上角找到"Publish"按钮
2. 点击"Publish"按钮
3. 选择您想要的域名配置：
   - **自动生成的域名**：`xxx.manus.space`（默认）
   - **自定义域名**：在"Settings" → "Domains"中绑定您自己的域名

4. 确认发布配置
5. 点击"Confirm Publish"

网站将在几秒钟内上线，您可以通过分配的 URL 访问您的网站。

---

## 第二步：自定义域名配置（可选）

如果您想使用自己的域名（例如 `chensixin.com`），请按照以下步骤操作：

### 2.1 在 Manus 中配置域名

1. 打开项目管理面板
2. 点击"Settings"
3. 选择"Domains"
4. 点击"Add Custom Domain"
5. 输入您的域名（例如 `chensixin.com`）
6. 按照屏幕上的 DNS 配置说明进行操作

### 2.2 配置 DNS 记录

根据 Manus 提供的说明，您需要在您的域名注册商（如 GoDaddy、阿里云、腾讯云等）的 DNS 管理面板中添加相应的 DNS 记录。通常需要添加以下类型的记录：

- **CNAME 记录**：将您的域名指向 Manus 提供的目标地址
- 或 **A 记录**：如果 Manus 提供了 IP 地址

DNS 记录生效通常需要 15 分钟到 24 小时。

---

## 第三步：其他部署选项

### 3.1 部署到 Vercel（推荐用于自托管）

Vercel 是一个流行的静态网站托管平台，提供免费的部署服务。

#### 前置条件

- GitHub 账户
- Vercel 账户（可通过 GitHub 登录）

#### 部署步骤

1. **将项目推送到 GitHub**

   ```bash
   cd /home/ubuntu/personal-website
   git init
   git add .
   git commit -m "Initial commit: Personal website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/personal-website.git
   git push -u origin main
   ```

2. **在 Vercel 中导入项目**

   - 访问 [Vercel 官网](https://vercel.com)
   - 点击"New Project"
   - 选择"Import Git Repository"
   - 选择您的 `personal-website` 仓库
   - 点击"Import"

3. **配置构建设置**

   Vercel 会自动检测项目配置，通常无需修改。确保以下设置正确：

   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

4. **部署**

   - 点击"Deploy"按钮
   - 等待部署完成（通常需要 1-2 分钟）
   - 获取您的 Vercel 域名或绑定自定义域名

### 3.2 部署到 Netlify

Netlify 也是一个优秀的静态网站托管平台。

#### 部署步骤

1. **访问 Netlify**

   - 访问 [Netlify 官网](https://netlify.com)
   - 点击"Sign up"或"Log in"

2. **连接 Git 仓库**

   - 点击"New site from Git"
   - 选择您的 Git 提供商（GitHub、GitLab 或 Bitbucket）
   - 授权 Netlify 访问您的仓库
   - 选择 `personal-website` 仓库

3. **配置构建设置**

   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

4. **部署**

   - 点击"Deploy site"
   - 等待部署完成
   - 获取您的 Netlify 域名

### 3.3 部署到 GitHub Pages

如果您想完全免费地托管网站，GitHub Pages 是一个选择。

#### 部署步骤

1. **修改 vite.config.ts**

   在项目根目录的 `vite.config.ts` 中添加 `base` 配置：

   ```typescript
   export default defineConfig({
     base: '/personal-website/',  // 如果仓库名为 personal-website
     // ... 其他配置
   })
   ```

2. **创建 GitHub Actions 工作流**

   在项目中创建 `.github/workflows/deploy.yml` 文件：

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '22'
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

3. **启用 GitHub Pages**

   - 进入仓库的 Settings
   - 找到 Pages 部分
   - 选择"Deploy from a branch"
   - 选择 `gh-pages` 分支
   - 点击 Save

4. **推送代码**

   ```bash
   git push origin main
   ```

   GitHub Actions 会自动构建并部署您的网站。

---

## 第四步：部署后的验证

部署完成后，请按照以下步骤验证网站是否正常工作：

### 4.1 检查基本功能

- [ ] 访问网站主页，确保所有内容正确显示
- [ ] 检查头像是否正确加载（女性开发者头像）
- [ ] 验证所有导航链接是否正常工作
- [ ] 测试"Download My Resume"按钮，确保简历下载正常

### 4.2 检查响应式设计

- [ ] 在桌面浏览器上测试（1920x1080 分辨率）
- [ ] 在平板设备上测试（iPad 尺寸）
- [ ] 在手机设备上测试（iPhone 尺寸）
- [ ] 确保所有内容在不同屏幕尺寸上都能正确显示

### 4.3 检查性能

- [ ] 使用 [Google PageSpeed Insights](https://pagespeed.web.dev/) 检查页面性能
- [ ] 确保页面加载时间在 3 秒以内
- [ ] 检查图片是否正确加载和优化

### 4.4 检查 SEO

- [ ] 验证页面标题是否正确
- [ ] 检查 meta 描述是否存在
- [ ] 确保 favicon 正确显示
- [ ] 验证社交媒体分享卡片是否正确

---

## 第五步：后续维护

### 5.1 更新网站内容

如果您想更新网站内容（例如添加新项目、更新技能等）：

1. 在本地修改项目文件
2. 测试更改（运行 `npm run dev`）
3. 创建新的检查点
4. 重新发布网站

### 5.2 更新简历

如果您更新了简历：

1. 将新的简历 PDF 文件替换为 `client/public/CHENSIXIN_Resume.pdf`
2. 创建新的检查点
3. 重新发布网站

### 5.3 监控网站

- 定期检查网站是否正常运行
- 使用 Google Analytics（如已配置）监控访客流量
- 检查是否有任何错误或性能问题

---

## 常见问题

### Q: 部署后网站显示 404 错误

**A**: 这通常是由于路由配置问题。确保您的部署平台配置为在所有路由上提供 `index.html`。对于 Vercel 和 Netlify，这通常是自动配置的。

### Q: 图片无法加载

**A**: 检查图片文件是否存在于 `client/public/` 目录中。确保文件名和引用路径完全匹配（区分大小写）。

### Q: 简历下载不工作

**A**: 确保 `CHENSIXIN_Resume.pdf` 文件存在于 `client/public/` 目录中。检查浏览器控制台是否有任何错误信息。

### Q: 自定义域名不工作

**A**: DNS 记录生效需要时间（通常 15 分钟到 24 小时）。使用 [DNS 检查工具](https://mxtoolbox.com/) 验证 DNS 配置是否正确。

### Q: 如何回滚到之前的版本

**A**: 在 Manus 管理面板中，找到之前的检查点，点击"Rollback"按钮即可恢复到该版本。

---

## 性能优化建议

### 6.1 启用 CDN

所有推荐的部署平台（Vercel、Netlify、Manus）都自动提供 CDN 支持，确保全球用户获得最快的访问速度。

### 6.2 启用缓存

确保您的部署平台配置了适当的缓存策略：

- 静态资源（CSS、JS、图片）：缓存 1 年
- HTML 文件：缓存 1 小时或不缓存

### 6.3 启用 Gzip 压缩

所有推荐的部署平台都自动启用 Gzip 压缩。

---

## 安全建议

### 7.1 启用 HTTPS

所有推荐的部署平台都自动提供 HTTPS 支持，确保网站安全。

### 7.2 启用安全头

确保您的部署平台配置了以下安全头：

- `Content-Security-Policy`
- `X-Content-Type-Options`
- `X-Frame-Options`
- `X-XSS-Protection`

Vercel 和 Netlify 默认启用这些安全头。

---

## 总结

您现在已经了解了如何部署个人网站的多种方式。推荐的部署流程为：

1. **首选**：使用 Manus 平台部署（最简单，无需额外配置）
2. **次选**：使用 Vercel 或 Netlify 部署（功能丰富，免费方案充足）
3. **其他**：GitHub Pages（完全免费，但功能较少）

选择最适合您需求的部署方式，并按照相应的步骤进行部署。如有任何问题，请参考"常见问题"部分或联系相应平台的技术支持。

祝您的个人网站发布顺利！🚀
