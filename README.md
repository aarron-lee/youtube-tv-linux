# YouTube Client (TV Interface)

A simple electron app that gives access to the YouTube TV interface similar to the AndroidTV App.

![app image](./img/app.jpg)

## Installation
### Linux
* Download AppImage from releases
* Install the AppImage with your preferred AppImage manager, I'd recommend GearLever

### Steam Deck (Gaming Mode)
* Enter Desktop Mode
* Download AppImage from releases
* Move file to desired directory
* Right click file
* Click ```properties``` and go to ```permissions``` tab
* Check ```Is Executable``` is ticked and click ```OK```
* Right click again, now select ```Add to Steam```
* Open Steam, find the application
* Set launch parameter to ```--no-sandbox```
* Launch Game Mode
* Go to the YouTube non steam game
* Select Community Control Layout ```YouTube TV Client```
* You can now launch the app and navigate with controller
* (Optional) Add artwork using ```SteamGridDB```

# Build from source
* Clone git repository
* Open the project folder in your IDE
* run ```npm install```
* run ```npm run build```
* Built app can be located at ```./dist/```

## Credit
Icon: https://www.flaticon.com/free-icons/youtube
