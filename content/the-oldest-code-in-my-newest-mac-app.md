---
id: "28"
title: "The Oldest Code in My Newest Mac App"
date: "28-09-2026"
description: "Splashy crosses Linux and macOS, with an older C drawing core underneath a newer desktop experience."
---

Splashy looks like a simple whiteboard: open a canvas, draw, add a shape, move around, and export what you made. Underneath the Mac app is drawing work that started in C and Cairo for Linux. The newer interface changed; the old concern stayed the same. A stroke has to appear where the cursor is, when the hand expects it.

That makes Splashy a useful reminder that an old code path can be the most valuable part of a new product.

## The canvas is the product

A whiteboard can have layers, backgrounds, export formats, and shortcuts. None of those features can rescue a canvas that feels slow. Drawing is a continuous interaction. A few missed frames are more obvious there than in a form or a settings screen because the user is watching a line follow their movement.

The core handles smooth strokes with curve interpolation and supports pressure-sensitive input. It also has to keep panning and zooming from interrupting the feeling of direct manipulation. On the Mac, the surrounding app needs Retina rendering, native controls, file dialogs, and the right keyboard behavior. Those are different responsibilities from turning raw points into a line.

Keeping that separation gave the project room to cross platforms. The Linux version uses its own desktop environment; the Mac version can adopt Mac conventions without pretending the drawing problem is unique to AppKit.

## Native fit is more than a window frame

Moving a drawing tool to macOS involves details outside the canvas. Opening and saving a project should use the file model people expect. Exporting to PNG or PDF should produce a document they can actually use elsewhere. A sandboxed App Store build needs explicit access to user-selected files rather than broad access to the disk.

These pieces are less visible in a demo than a brush stroke. They are still part of whether the app feels trustworthy. A whiteboard is often where someone parks unfinished thinking; losing access to a sketch would undo every performance improvement.

## What I would carry forward

Splashy taught me to identify the part of an app that must be immediate. For this one, it is the stroke. I can add shape tools and background choices gradually, but I need to protect the rendering path from every feature that might make it feel heavier.

I also learned not to treat a rewrite as the default answer to a platform change. Reusing a proven drawing core while adapting the interface is a more interesting engineering decision than replacing everything because a new target has a different badge on its icon.
