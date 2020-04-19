# Branding for openSUSE Chat

openSUSE-Chat* logos: Copyright 2020 Stasiek Michalski <stasiek@michalski.cc>
pine.png Copyright 2020 Tim Stahel <swedneck@swedneck.xyz>

Contents within licensed under CC BY-SA 4.0

Add the following to your Riot config:
```
"branding": {
    "welcomeBackgroundUrl": "//static.opensuse.org/chat/pine.png",
    "authHeaderLogoUrl": "//static.opensuse.org/chat/openSUSE-Chat-black-text.svg",
    "authFooterLinks": [
        {"hosted by openSUSE": "https://opensuse.org"},
        {"powered by Matrix": "https://matrix.org"}
    ]
},
"embeddedPages": {
    "welcomeUrl": "//static.opensuse.org/chat/welcome.html"
}
```
