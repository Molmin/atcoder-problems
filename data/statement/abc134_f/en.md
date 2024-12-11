Score : $600$ points

## Problem Statement

Let us define the *oddness* of a permutation $p$ = {$p_1,\ p_2,\ ...,\ p_n$} of {$1,\ 2,\ ...,\ n$} as $\sum_{i = 1}^n |i - p_i|$.

Find the number of permutations of {$1,\ 2,\ ...,\ n$} of oddness $k$, modulo $10^9+7$.

## Constraints

- All values in input are integers.
- $1 \leq n \leq 50$
- $0 \leq k \leq n^2$

## Input

Input is given from Standard Input in the following format:

> $n$ $k$

## Output

Print the number of permutations of {$1,\ 2,\ ...,\ n$} of oddness $k$, modulo $10^9+7$.

```input1
3 2
```

```output1
2
```

There are six permutations of {$1,\ 2,\ 3$}. Among them, two have oddness of $2$:  {$2,\ 1,\ 3$} and {$1,\ 3,\ 2$}.

```input2
39 14
```

```output2
74764168
```