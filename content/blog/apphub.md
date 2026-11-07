What do you do when you vibe-code so many apps that you can't keep track of them anymore? You vibe-code your own app-store.

_This post is 100% human-written. I have strong feelings about using AI for writing, [which you can read about here](https://www.lukeneedham.com/blog/100-human-written)_

## Where it all started

Every creative knows the feeling: too many ideas, not enough time to build them all. No longer so with the advent of agentic AI! LLMs have literally given me the gift of *more time*. 

The new problem is that making apps is addictive, and before you know it, you end up with more apps than you can keep track of...

## App overload

It won't surprise any engineer to hear that the real time-sucker of these projects isn't the initial POC, but the endless tweaking and maintenance afterwards. Claude can spin up a working Notes app in minutes, but to get it working according to my product vision still takes many hours over many iterations. 

And when you're building as many apps as I am, its easy to lose track of them. More than once I've rediscovered long forgotten Claude chats and been re-inspired with new features for an app I'd left for dead.

So problem 1 is: I'm building too many apps.

But for each of those apps Im also simultaneously building many features at once.

So problem 2 is: For each app, I'm building too many features.

 Some questions arise:
- How do I know which version of the app I have installed?
- How do I know which feature I need to test?
- How do I know that the apk file for a given feature has all the latest changes and isn't stale?

## The solution

So what did I do? I built my own app store - this is my AppHub. It shows me:
- all the apps I'm building
- all the features I'm working on 
- all the app builds available (and which are up-to-date)

It lets me easily switch between different versions of an app without ending up with 200 apk files in my Downloads folder every weekend. 

## My workflow

Lets set the scene. Its 2am and I've just woken up with an epiphany - I need to make all the buttons in VideoDiary hot pink.

My workflow looks something like this:
- Grab my phone and open AppHub
- Select VideoDiary and start a new Claude session 
- Ramble to Claude about my vision
- Read his feedback. Assure him that I'm absolutely sure about this
- Let him do his thing while I do something else: usually yapping to a different Claude session
- Claude lets me know the changes are ready for testing and drops the AppHub link
- I click the link, install the update, see a flood of hot pink and feel a feeling that's hard to describe
- Open the PR Claude opened for this work
- Pretend to read the diff, then click merge
- Ask Claude to publish a release
- Go back to sleep

You'll notice my workflow involves a lot of app-jumping. The system task switcher is quite clunky for this, which inspired me to build Fan (you can see how I ended up with too many apps). Fan opens a little overlay with my recent apps - basically an Alt+Tab for my phone. You can read more about it [here](https://github.com/LukeNeedham/Android-Dock)

## Behind the scenes

Behind the scenes Im relying on Github CI to build apks for every PR. AppHub finds that apk and checks to see if its a new build or one I already have installed. That lets me know whether I need to update or not.

But how do I keep my CI workflows aligned across all my apps? Surely this is the problem we started with?

That's where [ci-workflows](https://github.com/LukeNeedham/ci-workflows) comes in. This is a repo containing all the stuff shared with all my apps. It has the workflows, Claude skill files, and common app utils. Let's briefly visit each.

### Common app utils
These are things like a logger, crash reporting, debug settings. They're provided by an Android library published as a versioned artifact, and each app pulls in an explicit version - nothing special there.

### Workflows
The workflows are set up as common actions, and each app just needs a small caller workflow to make use of it - that way the workflows don't need to be duplicated in each app project. These workflows do things like making the test build, generating screenshots for UI changes, and enforcing a common app architecture.

### Claude skills
This one took some thinking. How do I reuse skill files across app repos, while ensuring they dont drift across apps? Well crucially, my common repo also has a json file listing all the apps I'm working on. Every time I make a change to a skill file in this repo, it automatically synchronises by opening PRs on all my projects with the updated skill file, then auto-merges as soon as CI passes.

## What does this cost me?

€20 a month - the cost of a basic Claude subscription.

What about CI? Well that's free. Most of my apps are for personal use, which means I can build them open-source. The trick is that Github gives *free unlimited* CI time to open source projects - same for artifact hosting. This seems insane to me in the age of LLMs, and I expect them to change this in the near future - but for now I'm making full use of it.

What about my laptop? I don't use it - all I need is my phone. My IDE is 3 apps: AppHub + Claude + Github. My mechanical keyboard has been replaced by my microphone, and my CPU twiddles its silicon thumbs while my apks cook in the cloud.

## The future

This workflow is far from complete. Just writing this piece, 3 glaring feature gaps hit me. The joy is that, unlike just one year ago, I'll probably actually build those features instead of letting them roll around my head forever.