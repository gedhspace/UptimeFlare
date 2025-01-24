const pageConfig = {
  // Title for your status page
  title: "Gedh's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/gedhspace', label: 'GitHub' },
    { link: 'https://space.bilibili.com/3494366867884831', label: 'BiliBili' },
    { link: 'mailto:738813115@qq.com', label: 'Email Me', highlight: true },
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
      {
      id: 'docker_hub',
      name: 'Docker Hub',
      method: 'GET',
      target: 'https://hub.docker.com'
    },
    {
      id: 'temporary_email_backend',
      name: 'Temporary email backend',
      method: 'TCP_PING',
      target: 'https://mail.gedh2011.us.kg'
    },
    {
      id: 'temporary_email_front-end',
      name: 'Temporary email front-end',
      method: 'GET',
      target: 'https://mail-server.gedh2011.us.kg'
    },
    {
      id: 'magic1',
      name: 'Magic1随机节点',
      method: 'GET',
      target: 'https://my2.gedh2011.us.kg/90cd4a77-141a-43c9-991b-08263cfe9c10'
    },
    {
      id: 'magic2',
      name: 'Magic2优选节点',
      method: 'GET',
      target: 'https://magic23.gedh2011.us.kg/90cd4a77-141a-43c9-991b-08263cfe9c10'
    },
    {
      id: 'reverse_generation',
      name: 'Reverse Generation',
      method: 'GET',
      target: 'https://ojproxy.gedh2011.us.kg'
    },
    {
      id: 'docker_images',
      name: 'Docker Hub image',
      method: 'GET',
      target: 'https://docker-hub.gedh2011.us.kg'
    },
    {
      id: 'bing',
      name: 'Bing',
      method: 'GET',
      target: 'https://bing.gedh2011.us.kg'
    },
    {
      id: 'pan',
      name: 'Pan',
      method: 'GET',
      target: 'https://pan.gedh2011.us.kg'
    },
    {
      id: 'pastebin',
      name: 'Pastebin',
      method: 'GET',
      target: 'https://files.gedh2011.us.kg'
    },
    
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: "https://apprise.example.com/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: "tgram://bottoken/ChatID",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
