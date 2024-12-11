Score: $500$ points

## Problem Statement

An electric bulletin board is showing a string $S$ of length $N$ consisting of `0` and `1`.

You can do the following operation any number of times, where $S_i$ denotes the $i$-th character $(1 \leq i \leq N)$ of the string shown in the board.

**Operation:** choose a pair of integers $(l, r)$ $(1 \leq l &lt; r \leq N)$ satisfying one of the conditions below, and swap $S_l$ and $S_r$.

- $S_l=$ `0` and $S_{l+1}=\cdots=S_r=$ `1`.
- $S_{l}=\cdots=S_{r-1}=$ `1` and $S_r=$ `0`.

Determine whether it is possible to make the string shown in the board match $T$, and find the minimum number of operations needed if it is possible.

## Constraints

- $2 \leq N \leq 500000$
- $S$ is a string of length $N$ consisting of `0` and `1`.
- $T$ is a string of length $N$ consisting of `0` and `1`.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S$
> 
> $T$

## Output

If it is impossible to make the board show the string $T$, print `-1`.

If it is possible, find the minimum number of operations needed.

```input1
7
1110110
1010111
```

```output1
2
```

Here is one possible way to make the board show the string `1010111` in two operations:

- Do the operation with $(l, r) = (2, 4)$, changing the string in the board from `1110110` to `1011110`.
- Do the operation with $(l, r) = (4, 7)$, changing the string in the board from `1011110` to `1010111`.

```input2
20
11111000000000011111
11111000000000011111
```

```output2
0
```

The board already shows the string $T$ before doing any operation, so the answer is $0$.

```input3
6
111100
111000
```

```output3
-1
```

If there is no sequence of operations that makes the board show the string $T$, print `-1`. 

```input4
119
10101111011101001011111000111111101011110011010111111111111111010111111111111110111111110111110111101111111111110111011
11111111111111111111111111011111101011111011110111110010100101001110111011110111111111110010011111101111111101110111011
```

```output4
22
```