Score : $400$ points

## Problem Statement

There are $N$ dice.
The $i$-th die has $K_i$ faces, with the numbers $A_{i,1}, A_{i,2}, \ldots, A_{i,K_i}$ written on them.
When you roll this die, each face appears with probability $\frac{1}{K_i}$.

You choose two dice from the $N$ dice and roll them.
Determine the maximum probability that the two dice show the same number, when the dice are chosen optimally.

## Constraints

- $2 \leq N \leq 100$
- $1 \leq K_i$
- $K_1 + K_2 + \dots + K_N \leq 10^5$
- $1 \leq A_{i,j} \leq 10^5$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $K_1$ $A_{1,1}$ $A_{1,2}$ $\dots$ $A_{1,K_1}$
> 
> $\vdots$
> 
> $K_N$ $A_{N,1}$ $A_{N,2}$ $\dots$ $A_{N,K_N}$

## Output

Print the answer.
Your answer is considered correct if the absolute or relative error from the true solution does not exceed $10^{-8}$.

```input1
3
3 1 2 3
4 1 2 2 1
6 1 2 3 4 5 6
```

```output1
0.333333333333333
```

- When choosing the 1st and 2nd dice, the probability that the outcomes are the same is $\frac{1}{3}$.
- When choosing the 1st and 3rd dice, the probability is $\frac{1}{6}$.
- When choosing the 2nd and 3rd dice, the probability is $\frac{1}{6}$.

Therefore, the maximum probability is $\frac{1}{3} = 0.3333333333\ldots$.

```input2
3
5 1 1 1 1 1
4 2 2 2 2
3 1 1 2
```

```output2
0.666666666666667
```