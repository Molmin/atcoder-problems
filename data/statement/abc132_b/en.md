Score : $200$ points

## Problem Statement

We have a permutation $p$ = {$p_1,\ p_2,\ ...,\ p_n$} of {$1,\ 2,\ ...,\ n$}.

Print the number of elements $p_i$ ($1 &lt; i &lt; n$) that satisfy the following condition:

- $p_i$ is the second smallest number among the three numbers $p_{i - 1}$, $p_i$, and $p_{i + 1}$.

## Constraints

- All values in input are integers.
- $3 \leq n \leq 20$
- $p$ is a permutation of {$1,\ 2,\ ...,\ n$}.

## Input

Input is given from Standard Input in the following format:

> $n$
> 
> $p_1$ $p_2$ $...$ $p_n$

## Output

Print the number of elements $p_i$ ($1 &lt; i &lt; n$) that satisfy the condition.

```input1
5
1 3 5 4 2
```

```output1
2
```

$p_2 = 3$ is the second smallest number among $p_1 = 1$, $p_2 = 3$, and $p_3 = 5$. Also, $p_4 = 4$ is the second smallest number among $p_3 = 5$, $p_4 = 4$, and $p_5 = 2$. These two elements satisfy the condition.

```input2
9
9 6 3 2 5 8 7 4 1
```

```output2
5
```