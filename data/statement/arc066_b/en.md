Score : $600$ points

## Problem Statement

You are given a positive integer $N$.
Find the number of the pairs of integers $u$ and $v$ $(0 \leq u,v \leq N)$ such that there exist two non-negative integers $a$ and $b$ satisfying $a$ $xor$ $b=u$ and $a+b=v$.
Here, $xor$ denotes the bitwise exclusive OR.
Since it can be extremely large, compute the answer modulo $10^9+7$.

## Constraints

- $1 \leq N \leq 10^{18}$

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print the number of the possible pairs of integers $u$ and $v$, modulo $10^9+7$.

```input1
3
```

```output1
5
```

The five possible pairs of $u$ and $v$ are:

- <p>$u=0,v=0$ (Let $a=0,b=0$, then $0$ $xor$ $0=0$, $0+0=0$.)</p>
- <p>$u=0,v=2$ (Let $a=1,b=1$, then $1$ $xor$ $1=0$, $1+1=2$.）</p>
- <p>$u=1,v=1$ (Let $a=1,b=0$, then $1$ $xor$ $0=1$, $1+0=1$.）</p>
- <p>$u=2,v=2$ (Let $a=2,b=0$, then $2$ $xor$ $0=2$, $2+0=2$.）</p>
- <p>$u=3,v=3$ (Let $a=3,b=0$, then $3$ $xor$ $0=3$, $3+0=3$.）</p>

```input2
1422
```

```output2
52277
```

```input3
1000000000000000000
```

```output3
787014179
```