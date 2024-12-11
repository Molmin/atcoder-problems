Score : $800$ points

## Problem Statement

Consider a permutation $P=(P_1,P_2,\cdots,P_{2^N-1})$ of $(1,2,\cdots,2^N-1)$.
$P$ is said to be **heaplike** if and only if all of the following conditions are satisfied.

- $P_i &lt; P_{2i}$ ($1 \leq i \leq 2^{N-1}-1$)
- $P_i &lt; P_{2i+1}$ ($1 \leq i \leq 2^{N-1}-1$)

You are given integers $A$ and $B$.
Let $U=2^A$ and $V=2^{B+1}-1$.

Find the probability, modulo $998244353$, that $P_U&lt;P_V$ for a heaplike permutation chosen uniformly at random.

Definition of probability modulo $998244353$

It can be proved that the sought probability is always rational. Additionally, under the constraints of this problem, when the sought rational number is represented as an irreducible fraction $\frac{P}{Q}$, it can be proved that $Q \neq 0 \pmod{998244353}$. Therefore, there is a unique integer $R$ such that $R \times Q \equiv P \pmod{998244353}$ and $0 \leq R \lt 998244353$. Print this $R$.

## Constraints

- $2 \leq N \leq 5000$
- $1 \leq A,B \leq N-1$
- All numbers in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $A$ $B$

## Output

Print the answer.

```input1
2 1 1
```

```output1
499122177
```

There are two heaplike permutations: $P=(1,2,3),(1,3,2)$.
The probability that $P_2&lt;P_3$ is $1/2$.

```input2
3 1 2
```

```output2
124780545
```

```input3
4 3 2
```

```output3
260479386
```

```input4
2022 12 25
```

```output4
741532295
```