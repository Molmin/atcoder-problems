Score : $400$ points

## Problem Statement

A set $A$ of positive integers is said to be **good** when it satisfies the following condition.

- For any two distinct elements $a, b \in A$, the string representing $a$ in base ten is **not** a substring of the string representing $b$ in base ten.

  What is a substring?
A substring of a string is its contiguous subsequence. For example, `1`, `12`, and `23` are substrings of `123`, while `21` and `13` are not.

<br>

You are given positive integers $L$ and $R$. Find the maximum possible number of elements in a good set $A$ consisting of integers between $L$ and $R$ (inclusive).

We will give you $T$ test cases; solve each of them.

## Constraints

- $1\leq T\leq 10^4$
- $1\leq L\leq R\leq 10^{9}$

## Input

Input is given from Standard Input in the following format:

> $T$
> 
> $\text{case}_1$
> 
> $\vdots$
> 
> $\text{case}_T$

Each case is in the following format:

> $L$ $R$

## Output

Print $T$ lines. The $i$-th line should contain the answer for $\text{case}_i$.

```input1
3
3 8
3 18
1 1000
```

```output1
6
10
900
```

For the first two cases, the following are good sets $A$ with the maximum number of elements.

- Case $1$: $A=\{3,4,5,6,7,8\}$.
- Case $2$: $A=\{3,4,6,8,9,10,11,12,15,17\}$.