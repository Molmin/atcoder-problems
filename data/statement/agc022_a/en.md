Score : $300$ points

## Problem Statement

Gotou just received a dictionary. However, he doesn't recognize the language used in the dictionary. He did some analysis on the dictionary and realizes that the dictionary contains all possible **diverse** words in lexicographical order.

A word is called **diverse** if and only if it is a nonempty string of English lowercase letters and all letters in the word are distinct. For example, `atcoder`, `zscoder` and `agc` are diverse words while `gotou` and `connect` aren't diverse words.

Given a diverse word $S$, determine the next word that appears after $S$ in the dictionary, i.e. the lexicographically smallest diverse word that is lexicographically larger than $S$, or determine that it doesn't exist.

Let $X = x_{1}x_{2}...x_{n}$ and $Y = y_{1}y_{2}...y_{m}$ be two distinct strings. $X$ is lexicographically larger than $Y$ if and only if $Y$ is a prefix of $X$ or $x_{j} &gt; y_{j}$ where $j$ is the smallest integer such that $x_{j} \neq y_{j}$.

## Constraints

- $1 \leq |S| \leq 26$
- $S$ is a diverse word.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the next word that appears after $S$ in the dictionary, or `-1` if it doesn't exist.

```input1
atcoder
```

```output1
atcoderb
```

`atcoderb` is the lexicographically smallest diverse word that is lexicographically larger than `atcoder`. Note that `atcoderb` is lexicographically smaller than `b`.

```input2
abc
```

```output2
abcd
```

```input3
zyxwvutsrqponmlkjihgfedcba
```

```output3
-1
```

This is the lexicographically largest diverse word, so the answer is `-1`.

```input4
abcdefghijklmnopqrstuvwzyx
```

```output4
abcdefghijklmnopqrstuvx
```