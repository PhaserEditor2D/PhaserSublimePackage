# Phaser Sublime Text Packages

This is a set of Sublime Text packages to help developers to code HTML5 2D games based on [PhaserJS](https://github.com/photonstorm/phaser).

## Smart coding

We use a modified version of [tern_for_sublime](https://github.com/ternjs/tern_for_sublime) to get JavaScript smart coding, in addition to a generated Phaser plugin using the [Phaser Editor](http://phasereditor.boniatillo.com) tooling.

This is a list of what you get:

1. Phaser API auto-completion
2. Jump to definitions
3. Jump back
4. Select all references (useful for renames)

For more details checkout [tern_for_sublime](https://github.com/ternjs/tern_for_sublime)

## Installation

0. Install [nodejs](http://nodejs.org)
1. Open Sublime Text
2. Open the Packages folder: go to `Main menu > Preferences > Browse Packages...`
3. It opens the OS explorer in the package folder.
4. In that folder copy the content of the [packages](../packages) directory of this repo.
5. Restart Subilme Text
6. Open the [phaser demo project](https://github.com/boniatillo-com/PhaserSublimePackage/tree/master/demo/sublime-projects/phaser) and test it coding on the `game.js` file.

The demo project has nothing in special just that you should put in the root a [Tern project file](http://ternjs.net/doc/manual.html#configuration) (`.tern-project`) and add there the Phaser plugin.

## Thanks

Special thanks to [Angelo Zerr](https://github.com/angelozerr) for his very kind support on everything related to ternjs.

## Found a problem?

Create an issue here!

## Alternatives

[Rayo](http://phasereditor.boniatillo.com/blog/rayo) a lightweight text editor just made for Phaser coding.
[Phaser Editor](http://phasereditor.boniatillo.com/blog/features) a complete IDE for Phaser games development.

## Screenshots

Phaser API auto-completions:

![completions](https://github.com/boniatillo-com/PhaserSublimePackage/blob/master/demo/screenshots/Autocompletion.png "Phaser API auto-completion")

Tern commands:

![commands](https://github.com/boniatillo-com/PhaserSublimePackage/blob/master/demo/screenshots/TernCommands.png "Tern commands")

Basic `.tern-project` file:

![tern project](https://github.com/boniatillo-com/PhaserSublimePackage/blob/master/demo/screenshots/TernProject.png "Tern project file")


