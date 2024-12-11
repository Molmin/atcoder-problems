Score : $600$ points

## Problem Statement

You are given positive integers $A_{1}, A_{2}, A_{3}$. Find the number, modulo $998244353$, of tuples of positive integers $(X_{1}, X_{2}, X_{3})$ that satisfy all of the following conditions.

- $X_{1}$ is a positive integer with $A_{1}$ digits in decimal notation.
- $X_{2}$ is a positive integer with $A_{2}$ digits in decimal notation.
- $X_{3}$ is a positive integer with $A_{3}$ digits in decimal notation.
- $X_{1} + X_{2} = X_{3}$.

You are given $T$ test cases per input file; solve each of them.

## Constraints

- $1 \leq T \leq 10^{5}$
- $1 \leq A_{i} \leq 10^{9}$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\text{case}_{1}$
> 
> $\text{case}_{2}$
> 
> $\vdots$
> 
> $\text{case}_{T}$

Each case is given in the following format:

> $A_{1}$ $A_{2}$ $A_{3}$

## Output

Print $T$ lines. The $i$-th line should contain the answer for $\text{case}_{i}$.

```input1
4
1 1 1
1 6 7
167 167 167
111 666 777
```

```output1
36
45
731780675
0
```

For the first case, tuples such as $(X_{1}, X_{2}, X_{3}) = (1, 6, 7), (2, 1, 3)$ satisfy the conditions.

On the other hand, tuples such as $(X_{1}, X_{2}, X_{3}) = (6, 7, 13), (3, 4, 5)$ do not.

There are $36$ tuples $(X_{1}, X_{2}, X_{3})$ that satisfy the conditions, so print $36$.

For the third case, remember to print the result modulo $998244353$.

For the fourth case, there may be no tuples $(X_{1}, X_{2}, X_{3})$ that satisfy the conditions.