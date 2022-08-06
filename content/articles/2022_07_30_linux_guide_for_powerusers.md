---
title: Linux guide for powerusers
description: A guide to help you setup your linux workmachine and explain some core concepts
author: xnacly
timetoread: 30min
writtenat: 2022-07-30
nottags: linux#guide#i3wm
draft: true
---

## What to expect

This guide is meant as a loose inspiration for a poweruser looking to switch to linux. It showcases window manager,
terminal, i3blocks, i3status, nvim, wallpapers and dunst configuration, basic package manager usage and some information
about everything you need to know to really configure a powerusers system.

## Getting started with the Lingo

### What is all this stuff…

#### Linux (+-/GNU)

Linux is the kernel of your distro, written in C and Assembly by Linus Torvalds and thousands of contributors.

The kernel manages most of your installed drivers, allocates your resources and generally acts as an interface between
soft- and hardware.

![kernel_hardware](https://upload.wikimedia.org/wikipedia/commons/3/3a/Linux_kernel_ubiquity.svg)

The `+-/Gnu` in the heading is a reference to the Linux kernel using GNU code and extensions, and therefore some people
think the Linux kernel should be named with the post-fix `/Gnu` or `+Gnu`.[^gnu/linux_controversy]

Most people use Linux as a synopsis for everything included in a distribution, such as kernel, drivers, desktop
environment, window manager, shell, etc. even though Linux is just the name of the kernel. Everyone knows what you're
talking about by just calling everything Linux.

> **View the current kernel version and build by running**
>
> ```bash
> $: uname -a
> # outdated wsl kernel
> Linux THINK-**** 4.4.0-19041-Microsoft #1237-Microsoft Sat Sep 11 14:32:00 PST 2021 x86_64 x86_64 x86_64 GNU/Linux
> ```

#### Distribution

As hinted above a distribution is a package of software. Most Linux distribution contain the Kernel, some sort of
desktop environment, a window manager, multiple Apps such as a word processor and a Webbrowser.

Some Distros are known for their gigantic package repositories like [Debian](https://www.debian.org/index.en.html) and
[Arch](https://archlinux.org/), other are famous for their security like e.g.
[RedHat](https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux) or the discontinued
[CentOS](https://www.centos.org/). There are some distros which shine by being different or minimal, such as
[NixOS](https://nixos.org/) (unconventional package managing), [Artix](https://artixlinux.org/) (different init system)
or [Void linux](https://voidlinux.org/) (all the before + support for musl libc implementation)

No one really knows how many distros there
[are](https://upload.wikimedia.org/wikipedia/commons/b/b5/Linux_Distribution_Timeline_21_10_2021.svg), because everyone
can make one and switching between them is very easy.

#### Package manager

A package manager is a tool which installes, removes and updates software for you. No more going to a random website and
downloading an `*.exe` file only to have your hdd bricked after disabling the antivirus and running the totally
legitimate vbux generator. Package managers are accessed using the terminal, but some desktop environments include
graphical user interfaces for managing packages.

A package manager such as pacman is relativly secure due to package signing and other messuares which were put in place
to save users from malious software.

Almost all distributions contain a package manager, the most famous are: `apt`, `pacman` and `dnf`.

package manager cli examples:

```bash
# install a tool named neovim
sudo apt install neovim
sudo pacman -S neovim

# check for new updates, upgrade the system
sudo apt update && sudo apt upgrade
sudo pacman -Syyu

# remove neovim
sudo apt remove neovim
sudo pacman -R neovim
```

In this tutorial we will use [Manjaro](https://manjaro.org/), therefore you can focus on the package manager included in
the distribution: `pacman`.

#### Desktop environment (DE) vs window manager (WM)

A desktop environment such as [GNOME](https://www.gnome.org/) bundles a file manager, terminal, window manager, settings
and more into the GNOME package. Everything in it is thightly integrated and applications in the bundle often look
similar and depend on the same libraries. A `de` handles almost everything the user interacts with inside the GUI, such
as volume managment, connecting to networks, mounting drives, themeing and other.

### Which distro to choose?

I love pacman and getting new software updates fast, therefore i personally use Arch Linux, which can sometimes require
knowledge or some time to maintain. The distro we intend to use is based on arch linux, but has a lot of preconfigured
software, making it interesting for beginners and advanced users.

> **Is Manjaro better than other distros?**
>
> Manjaro is not superior or inferior to any other Linux distribution, they all do the same. Manjaro has its own package
> manager, themes, tools and custom Kernels.

The above was taken from the manjaro download page and i agree wholeheartedly with the first part. Roll a die and pick a
random distro, it won't really matter.

#### Rolling release vs Stable release (Continuous delivery)

To always have the newest and shiniest software at hand, one could decide to pick a distro with a rolling release
circle[^rolling_release], which can at best (or worst) have several updates available a day. Like everything else RR
distros have up- and downsides, you can read further about them [here](https://itsfoss.com/rolling-release/)

Releasing on a specified time frame is defined as a continuous delivery or stable releases. Distros following this
pattern have the convincing argument of stability and tested packages in their repos.

I personally never had stability issues on arch linux and ppas annoy the shit out of me, therefore i use Arch :).

Relevant:

![arch_meme](linux/arch.webp)

## Powering up

As said before, in this tutorial we will be using Manjaro due to it:

-   being based on arch
    -   having rolling release updates
    -   having pacman and yay installed
-   containing a fully configured system (yes bloat, idc its a beginners tutorial)
-   (ofc) being linux

### Installing

Before installing on real hardware i would recommend you to spin up a virtual machine and install Manjaro there. I will
now describe a simplified way to install your operating system:

1. Install [Oracle VirtualBox](https://www.virtualbox.org/wiki/Downloads) (select `Windows hosts`)
2. Head to the manjaro download page [here](https://manjaro.org/download), scroll down till you see the
   `OFFICIAL EDITIONS` badge.

![manjaro_download](linux/manjaro_download.webp)

3. Download a minimal version of one of the three editions (I picked gnome).
    > **DISCLAIMER**
    >
    > For simplicitie’s sake, we will not check the authenticity of the downloaded image, one should however always
    > check this before installing on bare metal.
4. Start Virtual Box and click on `new`

![virtual box new vm](linux/vb_1.webp)

5. Name your box with whatever you want, and select `Type: Linux` and `Version: Arch Linux (64-bit)`

![virtual box new vm name and type](linux/vb_2.webp)

6. Go with the default for `memory size`:

![virtual box new vm memory](linux/vb_3.webp)

7. You want to create a new hard drive:

![virtual box new vm hard drive](linux/vb_4.webp)

with the following attributes (you will be asked for these in the next few windows):

-   VDI (VirtualBox Disk Image)
-   dynamically allocated
-   25GB

8. Hit enter and you have your vm
9. Head to `Settings->System->Boot Order` and move the `Hard Disk` option to the top of the list (this allows the vm to
   boot into the operating system after installation and reboot)

10. Go to `Settings->Storage` and add a new iso by following this image:

![virtual box new vm add iso](linux/vb_5.webp)

11. Click on `open->choose->ok`

12. Now click on `start`

13. Wait till the system boots (you should see some logs), click on `launch installer` and go trough it.

-   Location: go with the default
-   Keyboard: go with your keyboard layout
-   Partions: select `Erase disk`
-   Users: fill the input fields, choose a password you can remember (for vms i always use root) and check the box which
    says `Use the same password for the administrator account`

14. Hit install and install now in the next prompt.
15. Check the `restart now` box and click on `✓Done` (the vm will now reboot into the freshly installed os)
16. Login with your very strong password from 13. and explore the system:

![manjaro result](linux/manjaro_result.webp)

### What do we need, how do we get it?

#### Do you want a DE?

### Configuring your system

#### Filesystem

## Dot(.) files

My configuration is public and can be accessed [here](https://github.com/xNaCly/dotfiles)

[^foss]: https://en.wikipedia.org/wiki/Free_and_open-source_software
[^rolling_release]: https://en.wikipedia.org/wiki/Rolling_release
[^gnu/linux_controversy]: https://en.wikipedia.org/wiki/GNU/Linux_naming_controversy
