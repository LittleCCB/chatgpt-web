# ChatGPT Web

> Disclaimer: This project is only published on GitHub, based on the MIT license, free and for open source learning usage. And there will be no any form of account selling, paid service, discussion group, discussion group and other behaviors. Beware of being deceived.

[中文](README.zh.md)

更多功能：[chatgpt-web-plus](https://github.com/Chanzhaoyu/chatgpt-web-plus)

![cover](./docs/c1.png)
![cover2](./docs/c2.png)

- [ChatGPT Web](#chatgpt-web)
<<<<<<< HEAD
	- [介绍](#介绍)
	- [待实现路线](#待实现路线)
	- [前置要求](#前置要求)
		- [Node](#node)
		- [PNPM](#pnpm)
		- [填写密钥](#填写密钥)
	- [安装依赖](#安装依赖)
		- [后端](#后端)
		- [前端](#前端)
	- [测试环境运行](#测试环境运行)
		- [后端服务](#后端服务)
		- [前端网页](#前端网页)
	- [环境变量](#环境变量)
	- [打包](#打包)
		- [使用 Docker](#使用-docker)
			- [Docker 参数示例](#docker-参数示例)
			- [Docker build \& Run](#docker-build--run)
			- [Docker compose](#docker-compose)
			- [防止爬虫抓取](#防止爬虫抓取)
		- [使用 Railway 部署](#使用-railway-部署)
			- [Railway 环境变量](#railway-环境变量)
		- [手动打包](#手动打包)
			- [后端服务](#后端服务-1)
			- [前端网页](#前端网页-1)
	- [常见问题](#常见问题)
	- [参与贡献](#参与贡献)
	- [赞助](#赞助)
	- [License](#license)
## 介绍
=======
  - [Introduction](#introduction)
  - [To-Do List](#to-do-list)
  - [Prerequisites](#prerequisites)
    - [Node](#node)
    - [PNPM](#pnpm)
    - [Fill in Keys](#fill-in-keys)
  - [Install Dependencies](#install-dependencies)
    - [Backend](#backend)
    - [Frontend](#frontend)
  - [Run in Test Environment](#run-in-test-environment)
    - [Backend Service](#backend-service)
    - [Frontend Webpage](#frontend-webpage)
  - [Environment Variables](#environment-variables)
  - [Packaging](#packaging)
    - [Use Docker](#use-docker)
      - [Docker Parameter Examples](#docker-parameter-examples)
      - [Docker Build & Run](#docker-build--run)
      - [Docker Compose](#docker-compose)
      - [Prevent Crawlers](#prevent-crawlers)
    - [Deploy with Railway](#deploy-with-railway)
      - [Railway Environment Variables](#railway-environment-variables)
    - [Deploy with Sealos](#deploy-with-sealos)
    - [Package Manually](#package-manually)
      - [Backend Service](#backend-service-1)
      - [Frontend Webpage](#frontend-webpage-1)
  - [FAQ](#faq)
  - [Contributing](#contributing)
  - [Sponsors](#sponsors)
  - [License](#license)
## Introduction
>>>>>>> main

Supports dual models and provides two unofficial `ChatGPT API` methods

| Method                             | Free? | Reliability | Quality |
| ---------------------------------- | ----- | ----------- | ------- |
| `ChatGPTAPI(gpt-3.5-turbo-0301)`   | No    | Reliable    | Relatively stupid |
| `ChatGPTUnofficialProxyAPI(web accessToken)` | Yes   | Relatively unreliable | Smart |

Comparison:
1. `ChatGPTAPI` uses `gpt-3.5-turbo` through `OpenAI` official `API` to call `ChatGPT`
2. `ChatGPTUnofficialProxyAPI` uses unofficial proxy server to access `ChatGPT`'s backend `API`, bypass `Cloudflare` (dependent on third-party servers, and has rate limits)

<<<<<<< HEAD
警告：
1. 你应该首先使用 `API` 方式
2. 使用 `API` 时，如果网络不通，那是国内被墙了，你需要自建代理，绝对不要使用别人的公开代理，那是危险的。
3. 使用 `accessToken` 方式时反向代理将向第三方暴露您的访问令牌，这样做应该不会产生任何不良影响，但在使用这种方法之前请考虑风险。
4. 使用 `accessToken` 时，不管你是国内还是国外的机器，都会使用代理。默认代理为 [pengzhile](https://github.com/pengzhile) 大佬的 `https://ai.fakeopen.com/api/conversation`，这不是后门也不是监听，除非你有能力自己翻过 `CF` 验证，用前请知悉。[社区代理](https://github.com/transitive-bullshit/chatgpt-api#reverse-proxy)（注意：只有这两个是推荐，其他第三方来源，请自行甄别）
5. 把项目发布到公共网络时，你应该设置 `AUTH_SECRET_KEY` 变量添加你的密码访问权限，你也应该修改 `index.html` 中的 `title`，防止被关键词搜索到。
=======
Warnings:
1. You should first use the `API` method
2. When using the `API`, if the network is not working, it is blocked in China, you need to build your own proxy, never use someone else's public proxy, which is dangerous.
3. When using the `accessToken` method, the reverse proxy will expose your access token to third parties. This should not have any adverse effects, but please consider the risks before using this method.
4. When using `accessToken`, whether you are a domestic or foreign machine, proxies will be used. The default proxy is [pengzhile](https://github.com/pengzhile)'s `https://ai.fakeopen.com/api/conversation`. This is not a backdoor or monitoring unless you have the ability to flip over `CF` verification yourself. Use beforehand acknowledge. [Community Proxy](https://github.com/transitive-bullshit/chatgpt-api#reverse-proxy) (Note: Only these two are recommended, other third-party sources, please identify for yourself)
5. When publishing the project to public network, you should set the `AUTH_SECRET_KEY` variable to add your password access, you should also modify the `title` in `index. html` to prevent it from being searched by keywords.
>>>>>>> main

Switching methods:
1. Enter the `service/.env.example` file, copy the contents to the `service/.env` file
2. To use `OpenAI API Key`, fill in the `OPENAI_API_KEY` field [(get apiKey)](https://platform.openai.com/overview)
3. To use `Web API`, fill in the `OPENAI_ACCESS_TOKEN` field [(get accessToken)](https://chat.openai.com/api/auth/session)
4. `OpenAI API Key` takes precedence when both exist

Environment variables:

See all parameter variables [here](#environment-variables)

## Roadmap
[✓] Dual models

[✓] Multi-session storage and context logic

[✓] Formatting and beautification of code and other message types

[✓] Access control

[✓] Data import/export

[✓] Save messages as local images

[✓] Multilingual interface

[✓] Interface themes

[✗] More...

## Prerequisites

### Node

`node` requires version `^16 || ^18 || ^19` (`node >= 14` needs [fetch polyfill](https://github.com/developit/unfetch#usage-as-a-polyfill) installation), use [nvm](https://github.com/nvm-sh/nvm) to manage multiple local `node` versions

```shell
node -v
```

### PNPM
If you haven't installed `pnpm`
```shell
npm install pnpm -g
```

### Filling in the Key
Get `Openai Api Key` or `accessToken` and fill in the local environment variables [Go to Introduction](#introduction)

```
# service/.env file

# OpenAI API Key - https://platform.openai.com/overview
OPENAI_API_KEY=

# change this to an `accessToken` extracted from the ChatGPT site's `https://chat.openai.com/api/auth/session` response
OPENAI_ACCESS_TOKEN=
```

## Install Dependencies

> For the convenience of "backend developers" to understand the burden, the front-end "workspace" mode is not adopted, but separate folders are used to store them. If you only need to do secondary development of the front-end page, delete the `service` folder.

### Backend

Enter the folder `/service` and run the following commands

```shell
pnpm install
```

### Frontend
Run the following commands at the root directory
```shell
pnpm bootstrap
```

## Run in Test Environment
### Backend Service

Enter the folder `/service` and run the following commands

```shell
pnpm start
```

### Frontend Webpage
Run the following commands at the root directory
```shell
pnpm dev
```

## Environment Variables

`API` available:

- `OPENAI_API_KEY` and `OPENAI_ACCESS_TOKEN` choose one
- `OPENAI_API_MODEL` Set model, optional, default: `gpt-3.5-turbo`
- `OPENAI_API_BASE_URL` Set interface address, optional, default: `https://api.openai.com`
- `OPENAI_API_DISABLE_DEBUG` Set interface to close debug logs, optional, default: empty does not close

`ACCESS_TOKEN` available:

<<<<<<< HEAD
- `OPENAI_ACCESS_TOKEN`  和 `OPENAI_API_KEY` 二选一，同时存在时，`OPENAI_API_KEY` 优先
- `API_REVERSE_PROXY` 设置反向代理，可选，默认：`https://ai.fakeopen.com/api/conversation`，[社区](https://github.com/transitive-bullshit/chatgpt-api#reverse-proxy)（注意：只有这两个是推荐，其他第三方来源，请自行甄别）
=======
- `OPENAI_ACCESS_TOKEN` and `OPENAI_API_KEY` choose one, `OPENAI_API_KEY` takes precedence when both exist
- `API_REVERSE_PROXY` Set reverse proxy, optional, default: `https://ai.fakeopen.com/api/conversation`, [Community](https://github.com/transitive-bullshit/chatgpt-api#reverse-proxy) (Note: Only these two are recommended, other third party sources, please identify for yourself)
>>>>>>> main

Common:

- `AUTH_SECRET_KEY` Access permission key, optional
- `MAX_REQUEST_PER_HOUR` Maximum number of requests per hour, optional, unlimited by default
- `TIMEOUT_MS` Timeout, unit milliseconds, optional
- `SOCKS_PROXY_HOST` and `SOCKS_PROXY_PORT` take effect together, optional
- `SOCKS_PROXY_PORT` and `SOCKS_PROXY_HOST` take effect together, optional
- `HTTPS_PROXY` Support `http`, `https`, `socks5`, optional
- `ALL_PROXY` Support `http`, `https`, `socks5`, optional

## Packaging

### Use Docker

#### Docker Parameter Examples

![docker](./docs/docker.png)

#### Docker build & Run

```bash
docker build -t chatgpt-web .

# Foreground running
docker run --name chatgpt-web --rm -it -p 127.0.0.1:3002:3002 --env OPENAI_API_KEY=your_api_key chatgpt-web

# Background running
docker run --name chatgpt-web -d -p 127.0.0.1:3002:3002 --env OPENAI_API_KEY=your_api_key chatgpt-web

# Run address
http://localhost:3002/
```

#### Docker compose

<<<<<<< HEAD
[Hub 地址](https://hub.docker.com/repository/docker/LittleBai94/chatgpt-web/general)
=======
[Hub address](https://hub.docker.com/repository/docker/chenzhaoyu94/chatgpt-web/general)
>>>>>>> main

```yml
version: '3'

services:
  app:
<<<<<<< HEAD
    image: LittleBai94/chatgpt-web # 总是使用 latest ,更新时重新 pull 该 tag 镜像即可
=======
    image: chenzhaoyu94/chatgpt-web # always use latest, pull the tag image again to update
>>>>>>> main
    ports:
      - 127.0.0.1:3002:3002
    environment:
      # choose one
      OPENAI_API_KEY: sk-xxx
      # choose one
      OPENAI_ACCESS_TOKEN: xxx
      # API interface address, optional, available when OPENAI_API_KEY is set
      OPENAI_API_BASE_URL: xxx
      # API model, optional, available when OPENAI_API_KEY is set, https://platform.openai.com/docs/models
      # gpt-4, gpt-4-1106-preview, gpt-4-0314, gpt-4-0613, gpt-4-32k, gpt-4-32k-0314, gpt-4-32k-0613, gpt-3.5-turbo-16k, gpt-3.5-turbo-16k-0613, gpt-3.5-turbo, gpt-3.5-turbo-0301, gpt-3.5-turbo-0613, text-davinci-003, text-davinci-002, code-davinci-002
      OPENAI_API_MODEL: xxx
      # reverse proxy, optional
      API_REVERSE_PROXY: xxx
      # access permission key, optional
      AUTH_SECRET_KEY: xxx
      # maximum number of requests per hour, optional, unlimited by default
      MAX_REQUEST_PER_HOUR: 0
      # timeout, unit milliseconds, optional
      TIMEOUT_MS: 60000
      # Socks proxy, optional, take effect with SOCKS_PROXY_PORT
      SOCKS_PROXY_HOST: xxx
      # Socks proxy port, optional, take effect with SOCKS_PROXY_HOST
      SOCKS_PROXY_PORT: xxx
      # HTTPS proxy, optional, support http,https,socks5
      HTTPS_PROXY: http://xxx:7890
```
<<<<<<< HEAD
- `OPENAI_API_BASE_URL`  可选，设置 `OPENAI_API_KEY` 时可用
- `OPENAI_API_MODEL`  可选，设置 `OPENAI_API_KEY` 时可用

#### 防止爬虫抓取

**nginx**

将下面配置填入nginx配置文件中，可以参考 `docker-compose/nginx/nginx.conf` 文件中添加反爬虫的方法

```
    # 防止爬虫抓取
=======

- `OPENAI_API_BASE_URL` Optional, available when `OPENAI_API_KEY` is set
- `OPENAI_API_MODEL` Optional, available when `OPENAI_API_KEY` is set

#### Prevent Crawlers

**nginx**

Fill in the following configuration in the nginx configuration file to prevent crawlers. You can refer to the `docker-compose/nginx/nginx.conf` file to add anti-crawler methods

```
    # Prevent crawlers
>>>>>>> main
    if ($http_user_agent ~* "360Spider|JikeSpider|Spider|spider|bot|Bot|2345Explorer|curl|wget|webZIP|qihoobot|Baiduspider|Googlebot|Googlebot-Mobile|Googlebot-Image|Mediapartners-Google|Adsbot-Google|Feedfetcher-Google|Yahoo! Slurp|Yahoo! Slurp China|YoudaoBot|Sosospider|Sogou spider|Sogou web spider|MSNBot|ia_archiver|Tomato Bot|NSPlayer|bingbot")
    {
      return 403;
    }
```

<<<<<<< HEAD
###  使用 Railway 部署
=======
### Deploy with Railway
>>>>>>> main

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/yytmgc)

#### Railway Environment Variables

| Environment variable name | Required | Remarks |
| --------------------- | ---------------------- | -------------------------------------------------------------------------------------------------- |
| `PORT`                | Required | Default `3002` |
| `AUTH_SECRET_KEY`          | Optional | Access permission key                             |
| `MAX_REQUEST_PER_HOUR`          | Optional | Maximum number of requests per hour, optional, unlimited by default                             |
| `TIMEOUT_MS`          | Optional | Timeout, unit milliseconds                                                                    |
| `OPENAI_API_KEY`      | `OpenAI API` choose one | `apiKey` required for `OpenAI API` [(get apiKey)](https://platform.openai.com/overview)           |
| `OPENAI_ACCESS_TOKEN` | `Web API` choose one | `accessToken` required for `Web API` [(get accessToken)](https://chat.openai.com/api/auth/session) |
| `OPENAI_API_BASE_URL`   | Optional, available when `OpenAI API` | `API` interface address |
| `OPENAI_API_MODEL`   | Optional, available when `OpenAI API` | `API` model |
| `API_REVERSE_PROXY`   | Optional, available when `Web API` | `Web API` reverse proxy address [Details](https://github.com/transitive-bullshit/chatgpt-api#reverse-proxy) |
| `SOCKS_PROXY_HOST`   | Optional, take effect with `SOCKS_PROXY_PORT` | Socks proxy |
| `SOCKS_PROXY_PORT`   | Optional, take effect with `SOCKS_PROXY_HOST` | Socks proxy port |
| `SOCKS_PROXY_USERNAME`   | Optional, take effect with `SOCKS_PROXY_HOST` | Socks proxy username |
| `SOCKS_PROXY_PASSWORD`   | Optional, take effect with `SOCKS_PROXY_HOST` | Socks proxy password |
| `HTTPS_PROXY`   | Optional | HTTPS proxy, support http,https, socks5 |
| `ALL_PROXY`   | Optional | All proxies, support http,https, socks5 |

> Note: Modifying environment variables on `Railway` will re-`Deploy`

### Deploy with Sealos

[![](https://raw.githubusercontent.com/labring-actions/templates/main/Deploy-on-Sealos.svg)](https://cloud.sealos.io/?openapp=system-fastdeploy%3FtemplateName%3Dchatgpt-web)

> Environment variables are consistent with Docker environment variables

### Package Manually
#### Backend Service
> If you don't need the `node` interface of this project, you can omit the following operations

Copy the `service` folder to the server where you have the `node` service environment.

```shell
# Install
pnpm install

# Pack
pnpm build

# Run
pnpm prod
```

PS: It is also okay to run `pnpm start` directly on the server without packing

#### Frontend Webpage

1. Modify the `VITE_GLOB_API_URL` field in the `.env` file at the root directory to your actual backend interface address

2. Run the following commands at the root directory, then copy the files in the `dist` folder to the root directory of your website service

[Reference](https://cn.vitejs.dev/guide/static -deploy.html#building-the-app)

```shell
pnpm build
```

## FAQ
Q: Why does `Git` commit always report errors?

A: Because there is a commit message verification, please follow the [Commit Guide](./CONTRIBUTING.md)

Q: Where to change the request interface if only the front-end page is used?

A: The `VITE_GLOB_API_URL` field in the `.env` file at the root directory.

Q: All files explode red when saving?

A: `vscode` please install the recommended plug-ins for the project, or manually install the `Eslint` plug-in.

Q: No typewriter effect on the front end?

A: One possible reason is that after Nginx reverse proxy, buffer is turned on, then Nginx will try to buffer some data from the backend before sending it to the browser. Please try adding `proxy_buffering off; ` after the reverse proxy parameter, then reload Nginx. Other web server configurations are similar.

## Contributing

Please read the [Contributing Guide](./CONTRIBUTING.md) before contributing

Thanks to everyone who has contributed!

<a href="https://github.com/Chanzhaoyu/chatgpt-web/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Chanzhaoyu/chatgpt-web" />
</a>

## Sponsors

If you find this project helpful and can afford it, you can give me a little support. Anyway, thanks for your support~

<div style="display: flex; gap: 20px;">
	<div style="text-align: center">
		<img style="max-width: 100%" src="./docs/wechat.png" alt="WeChat" />
		<p>WeChat Pay</p>
	</div>
	<div style="text-align: center">
		<img style="max-width: 100%" src="./docs/alipay.png" alt="Alipay" />
		<p>Alipay</p>
	</div>
</div>

## License
<<<<<<< HEAD
MIT © [LittleBai](./license)
=======
MIT © [ChenZhaoYu]
>>>>>>> main
