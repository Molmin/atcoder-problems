Score : $600$ points

## Problem Statement

We have $N$ boxes numbered $1$ to $N$. Initially, Box $i$ contains $A_i$ balls.

You will repeat the following operation $K$ times.

- Choose one box out of the $N$ uniformly at random (each time independently). Add one ball to the chosen box.

Let $B_i$ be the number of balls in Box $i$ after the $K$ operations, and the **score** be the product of the numbers of balls, $\prod_{i=1}^{N}B_i$.

Find the expected value of the score modulo $998244353$.

## Notes

When the expected value in question is represented as an irreducible fraction $p/q$, there uniquely exists an integer $r$ such that $rq\equiv p \pmod{998244353}$ and $0\leq r &lt; 998244353$ under the Constraints of this problem. This $r$ is the value we seek.

## Constraints

- $1 \leq N \leq 1000$
- $1 \leq K \leq 10^9$
- $0 \leq A_i \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $\ldots$ $A_N$

## Output

Print the answer.

```input1
3 1
1 2 3
```

```output1
665496245
```

After the operation, the score will be as follows.

- When choosing Box $1$ in the operation, $2\times 2\times 3=12$.
- When choosing Box $2$ in the operation, $1\times 3\times 3=9$.
- When choosing Box $3$ in the operation, $1\times 2\times 4=8$.

Therefore, the expected value in question is $\frac{1}{3}(12+9+8)=\frac{29}{3}$. This value modulo $998244353$ is $665496245$.

```input2
2 2
1 2
```

```output2
499122182
```

After the operations, the score will be as follows.

- When choosing Box $1$ in the first operation and Box $1$ in the second, $3\times 2=6$.
- When choosing Box $1$ in the first operation and Box $2$ in the second, $2\times 3=6$.
- When choosing Box $2$ in the first operation and Box $1$ in the second, $2\times 3=6$.
- When choosing Box $2$ in the first operation and Box $2$ in the second, $1\times 4=4$.

Therefore, the expected value in question is $\frac{1}{4}(6+6+6+4)=\frac{11}{2}$.

```input3
10 1000000000
998244350 998244351 998244352 998244353 998244354 998244355 998244356 998244357 998244358 998244359
```

```output3
138512322
```