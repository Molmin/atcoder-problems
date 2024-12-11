Score : $500$ points

## Problem Statement

Snuke has $2N$ dogs, numbered $1$ through $2N$.

The cuteness of Dog $i$ is $a_i$.
The color of Dog $i$ is $c_i$, which is `R`, `G`, or `B`; `R` stands for red, `G` stands for green, and `B` stands for blue.

Snuke has $N$ kennels, and wants to put two dogs in each kennel.
Note that this means each dog will be in exactly one kennel.

When he puts two dogs in the same kennel, it will cause some *dissatisfaction* in that kennel.
The level of dissatisfaction is represented as an integer. When Dogs $i$ and $j$ are in the same kennel, the dissatisfaction will be $0$ if $c_i = c_j$ and $|a_i - a_j|$ otherwise.

Find the minimum possible total dissatisfaction when putting two dogs in each of the $N$ kennels.

## Constraints

- $1 \leq N \leq 10^{5}$
- $1 \leq a_i \leq 10^{15}$
- $a_i$ is an integer.
- $c_i$ is `R`, `G`, or `B`.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_{1}$ $c_{1}$
> 
> $\vdots$
> 
> $a_{2N}$ $c_{2N}$

## Output

Print the minimum possible total dissatisfaction when putting two dogs in each of the $N$ kennels.

```input1
1
1 R
2 G
```

```output1
1
```

- Dog $1$ has the cuteness of $1$, and Dog $2$ has the cuteness of $2$.
- Since $c_1 \neq c_2$, the dissatisfaction will be $1$.

```input2
1
1 B
2 B
```

```output2
0
```

- Dog $1$ has the cuteness of $1$, and Dog $2$ has the cuteness of $2$.
- Since $c_1 = c_2$, the dissatisfaction will be $0$.

```input3
10
585 B
293 B
788 B
222 B
772 G
841 B
115 R
603 G
450 B
325 R
851 B
205 G
134 G
651 R
565 R
548 B
391 G
19 G
808 B
475 B
```

```output3
0
```