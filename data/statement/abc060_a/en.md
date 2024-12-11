Score : $100$ points

## Problem Statement

You are given three strings $A$, $B$ and $C$. Check whether they form a *word chain*.

More formally, determine whether both of the following are true:

- The last character in $A$ and the initial character in $B$ are the same.
- The last character in $B$ and the initial character in $C$ are the same.

If both are true, print `YES`. Otherwise, print `NO`.

## Constraints

- $A$, $B$ and $C$ are all composed of lowercase English letters (`a` - `z`).
- $1 \leq |A|, |B|, |C| \leq 10$, where $|A|$, $|B|$ and $|C|$ are the lengths of $A$, $B$ and $C$, respectively.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $C$

## Output

Print `YES` or `NO`.

```input1
rng gorilla apple
```

```output1
YES
```

They form a word chain.

```input2
yakiniku unagi sushi
```

```output2
NO
```

$A$ and $B$ form a word chain, but $B$ and $C$ do not.

```input3
a a a
```

```output3
YES
```

```input4
aaaaaaaaab aaaaaaaaaa aaaaaaaaab
```

```output4
NO
```