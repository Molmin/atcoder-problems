Score : $300$ points

## Problem Statement

There is an integer $X$ written on a blackboard. You can do the operation below any number of times (possibly zero).

- Choose an integer $x$ written on the blackboard.
- Erase one $x$ from the blackboard and write two new integers $\lfloor \frac{x}{2}\rfloor$ and $\lceil \frac{x}{2}\rceil$.

Find the maximum possible product of the integers on the blackboard after your operations, modulo $998244353$.

  What are $\lfloor \frac{x}{2}\rfloor$ and $\lceil \frac{x}{2}\rceil$? 

 For a real number $x$, $\lfloor x\rfloor$ denotes the largest integer not greater than $x$, and $\lceil x\rceil$ denotes the smallest integer not less than $x$. For example, the following holds.

- For $x = 2$, we have $\lfloor \frac{x}{2}\rfloor = 1$ and $\lceil \frac{x}{2}\rceil = 1$.
- For $x = 3$, we have $\lfloor \frac{x}{2}\rfloor = 1$, $\lceil \frac{x}{2}\rceil = 2$.

## Constraints

- $1\leq X \leq 10^{18}$

## Input

Input is given from Standard Input from the following format:

> $X$

## Output

Print the maximum possible product of the integers on the blackboard after your operations, modulo $998244353$.

```input1
15
```

```output1
192
```

Here is a sequence of operations that makes the product of the integers on the blackboard $192$.

- The initial state of the blackboard is $(15)$.
- An operation with $x = 15$ changes it to $(7, 8)$.
- An operation with $x = 7$ changes it to $(8, 3, 4)$.
- An operation with $x = 4$ changes it to $(8, 3, 2, 2)$.
- An operation with $x = 8$ changes it to $(3, 2, 2, 4, 4)$.

Here, the product of the integers on the blackboard is $3\times 2\times 2\times 4\times 4 = 192$.

```input2
3
```

```output2
3
```

Doing zero operations makes the product of the integers on the blackboard $3$.

```input3
100
```

```output3
824552442
```

The maximum possible product of the integers on the blackboard after your operations is $5856458868470016$, which should be printed modulo $998244353$.