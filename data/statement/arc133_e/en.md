Score : $800$ points

## Problem Statement

Given are integers $N$, $M$, $V$, and $A$.
Consider the following procedure.

- Choose a sequence of $N$ integers between $1$ and $V$ (inclusive): $x=(x_1,x_2,\cdots,x_N)$.
- Choose a sequence of $M$ integers between $1$ and $V$ (inclusive): $y=(y_1,y_2,\cdots,y_M)$.
- Let $a$ be a variable and initialize it with $a=A$.
- For each $i=0,1,\cdots,N \times M-1$, do the following.-   - Replace the value of $a$ with the median of $a,x_{(i \bmod N)+1},y_{(i \bmod M)+1}$.
- Print the final value of $a$.

Consider doing this procedure with every possible pair of sequences $x,y$. Find the sum of the values that will be printed, modulo $998244353$.

## Constraints

- $1 \leq N,M \leq 200000$
- $1 \leq A \leq V \leq 200000$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $V$ $A$

## Output

Print the answer.

```input1
2 1 2 1
```

```output1
11
```

For example, when $x=(1,2),y=(2)$, the procedure goes as follows.

- Initialize $a$ with $a=1$.
- For $i=1$: replace the value of $a$ with the median of $a(=1),x_1(=1),y_1(=2)$, which is $1$.
- For $i=2$: replace the value of $a$ with the median of $a(=1),x_2(=2),y_1(=2)$, which is $2$.
- Print $a(=2)$.

There are three cases where $2$ will be printed: $(x=(1,2),y=(2))$, $(x=(2,1),y=(2))$, $(x=(2,2),y=(2))$. In the other five cases, $1$ will be printed.
Therefore, the answer is $2 \times 3 + 1\times 5=11$.

```input2
2 2 5 4
```

```output2
2019
```

```input3
2100 2300 2201 2022
```

```output3
407723438
```