Score: $450$ points

## Problem Statement

You are given an integer $N$. You can perform the following two types of operations:

- Pay $X$ yen to replace $N$ with $\displaystyle\left\lfloor\frac{N}{A}\right\rfloor$.
- Pay $Y$ yen to roll a die (dice) that shows an integer between $1$ and $6$, inclusive, with equal probability. Let $b$ be the outcome of the die, and replace $N$ with $\displaystyle\left\lfloor\frac{N}{b}\right\rfloor$.

Here, $\lfloor s \rfloor$ denotes the greatest integer less than or equal to $s$. For example, $\lfloor 3 \rfloor=3$ and $\lfloor 2.5 \rfloor=2$.

Determine the minimum expected cost paid before $N$ becomes $0$ when optimally choosing operations.<br>
The outcome of the die in each operation is independent of other rolls, and the choice of operation can be made after observing the results of the previous operations.

## Constraints

- $1 \leq N \leq 10^{18}$
- $2 \leq A \leq 6$
- $1 \leq X, Y \leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $A$ $X$ $Y$

## Output

Print the answer.<br>
Your output will be considered correct if the absolute or relative error from the true answer is at most $10^{-6}$.

```input1
3 2 10 20
```

```output1
20.000000000000000
```

The available operations are as follows:

- Pay $10$ yen. Replace $N$ with $\displaystyle\left\lfloor\frac{N}{2}\right\rfloor$.
- Pay $20$ yen. Roll a die. Let $b$ be the outcome, and replace $N$ with $\displaystyle\left\lfloor\frac{N}{b}\right\rfloor$.

The optimal strategy is to perform the first operation twice.

```input2
3 2 20 20
```

```output2
32.000000000000000
```

The available operations are as follows:

- Pay $20$ yen. Replace $N$ with $\displaystyle\left\lfloor\frac{N}{2}\right\rfloor$.
- Pay $20$ yen. Roll a die. Let $b$ be the outcome, and replace $N$ with $\displaystyle\left\lfloor\frac{N}{b}\right\rfloor$.

The optimal strategy is as follows:

- First, perform the second operation to roll the die.-   - If the outcome is $4$ or greater, then $N$ becomes $0$.
-   - If the outcome is $2$ or $3$, then $N$ becomes $1$. Now, perform the first operation to make $N = 0$.
-   - If the outcome is $1$, restart from the beginning.

```input3
314159265358979323 4 223606797 173205080
```

```output3
6418410657.7408381
```