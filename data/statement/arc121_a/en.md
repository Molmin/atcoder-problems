Score : $400$ points

## Problem Statement

There are $N$ houses numbered $1$ through $N$ on a two-dimensional plane.
House $i$ is at $(x_i, y_i)$.

We use Chebyshev distance to calculate the distance between two houses. That is, the distance between Houses $i$ and $j$ is $\max(|x_i - x_j|, |y_i-y_j|)$.

There are $\frac{N(N-1)}{2}$ pairs formed by two different houses. For each of these pairs, we will calculate the distance between the houses, and then we will sort these distances in **descending order** to get a sequence of length $\frac{N(N-1)}{2}$. Find the second value from the beginning of this sequence.

## Constraints

- All values in input are integers.
- $3 \leq N \leq 2 \times 10^{5}$
- $-10^{9} \leq x_i, y_i \leq 10^{9}$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $x_{1}$ $y_{1}$
> 
> $\vdots$
> 
> $x_{N}$ $y_{N}$

## Output

Print the second value from the beginning of the sequence of distances of different houses sorted in descending order.

```input1
3
0 0
1 2
4 0
```

```output1
3
```

- The distance between Houses $1$ and $2$ is $2$;
- The distance between Houses $1$ and $3$ is $4$;
- The distance between Houses $2$ and $3$ is $3$.
- By sorting these in descending order, we get $(4,3,2)$, where the second value from the beginning is $3$.

```input2
4
0 0
0 0
1 0
0 1
```

```output2
1
```

- There may be multiple houses at the same coordinates.

```input3
20
407 361
167 433
756 388
-551 -47
306 -471
36 928
338 -355
911 852
288 70
-961 -769
-668 -386
-690 -378
182 -609
-677 401
-458 -112
184 -131
-243 888
-163 471
-11 997
119 544
```

```output3
1766
```