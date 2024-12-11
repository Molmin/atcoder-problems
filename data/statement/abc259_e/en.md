Score : $500$ points

## Problem Statement

There are $N$ integers $a_1,\ldots,a_N$ written on a whiteboard.<br>
Here, $a_i$ can be represented as $a_i = p_{i,1}^{e_{i,1}} \times \ldots \times p_{i,m_i}^{e_{i,m_i}}$ using $m_i$ prime numbers $p_{i,1} \lt \ldots \lt p_{i,m_i}$ and positive integers $e_{i,1},\ldots,e_{i,m_i}$.<br>
You will choose one of the $N$ integers to replace it with $1$.<br>
Find the number of values that can be the least common multiple of the $N$ integers after the replacement.

## Constraints

- $1 \leq N \leq 2 \times 10^5$
- $1 \leq m_i$
- $\sum{m_i} \leq 2 \times 10^5$
- $2 \leq p_{i,1} \lt \ldots \lt p_{i,m_i} \leq 10^9$
- $p_{i,j}$ is prime.
- $1 \leq e_{i,j} \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $m_1$
> 
> $p_{1,1}$ $e_{1,1}$
> 
> $\vdots$
> 
> $p_{1,m_1}$ $e_{1,m_1}$
> 
> $m_2$
> 
> $p_{2,1}$ $e_{2,1}$
> 
> $\vdots$
> 
> $p_{2,m_2}$ $e_{2,m_2}$
> 
> $\vdots$
> 
> $m_N$
> 
> $p_{N,1}$ $e_{N,1}$
> 
> $\vdots$
> 
> $p_{N,m_N}$ $e_{N,m_N}$

## Output

Print the answer.

```input1
4
1
7 2
2
2 2
5 1
1
5 1
2
2 1
7 1
```

```output1
3
```

The integers on the whiteboard are $a_1 =7^2=49, a_2=2^2 \times 5^1 = 20, a_3 = 5^1 = 5, a_4=2^1 \times 7^1 = 14$.<br>
If you replace $a_1$ with $1$, the integers on the whiteboard become $1,20,5,14$, whose least common multiple is $140$.<br>
If you replace $a_2$ with $1$, the integers on the whiteboard become $49,1,5,14$, whose least common multiple is $490$.<br>
If you replace $a_3$ with $1$, the integers on the whiteboard become $49,20,1,14$, whose least common multiple is $980$.<br>
If you replace $a_4$ with $1$, the integers on the whiteboard become $49,20,5,1$, whose least common multiple is $980$.<br>
Therefore, the least common multiple of the $N$ integers after the replacement can be $140$, $490$, or $980$, so the answer is $3$.

```input2
1
1
998244353 1000000000
```

```output2
1
```

There may be enormous integers on the whiteboard.