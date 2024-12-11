Score : $600$ points

## Problem Statement

We have $N$ continuous random variables $X_1,X_2,\dots,X_N$. $X_i$ has a continuous uniform distribution over the interval $\lbrack L_i, R_i \rbrack$.<br>
Let $E$ be the expected value of the $K$-th greatest value among the $N$ random variables. Print $E \bmod {998244353}$ as specified in Notes.

## Notes

In this problem, we can prove that $E$ is always a rational number. Additionally, the Constraints of this problem guarantee that, when $E$ is represented as an irreducible fraction $\frac{y}{x}$, $x$ is indivisible by $998244353$.<br>
Here, there uniquely exists an integer $z$ between $0$ and $998244352$ such that $xz \equiv y \pmod{998244353}$. Print this $z$ as the value $E \bmod {998244353}$. 

## Constraints

- $1 \leq N \leq 50$
- $1 \leq K \leq N$
- $0 \leq L_i \lt R_i \leq 100$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $L_1$ $R_1$
> 
> $L_2$ $R_2$
> 
> $\vdots$
> 
> $L_N$ $R_N$

## Output

Print $E \bmod {998244353}$.

```input1
1 1
0 2
```

```output1
1
```

The answer is the expected value of the random variable with a continuous uniform distribution over the interval $\lbrack 0, 2 \rbrack$. Thus, we should print $1$. 

```input2
2 2
0 2
1 3
```

```output2
707089751
```

The answer represented as a rational number is $\frac{23}{24}$. We have $707089751 \times 24 \equiv 23 \pmod{998244353}$, so we should print $707089751$.

```input3
10 5
35 48
44 64
47 59
39 97
36 37
4 91
38 82
20 84
38 50
39 69
```

```output3
810056397
```