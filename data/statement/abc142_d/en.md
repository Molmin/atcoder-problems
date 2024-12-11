Score : $400$ points

## Problem Statement

Given are positive integers $A$ and $B$.

Let us choose some number of positive common divisors of $A$ and $B$.

Here, any two of the chosen divisors must be coprime.

At most, how many divisors can we choose?

Definition of common divisor

An integer $d$ is said to be a common divisor of integers $x$ and $y$ when $d$ divides both $x$ and $y$.

Definition of being coprime

Integers $x$ and $y$ are said to be coprime when $x$ and $y$ have no positive common divisors other than $1$.

Definition of dividing

An integer $x$ is said to divide another integer $y$ when there exists an integer $\alpha$ such that $y = \alpha x$.

## Constraints

- All values in input are integers.
- $1 \leq A, B \leq 10^{12}$

## Input

Input is given from Standard Input in the following format:

> $A$ $B$

## Output

Print the maximum number of divisors that can be chosen to satisfy the condition.

```input1
12 18
```

```output1
3
```

$12$ and $18$ have the following positive common divisors: $1$, $2$, $3$, and $6$.

$1$ and $2$ are coprime, $2$ and $3$ are coprime, and $3$ and $1$ are coprime, so we can choose $1$, $2$, and $3$, which achieve the maximum result.

```input2
420 660
```

```output2
4
```

```input3
1 2019
```

```output3
1
```

$1$ and $2019$ have no positive common divisors other than $1$.