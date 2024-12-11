Score : $900$ points

## Problem Statement

Diverta City is a new city consisting of $N$ towns numbered $1, 2, ..., N$.

The mayor Ringo is planning to connect every pair of two different towns with a bidirectional road. The length of each road is undecided.

A *Hamiltonian path* is a path that starts at one of the towns and visits each of the other towns exactly once.
The reversal of a Hamiltonian path is considered the same as the original Hamiltonian path.

There are $N! / 2$ Hamiltonian paths. Ringo wants all these paths to have distinct total lengths (the sum of the lengths of the roads on a path), to make the city diverse.

Find one such set of the lengths of the roads, under the following conditions:

- The length of each road must be a positive integer.
- The maximum total length of a Hamiltonian path must be at most $10^{11}$.

## Constraints

- $N$ is a integer between $2$ and $10$ (inclusive).

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print a set of the lengths of the roads that meets the objective, in the following format:

> $w_{1, 1} \ w_{1, 2} \ w_{1, 3} \ ... \ w_{1, N}$
> 
> $w_{2, 1} \ w_{2, 2} \ w_{2, 3} \ ... \ w_{2, N}$
> 
>   $:$  $:$     $:$
> 
> $w_{N, 1} \ w_{N, 2} \ w_{N, 3} \ ... \ w_{N, N}$

where $w_{i, j}$ is the length of the road connecting Town $i$ and Town $j$, which must satisfy the following conditions:

- $w_{i, i} = 0$
- $w_{i, j} = w_{j, i} \ (i \neq j)$
- $1 \leq w_{i, j} \leq 10^{11} \ (i \neq j)$

If there are multiple sets of lengths of the roads that meet the objective, any of them will be accepted.

```input1
3
```

```output1
0 6 15
6 0 21
15 21 0
```

There are three Hamiltonian paths. The total lengths of these paths are as follows:  

- $1 \to 2 \to 3$: The total length is $6 + 21 = 27$.
- $1 \to 3 \to 2$: The total length is $15 + 21 = 36$.
- $2 \to 1 \to 3$: The total length is $6 + 15 = 21$.

They are distinct, so the objective is met.

```input2
4
```

```output2
0 111 157 193
111 0 224 239
157 224 0 258
193 239 258 0
```

There are $12$ Hamiltonian paths, with distinct total lengths.