Score : $1000$ points

## Problem Statement

Given is an integer sequence of length $N+1$: $X_0,X_1,\ldots,X_N$, where $0=X_0 &lt; X_1 &lt; \ldots &lt; X_N$ holds.

Now, $N$ people numbered $1$ through $N$ will appear on a number line.
Person $i$ will appear at a **real** coordinate chosen uniformly at random from the interval $[X_{i-1},X_i]$.

Find the expected value of the smallest distance between two people, modulo $998244353$.

Definition of the expected value modulo $998244353$

We can prove that the expected value in question is always a rational number.
We can also prove that, under the constraints of this problem, if we express the expected value as an irreducible fraction $\frac{P}{Q}$, we have $Q \neq 0 \pmod{998244353}$.
Thus, there uniquely exists an integer $R$ such that $R \times Q \equiv P \pmod{998244353}, 0 \leq R &lt; 998244353$.
Report this $R$.

## Constraints

- $2 \leq N \leq 20$
- $0=X_0 &lt; X_1 &lt; \cdots &lt; X_N \leq 10^6$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $X_0$ $X_1$ $\ldots$ $X_N$

## Output

Print the expected value of the smallest distance between two people, modulo $998244353$.

```input1
2
0 1 3
```

```output1
499122178
```

There are just two people, so the expected value of the smallest distance between two people is just the expected value of the distance between Person $1$ and Person $2$.
The answer is $3/2$.

```input2
5
0 3 4 8 9 14
```

```output2
324469854
```

The answer is $196249/172800$.

```input3
20
0 38927 83112 125409 165053 204085 246405 285073 325658 364254 406395 446145 485206 525532 563762 605769 644863 683453 722061 760345 798556
```

```output3
29493181
```