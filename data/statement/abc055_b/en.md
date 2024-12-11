Score : $200$ points

## Problem Statement

Snuke loves working out. He is now exercising $N$ times.

Before he starts exercising, his *power* is $1$. After he exercises for the $i$-th time, his power gets multiplied by $i$.

Find Snuke's power after he exercises $N$ times. Since the answer can be extremely large, print the answer modulo $10^{9}+7$.

## Constraints

- $1 \leq N \leq 10^{5}$

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print the answer modulo $10^{9}+7$.

```input1
3
```

```output1
6
```

- After Snuke exercises for the first time, his power gets multiplied by $1$ and becomes $1$.
- After Snuke exercises for the second time, his power gets multiplied by $2$ and becomes $2$.
- After Snuke exercises for the third time, his power gets multiplied by $3$ and becomes $6$.

```input2
10
```

```output2
3628800
```

```input3
100000
```

```output3
457992974
```

Print the answer modulo $10^{9}+7$.