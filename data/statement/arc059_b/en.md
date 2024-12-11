Score : $400$ points

## Problem Statement

Given a string $t$, we will call it *unbalanced* if and only if the length of $t$ is at least $2$, and more than half of the letters in $t$ are the same. For example, both `voodoo` and `melee` are unbalanced, while neither `noon` nor `a` is.

You are given a string $s$ consisting of lowercase letters. Determine if there exists a (contiguous) substring of $s$ that is unbalanced. If the answer is positive, show a position where such a substring occurs in $s$.

## Constraints

- $2 \leq |s| \leq 10^5$
- $s$ consists of lowercase letters.

## Partial Score

- $200$ points will be awarded for passing the test set satisfying $2 \leq N \leq 100$.

## Input

The input is given from Standard Input in the following format:

> $s$

## Output

If there exists no unbalanced substring of $s$, print `-1 -1`.

If there exists an unbalanced substring of $s$, let one such substring be $s_a s_{a+1} ... s_{b}$ $(1 \leq a &lt; b \leq |s|)$, and print `$a$ $b$`. If there exists more than one such substring, any of them will be accepted.

```input1
needed
```

```output1
2 5
```

The string $s_2 s_3 s_4 s_5$ $=$ `eede` is unbalanced. There are also other unbalanced substrings. For example, the output `2 6` will also be accepted.

```input2
atcoder
```

```output2
-1 -1
```

The string `atcoder` contains no unbalanced substring.