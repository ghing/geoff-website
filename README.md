# geoff.terrorware.com 

This is a repository for a simple, [Linktree](https://linktr.ee/)-like website for me that both offers a simple URL to use in profiles and lets me verify my URL in Mastodon.

## Assumptions

- Node.js (This site was built using v16.15.1)
- Site is hosted on a static webhost that accepts file uploads via SFTP.
- SFTP user is configured to start in the root of the deployed site directory.

## Install dependencies

After cloning the repository for this site, change to the project directory and run:

```
npm install
```

## Previewing the site

This site uses the [11ty](https://11ty.dev) static site builder. There are npm scripts to run various common development tasks.

To start the local development server, run:

```
npm start
```

## Building the site

```
npm run build
```

This will output the site to `_site`.

## Configuration

Configuration is through environment variables.

### `SFTP_HOST`

Hostname of SFTP server where site is hosted.

### `SFTP_USERNAME`

Username of user to use to upload the site files via SFTP.

### `SFTP_PASSWORD`

Password of user to use to upload the site files via SFTP.
