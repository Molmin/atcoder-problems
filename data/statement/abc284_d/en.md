Score : $400$ points

## Problem Statement

You are given a positive integer $N$. It is known that $N$ can be represented as $N=p^2q$ using two different prime numbers $p$ and $q$.

Find $p$ and $q$.

You have $T$ test cases to solve.

## Constraints

- All values in the input are integers.
- $1\leq T\leq 10$
- $1\leq N \leq 9\times 10^{18}$
- $N$ can be represented as $N=p^2q$ using two different prime numbers $p$ and $q$.

## Input

The input is given from Standard Input in the following format, where $\text{test}_i$ represents the $i$-th test case:

> $T$
> 
> $\text{test}_1$
> 
> $\text{test}_2$
> 
> $\vdots$
> 
> $\text{test}_T$

Each test case is in the following format:

> $N$

## Output

Print $T$ lines.

The $i$-th $(1\leq i \leq T)$ line should contain $p$ and $q$ for the $i$-th test case, separated by a space.
Under the constraints of this problem, it can be proved that the pair of prime numbers $p$ and $q$ such that $N=p^2q$ is unique.

```input1
3
2023
63
1059872604593911
```

```output1
17 7
3 7
104149 97711
```

For the first test case, we have $N=2023=17^2\times 7$. Thus, $p=17$ and $q=7$.