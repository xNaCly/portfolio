---
title: Linux guide for powerusers
description: A guide to help you setup your linux based workmachine and explain some core concepts
author: xnacly
timetoread: 30min
writtenat: 2022-07-30
nottags: linux#guide#i3wm
draft: true
---

# What to expect

## Getting started with the Lingo

![xkcd_languages](https://imgs.xkcd.com/comics/language_development.png)

### What is all this stuff…

#### Linux (+-/GNU)

![linux](https://www.kernel.org/theme/images/logos/tux.png)

Linux is the kernel of your distro, written in C and Assembly by Linus Torvalds and thousands of contributors.

The kernel manages most of your installed drivers, allocates your resources and generally acts as an interface between
soft- and hardware.

![kernel_hardware](https://upload.wikimedia.org/wikipedia/commons/3/3a/Linux_kernel_ubiquity.svg)

The `+-/Gnu` in the heading is a reference to the Linux kernel using GNU code and extensions, and therefore some people
think the Linux kernel should be named with the post-fix `/Gnu` or `+Gnu`.[^gnu/linux_controversy]

Most people use Linux as a synopsis for everything included in a distribution, such as kernel, drivers, desktop
environment, window manager, shell, etc. even though Linux is just the name of the kernel. Everyone knows what you're
talking about by just calling everything Linux.

#### Distribution

As hinted above a distribution is a package of software. Most Linux distribution contain free software[^foss] as well as
the Kernel, some sort of desktop environment, a window manager, multiple Apps such as a word processor and a Webbrowser.

Some Distros are known for their gigantic package repositories like [Debian](https://www.debian.org/index.en.html) and
[Arch](https://archlinux.org/), other are famous for their security like e.g.
[RedHat](https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux) or the discontinued
[CentOS](https://www.centos.org/). There are some distros which shine by being different or minimal, such as
[NixOS](https://nixos.org/) (unconventional package managing), [Artix](https://artixlinux.org/) (different init system)
or [Void linux](https://voidlinux.org/) (all the before + support for musl libc implementation)

Noone really knows how many distros there
[are](https://upload.wikimedia.org/wikipedia/commons/b/b5/Linux_Distribution_Timeline_21_10_2021.svg), everyone can make
one and switching between them is very easy.

#### Package manager

![xkcd_install_script](https://imgs.xkcd.com/comics/universal_install_script.png)

A package manager is a tool which installes, removes and updates installed software for you. No more going to a random
website and downloading an `*.exe` file only to have your hdd bricked after disabling the antivirus and running the
totally legitimate vbux generator.

A package manager such as pacman is relativly secure due to package signing and other messuares which were put in place
to save users from malious software.

Almost all distributions contain a package manager, here are some famous ones: `apt`, `pacman` and `dnf`.

In this tutorial we will use [Manjaro](https://manjaro.org/), therefore you can focus on the package manager included in
the distribution: `pacman`.

#### Desktop environment (DE) vs window manager (WM)

A desktop environment such as [GNOME]() bundles a file manager, terminal, window manager, settings and more into the
GNOME package. Everything in it is thightly integrated and applications in the bundle often look similar and depend on
the same libraries. A `de` handles almost everything the user interacts with inside the GUI, such as volume managment,
connecting to networks, automounting drives, themeing

### Which distro to choose?

![xkcd_oses](https://imgs.xkcd.com/comics/operating_systems.png)

I love pacman and getting new software updates fast, therefore i personally use Arch Linux, which can sometimes require
knowledge or some time to maintain. The distro we intend to use is based on arch linux, but has a lot of preconfigured
software, making it interesting for beginners and advanced users.

> **Is Manjaro better than other distros?**
>
> Manjaro is not superior or inferior to any other Linux distribution, they all do the same. Manjaro has its own package
> manager, themes, tools and custom Kernels.

The above was taken from the manjaro download page and i agree wholeheartedly. Roll a die and pick a random distro, it
won't really matter.

#### Rolling release vs Stable release (Continuous delivery)

To always have the newest and shiniest software at hand, one could decide to pick a Distro with a rolling release
circle[^rolling_release], which can at best (or worst) have several updates available a day. Like everything else RR
distros have up- and downsides, you can read further about them [here](https://itsfoss.com/rolling-release/)

Releasing on a specified time frame is defined as a continuous delivery or stable releases. Distros following this
pattern have the convincing argument of stability and tested packages in their repos.

I personally never had stability issues on arch linux and ppas annoy the shit out of me, therefore i use Arch :).

Relevant:

![arch_meme](linux/arch.jpg)

## Using Linux

As said before, this in this tutorial we will be using Manjaro due to the following reasons:

-   arch based
    -   rolling release
    -   pacman and yay
-   fully configured system (yes bloat, idc its a beginners tutorial)
-   its linux

### Installing

Before installing on real hardware i would recommend you to spin up a virtual machine and install manjaro there.

### Do you want a DE?

### Configuring your system

#### Filesystem

fhs[^99]

## Dot(.) files

[^foss]: https://en.wikipedia.org/wiki/Free_and_open-source_software
[^rolling_release]: https://en.wikipedia.org/wiki/Rolling_release
[^manjaro_download]: https://endeavouros.com/latest-release/
[^99]: https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard
[^gnu/linux_controversy]: https://en.wikipedia.org/wiki/GNU/Linux_naming_controversy
