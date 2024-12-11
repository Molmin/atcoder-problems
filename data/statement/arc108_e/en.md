Score : $700$ points

## Problem Statement

There are $N$ isu - chairs in Japanese - arranged from left to right.
The $i$-th chair from the left has the ID number $a_i$. Here, it is guaranteed that $a_i$ are distinct.

Snuke has decided to mark some of the chairs and throw away the rest. Initially, no chair is marked.
We call a choice of marked chairs *good* when the IDs of the marked chairs are monotonically increasing from left to right.

Snuke has decided to do the following procedure to mark chairs:

1. We say a chair $x$ to be *nice* if (and only if) the choice of marked chairs is still good when $x$ gets marked. Let $k$ be the current number of nice chairs.
2. If $k=0$, remove the unmarked chairs and terminate the procedure. Otherwise, choose one from the $k$ nice chairs with equal probability, mark it, and go back to Step 1.

It can be proved that the expected value of the number of chairs that remain at the end of the procedure is a rational number. Let this value be $P/Q$, an irreducible fraction. Additionally, let $M=10^{9}+7$. Then, we can prove that there uniquely exists an integer $R$ between $0$ and $M-1$ (inclusive) such that $P \equiv Q \times R \pmod{M}$, and that value equals $P \times Q^{-1} \pmod{M}$, where $Q^{-1}$ is the modular multiplicative inverse of $Q$. Find $R$.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 2000$
- $1 \leq a_i \leq N$
- $a_i$ are distinct.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $a_2$ $\cdots$ $a_N$

## Output

Print $R$.

```input1
3
3 1 2
```

```output1
666666673
```

- If Chair $1$ (the chair with the ID number $1$) gets marked first, two chairs will remain at the end: Chair $1$ and $2$.
- If Chair $2$ gets marked first, two chairs will remain at the end: Chair $1$ and $2$.
- If Chair $3$ gets marked first, one chair will remain at the end: Chair $3$.
- Since chairs are chosen with equal probability, the expected value of the number of chairs at the end is $\frac{5}{3}$. We have $5 \equiv 3 \times 666666673 \pmod{M}$, so $R=666666673$.

```input2
30
26 16 28 30 23 11 29 18 22 15 20 13 27 9 21 7 5 25 4 19 8 3 1 24 10 14 17 12 2 6
```

```output2
297703424
```