I just launched "Braille by Ear" for Android! You can read all about it here:
[blog/braille-by-ear](braille-by-ear)

I was honoured to be selected by JetBrains to recieve a free license for their AI coding assistant Junie, to help with this project.

## First Impressions

I was quite skeptical about Junie at first. I'd used tools like Copilot before and had found the autocomplete too distracting. But I'd enjoyed using Gemini on the web before, and was excited to see what Junie could do.

My first experience with Junie really blew me away. It has context of your whole codebase, and can edit files directly, meaning you can just let it do its own thing, then come back when it's finished and see the result. It was usually pretty good, and I would just need to do some light cleanup (Junie loves using fully-qualified class names). But sometimes Junie would do something bizarre and I would need to roll it back by discarding the changes in Git.

## Strengths

- Writing implementations: Junie works great for 'filling in the blanks'. I'd stub a function, providing just the signature, and have Junie write the implementation. It's a bit like TDD but without the tests.

- Learning new APIs: Junie saved me a lot of time in this project with the Android system TTS API, which I hadn't used previously.

- Following patterns: Junie is very good at following existing patterns in my project, and it gets even better the more code I write. Especially for boilerplate, it would produce code exactly as I would have written it.

- Adding dependencies: Goodbye copy-pasting from release pages.

## Weaknesses

- Overconfidence: I ran into this when trying to bypass Talkback to allow 6-finger Braille input. Spoilers: it isn't possible. But Junie doesn't like to give up, and it led me on a wild goose chase suggesting many imaginary APIs.

- Untrustworthy refactors: Sometimes I would ask Junie to refactor something, and the result would be full of deliberate 'simplifications' that would break the existing logic.

- Lazy: Just like all developers, Junie can sometimes be lazy. At one point I asked Junie to refactor a View to Compose, and Junie simply wrapped it in an `AndroidView` and called it a day.

- Slow: This is most annoying when you ask Junie to do a pretty simple change, like renamings, and Junie starts reading through your entire codebase to gather context. Sometimes I would end up stopping Junie after a few minutes and just do the work myself. 

- Writing unrequested code: Sometimes Junie writes code I didn't ask for. Like creating a second `Application` class after being asked to setup Koin DI.

## Workflow

Bearing these limitations in mind, the workflow I settled on looked something like this:

- Work manually on some task
- Decide to take a break
- Commit all my changes
- Ask Junie to do some clearly defined task
- Go and do the dishes
- Come back and review Junie's work in Git
- Clean up some weirdness

All in all, this ended up working nicely and I saved a lot of time with it!
