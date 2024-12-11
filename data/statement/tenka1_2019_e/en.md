Score : $800$ points

## Problem Statement

You are given a polynomial of degree $N$ with integer coefficients: $f(x)=a_Nx^N+a_{N-1}x^{N-1}+...+a_0$. Find all prime numbers $p$ that divide $f(x)$ for every integer $x$.

## Constraints

- $0 \leq N \leq 10^4$
- $|a_i| \leq 10^9(0\leq i\leq N)$
- $a_N \neq 0$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_N$
> 
> $:$
> 
> $a_0$

## Output

Print all prime numbers $p$ that divide $f(x)$ for every integer $x$, in ascending order.

```input1
2
7
-7
14
```

```output1
2
7
```

$2$ and $7$ divide, for example, $f(1)=14$ and $f(2)=28$.

```input2
3
1
4
1
5
```

```output2

```

There may be no integers that satisfy the condition.

```input3
0
998244353
```

```output3
998244353
```