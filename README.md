This is just the src and www files; dependencies, platforms, and plugins will have to be installed after downloading. Any Cordova parts will not work on browser (such as local notifs, and Youtube player opens in new page instead of in-app)


Local Notifications: 

ionic cordova plugin add cordova-plugin-local-notification

npm install @ionic-native/local-notifications


Youtube player:

ionic cordova plugin add cordova-plugin-youtube-video-player

npm install @ionic-native/youtube-video-player
