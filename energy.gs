function myFunction() {



while (true) {
var resp = UrlFetchApp.fetch('<url>').getContentText();
var data = JSON.parse(resp);
var currentTrack=data.requested[0].track.titel
var nextTrack=data.next[0].track.titel
//Logger.log(currentTrack)
//Logger.log(nextTrack)
  
if(currentTrack==="Attention"){
    
telegramMessage='https://api.telegram.org/bot<bot api token>/sendMessage?chat_id=<chat id>&text=CurrentTrack is '+currentTrack+'next Track is '+nextTrack;

UrlFetchApp.fetch(telegramMessage);

break;
  
  
  
      }

    }

}
