# Phaser Sublime Text Packages

This is a set of Sublime Text packages to help developers to code HTML5 2D games based on https://github.com/photonstorm/phaser.

## Smart coding

We use a modified version of https://github.com/ternjs/tern_for_sublime to get JavaScript smart coding, in addition to a generated Phaser plugin using the [Phaser Editor](http://phasereditor.boniatillo.com) tooling.

This is a list of what you get:

1. Phaser API auto-completion
2. Jump to definitions
3. Jump back
4. Select all references (useful for renames)

For more details checkout https://github.com/ternjs/tern_for_sublime

## Installation

1. Open Sublime Text
2. Open the Packages folder: go to `Main menu > Preferences > Browse packages...`
3. It opens the OS explorer in the package folder.
4. In that folder copy the content of the [packages](../packages) directory of this repo.
5. Restart Subilme Text
6. Open the [phaser demo project](../demo/sublime-projects/phaser) and test it coding on the `game.js` file.

The demo project has nothing in special just that you should put in the root a [Tern project file](http://ternjs.net/doc/manual.html#configuration) (`.tern-project`) and add there the Phaser plugin.

## Thanks

Special thanks for @angelozerr for his very kind support on everything related to ternjs.

## Found a problem?

Create an issue here!

## Alternatives

[Rayo](http://phasereditor.boniatillo.com/blog/rayo) a lightweight text editor just made for Phaser coding.
[Phaser Editor](http://phasereditor.boniatillo.com/blog/features) a complete IDE for Phaser games development.


