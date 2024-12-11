Score : $600$ points

## Problem Statement

AtCoder Town has $N$ intersections and $M$ roads.<br>
Road $i$ connects Intersections $A_i$ and $B_i$.

Takahashi, the mayor, has decided to install zero or more surveillance cameras at the intersections.<br>
Each intersection can be installed with zero or one surveillance camera.

How many of the $2^N$ ways to install surveillance cameras monitor an even number of roads?

Here, Road $i$ is said to be monitored when the following condition is satisfied:

a surveillance camera is installed at one or both of Intersections $A_i$ and $B_i$. 

## Constraints

- $2 \leq N \leq 40$
- $1 \leq M \leq \frac{N(N-1)}{2}$
- $1 \leq A_i \lt B_i \leq N$
- $(A_i,B_i) \neq (A_j,B_j)$ if $i \neq j$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $\vdots$
> 
> $A_M$ $B_M$

## Output

Print the answer.

```input1
3 2
1 2
2 3
```

```output1
6
```

The sets of towns to install surveillance cameras to satisfy the condition are: $\{ \} , \{ 2 \} , \{ 1,2 \} ,\{1,3\},\{2,3\},\{1,2,3\}$.<br>
Note that it is allowed to install no surveillance camera.  

```input2
20 3
5 6
3 4
1 2
```

```output2
458752
```

The town may not be connected.