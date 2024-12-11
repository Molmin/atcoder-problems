Score : $100$ points

## Problem Statement

You are given a string $S$ consisting of lowercase English letters.

Swap the $a$-th and $b$-th characters from the beginning of $S$ and print the resulting string.

## Constraints

- $S$ is a string consisting of lowercase English letters.
- The length of $S$, $|S|$, satisfies $2 \leq |S| \leq 10$.
- $1 \leq a &lt; b \leq |S|$
- $a$ and $b$ are integers.

## Input

Input is given from Standard Input in the following format:

> $S$
> 
> $a$ $b$

## Output

Print the answer.

```input1
chokudai
3 5
```

```output1
chukodai
```

After swapping the $3$-rd character `o` and $5$-th character `u` of `chokudai`, we have `chukodai`.

```input2
aa
1 2
```

```output2
aa
```

In this sample, after swapping the $1$-st and $2$-nd characters of $S$, we have the same string as $S$.

```input3
aaaabbbb
1 8
```

```output3
baaabbba
```