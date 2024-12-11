Score : $200$ points

## Problem Statement

You are given two strings $S$ and $T$ consisting of lowercase English letters.

Determine if there exists a pair of integers $c$ and $w$ such that $1 \leq c \leq w &lt; |S|$ and the following condition is satisfied. Here, $|S|$ denotes the length of the string $S$. Note that $w$ must be **less than** $|S|$.

- If $S$ is split at every $w$ characters from the beginning, the concatenation of the $c$-th characters of the substrings of length at least $c$ in order equals $T$.

## Constraints

- $S$ and $T$ are strings consisting of lowercase English letters.
- $1 \leq |T|$ <span style="color: red; ">$\leq$</span> $|S| \leq 100$

## Input

The input is given from Standard Input in the following format:

> $S$ $T$

## Output

Print `Yes` if there exists a pair of integers $c$ and $w$ such that $1 \leq c \leq w &lt; |S|$ and the condition is satisfied, and `No` otherwise.

```input1
atcoder toe
```

```output1
Yes
```

If $S$ is split at every two characters, it looks like this:

```output1
at
co
de
r
```

Then, the concatenation of the 2nd characters of the substrings of length at least $2$ is `toe`, which equals $T$. Thus, print `Yes`.

```input2
beginner r
```

```output2
No
```

$w=|S|$ is not allowed, and no pair of integers $1 \leq c \leq w &lt; |S|$ satisfies the condition. Thus, print `No`.

```input3
verticalreading agh
```

```output3
No
```