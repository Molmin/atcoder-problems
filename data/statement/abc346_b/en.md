Score: $200$ points

## Problem Statement

There is an infinitely long piano keyboard.
Is there a continuous segment within this keyboard that consists of $W$ white keys and $B$ black keys?

Let $S$ be the string formed by infinitely repeating the string `wbwbwwbwbwbw`.

Is there a substring of $S$ that consists of $W$ occurrences of `w` and $B$ occurrences of `b`?

What is a substring of $S$?
A substring of $S$ is a string that can be formed by concatenating the $l$-th, $(l+1)$-th, $\dots$, $r$-th characters of $S$ in this order for some two positive integers $l$ and $r$ $(l\leq r)$.

## Constraints

- $W$ and $B$ are integers.
- $0\leq W,B \leq 100$
- $W+B \geq 1$

## Input

The input is given from Standard Input in the following format:

> $W$ $B$

## Output

If there is a substring of $S$ that consists of $W$ occurrences of `w` and $B$ occurrences of `b`, print `Yes`; otherwise, print `No`.

```input1
3 2
```

```output1
Yes
```

The first $15$ characters of $S$ are `wbwbwwbwbwbwwbw`. You can take the $11$-th through $15$-th characters to form the string `bwwbw`, which is a substring consisting of three occurrences of `w` and two occurrences of `b`.

```input2
3 0
```

```output2
No
```

The only string consisting of three occurrences of `w` and zero occurrences of `b` is `www`, which is not a substring of $S$.

```input3
92 66
```

```output3
Yes
```