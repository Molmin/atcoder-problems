Score : $700$ points

## Problem Statement

There are $N$ squares arranged in a row, numbered $1$ to $N$ from left to right.
Initially, all squares are white.

You can perform the following $M$ types of operations **any number of times in any order**:

- Type-$i$ operation: Paint square $L_i$ through square $R_i$ in black.

Find the maximum number of times the operations can change the state of the squares.
If an operation changes the color of at least one square, that operation is considered to change the state of the squares.

## Constraints

- $1 \leq N \leq 500$
- $1 \leq M \leq N(N+1)/2$
- $1 \leq L_i \leq R_i \leq N$
- $(L_i,R_i) \neq (L_j,R_j)$ for all $i \neq j$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $L_1$ $R_1$
> 
> $L_2$ $R_2$
> 
> $\vdots$
> 
> $L_M$ $R_M$

## Output

Print the answer.

```input1
3 3
1 3
1 1
3 3
```

```output1
3
```

If you perform the operations as follows, they will change the state of the squares three times.

- Perform type-$2$ operation. Square $1$ is newly painted black.
- Perform type-$3$ operation. Square $3$ is newly painted black.
- Perform type-$1$ operation. Square $2$ is newly painted black.

```input2
4 3
1 2
3 4
1 4
```

```output2
2
```

```input3
5 5
4 5
1 1
2 4
1 2
2 5
```

```output3
4
```

```input4
20 15
2 4
16 19
7 13
1 15
3 18
10 11
1 10
1 7
14 16
1 16
2 17
1 17
12 14
3 17
4 10
```

```output4
11
```