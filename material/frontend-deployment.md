---
layout: page
title: Frontend deployment
permalink: /frontend-deployment
nav_order: 12
---

# Frontend deployment

This guide covers Vite frontend application deployment using the Render platform. Follow the instructions carefully and perform the steps one by one.

## Environment configuration

In the frontend folder, add a `.env` [environment variable](https://vitejs.dev/guide/env-and-mode) file for the _development environment_. The `.env` file should contain a `VITE_BACKEND_URL` environment variable for the backend's _development environment URL_:

```
VITE_BACKEND_URL=http://localhost:8080
```

Make sure that every `fetch` function call has the environment variable as the URL prefix. For example:

```js
fetch(`${import.meta.env.VITE_BACKEND_URL}/api/messages`).then(
    (response) => {
    // ...
    }
);
```

Add a `.env.production` environment variable file for the _production environment_. The `.env.production` file should contain a `VITE_BACKEND_URL` environment variable for your backend's Rahti application URL (ends with "rahtiapp.fi"). For example:

```
VITE_BACKEND_URL=https://nameofyourrahtiapp.2.rahtiapp.fi/
```

Finally, _push the changes to GitHub_.

## Render static site deployment

[Sign in](https://dashboard.render.com/login) to Render _using your GitHub account_ and go through the sign up process. The information you provide in the sign up process doesn't matter.

Once signed in, on the Render dashboard, click the "New" button and choose "Static Site". Then, choose "Public Git Repository" tab, type in the URL of your GitHub repository and click the "Connect" button. Come up with the name for the static site. Set the following settings for the static site:

- If the frontend application is not initialized in the repository's root folder (this is the case if you don't have a separate repository for the frontend application), set "Root Directory" as the frontend folder's name
- Set "Build Command" as `npm run build`
- Set "Publish Directory" as `dist`
- Open the "Advanced" section and set "Auto-Deploy" as "No"

Click the "Deploy Static Site" button to create the static site.

On the static site's page, click "Redirects/Rewrites" from the navigation on the left. Set the "Source" as `/*`, "Destination" as `/index.html` and "Action" as "Rewrite". Finally, click the "Save Changes" button. This configuration will make the frontend routing work.

## Triggering deployment

Deployment can be triggered from the static site's page in the Render dashboard by clicking the "Manual Deploy" button and choosing "Deploy latest commit".
