import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page 
  title: "Gedh's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/gedhspace', label: 'GitHub' },
    { link: 'https://space.bilibili.com/3494366867884831', label: 'BiliBili' },
    { link: 'mailto:738813115@qq.com', label: 'Email Me', highlight: true },
  ],
  // [OPTIONAL] Group your monitors
  // If not specified, all monitors will be shown in a single list
  // If specified, monitors will be grouped and ordered, not-listed monitors will be invisble (but still monitored)
  
}

const workerConfig: WorkerConfig = {
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
      target: 'https://hub.docker.com',
      statusPageLink: 'https://hub.docker.com',
    },
    {
      id: 'temporary_email_backend',
      name: '临时邮箱-前端',
      method: 'GET',
      target: 'https://mail.412208.xyz',
      statusPageLink: 'https://mail.412208.xyz',
    },
    {
      id: 'temporary_email_front-end',
      name: '临时邮箱-后端',
      method: 'GET',
      target: 'https://mail-server.412208.xyz'
    },
    {
      id: 'magic1',
      name: 'Magic1',
      method: 'GET',
      target: 'https://m1.412208.xyz'
    },
    {
      id: 'magic2',
      name: 'Magic2',
      method: 'GET',
      target: 'https://m2.412208.xyz'
    },
    {
      id: 'reverse_generation',
      name: '反代',
      method: 'GET',
      target: 'https://proxy.412208.xyz'
    },
    {
      id: 'docker_images',
      name: 'Docker镜像',
      method: 'GET',
      target: 'http://dockerhub.412208.xyz',
      statusPageLink: 'http://dockerhub.412208.xyz',
    },
    {
      id: 'pan',
      name: 'Onedrive',
      method: 'GET',
      target: 'https://onedrive.412208.xyz',
      statusPageLink: 'https://onedrive.412208.xyz',
    },
    {
      id: 'pastebin',
      name: '粘贴板',
      method: 'GET',
      target: 'https://paste.412208.xyz',
      statusPageLink: 'https://paste.412208.xyz',
    },
    {
      id: 'image_bed',
      name: '图床',
      method: 'GET',
      target: 'https://image.412208.xyz',
      statusPageLink: 'https://image.412208.xyz',
    },
    {
      id: 'google_drive',
      name: 'Google Drive Index',
      method: 'GET',
      target: 'https://googledrive.412208.xyz',
      statusPageLink: 'https://googledrive.412208.xyz',
    },
    {
      id: 'aliyun_drive',
      name: 'Aliyun Drive Index',
      method: 'GET',
      target: 'http://aliyundrive.412208.xyz',
      statusPageLink: 'https://aliyundrive.412208.xyz',
    },
    {
      id: 'aliyunserver-hangzhou',
      name: 'Aliyun ECS-Hangzhou SSH',
      method: 'TCP_PING',
      target: '121.40.37.253:22',
      tooltip: 'My production server SSH',
      statusPageLink: 'https://example.com',
      timeout: 5000,
    },
    
  ],
    notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: "https://apprise-theta.vercel.app/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: "tgram://8053324442:AAFjprBayuh0aUIIQdHXc_FfJC5XbCzIAow/7535705783",
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

// You can define multiple maintenances here
// During maintenance, an alert will be shown at status page
// Also, related downtime notifications will be skipped (if any)
// Of course, you can leave it empty if you don't need this feature
// const maintenances: MaintenanceConfig[] = []
const maintenances: MaintenanceConfig[] = []

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig, maintenances }
