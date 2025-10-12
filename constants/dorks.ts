
import { DorkCategory } from '../types';

export const bugBountyCategories: DorkCategory[] = [
    {
        name: "Admin & Login Pages",
        icon: "fas fa-user-lock",
        className: "category-access",
        dorks: ["site:{domain} inurl:admin", "site:{domain} inurl:login", "site:{domain} inurl:dashboard", "site:{domain} inurl:wp-admin", "site:{domain} inurl:controlpanel", "site:{domain} inurl:adminpanel", "site:{domain} inurl:administrator", "site:{domain} inurl:moderator", "site:{domain} inurl:webadmin", "site:{domain} inurl:backoffice", "site:{domain} inurl:backend", "site:{domain} inurl:auth", "site:{domain} inurl:portal", "site:{domain} inurl:staff", "site:{domain} inurl:manage"]
    },
    {
        name: "Sensitive Information",
        icon: "fas fa-key",
        className: "category-sensitive",
        dorks: ["site:{domain} \"password\"", "site:{domain} \"config\"", "site:{domain} \"credentials\"", "site:{domain} \"secret\"", "site:{domain} \"api_key\"", "site:{domain} \"private key\"", "site:{domain} \"client_secret\"", "site:{domain} \"access_token\"", "site:{domain} \"dbpassword\"", "site:{domain} \"authorize\"", "site:{domain} \"confidential\"", "site:{domain} \"ssh key\"", "site:{domain} \"passwd\"", "site:{domain} \"authorization_bearer\"", "site:{domain} \"auth_token\"", "site:{domain} \"oauth_token\"", "site:{domain} \"token\"", "site:{domain} \"refresh_token\""]
    },
    {
        name: "File Types & Documents",
        icon: "fas fa-file-alt",
        className: "category-files",
        dorks: ["site:{domain} filetype:pdf", "site:{domain} filetype:doc OR filetype:docx", "site:{domain} filetype:xls OR filetype:xlsx", "site:{domain} filetype:ppt OR filetype:pptx", "site:{domain} filetype:txt", "site:{domain} filetype:csv", "site:{domain} filetype:zip OR filetype:rar OR filetype:tar OR filetype:gz", "site:{domain} filetype:sql", "site:{domain} filetype:bak", "site:{domain} filetype:log", "site:{domain} filetype:xml", "site:{domain} filetype:json", "site:{domain} filetype:env", "site:{domain} filetype:conf", "site:{domain} filetype:yaml OR filetype:yml", "site:{domain} filetype:rsa OR filetype:pem OR filetype:key", "site:{domain} filetype:svg", "site:{domain} filetype:jsp OR filetype:asp OR filetype:aspx OR filetype:php"]
    },
    {
        name: "Directory & File Exposure",
        icon: "fas fa-folder-open",
        className: "category-exposure",
        dorks: ["site:{domain} intitle:\"index of\"", "site:{domain} inurl:ftp", "site:{domain} inurl:uploads", "site:{domain} intext:\"Index of /\"", "site:{domain} intitle:\"Directory Listing For\"", "site:{domain} intext:\"Parent Directory\"", "site:{domain} intitle:\"Index of\" intext:\".env\"", "site:{domain} intitle:\"Index of\" intext:\"config.php\"", "site:{domain} intitle:\"Index of\" intext:\"credentials\"", "site:{domain} intitle:\"Index of /backup\"", "site:{domain} intitle:\"Index of /admin\"", "site:{domain} intitle:\"Index of /config\"", "site:{domain} intitle:\"Index of /database\"", "site:{domain} intitle:\"Index of /password\"", "site:{domain} intitle:\"Index of /private\"", "site:{domain} intitle:\"Index of /wp-content/\"", "site:{domain} intitle:\"Index of /download\"", "site:{domain} intitle:\"Index of /logs\""]
    },
    {
        name: "Cloud Storage & Misconfig",
        icon: "fas fa-cloud",
        className: "category-cloud",
        dorks: ["site:s3.amazonaws.com \"{domain}\"", "site:blob.core.windows.net \"{domain}\"", "site:googleapis.com \"{domain}\"", "site:drive.google.com \"{domain}\"", "site:dev.azure.com \"{domain}\"", "site:onedrive.live.com \"{domain}\"", "site:digitaloceanspaces.com \"{domain}\"", "site:sharepoint.com \"{domain}\"", "site:s3-external-1.amazonaws.com \"{domain}\"", "site:s3.dualstack.us-east-1.amazonaws.com \"{domain}\"", "site:dropbox.com/s \"{domain}\"", "site:box.com/s \"{domain}\"", "site:docs.google.com inurl:\"/d/\" \"{domain}\"", "site:storage.googleapis.com \"{domain}\"", "site:amazonaws.com intext:\"{domain}\"", "site:firebasestorage.googleapis.com \"{domain}\"", "site:firebase.io \"{domain}\"", "site:firebaseio.com \"{domain}\"", "site:\"{domain}\".s3.amazonaws.com", "site:storage.cloud.google.com \"{domain}\"", "site:azurewebsites.net \"{domain}\"", "site:cloudfront.net \"{domain}\""]
    },
    {
        name: "SQL Injection Params",
        icon: "fas fa-database",
        className: "category-injection",
        dorks: ["inurl:id= | inurl:pid= | inurl:category= | inurl:cat= | inurl:action= | inurl:sid= | inurl:dir= inurl:& site:{domain}", "inurl:user= | inurl:uid= | inurl:article= | inurl:item= | inurl:page_id= inurl:& site:{domain}", "inurl:view= | inurl:product= | inurl:news= | inurl:file= | inurl:type= inurl:& site:{domain}", "inurl:tracking= inurl:& site:{domain}", "inurl:ref= inurl:& site:{domain}", "inurl:orderid= inurl:& site:{domain}", "inurl:cartid= inurl:& site:{domain}", "inurl:content= inurl:& site:{domain}", "inurl:section= inurl:& site:{domain}", "inurl:index.php?id= site:{domain}", "inurl:gallery.php?id= site:{domain}", "inurl:products.php?id= site:{domain}"]
    },
    {
        name: "Exposed Tech Panels",
        icon: "fas fa-window-restore",
        className: "category-access",
        dorks: ["site:{domain} intitle:\"phpMyAdmin\" inurl:phpmyadmin", "site:{domain} intitle:\"Adminer\" inurl:adminer.php", "site:{domain} intitle:\"pgAdmin\" inurl:pgadmin", "site:{domain} intitle:\"RabbitMQ Management\"", "site:{domain} intitle:\"Flower\" inurl:flower", "site:{domain} intitle:\"Portainer\" inurl:portainer", "site:{domain} intitle:\"Rancher\" inurl:rancher", "site:{domain} intitle:\"Kubernetes Dashboard\"", "site:{domain} intitle:\"Jenkins\" inurl:jenkins", "site:{domain} intitle:\"GitLab\" inurl:users/sign_in", "site:{domain} intitle:\"Nexus Repository Manager\"", "site:{domain} intitle:\"Apache Tomcat\"", "site:{domain} intitle:\"JBoss Management Console\"", "site:{domain} intitle:\"Webmin\" inurl:8000 OR inurl:10000", "site:{domain} intitle:\"cPanel\" inurl:2082 OR inurl:2083", "site:{domain} intitle:\"Plesk\" inurl:8443 OR inurl:8880"]
    },
    {
        name: "Subdomain Takeover Probes",
        icon: "fas fa-unlink",
        className: "category-exposure",
        dorks: ["site:*.{domain} \"this shop is currently unavailable\"", "site:*.{domain} \"The specified bucket does not exist\"", "site:*.{domain} \"NoSuchBucket\"", "site:*.{domain} \"You're Almost There!\"", "site:*.{domain} \"herokucdn.com/error-pages/no-such-app.html\"", "site:*.{domain} \"There isn't a GitHub Pages site here.\"", "site:*.{domain} \"Sorry, this shop is currently unavailable.\"", "site:*.{domain} \"Fastly error: unknown domain\"", "site:*.{domain} \"The page you are looking for does not exist.\"", "site:*.{domain} \"If you're the owner of this website: Contact your hosting provider.\"", "site:*.{domain} \"Repository not found\"", "site:*.{domain} \"Whatever you were looking for doesn't currently exist at this address.\"", "site:*.{domain} \"Oops. We couldn't find that page.\"", "site:*.{domain} \"This Amazon S3 bucket is not configured as a website.\""]
    },
    {
        name: "Specific Vulnerability Footprints",
        icon: "fas fa-bug-slash",
        className: "category-injection",
        dorks: ["site:{domain} intext:\"Log4j\" OR intext:\"Log4Shell\"", "site:{domain} inurl:cgi-bin intext:\"Shellshock\"", "site:{domain} intext:\"Heartbleed test\"", "site:{domain} filetype:swf intext:\"Flash Player version\"", "site:{domain} intext:\"Apache Struts\" intitle:\"Welcome\"", "site:{domain} intext:\"Microsoft SharePoint\" inurl:_layouts/", "site:{domain} intext:\"BIG-IP\" intitle:\"BIG-IP F5\"", "site:{domain} inurl:wp-content/plugins/revslider/", "site:{domain} inurl:Telerik.Web.UI.WebResource.axd", "site:{domain} intext:\"vBulletin\" inurl:showthread.php", "site:{domain} intext:\"PHP Version\" intitle:\"phpinfo()\"", "site:{domain} intext:\"Pulse Connect Secure\" intitle:\"Login\"", "site:{domain} intext:\"Citrix Gateway\" intitle:\"Login\"", "site:{domain} intext:\"FortiGate\" OR intext:\"FortiClient\" intitle:\"Login\""]
    },
];
