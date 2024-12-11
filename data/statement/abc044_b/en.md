Score : $200$ points

## Problem Statement

Let $w$ be a string consisting of lowercase letters.
We will call $w$ *beautiful* if the following condition is satisfied:

- Each lowercase letter of the English alphabet occurs even number of times in $w$.

You are given the string $w$. Determine if $w$ is beautiful.

## Constraints

- $1 \leq |w| \leq 100$
- $w$ consists of lowercase letters (`a`-`z`).

## Input

The input is given from Standard Input in the following format:

> $w$

## Output

Print `Yes` if $w$ is beautiful. Print `No` otherwise.

```input1
abaccaba
```

```output1
Yes
```

`a` occurs four times, `b` occurs twice, `c` occurs twice and the other letters occur zero times.

```input2
hthth
```

```output2
No
```