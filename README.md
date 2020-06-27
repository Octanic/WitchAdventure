# Hipsta Adventures
**An adventure sidescrolling game powered by Imersão GameDev @ Alura**

# Story
Hipsta was flying back home after a day of witch work with her magic broom when a flock of crows suddenly attacked her, leaving her `magic wand`, `spellbook` and her `broom` scattered all around the hidden forest. 

You have to find your way to recover your beloved magical artifacts and go home.

But it won't be easy for our little witch. 
She is a beginner, and she doesn't have enough power to cast her spells without using her magic wand nor her spellbook. So you have to help her look for her items. 

The hidden forest is full of weird creatures, such as `slimes` (which some of them can fly), and a `troll`, which is very upset because of all the noise our witch Ripsta is doing.

Will she find her way out with her beloved magic items?

# Where to play?
https://upbeat-swanson-5add6b.netlify.app

# And now back to our regular programming #
This is a game I'm making during **Imersão GameDev by Alura**, where we are being acquainted to the p5.js framework to create games using JavaScript. 
I have used BitBLT, XNA to develop games back in the days, and it seems way more simpler than those technologies. 

I hope I can develop a game based on this story! 

# Highlights
## Sprite Generator
I have created a `SpriteGenerator` class, which will handle all the sprite drawing. Instead of having hardcoded numbers on my code, I decided to calculate it based on the sprite offsets

For that, I'll need
- The horizontal offset (horizontal pixel size of one sprite inside the spritesheet)
- The vertical offset (vertical pixel size of one sprite inside the spritesheet)
- The number of sprites the spritesheet has
- How many sprites per line the spritesheet has

With those variables, I can calculate *almost* every spritesheet, ~~except when they are irregular (which I'm doing something to prevent that. I can either~~ 
**UPDATE:** Now the ``SpriteGenerator`` can *ignore frames*. That's also useful when people put credits inside the spritesheet, so we just skip the last sprites. Also, I moved everything to a config generator mini factory. So it will be easier to control it without having a mess inside the ``sketch.js``.

Unless someone decides really hard to create a spritesheet with the purpose of defeating my ``SpriteGenerator``. But since all my sprites are both regular and irregular ~~and not trying hard to defeat my ``SpriteGenerator``~~, it will be fine.

## Erratic creatures
I can give chaos to creatures. By setting this parameter ``isErratic: true`` in the creature configuration, Creatures will move vertically like a seesaw. This is specially nice for ``flying creatures``. I could make it smoothier than the previous version. I had to remove the speed variation, because since Hipsta is dealing with one opponent at a time, I can't afford to have a sloooow enemy (this means more points for the player, and a surely boring gameplay), and I implemented a sin calculation in order to make it go up and down smoothly.

## Items with powers
The player can catch the magic items and take advantage of them. 
- The ``staff`` will give her a shield spell, which will reload time to time. 
- The ``broom`` will give her the ability to jump 4 times. 
- The ``spellbook`` will complete the game.

## Infinite mode
Let's say Hipsta really wants to give those monsters a hard time, but fully powered up! Just for the score's sake. Try out your abilities to reach the best score you can get. Only available after completing the game once.

# Dealing with the code
No big issues here, just remember that ``P5.JS`` will not work on a local environment. So you have to launch a ``Live Server`` if you are running this with Visual Studio Code.
Download it here:
```
https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
```

# Final words
This was an awesome experience. 5 days of learning, trial and error, and helping the community with whatever wrong happened. It was a blast.
