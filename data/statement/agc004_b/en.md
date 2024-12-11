Score : $400$ points

## Problem Statement

Snuke lives in another world, where slimes are real creatures and kept by some people.
Slimes come in $N$ colors. Those colors are conveniently numbered $1$ through $N$.
Snuke currently has no slime. His objective is to have slimes of all the colors together.

Snuke can perform the following two actions:

- <p>Select a color $i$ ($1 \leq i \leq N$), such that he does not currently have a slime in color $i$, and catch a slime in color $i$. This action takes him $a_i$ seconds.</p>
- <p>Cast a spell, which changes the color of all the slimes that he currently has. The color of a slime in color $i$ ($1 \leq i \leq N-1$) will become color $i+1$, and the color of a slime in color $N$ will become color $1$. This action takes him $x$ seconds.</p>

Find the minimum time that Snuke needs to have slimes in all $N$ colors.

## Constraints

- $2 \leq N \leq 2,000$
- $a_i$ are integers.
- $1 \leq a_i \leq 10^9$
- $x$ is an integer.
- $1 \leq x \leq 10^9$

## Input

The input is given from Standard Input in the following format:

> $N$ $x$
> 
> $a_1$ $a_2$ $...$ $a_N$

## Output

Find the minimum time that Snuke needs to have slimes in all $N$ colors.

```input1
2 10
1 100
```

```output1
12
```

Snuke can act as follows:

- Catch a slime in color $1$. This takes $1$ second.
- Cast the spell. The color of the slime changes: $1$ → $2$. This takes $10$ seconds.
- Catch a slime in color $1$. This takes $1$ second.

```input2
3 10
100 1 100
```

```output2
23
```

Snuke can act as follows:

- Catch a slime in color $2$. This takes $1$ second.
- Cast the spell. The color of the slime changes: $2$ → $3$. This takes $10$ seconds.
- Catch a slime in color $2$. This takes $1$ second.
- Cast the soell. The color of each slime changes: $3$ → $1$, $2$ → $3$. This takes $10$ seconds.
- Catch a slime in color $2$. This takes $1$ second.

```input3
4 10
1 2 3 4
```

```output3
10
```

Snuke can act as follows:

- Catch a slime in color $1$. This takes $1$ second.
- Catch a slime in color $2$. This takes $2$ seconds.
- Catch a slime in color $3$. This takes $3$ seconds.
- Catch a slime in color $4$. This takes $4$ seconds.