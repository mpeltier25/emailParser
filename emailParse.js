var request = require("request"),
cheerio = require("cheerio")

var TexttoCheckAgainst = "This is text to see 2"

function processWebsite(idToExtract){
	url="http://localhost/website.html"
	
	request(url, function (error, response, body){
		if(!error){
			var $ = cheerio.load(body),
			content = $("#"+idToExtract).text();
			console.log(content.trim());
			console.log(TexttoCheckAgainst.trim());
			
			if(content.trim() != TexttoCheckAgainst.trim()){
				
				var sendmail = require("sendmail")();
				var Mail = exports.Mail = function(mailFrom, mailTo, mailSubject, mailCont){
				sendmail({
				from: mailFrom,
				to: mailTo,
				subject: mailSubject,
				content: mailCont,
				}, function(err, reply) {
				console.log(err && err.stack);
				console.dir(reply);
			});
		}
		
		//e-mail to, e-mail from, title, content, you will need to fill each of the fields based on the network you have setup.
		
		Mail('', '', '', '')
				
			}
			
			else{
				console.log("No change, no need to e-mail");
			}
		}
		
		else{
			console.log("We have encountered an error "+error);
		}
	});
}

processWebsite("Test");