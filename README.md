# emailParser
A Node.js script that can parse a Jquery element of a page, then e-mail an account with changes.

Use Case: When you have a SMTP Mail Server that you want to use with Node.js, and you want to parse out a page with certain content (Such as a Jquery Div text content changing) to notify your e-mail. For example,
you have a SMTP Mail Server With Linux and you run a CRON job that fires this script every 20 minutes, and e-mails you with the change. This can be helpful for different Ticket pages (Such as a PAX or Sporting Event)
you want to monitor and having it e-mail you when Registration opens, for example.

Included in this repo is emailParse.js, which you will have to configure with your SMTP settings and ideally setup a CRON job on your linux Server, and if you want to test out a webpage
that changes on your local WAMP, MAMP or LAMP Stack, you can try out the code with Website.html, included in the repo.

This falls under the GNU General Public License
