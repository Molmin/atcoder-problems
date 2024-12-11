Score : $300$ points

## Problem Statement

Snuke had $N$ cards numbered $1$ through $N$.
Each card has an integer written on it; written on Card $i$ is $a_i$.

Snuke did the following procedure:

1. Let $X$ and $x$ be the maximum and minimum values written on Snuke's cards, respectively.
2. If $X = x$, terminate the procedure. Otherwise, replace each card on which $X$ is written with a card on which $X-x$ is written, then go back to step 1.

Under the constraints in this problem, it can be proved that the procedure will eventually terminate. Find the number written on all of Snuke's cards after the procedure.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 10^{5}$
- $1 \leq a_i \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $a_2$ $\cdots$ $a_N$

## Output

Print the number written on all of Snuke's cards after the procedure.

```input1
3
2 6 6
```

```output1
2
```

- At the beginning of the procedure, the numbers written on Snuke's cards are $(2,6,6)$.-   - Since $x=2$ and $X=6$, he replaces each card on which $6$ is written with a card on which $4$ is written.
- Now, the numbers written on Snuke's cards are $(2,4,4)$.-   - Since $x=2$ and $X=4$, he replaces each card on which $4$ is written with a card on which $2$ is written.
- Now, the numbers written on Snuke's cards are $(2,2,2)$.-   - Since $x=2$ and $X=2$, he terminates the procedure.

```input2
15
546 3192 1932 630 2100 4116 3906 3234 1302 1806 3528 3780 252 1008 588
```

```output2
42
```