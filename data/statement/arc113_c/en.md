Score : $500$ points

## Problem Statement

Given is a string $S$ of length $N$. Let $s_i$ denote the $i$-th character of $S$. Find the maximum number of times the following operation can be done.

- Choose three consecutive characters in $S$, $s_i,s_{i+1},s_{i+2}\quad (1\leq i\leq |S|-2)$, such that $s_i=s_{i+1}\neq s_{i+2}$, and replace $s_{i+2}$ with $s_i$.

## Constraints

- $3 \leq |S| \leq 2\times 10^5$
- $S$ consists of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the maximum number of times the operation can be done.

```input1
accept
```

```output1
3
```

We can do the operation three times, as follows:

- do it with $i=2$, changing the string to `acccpt`;
- do it with $i=3$, changing the string to `acccct`;
- do it with $i=4$, changing the string to `accccc`.

```input2
atcoder
```

```output2
0
```

```input3
anerroroccurred
```

```output3
16
```