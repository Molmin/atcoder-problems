Score : $1100$ points

## Problem Statement

**This is an interactive task.**

You have to guess a secret password $S$. 
A password is a nonempty string whose length is at most $L$. 
The characters of a password can be lowercase and uppercase english letters (a, b, ... , z, A, B, ... , Z) and digits (0, 1, ... , 9).

In order to guess the secret password $S$ you can ask queries.
A query is made of a valid password $T$, the answer to such query is the edit distance between $S$ and $T$ (the operations considered for the edit distance are: removal, insertion, substitution).
You can ask at most $Q$ queries.

**Note**: For a definition of edit distance (with operations: removal, insertion, substitution), see [this wikipedia page](https://en.wikipedia.org/w/index.php?title=Levenshtein_distance&amp;oldid=954598393).

## Constraints

- $L = 128$
- $Q = 850$
- The secret password $S$ is chosen before the beginning of the interaction.

## Interaction

To ask a query, print on Standard Output (with a newline at the end)

```plain
? $T$
```

The string $T$ must be a valid password.

The answer $ans$ to each query shall be read from Standard Input in the form:

```plain
$ans$
```

As soon as you have determined the hidden password $S$, you should print on Standard Output (with a newline at the end)

```plain
! $S$
```

and terminate your program.

## Judgement

- <font color="red">**After each output, you must flush Standard Output.**</font> Otherwise you may get `TLE`.
- After you print (your guess of) the hidden password, the program must be terminated immediately. Otherwise, the behavior of the judge is undefined.
- If the password you have determined is wrong, you will get `WA`.
- If you ask a malformed query (for example because the string is not a valid password, or you forget to put `?`) or if your program crashes or if you ask more than $Q$ queries, the behavior of the judge is undefined (it does not necessarily give `WA`).

## Samples

In the only sample testcase of this problem the hidden password is `Atcod3rIsGreat`.

The following one is an example of interaction if $S=$`Atcod3rIsGreat`.

Input
Output

$\texttt{? AtcoderIsBad}$

$5$

$\texttt{? AtcoderIsGreat}$

$1$

$\texttt{! Atcod3rIsGreat}$