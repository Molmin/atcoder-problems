Score : $400$ points

## Problem Statement

The Republic of AtCoder has $N$ cities numbered $1$ through $N$ and $M$ roads numbered $1$ through $M$.

Using Road $i$, you can travel from City $A_i$ to $B_i$ or vice versa in one hour.

How many paths are there in which you can get from City $1$ to City $N$ as early as possible?<br>
Since the count can be enormous, print it modulo $(10^9 + 7)$.

## Constraints

- $2 \leq N \leq 2\times 10^5$
- $0 \leq M \leq 2\times 10^5$
- $1 \leq A_i &lt; B_i \leq N$
- The pairs $(A_i, B_i)$ are distinct.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $B_1$
> 
> $\vdots$
> 
> $A_M$ $B_M$

## Output

Print the answer.
If it is impossible to get from City $1$ to City $N$, print $0$.

```input1
4 5
2 4
1 2
2 3
1 3
3 4
```

```output1
2
```

The shortest time needed to get from City $1$ to City $4$ is $2$ hours, which is achieved by two paths: $1 \to 2 \to 4$ and $1 \to 3 \to 4$.

```input2
4 3
1 3
2 3
2 4
```

```output2
1
```

The shortest time needed to get from City $1$ to City $4$ is $3$ hours, which is achieved by one path: $1 \to 3 \to 2 \to 4$.

```input3
2 0
```

```output3
0
```

It is impossible to get from City $1$ to City $2$, in which case you should print $0$.

```input4
7 8
1 3
1 4
2 3
2 4
2 5
2 6
5 7
6 7
```

```output4
4
```