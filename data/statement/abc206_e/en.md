Score : $500$ points

## Problem Statement

Given integers $L$ and $L,R\ (L \le R)$, find the number of pairs $(x,y)$ of integers satisfying all of the conditions below:

- $L \le x,y \le R$
- Let $g$ be the greatest common divisor of $x$ and $y$. Then, the following holds.-   - $g \neq 1$, $\frac{x}{g} \neq 1$, and $\frac{y}{g} \neq 1$.

## Constraints

- All values in input are integers.
- $1 \le L \le R \le 10^6$

## Input

Input is given from Standard Input in the following format:

> $L$ $R$

## Output

Print the answer as an integer.

```input1
3 7
```

```output1
2
```

Let us take some number of pairs of integers, for example.

- $(x,y)=(4,6)$ satisfies the conditions.
- $(x,y)=(7,5)$ has $g=1$ and thus violates the condition.
- $(x,y)=(6,3)$ has $\frac{y}{g}=1$ and thus violates the condition.

There are two pairs satisfying the conditions: $(x,y)=(4,6),(6,4)$.

```input2
4 10
```

```output2
12
```

```input3
1 1000000
```

```output3
392047955148
```