Score: $200$ points

## Problem Statement

You are given a string $S$ consisting of lowercase English letters. Find the character that appears most frequently in $S$. If multiple such characters exist, report the one that comes earliest in alphabetical order.

## Constraints

- $1 \leq |S| \leq 1000$ ($|S|$ is the length of the string $S$.)
- Each character in $S$ is a lowercase English letter.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

Among the characters that appear most frequently in $S$, print the one that comes earliest in alphabetical order.

```input1
frequency
```

```output1
e
```

In `frequency`, the letter `e` appears twice, which is more than any other character, so you should print `e`.

```input2
atcoder
```

```output2
a
```

In `atcoder`, each of the letters `a`, `t`, `c`, `o`, `d`, `e`, and `r` appears once, so you should print the earliest in alphabetical order, which is `a`.

```input3
pseudopseudohypoparathyroidism
```

```output3
o
```