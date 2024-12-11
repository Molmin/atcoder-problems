Score : $650$ points

## Problem Statement

The definition of a good pair of sequences in this problem is the same as in Problem D.

A pair of sequences of length $M$ consisting of positive integers at most $N$, $(S, T) = ((S_1, S_2, \dots, S_M), (T_1, T_2, \dots, T_M))$, is said to **be a good pair of sequences** when $(S, T)$ satisfies the following condition.

- There exists a sequence $X = (X_1, X_2, \dots, X_N)$ of length $N$ consisting of $0$ and $1$ that satisfies the following condition:-   - $X_{S_i} \neq X_{T_i}$ for each $i=1, 2, \dots, M$.

Among the $N^{2M}$ possible pairs of sequences of length $M$ consisting of positive integers at most $N$, $(A, B) = ((A_1, A_2, \dots, A_M), (B_1, B_2, \dots, B_M))$, find the number, modulo $998244353$, of those that are good pairs of sequences.

## Constraints

- $1 \leq N \leq 30$
- $1 \leq M \leq 10^9$
- $N$ and $M$ are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$

## Output

Print the number, modulo $998244353$, of pairs of sequences of length $M$ consisting of positive integers at most $N$ that are good pairs of sequences.

```input1
3 2
```

```output1
36
```

For example, if $A=(1,2), B=(2,3)$, then $(A, B)$ is a good pair of sequences. Indeed, if we set $X=(0,1,0)$, then $X$ is a sequence of length $N$ consisting of $0$ and $1$ that satisfies $X_{A_1} \neq X_{B_1}$ and $X_{A_2} \neq X_{B_2}$. Thus, $(A, B)$ satisfies the condition of being a good pair of sequences.<br>
There are a total of $36$ good pairs of sequences, so print this number.

```input2
3 3
```

```output2
168
```

```input3
12 34
```

```output3
539029838
```

```input4
20 231104
```

```output4
966200489
```