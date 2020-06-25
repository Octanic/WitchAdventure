# WitchAdventure
**An adventure game powered by Imersão GameDev @ Alura**

~~I'm trying to find a better name for this, don't worry.~~

# Story
Ripsta was flying back home after a day of witch work with her magic broom when a flock of crows suddenly attacked her, leaving her `magic wand`, `spellbook` and her `broom` scattered all around the hidden forest. 

You have to find your way to recover your beloved magical artifacts and go home.

But it won't be easy for our little witch. 
She is a beginner, and she doesn't have enough power to cast her spells without using her magic wand nor her spellbook. So you have to help her look for her items. 

The hidden forest is full of weird creatures, such as `slimes` (which some of them can fly), and a `troll`, which is very upset because of all the noise our witch Ripsta is doing.

Will she find her way out with her beloved magic items?

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
I can give chaos to creatures. By setting this parameter ``isErratic: true`` in the creature configuration, Creatures will change their speeds and may go up and down randomly. This is specially nice for ``flying creatures``. It's an idea first, I think I can improve it to be a little smoothier.

# Final words
I really don't feel like changing the sprites. I think I can make something with those sprites I was given. 

Also, I think this can be something to begin some old game projects. Anyway, I hope to learn a lot from this immersion. 
