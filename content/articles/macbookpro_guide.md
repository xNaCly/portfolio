---
title: Getting started with Arch on a Macbook pro 2012 (9,2)
description: A guide to wifi, touchpad support and more on your macbook pro 2012 using arch
author: xnacly
timetoread: 10 min
writtenat: December 27, 2021
nottags: archlinux#wifi
---

## Enable tap to click

-   install [`libinput`](https://wiki.archlinux.org/title/Libinput)
-   paste the following in your shell:

```bash
mkdir /etc/X11/xorg.conf.d;
echo 'Section "InputClass"
        Identifier "libinput touchpad catchall"
        MatchIsTouchpad "on"
        MatchDevicePath "/dev/input/event*"
        Driver "libinput"
        Option "Tapping" "on"
EndSection' > /etc/X11/xorg.conf.d/40-libinput.conf;
systemctl restart lightdm
```

Link to Source [^1]

## Get wireless running (the GUI method)

-   install [`yay`](https://github.com/Jguer/yay#installation)
-   install [`broadcom-wl`](https://wiki.archlinux.org/title/Broadcom_wireless#broadcom-wl)
-   reboot
-   `ip addr` should now display `wlan0`
-   install [`NetworkManager`](https://wiki.archlinux.org/title/NetworkManager) and use
    `systemctl enable NetworkManager.service` + `systemctl start NetworkManager.service`
-   install and run [`nm-connection-editor`](https://archlinux.org/packages/extra/x86_64/nm-connection-editor/)
-   add a new connection in the bottom left and choose `WIFI`
-   enter your wifi ssid and password, disable ipv6 (_optional_)

Link to Source[^2]

## Change screen brightness

## Change keyboard backlight brightness

[^1]: https://unix.stackexchange.com/questions/337008/activate-tap-to-click-on-touchpad
[^2]: https://wiki.archlinux.org/title/Network_configuration/Wireless
