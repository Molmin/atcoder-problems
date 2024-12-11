Score : $600$ points

## Problem Statement

An integer sequence of length between $1$ and $N$, inclusive, where each element is between $1$ and $M$, inclusive, is called a **good sequence**.

The **score** of a good sequence is defined as the number of positive divisors of $X$, where $X$ is the product of the elements in the sequence.

There are $\displaystyle \sum_{k=1}^{N}M^k$ good sequences. Find the sum of the scores of all those sequences modulo $998244353$.

## Constraints

- $1 \leq N \leq 10^{18}$
- $1 \leq M \leq 16$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the answer as an integer.

```input1
1 7
```

```output1
16
```

There are seven good sequences: $(1),(2),(3),(4),(5),(6),(7)$. Their scores are $1,2,2,3,2,4,2$, respectively, so the answer is $1+2+2+3+2+4+2=16$.

```input2
3 11
```

```output2
16095
```

For example, $(8,11)$ and $(1,8,2)$ are good sequences. Here is the process of calculating their scores:

- The product of the elements in $(8,11)$ is $8 \times 11 = 88$. $88$ has eight positive divisors: $1,2,4,8,11,22,44,88$, so the score of $(8,11)$ is $8$.
- The product of the elements in $(1,8,2)$ is $1 \times 8 \times 2 = 16$. $16$ has five positive divisors: $1,2,4,8,16$, so the score of $(1,8,2)$ is $5$.

```input3
81131 14
```

```output3
182955659
```

Remember to take the result modulo $998244353$.