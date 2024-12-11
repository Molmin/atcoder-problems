Score : $700$ points

## Problem Statement

Given is an integer sequence of length $N$: $A_1, A_2, \cdots, A_N$.

An integer sequence $X$, which is also of length $N$, will be chosen randomly by independently choosing $X_i$ from a uniform distribution on the integers $1, 2, \ldots, A_i$ for each $i (1 \leq i \leq N)$.

Compute the expected value of the length of the longest increasing subsequence of this sequence $X$, modulo $1000000007$.

More formally, under the constraints of the problem, we can prove that the expected value can be represented as a rational number, that is, an irreducible fraction $\frac{P}{Q}$, and there uniquely exists an integer $R$ such that $R \times Q \equiv P \pmod {1000000007}$ and $0 \leq R &lt; 1000000007$, so print this integer $R$.

## Notes

A subsequence of a sequence $X$ is a sequence obtained by extracting some of the elements of $X$ and arrange them without changing the order. The longest increasing subsequence of a sequence $X$ is the sequence of the greatest length among the strictly increasing subsequences of $X$.

## Constraints

- $1 \leq N \leq 6$
- $1 \leq A_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print the expected value modulo $1000000007$.

```input1
3
1 2 3
```

```output1
2
```

$X$ becomes one of the following, with probability $1/6$ for each:

- $X = (1,1,1)$, for which the length of the longest increasing subsequence is $1$;
- $X = (1,1,2)$, for which the length of the longest increasing subsequence is $2$;
- $X = (1,1,3)$, for which the length of the longest increasing subsequence is $2$;
- $X = (1,2,1)$, for which the length of the longest increasing subsequence is $2$;
- $X = (1,2,2)$, for which the length of the longest increasing subsequence is $2$;
- $X = (1,2,3)$, for which the length of the longest increasing subsequence is $3$.

Thus, the expected value of the length of the longest increasing subsequence is $(1 + 2 + 2 + 2 + 2 + 3) / 6 \equiv 2 \pmod {1000000007}$.

```input2
3
2 1 2
```

```output2
500000005
```

$X$ becomes one of the following, with probability $1/4$ for each:

- $X = (1,1,1)$, for which the length of the longest increasing subsequence is $1$;
- $X = (1,1,2)$, for which the length of the longest increasing subsequence is $2$;
- $X = (2,1,1)$, for which the length of the longest increasing subsequence is $1$;
- $X = (2,1,2)$, for which the length of the longest increasing subsequence is $2$.

Thus, the expected value of the length of the longest increasing subsequence is $(1 + 2 + 1 + 2) / 4 = 3 / 2$. Since $2 \times 500000005 \equiv 3 \pmod {1000000007}$, we should print $500000005$.

```input3
6
8 6 5 10 9 14
```

```output3
959563502
```