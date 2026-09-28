---
id: "24"
title: "Why I'm Rebuilding Lofikofi as a Native Mac App"
date: "28-09-2026"
description: "The native Mac rebuild is about more than a new interface: it has to preserve the local workspace people already made."
---

Lofikofi puts a focus timer, ambient sound, local music, boards, and small tasks in one place. Its published Mac app began in Flutter. That let me build the product and find its shape. I am now working on a native Mac version, and the difficult part is not drawing the same screens in SwiftUI.

It is carrying someone's workspace across the change.

## Why the Mac deserves its own implementation

Lofikofi is a desktop app people leave open while doing something else. The details that matter are deeply tied to macOS: window behavior, keyboard shortcuts, audio playback, file access, dragging items around a board, and a timer that remains accurate when the computer sleeps.

Flutter can build desktop software, and the existing app proves it. But a native shell gives me direct access to the platform behavior I want to tune. SwiftUI handles most of the interface; AppKit and system frameworks cover the places where desktop conventions matter. The aim is a calmer, more reliable Mac workspace, not a rewrite for its own sake.

## A rewrite has an obligation to old data

It would be easy to demo a new timer with an empty board and declare the rebuild done. That is not the version someone upgrading the app will see. They may have reordered their workspace, saved ambient mixes, added local music, built boards, and accumulated focus history.

The native project includes an importer for data from the Flutter version and tests for settings and workspace migration. It also has to deal with macOS security-scoped bookmarks for music files. A path that worked yesterday can require renewed permission later. Treating that as a small edge case would make the user's own library seem unreliable.

Migration changes how I define completion. The new app is ready only when it can open the old state, preserve it accurately, and recover sensibly from partial or damaged data. A beautiful empty state cannot compensate for a lost board.

## What stays the same

The product still needs to work offline and open into a familiar place. A focus tool that demands an account or a connection before you can start a session would contradict its purpose. The timer, sound, and planning surfaces should remain small enough to support the work, rather than become another project management system.

The native rebuild is still work in progress. The current Mac App Store release and the code I am developing are different states of the product. I want to write about that honestly because software is often shown only at the end, when the hard part was carrying it from one implementation to another without breaking the trust built by the first.
