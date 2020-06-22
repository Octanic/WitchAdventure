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
I have created a `SpriteGenerator` class, which will handle all the sprite drawing. Instead of having hardcoded numbers on my code, I decided to calculate it based on the sprite offsets

For that, I'll need
- The horizontal offset (horizontal pixel size of one sprite inside the spritesheet)
- The vertical offset (vertical pixel size of one sprite inside the spritesheet)
- The number of sprites the spritesheet has
- How many sprites per line the spritesheet has

With those variables, I can calculate *almost* any spritesheet, except when they are irregular (which I'm doing something to prevent that. I can either
- have a spritesheet completely filled (or maybe flattened into one simple line)
- create a workaround when I cannot divide the spritesheet using offsets.

# Final words
I really don't feel like changing the sprites. I think I can make something with those sprites I was given. 

Also, I think this can be something to begin some old game projects. Anyway, I hope to learn a lot from this immersion. 
