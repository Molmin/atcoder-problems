Score : $1000$ points

## Problem Statement

There are $N$ points in a plane, the $i$-th ($1 \leq i \leq N$) of which is $(i,P_i)$.
Here, $(P_1,P_2,\cdots,P_N)$ is a permutation of $(1,2,\cdots,N)$.

You can **arrange** a non-empty set $s$ of points, which is a recursive operation defined as follows.

- If $s$ contains exactly one point, arranging it creates a sequence composed of just that point.
- If $s$ contains two or more points, arranging it creates a sequence composed of those points by doing one of the following two operations.-   - Choose any integer $x$ and divide $s$ into two: the set $a$ of points whose $X$-coordinates are less than $x$ and the set $b$ of the other points.
Here, neither $a$ nor $b$ should be empty.
Create a sequence by concatenating the sequence obtained by arranging $a$ and the sequence obtained by arranging $b$ in this order.
-   - Choose any integer $y$ and divide $s$ into two: the set $a$ of points whose $Y$-coordinates are less than $y$ and the set $b$ of the other points.
Here, neither $a$ nor $b$ should be empty.
Create a sequence by concatenating the sequence obtained by arranging $a$ and the sequence obtained by arranging $b$ in this order.

Find the number, modulo $(10^9+7)$, of sequences that can be obtained by arranging the set of points $\{(1,P_1),(2,P_2),\cdots,(N,P_N)\}$.

## Constraints

- $1 \leq N \leq 30$
- $(P_1,P_2,\cdots,P_N)$ is a permutation of $(1,2,\cdots,N)$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $P_1$ $P_2$ $\cdots$ $P_N$

## Output

Print the answer.

```input1
3
3 1 2
```

```output1
3
```

The following three sequences can be obtained.

- $((1,3),(2,1),(3,2))$
- $((2,1),(3,2),(1,3))$
- $((2,1),(1,3),(3,2))$

For example, the sequence $((2,1),(1,3),(3,2))$ can be obtained as follows.

- Arrange the set $\{(1,3),(2,1),(3,2)\}$ by dividing it to the set of points whose $Y$-coordinates are less than $2$ ($=\{(2,1)\}$) and the set of the other points ($=\{(1,3),(3,2)\}$).-   - Arrange the set $\{(2,1)\}$ to obtain the sequence $((2,1))$.
-   - Arrange the set $\{(1,3),(3,2)\}$ by dividing it to the set of points whose $X$-coordinates are less than $3$ and the set of the other points.-   -   - Arrange the set $\{(1,3)\}$ to obtain the sequence $((1,3))$.
-   -   - Arrange the set $\{(3,2)\}$ to obtain the sequence $((3,2))$.
-   -   - Concatenate the resulting two sequences to obtain the sequence $((1,3),(3,2))$.
-   - Concatenate the resulting two sequences to obtain the sequence $((2,1),(1,3),(3,2))$.

```input2
5
1 2 3 4 5
```

```output2
1
```

```input3
10
3 6 4 8 7 2 10 5 9 1
```

```output3
1332
```

```input4
30
7 11 8 26 4 13 28 5 14 1 16 27 10 2 23 25 17 6 3 18 24 15 9 22 21 29 12 20 19 30
```

```output4
641915679
```