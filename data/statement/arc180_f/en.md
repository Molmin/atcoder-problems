Score : $1100$ points

## Problem Statement

You are given integers $N$ and $A$.

You will perform the following operations:

- Generate $N$ real numbers uniformly at random between $0$ and $1$, inclusive. All generations are independent, and the random numbers are uniformly distributed.
- Call the generated $N$ real numbers $x_1, x_2, \cdots, x_N$ in ascending order. That is, $0 \leq x_1 \leq x_2 \leq \cdots \leq x_N \leq 1$.
- Your score is given by the following formula:

$\displaystyle \prod_{i=1}^{N} \left(1+\sum_{j=i+1}^N x_j^A \right)$

Calculate the expected value, modulo $10^9+7$, of the score.

Definition of expected value modulo $10^9+7$

It can be proved that the sought expected value is always rational. Furthermore, under the constraints of this problem, it can be proved that if the expected value is expressed as an irreducible fraction $\frac{P}{Q}$, then $Q \neq 0 \pmod{10^9+7}$. Therefore, there exists a unique integer $R$ such that $R \times Q \equiv P \pmod{10^9+7}, 0 \leq R &lt; 10^9+7$. Report this $R$.

## Constraints

- $1 \leq N \leq 10^4$
- $1 \leq A \leq 5 \times 10^4$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $A$

## Output

Print the answer.

```input1
2 1
```

```output1
666666673
```

The expected value of the score is $5/3$.

```input2
1 1
```

```output2
1
```

```input3
2 2
```

```output3
500000005
```

```input4
3 2
```

```output4
142857147
```

```input5
5 3
```

```output5
758371066
```

```input6
10000 12345
```

```output6
32201773
```