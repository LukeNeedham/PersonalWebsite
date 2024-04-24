When you think of localising strings in Android, you probably think of `strings.xml`.
It works... but it can be better!

## What's the problem?

- XML is ugly
- It's hard to keep related strings organised
- Placeholder formatting is not type-safe
- IDE support isn't great
- The system chooses the locale to use, not your app

Let's try and fix these issues using pure Kotlin!

## Step 1 - Define StringKey

We need to define a way to lookup strings. In XML we used resource ids like `R.string.something`.
In Kotlin we can use `StringKey`.

```kotlin
sealed interface StringKey {

    enum class Home : StringKey {
        Title,
        Desc,
    }

    sealed interface Login : StringKey {
        object Title : Login
        data class Desc(val attemptCount: Int) : Login
    }

    object Confirm : StringKey
}
```

Check out the problems we've already solved:
- By using nested sealed hierarchies we can easily create logical groupings of strings
- By modelling keys as `data class`, we have a neat type-safe API for placeholder formatting

## Step 2 - Define StringProvider

This step is easy. We just create an interface that maps `StringKey`s to their values.

```kotlin
interface StringProvider {
    fun getString(key: StringKey): String
}
```

## Step 3 - Implement StringProvider

Now we actually provide the mapping from `StringKey` to localised value.
You can create as many StringProvider implementations as you need, at least one for each language your app supports.
We'll start with the English localisation.

```kotlin
class StringProviderEnglish : StringProvider {
    override fun getString(key: StringKey) = when(key) {
        is Home -> when(key) {
            Home.Title -> "Home"
            Home.Desc -> "Welcome"
        }
        is Login -> when(key) {
            is Login.Title -> "Login"
            is Login.Desc ->
                "Login attempt ${key.attemptCount}"
        }
        is Confirm -> "Confirm"
    }
}
```

Note that this is just normal Kotlin, so you can organise your `StringProvider`s however you like.
As your app grows, you might decide to split your mappings across multiple functions or classes to keep them nicely organised.

## Step 4 - Add use-site sugar

So far so good... but how does your UI actually use this API? Let's add some Compose sugar to make life easy.

```kotlin
val LocalStringProvider = staticCompositionLocalOf<StringProvider> {
    StringProviderDefault()
}

@Composable
fun provideString(key: StringKey): String =
    LocalStringProvider.current.getString(key)
```

Make sure you setup `LocalStringProvider` in your Compose root to use the correct `StringProvider` based on the user's preferences.

Once done, this lets you lookup strings like so:
```kotlin
Text(
    text = provideString(
        StringKey.Login.Desc(viewModel.attemptCount)
    )
)
```

I hope you like it!