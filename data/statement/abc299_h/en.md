Score : $600$ points

## Problem Statement

Takahashi has an unbiased six-sided die and a positive integer $R$ less than $10^9$.
Each time the die is cast, it shows one of the numbers $1,2,3,4,5,6$ with equal probability, independently of the outcomes of the other trials.

Takahashi will perform the following procedure.
Initially, $C=0$.

1. Cast the die and increment $C$ by $1$.
2. Let $X$ be the sum of the numbers shown so far. If $X-R$ is a multiple of $10^9$, quit the procedure.
3. Go back to step 1.

Find the expected value of $C$ at the end of the procedure, modulo $998244353$.

## Notes

Under the constraints of this problem, it can be shown that the expected value of $C$ is represented as an irreducible fraction $p/q$, and there is a unique integer $x\ (0\leq x\lt998244353)$ such that $xq \equiv p\pmod{998244353}$.
Print this $x$.

## Constraints

- $0\lt R\lt10^9$
- $R$ is an integer.

## Input

The input is given from Standard Input in the following format:

> $R$

## Output

Print a single line containing the answer.

```input1
1
```

```output1
291034221
```

The expected value of $C$ at the end of the procedure is approximately $833333333.619047619$, and $291034221$ when represented modulo $998244353$.

```input2
720357616
```

```output2
153778832
```