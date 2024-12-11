Score : $400$ points

## Problem Statement

For a positive integer $n$, let $\mathrm{str}(n)$ be the string representing $n$ in decimal.

We say that a positive integer $n$ is *periodic* when there exists a positive integer $m$ such that $\mathrm{str}(n)$ is the concatenation of two or more copies of $\mathrm{str}(m)$. For example, $11$, $1212$, and $123123123$ are periodic.

You are given a positive integer $N$ at least $11$. Find the greatest periodic number at most $N$. It can be proved that there is at least one periodic number at most $N$.

You will get $T$ test cases to solve.

## Constraints

- $1 \leq T \leq 10^4$
- $11 \leq N &lt; 10^{18}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $T$
> 
> $\mathrm{case}_1$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Each case is given in the following format:

> $N$

## Output

Print $T$ lines. The $i$-th line should contain the answer for the $i$-th test case.

```input1
3
1412
23
498650499498649123
```

```output1
1313
22
498650498650498650
```

For the first test case, the periodic numbers at most $1412$ include $11$, $222$, $1212$, $1313$, and the greatest is $1313$.