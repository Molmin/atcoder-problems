Score : $500$ points

## Problem Statement

There are $N$ cards placed face down in a row. On each card, an integer $1$ or $2$ is written.

Let $A_i$ be the integer written on the $i$-th card.

Your objective is to guess $A_1, A_2, ..., A_N$ correctly.

You know the following facts:

- For each $i = 1, 2, ..., M$, the value $A_{X_i} + A_{Y_i} + Z_i$ is an even number.

You are a magician and can use the following magic any number of times:

**Magic**: Choose one card and know the integer $A_i$ written on it. The cost of using this magic is $1$.

What is the minimum cost required to determine all of $A_1, A_2, ..., A_N$?

It is guaranteed that there is no contradiction in given input.

## Constraints

- All values in input are integers.
- $2 \leq N \leq 10^5$
- $1 \leq M \leq 10^5$
- $1 \leq X_i &lt; Y_i \leq N$
- $1 \leq Z_i \leq 100$
- The pairs $(X_i, Y_i)$ are distinct.
- There is no contradiction in input. (That is, there exist integers $A_1, A_2, ..., A_N$ that satisfy the conditions.)

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $X_1$ $Y_1$ $Z_1$
> 
> $X_2$ $Y_2$ $Z_2$
> 
> $\vdots$
> 
> $X_M$ $Y_M$ $Z_M$

## Output

Print the minimum total cost required to determine all of $A_1, A_2, ..., A_N$.

```input1
3 1
1 2 1
```

```output1
2
```

You can determine all of $A_1, A_2, A_3$ by using the magic for the first and third cards.

```input2
6 5
1 2 1
2 3 2
1 3 3
4 5 4
5 6 5
```

```output2
2
```

```input3
100000 1
1 100000 100
```

```output3
99999
```