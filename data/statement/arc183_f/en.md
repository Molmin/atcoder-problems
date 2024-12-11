Score : $1100$ points

## Problem Statement

You are given positive integers $A$, $B$, $X$, $Y$, and $N$.
Here, the following is guaranteed:

- $A&lt;B$
- $\gcd(A,B)=1$
- $1 \leq N \leq A+B-1$

For an integer $n$, define $f(n)$ as follows:

- You start with an integer $x=0$. $f(n)$ is the minimum total cost to achieve $x=n$ by repeatedly performing the following operations.-   - Replace the value of $x$ with $x+A$. The cost of this operation is $X$.
-   - Replace the value of $x$ with $x-A$. The cost of this operation is $X$.
-   - Replace the value of $x$ with $x+B$. The cost of this operation is $Y$.
-   - Replace the value of $x$ with $x-B$. The cost of this operation is $Y$.

It can be proved from the constraints on $A$ and $B$ that $f(n)$ is defined for any integer $n$.

Find the value of $\sum_{1 \leq n \leq N} f(n)$, modulo $998244353$.

There are $T$ test cases for each input.

## Constraints

- $1 \leq T \leq 1000$
- $1 \leq A&lt;B \leq 10^9$
- $\gcd(A,B)=1$
- $1 \leq X,Y \leq 10^9$
- $1 \leq N \leq A+B-1$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $case_1$
> 
> $case_2$
> 
> $\vdots$
> 
> $case_T$

Each test case is given in the following format:

> $A$ $B$ $X$ $Y$ $N$

## Output

Print the answer for each test case.

```input1
4
1 2 1 1 2
3 5 2 4 6
79 85 72 95 4
80980429 110892168 22712439 520643153 66132787
```

```output1
2
34
18111
785776602
```

In the first test case, $f(1)=1$ and $f(2)=1$.

In the second test case, $f(1)=8$, $f(2)=6$, $f(3)=2$, $f(4)=10$, $f(5)=4$, and $f(6)=4$.